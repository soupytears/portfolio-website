import Container from 'react-bootstrap/Container';
import ProjectCard from '../components/ProjectCard'
import '../styles/Projects.css';

export default function Projects() {
  return (
    <>
      <Container>
        <h1>projects</h1>
      </Container>
      <Container className="project-grid">
        <ProjectCard
          title="this is a project title"
          description={
            "this is some placeholder text to see what this will look like. this will obviously not stay forever"
          }
          projectLink={"https://github.com"}
        />
        <ProjectCard
          title="this is a project title"
          description={
            "this is some placeholder text to see what this will look like. this will obviously not stay forever"
          }
          projectLink={"https://github.com"}
        />
        <ProjectCard
          title="this is a project title"
          description={
            "this is some placeholder text to see what this will look like. this will obviously not stay forever"
          }
          projectLink={"https://github.com"}
        />
        <ProjectCard
          title="this is a project title"
          description={
            "this is some placeholder text to see what this will look like. this will obviously not stay forever"
          }
          projectLink={"https://github.com"}
        />
      </Container>
    </>
  );
}
