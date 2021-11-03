import "./Chat.css";
import Aldo from "./Aldo_Baglio.jpg";
import React, { useState } from "react";
function Chat() {
  const [messages, setMessages] = useState({
    message: "",
    arrMessages: [],
  });

  /*Tracks message input value*/
  function handleValue(e) {
    setMessages({
      ...messages,
      message: e.target.value,
    });
  }

  /*Triggers once message is sent*/
  function sendMessage() {
    const { message } = messages;
    const array = messages.arrMessages;
    array.push({
      who: "user-question",
      message,
    });
    setMessages({
      ...messages,
      arrMessages: array,
      message: "",
    });
    /*After 2 secs adds message from Aldo with 'Miinchia!'*/
    setTimeout(() => {
      array.push({
        who: "response-aldo messagge",
        message: "Miinchia!",
      });
      setMessages({
        ...messages,
        message: "",
        arrMessages: array,
      });
    }, 2000);
  }

  return (
    <div className="chat-container">
      <h1># Chat</h1>

      {/*CHAT BOX*/}
      <div className="chat-box">
        {/*Aldo infos*/}
        <div className="aldo">
          <img src={Aldo} alt="aldo-img" />
          <div className="aldo-info">
            <h2>Aldo Baglio</h2>
            <span>Ultimo accesso: 3 ore fa</span>
          </div>
        </div>

        <div className="messages">
          {/*Aldos default message*/}
          <div className="response-aldo messagge">
            Ciao, come posso aiutarti?
          </div>

          {/*Displays all messages in state arrMessages*/}
          {messages.arrMessages.map((item, index) => {
            return (
              <div className={item.who} key={index}>
                {item.message}
              </div>
            );
          })}
        </div>
      </div>
      {/*END CHAT BOX*/}

      <div className="request-container">
        <div className="request-details">
          <input
            onChange={handleValue}
            type="text"
            placeholder="Scrivi un messagio..."
            value={messages.message}
          />
          <button onClick={sendMessage}>Invia messaggio &gt;</button>
        </div>
      </div>
    </div>
  );
}
export default Chat;
