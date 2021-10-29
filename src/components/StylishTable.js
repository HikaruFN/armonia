import './StylishTable.css';

function StylishTabe(){
    
    return(
        <div className='stylish-table-container'>
            <div className='stylish-table-header'>
                <h1># Stylish table</h1>
                <button>Ricarica dati</button>
            </div>
            <div className='table-container'>
                <div className='table-data'>
                    <span>Cliente</span>
                    <span>Età</span>
                    <span>Posizione</span>
                    <span>Azioni</span>
                </div>
                <div className='table-cards'>
                    <div className='card'>
                        <span>Cliente</span>
                        <span>Età</span>
                        <span>Posizione</span>
                        <span>Azioni</span>
                    </div>
                </div>

            </div>
            
        </div>
    );
}
export default StylishTabe;