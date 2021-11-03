import "./main-content.css";
import Chat from "./chat";
import StylishTabe from "./stylish-table";
import ContactModule from "./contact-module";

function MainContent() {
  return (
    <div className="main-content-container">
      <ContactModule />
      <Chat />
      <StylishTabe />
    </div>
  );
}
export default MainContent;
