
import  React, { ReactElement } from "react";
import { ProjectsHeader } from "./ProjectsHeader";
import { ProjectsCards } from "./ProjectCard/ProjectsCards";


interface Props {
  children?: ReactElement | ReactElement[];
}


const ProjectsComponent = ({ children }: Props) => {

  return (
    <section className=" w-4/5 max-[500px]:w-full mt-10 mb-32 ml-auto mr-auto pt-7 pb-7 text-stone-300 text-start">

      { children }

    </section>
  )
}

ProjectsComponent.Header        = ProjectsHeader;
ProjectsComponent.ProjectsCards = ProjectsCards;

export default ProjectsComponent;