import './Chat.css';
import Aldo from './Aldo_Baglio.jpg';
import React, {useState}  from 'react';
function Chat(){
    const [state, setState] = useState({
        message: '',
        arrMessages: []
    });
    function handleValue(e){
        setState({
            ...state,
            message: e.target.value
        })
    };
    function sendMessage(){
        let mex = state.message;
        let array = state.arrMessages;
        array.push(mex);
        setState({
            arrMessages: array,
            message: ''
        })
    };
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
                    {
                        state.arrMessages.map((item, index)=>{
                            return (
                                <div key={index}>
                                    {item} 
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div id="richiesta-container">
                <div>
                    <input onChange={handleValue}  type='text' placeholder="Scrivi un messagio..." value={state.message}/>
                    <button onClick={sendMessage}>Invia messaggio &gt;</button>
                </div>
            </div>
        </div>
    );
}
export default Chat;