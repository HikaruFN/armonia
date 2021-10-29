import './MainContent.css';
import ModuloDiContatto from './ModuloDiContatto';
import Chat from './Chat';
import StylishTabe from './StylishTable';
function MainContent(){
    return(
        <div className="main-content-container">
            <ModuloDiContatto/>
            <Chat/> 
            <StylishTabe/>
        </div>
    );
}
export default MainContent;