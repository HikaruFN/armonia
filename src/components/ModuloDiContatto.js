import './ModuloDiContatto.css';
import React from 'react';
import { useForm } from "react-hook-form"; 
function ModuloDiContatto(){
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
        alert('Inviato con successo!');
    }
    return(
        <div className="module-container">
            <h1># Modulo di contatto</h1>
            <form className="module-form" onSubmit={handleSubmit(onSubmit)} >
                <p>Ciao!
                    <br></br> 
                    <br></br>  
                    Mi Chiamo <input type="text" placeholder="Nome e Cognome"></input>e al momento <input type="text" placeholder="Occupazione"></input>
                    <br></br>
                    Mi farebbe piacere partecipare a Ninja Campus perchè
                    <br></br>
                    <textarea cols="70" rows="2" placeholder="Introduzione personale"></textarea> 
                    <br></br>
                    Il mio numero è <input id="input-telefone"  type="text" placeholder="Contatto telefonico" {...register("telefone", {required: true, minLength: 10})}/>
                    {errors.telefone && <span id='errore-telefono'>Numero non valido!</span>}
                    <br></br>
                    O potete contattarmi sull'indirizzo email <input type="email" name="email" id="input-email" placeholder="Contatto email" {...register("email", {required: true})}/>
                    {errors.email && <span id='errore-email'>Email non valida!</span>}
                    <br></br>
                    <textarea cols="70" rows="2" placeholder="Domande e dettagli"></textarea>
                    <br></br>
                    Grazie.: 
                </p>
                <input id="submit" className="send-message" type="submit" value="INVIA MESSAGGIO >" />
            </form> 
        </div>
    );
}
export default ModuloDiContatto;