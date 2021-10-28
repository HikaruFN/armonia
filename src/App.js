//questo componente sarà il wrapper dell'intera pagina
import './App.css';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Sidebar></Sidebar>
        <MainContent></MainContent>
      </div>
    </div>
  );
}
export default App;
