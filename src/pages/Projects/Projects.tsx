import  React from "react";
import { projects } from "../../database";
import ProjectsComponent from "../../components/Projects";

const Projects: React.FC = () => {

  return (
    <ProjectsComponent>
      <ProjectsComponent.Header />
      <ProjectsComponent.ProjectsCards projects={projects} />
    </ProjectsComponent>
  )
}

export default Projects;