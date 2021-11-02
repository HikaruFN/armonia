import "./ContactModule.css";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Schema = yup.object().shape({
  telefone: yup.number().required().test((val) => val.toString().length == 10),
  email: yup.string().email().required(),
});
function ContactModule() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });
  const onSubmit = (data) => {
    console.log(data);
    alert("Inviato con successo!");
  };
  return (
    <div className="module-container">
      <h1># Modulo di contatto</h1>
      <form className="module-form" onSubmit={handleSubmit(onSubmit)}>
        <p>
          Ciao!
          <br></br>
          <br></br>
          Mi Chiamo <input type="text" placeholder="Nome e Cognome"></input>e al
          momento <input type="text" placeholder="Occupazione"></input>.
          <br></br>
          Mi farebbe piacere partecipare a Ninja Campus perchè
          <br></br>
          <textarea
            cols="70"
            rows="2"
            placeholder="Introduzione personale"
          ></textarea>.
          <br></br>
          Il mio numero è{" "}
          <input
            className="input-telefone"
            type="text"
            name="telefone"
            placeholder="Contatto telefonico"
            {...register("telefone")}
          />
          {errors.telefone && (
            <span className="telefone-error">Numero non valido!</span>
          )}
          <br></br>O potete contattarmi sull'indirizzo email{" "}
          <input
            type="email"
            name="email"
            id="input-email"
            placeholder="Contatto email"
            {...register("email")}
          />.
          {errors.email && (
            <span className="email-error">Email non valida!</span>
          )}
          <br></br>
          <textarea
            cols="70"
            rows="2"
            placeholder="Domande e dettagli"
          ></textarea>.
          <br></br>
          Grazie.
        </p>
        <input
          className="send-message"
          type="submit"
          value="INVIA MESSAGGIO >"
        />
      </form>
    </div>
  );
}
export default ContactModule;
