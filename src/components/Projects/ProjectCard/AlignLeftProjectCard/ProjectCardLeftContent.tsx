import   React        from 'react';
import { useContext } from 'react';
import { useEffect }  from 'react';
import { useRef }     from 'react';
import * as hooks     from "../../../../hooks";
//---Components
import { ProjectCardHeader }          from "../ProjectCardHeader";
import { ProjectCardLeftDescription } from "./ProjectCardLeftDescription";
import { ProjectCardLeftImage }       from "./ProjectCardLeftImage";
import { ProjectCardLeftSocialMedia } from "./ProjectCardLeftSocialMedia";
import { ProjectCardLeftTechSkills }  from "./ProjectCardLeftTechSkills";
import { ProjectCardLeftTitle }       from "./ProjectCardLeftTitle";
//---Context
import { ProjectCardContext }     from '../context';


export const ProjectCardLeftContent = () => {

  const projectCardContext = useContext(ProjectCardContext);
  const { isFirstItem }    = useContext(ProjectCardContext);
  const { doScroll }       = hooks.useScroll();
  const { doOpacity }      = hooks.useOpacity();

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if(isFirstItem) setTimeout(() => doOpacity([cardRef]), 1000);
    
    window.addEventListener("scroll", () => doScroll([ cardRef ]) );

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
