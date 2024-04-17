import { Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { debounce } from "lodash";
import HeaderTabs from "./HeaderTabs.jsx";

import logo from "../assets/img/logo.png";

export default function Header() {
  const [selectedType, setSelectedType] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = debounce(function onScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      updateActiveLink();
    }, 70);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const navBar = document.querySelector(".navbar");
    const offset = navBar ? navBar.getBoundingClientRect().height : 0;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const rect = section.getBoundingClientRect();

      if (rect.top - offset <= 50 && rect.bottom >= 50 - offset) {
        setSelectedType(sectionId);
      }
    });
  }

  function handleSelectType(newType) {
    setSelectedType(newType);
  }

  return (
    <Navbar expand="lg" className={isScrolled ? "scrolled" : ""}>
      <img src={logo} alt="logo" className="logo" />
      <div />
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
        <HeaderTabs
          onSelectType={handleSelectType}
          selectedType={selectedType}
        />
      </Navbar.Collapse>
    </Navbar>
  );
}
