import { projects } from "../util/projectsData.js";
import ProjectImage from "./ProjectImage.jsx";

export default function Project({ selectedTab }) {
  let filteredProjects = projects;

  if (selectedTab !== "All") {
    filteredProjects = projects.filter(
      (project) => project.sectionItem === selectedTab
    );
  }

  return (
    <div className="projects-container projects-images">
      {filteredProjects.map((project, index) => (
        <ProjectImage
          key={index}
          imgUrl={project.imgUrl}
          title={project.title}
          sectionItem={project.sectionItem}
        />
      ))}
    </div>
  );
}
