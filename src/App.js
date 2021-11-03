//questo componente sarà il wrapper dell'intera pagina
import './app.css';
import MainContent from './components/main-content';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  );
}
export default App;
