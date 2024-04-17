import { useState } from "react";
import { Row, Container } from "react-bootstrap";
import Project from "./Project.jsx";
import ProjectsTabs from "./ProjectsTabs.jsx";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState("All");

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <h1>Projects</h1>
        </Row>
        <Row>
          <ProjectsTabs
            onSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </Row>
        <Row>
          <Project selectedTab={selectedTab} />
        </Row>
      </Container>
    </section>
  );
}
