//questo componente sarà il wrapper dell'intera pagina
import './App.css';
import MainContent from './components/main_content';
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
