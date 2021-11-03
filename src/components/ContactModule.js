import "./ContactModule.css";
import React from "react";
{/*Import useForm*/}
import { useForm } from "react-hook-form";
{/*Import yupResolver*/}
import { yupResolver } from "@hookform/resolvers/yup";
{/*Import all from yup*/}
import * as yup from "yup";

/* Schema rules for required camps*/
const Schema = yup.object().shape({
  telefone: yup
    .number()
    .required()
    .test((val) => val.toString().length === 10),
  email: yup.string().email().required(),
  fullname: yup.string().required(),
  job: yup.string().required(),
  /* Textareas are not required */
});

/*Triggers once form is sent*/
function ContactModule() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(Schema) });
  const onSubmit = (data) => {
    /*If successfully sent print alert*/
    alert("Inviato con successo!");
  };

  return (
    <div className="module-container">
      <h1># Modulo di contatto</h1>
      <form className="module-form" onSubmit={handleSubmit(onSubmit)}>
        {/*FORM*/}
        <p>
          Ciao!
          <br></br>
          <br></br>
          Mi Chiamo{" "}
          <input
            type="text"
            placeholder="Nome e Cognome"
            name="fullname"
            {...register("fullname")}
          />
          {/*It displays in case of error*/}
          {errors.fullname && (
            <span className="required-error">Campo richiesto</span>
          )}
          e al momento{" "}
          <input type="text" placeholder="Occupazione" {...register("job")} />.
          {/*It displays in case of error*/}
          {errors.fullname && (
            <span className="required-error">Campo richiesto</span>
          )}
          <br></br>
          Mi farebbe piacere partecipare a Ninja Campus perchè
          <br></br>
          <textarea
            cols="70"
            rows="2"
            placeholder="Introduzione personale"
            {...register("description")}
          ></textarea>
          .<br></br>
          Il mio numero è{" "}
          <input
            className="input-telefone"
            type="text"
            name="telefone"
            placeholder="Contatto telefonico"
            {...register("telefone")}
          />
          {/*It displays in case of error*/}
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
          />
          .{/*It displays in case of error*/}
          {errors.email && (
            <span className="email-error">Email non valida!</span>
          )}
          <br></br>
          <textarea
            cols="70"
            rows="2"
            placeholder="Domande e dettagli"
            {...register("questions and details")}
          ></textarea>
          .<br></br>
          Grazie.
        </p>
        <input
          className="send-message"
          type="submit"
          value="INVIA MESSAGGIO >"
        />
      </form>
      {/*END FORM*/}
    </div>
  );
}
export default ContactModule;
