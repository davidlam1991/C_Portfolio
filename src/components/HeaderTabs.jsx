import { Nav } from "react-bootstrap";
import HeaderTab from "./HeaderTab.jsx";

export default function HeaderTabs({ onSelectType, selectedType }) {
  return (
    <Nav className="tabs">
      <Nav.Link href="#projects">
        <HeaderTab
          isSelected={selectedType === "projects"}
          onSelect={() => onSelectType("projects")}
        >
          Projects
        </HeaderTab>
      </Nav.Link>
      <Nav.Link href="#">
        <HeaderTab
          isSelected={selectedType === "about"}
          onSelect={() => onSelectType("about")}
        >
          About
        </HeaderTab>
      </Nav.Link>
      <Nav.Link href="#contact">
        <HeaderTab
          isSelected={selectedType === "contact"}
          onSelect={() => onSelectType("contact")}
        >
          Contact
        </HeaderTab>
      </Nav.Link>
    </Nav>
  );
}
