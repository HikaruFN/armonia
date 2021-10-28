import './Sidebar.css';
function Sidebar(){
    return (
        <div className="sidebar-container">
            <div className="sidebar-header">
            <h2>Componenti</h2>
                <ul>
                    <li>
                        <a href="#">Modulo di contatto</a>
                    </li>
                    <li>
                        <a href="#">Chat</a>
                    </li>
                    <li>
                        <a href="#">Stylish table</a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <h5>&lt;/&gt; by Pasquale</h5>
            </div>    
        </div>
    );
}
export default Sidebar;