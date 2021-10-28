import './ModuloDiContatto.css';
function ModuloDiContatto(){
    function validaForm(){
        let telefono = document.getElementById('input-telefono');
        let email = document.getElementById('input-email');
        let hiddenAlertTelefono = document.getElementById('errore-telefono');
        let hiddenAlertEmail = document.getElementById('errore-email');
        if(telefono.value < 10 || isNaN(telefono.value)){
            telefono.style.borderColor="red"; 
            hiddenAlertTelefono.style.display='inline'
            return false;
        }else if(!email.value.includes('@')){
            email.style.borderColor="red";
            hiddenAlertEmail.style.display='inline'
            return false;
        }else{
            telefono.style.borderColor="#CCCCCC";
            hiddenAlertTelefono.style.display='null'
            email.style.borderColor="#CCCCCC";
            hiddenAlertEmail.style.display='null'
            document.getElementById('submit').type = "submit";        
        }
    }
    return(
        <div className="modulo-container">
            <h1># Modulo di contatto</h1>
            <form className="modulo-form" >
                <p>Ciao!
                    <br></br> 
                    <br></br>  
                    Mi Chiamo <input type="text" placeholder="Nome e Cognome"></input>e al momento <input type="text" placeholder="Occupazione"></input>
                    <br></br>
                    Mi farebbe piacere partecipare a Ninja Campus perchè
                    <br></br>
                    <textarea cols="70" rows="2" placeholder="Introduzione personale"></textarea> 
                    <br></br>
                    Il mio numero è <input id="input-telefono" type="text" placeholder="Contatto telefonico"></input>
                    <span id='errore-telefono'>Numero non valido!</span>
                    <br></br>
                    O potete contattarmi sull'indirizzo email <input type="email" name="email" id="input-email" placeholder="Contatto email"></input>
                    <span id='errore-email'>Email non valida!</span>
                    <br></br>
                    <textarea cols="70" rows="2" placeholder="Domande e dettagli"></textarea>
                    <br></br>
                    Grazie. 
                </p>
                <button onClick={validaForm} id="submit" className="invia-messaggio" type="button">INVIA MESSAGGIO &gt; </button>
            </form>
        </div>
    );
}
export default ModuloDiContatto;