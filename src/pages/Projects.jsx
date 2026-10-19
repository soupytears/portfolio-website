import Container from "react-bootstrap/Container";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../assets/data/pageData"; 
import "../styles/Projects.css";

export default function Projects() {
  return (
    <>
      <Container>
        <h1>projects</h1>
      </Container>
      <Container className="project-grid">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard
            key={key}
            title={project.title}
            description={project.description}
            projectLink={project.link}
          />
        ))}
      </Container>
    </>
  );
}