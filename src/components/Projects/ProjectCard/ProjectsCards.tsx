import AlignLeftProjectCard  from "./AlignLeftProjectCard/AlignLeftProjectCard";
import AlignRightProjectCard from "./AlignRightProjectCard";

import React from 'react'

interface Props {
  projects: Project[];
}

interface Project {
  title:        string;
  image:        string;
  description:  string;
  techStack:    Array<string>;
  isFirstItem?: boolean;
  urlDeploy?:   string;
  urlGithub?:   string;
}

export const ProjectsCards = ({ projects }: Props) => {

  return (
    <div className="w-full mt-16 flex flex-col items-center gap-24">
      {
        projects.map((project, index:number) => 
          index % 2 === 0 ? 
          <AlignLeftProjectCard 
          key={index}
          isFirstItem={index === 0}
          title={project.title} 
          image={project.image}
          description={project.description} 
          techStack={project.techStack} 
          urlGithub={project.urlGithub} 
          urlDeploy={project.urlDeploy} />
          :
          <AlignRightProjectCard 
          key={index}
          title={project.title} 
          image={project.image}
          description={project.description} 
          techStack={project.techStack} 
          urlGithub={project.urlGithub} 
          urlDeploy={project.urlDeploy} />
        )
      }
    </div>
  )
}
