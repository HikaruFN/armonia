import './Chat.css';
import Aldo from './Aldo_Baglio.jpg';
import React, {useState}  from 'react';
import { useEffect } from 'react/cjs/react.development';
function Chat(){
    const [messages, setMessages] = useState({
        message: '',
        arrMessages: [],
    });
    function handleValue(e){
        setMessages({
            ...messages,
            message: e.target.value
        })
    };
    function sendMessage(){
        let mex = messages.message;
        let array = messages.arrMessages;
        array.push(mex);
        setMessages({
            ...messages,
            arrMessages: array,
            message: ''
        });
        setTimeout(() => {
            array.push('Miiinchia')
            setMessages({
                ...messages,
                aldoResponses : array,
                message: ''
            })
            console.log(messages.aldoResponses);
        }, 2000);
    };
   
    return(
        <div className="chat-container">
            <h1># Chat</h1>
            <div className="chat-box">
                <div className='aldo'>
                    <img src={Aldo}/>
                    <div className="aldo-info">
                        <h2>Aldo Baglio</h2>
                        <span>Ultimo accesso: 3 ore fa</span>
                    </div>  
                </div>
                <div className="messages">
                    <span className="response-aldo messagge">Ciao, come posso aiutarti?</span>
                    {
                        messages.arrMessages.map((item, index)=>{
                            return (
                                <span className='user-question' key={index}>
                                    {item} 
                                </span>
                            )
                        })
                    }
                </div>
            </div>
            <div className="request-container">
                <div>
                    <input onChange={handleValue}  type='text' placeholder="Scrivi un messagio..." value={messages.message}/>
                    <button onClick={sendMessage}>Invia messaggio &gt;</button>
                </div>
            </div>
        </div>
    );
}
export default Chat;