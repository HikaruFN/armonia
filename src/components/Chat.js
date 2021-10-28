import './Chat.css';
import Aldo from './Aldo_Baglio.jpg';
import React from 'react';
let messaggi = document.querySelector('massaggi');
let span = React.createElement('div');
function inviaMessaggio(){
  messaggi.appendChild(span);
}
function Chat(){
    return(
        <div className="chat-container">
            <h1># Chat</h1>
            <div id="chat-box">
                <div id='aldo'>
                    <img src={Aldo}/>
                    <div className="aldo-info">
                        <h2>Aldo Baglio</h2>
                        <span>Ultimo accesso: 3 ore fa</span>
                    </div>  
                </div>
                <div id="messaggi">
                    <span className="risposta-aldo messaggio">Ciao, come posso aiutarti?</span>
                </div>
            </div>
            <div id="richiesta-container">
                <div>
                    <input type='text' placeholder="Scrivi un messagio..."></input>
                    <button onClick={inviaMessaggio}>Invia messaggio &gt;</button>
                </div>
            </div>
        </div>
    );
}
export default Chat;