import './MainContent.css';
import ModuloDiContatto from './ModuloDiContatto';
import Chat from './Chat';
function MainContent(){
    return(
        <div className="main-content-container">
            <ModuloDiContatto/>
            <Chat/> 
        </div>
    );
}
export default MainContent;