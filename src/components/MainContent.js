import './MainContent.css';
import Chat from './Chat';
import StylishTabe from './StylishTable';
import ContactModule from './ContactModule';
function MainContent(){
    return(
        <div className="main-content-container">
            <ContactModule/>
            <Chat/> 
            <StylishTabe/>
        </div>
    );
}
export default MainContent;