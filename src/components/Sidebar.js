import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <h2>Componenti</h2>

        {/*LINKS*/}
        <ul>
          <li>
            <a href="http://localhost:3000/">Modulo di contatto</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Chat</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Stylish table</a>
          </li>
        </ul>
        {/*END LINKS*/}

      </div>
      <div className="sidebar-footer">
        <h5>&lt;/&gt; by Pasquale</h5>
      </div>
    </div>
  );
}
export default Sidebar;
