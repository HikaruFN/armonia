import "./StylishTable.css";
import React, { useState } from "react";
import axios from "axios";
import { set } from "react-hook-form";
function StylishTable() {
  const [users, setUsers] = useState({
    responseArr: [],
  });
  const callData = async () => {
    const response = await axios.get(
      "https://ae5a5c88-dfd5-42e0-ab56-d2de610d754b.mock.pstmn.io//postman"
    );
    const responseData = response.data;
    setUsers({
      responseArr: responseData,
    });
  };
  function handleDelete(index) {
    const updateArray = users.responseArr.filter((item, i) => i !== index);
    setUsers({
      responseArr: updateArray,
    });
  }
  return (
    <div className="stylish-table-container">
      <div className="stylish-table-header">
        <h1># Stylish table</h1>
        <button onClick={callData}>Ricarica dati</button>
      </div>
      <div className="table-container">
        <div className="table-data">
          <span>Cliente</span>
          <span>Età</span>
          <span>Posizione</span>
          <span>Azioni</span>
        </div>
        {users.responseArr.length == [] && (
          <div className="empty-table">
            <span>Nessun dato </span>
          </div>
        )}
        {users.responseArr.map((item, index) => {
          return (
            <div key={index} className="card">
              <div>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
              <span>{item.eta}</span>
              <span>{item.job}</span>
              <a onClick={() => handleDelete(index)}>Cancella</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StylishTable;
