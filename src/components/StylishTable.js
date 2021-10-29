import './StylishTable.css';
import React , {useState, useEffect} from 'react';
import axios from 'axios';
function StylishTable(){
    const [users, setUsers] = useState({
        responseArr : []
    });
    function callData(){
        axios.get('https://ae5a5c88-dfd5-42e0-ab56-d2de610d754b.mock.pstmn.io//postman')
        .then(response=>{
            setUsers({
                responseArr : response.data
            })
        });
    };
    return(
        <div className='stylish-table-container'>
            <div className='stylish-table-header'>
                <h1># Stylish table</h1>
                <button onClick={callData}>Ricarica dati</button>
            </div>
            <div className='table-container'>
                <div className='table-data'>
                    <span>Cliente</span>
                    <span>Età</span>
                    <span>Posizione</span>
                    <span>Azioni</span>
                </div>
                <div className='table-cards'>
                    {
                        users.responseArr.map((item, index)=>{
                            return(
                                <div key={index} className='card'>
                                    <span>{index}</span>
                                    <div>
                                        <img src={item.img}/>
                                        <span>{item.name}</span>
                                    </div>
                                    <span>{item.eta}</span>
                                    <span>{item.job}</span>
                                    <a>Cancella</a>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            
        </div>
    );
}
export default StylishTable;