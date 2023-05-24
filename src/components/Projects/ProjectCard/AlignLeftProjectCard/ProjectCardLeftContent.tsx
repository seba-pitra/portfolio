import   React        from 'react';
import { useContext } from 'react';
//---Components
import { ProjectCardLeftSocialMedia } from "./ProjectCardLeftSocialMedia";
import { ProjectCardLeftTechSkills }  from "./ProjectCardLeftTechSkills";
import { ProjectCardLeftTitle }       from "./ProjectCardLeftTitle";
import { ProjectCardLeftDescription } from "./ProjectCardLeftDescription";
import { ProjectCardHeader }          from "../ProjectCardHeader";
import { ProjectCardLeftImage }       from "./ProjectCardLeftImage";
//---Context
import { ProjectCardLeftContext }     from './context';



export const ProjectCardLeftContent = () => {

  const projectCardContext = useContext(ProjectCardLeftContext);

  return (
    <div  className=" flex relative gap-5 h-96 w-[70%] max-lg:w-full  max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        
      <div className="w-64 max-lg:w-3/4 relative text-start flex flex-col items-start max-lg:bg-neutral-900 max-lg:p-10 max-md:p-5 max-lg:text-start max-lg:items-start max-md:max-h-fit">
        <div className="absolute max-lg:static">
          
        <ProjectCardHeader />          
          
        <ProjectCardLeftTitle title={ projectCardContext.title } />

        <ProjectCardLeftDescription description={ projectCardContext.description } />
          
        <ProjectCardLeftTechSkills 
          techStack={ projectCardContext.techStack } />

        <ProjectCardLeftSocialMedia 
          urlDeploy={ projectCardContext.urlDeploy } 
          urlGithub={ projectCardContext.urlGithub } />
          
        </div>
      </div>

      <ProjectCardLeftImage src={projectCardContext.image} />
    </div>
  )
}
