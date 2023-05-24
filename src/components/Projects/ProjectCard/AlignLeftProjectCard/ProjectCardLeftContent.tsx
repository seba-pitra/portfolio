import   React, { useEffect, useRef }        from 'react';
import { useContext } from 'react';
//---Components
import { ProjectCardLeftSocialMedia } from "./ProjectCardLeftSocialMedia";
import { ProjectCardLeftTechSkills }  from "./ProjectCardLeftTechSkills";
import { ProjectCardLeftTitle }       from "./ProjectCardLeftTitle";
import { ProjectCardLeftDescription } from "./ProjectCardLeftDescription";
import { ProjectCardHeader }          from "../ProjectCardHeader";
import { ProjectCardLeftImage }       from "./ProjectCardLeftImage";
//---Context
import { ProjectCardContext }     from '../context';
import * as hooks    from "../../../../hooks";


export const ProjectCardLeftContent = () => {

  const projectCardContext = useContext(ProjectCardContext);
  const {isFirstItem} = useContext(ProjectCardContext);

  const   cardRef     = useRef<HTMLDivElement>(null);
  const { doScroll }  = hooks.useScroll();
  const { doOpacity } = hooks.useOpacity();

  useEffect(() => {
    
    if(isFirstItem) {
      setTimeout(() => doOpacity([cardRef]), 1000)
    }

    window.addEventListener("scroll", () => doScroll([ cardRef ]) )

  }, [isFirstItem, doScroll, doOpacity]);

  return (
    <div ref={cardRef} className="opacity-0 translate-y-8  max-w-3xl -ml-[150px] max-lg:-ml-0 transition-opacity  duration-[1s] ease-in-out">

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
    </div>
  )
}
