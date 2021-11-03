import "./main_content.css";
import Chat from "./chat";
import StylishTabe from "./stylish_table";
import ContactModule from "./contact_module";

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
