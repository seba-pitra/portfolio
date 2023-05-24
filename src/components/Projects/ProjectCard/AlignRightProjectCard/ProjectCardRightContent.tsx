import   React        from 'react';
import { useEffect }  from 'react';
import { useRef }     from 'react';
import { useContext } from 'react';
import { useScroll }  from '../../../../hooks';
//---Components
import { ProjectCardLeftImage }        from './ProjectCardRightImage';
import { ProjectCardHeader }           from '../ProjectCardHeader';
import { ProjectCardRightTitle }       from './ProjectCardRightTitle';
import { ProjectCardRightDescription } from './ProjectCardRightDescription';
import { ProjectCardRightTechSkills }  from './ProjectCardRightTechSkills';
import { ProjectCardRightSocialMedia } from './ProjectCardRightSocialMedia';
//---Context
import { ProjectCardContext } from '../context';



export const ProjectCardRightContent = () => {

  const projectCardContext = useContext(ProjectCardContext);

  const cardRef      = useRef<HTMLDivElement>(null);
  const { doScroll } = useScroll();


  useEffect(() => {

    window.addEventListener("scroll", () => doScroll([cardRef] ))
    
  }, [doScroll]);

  return (
    <div className="max-w-3xl mt-4 -ml-[150px] max-lg:-ml-0 ">
      <div ref={cardRef} className="opacity-0 translate-y-4 flex gap-5 h-96 w-[70%] max-lg:w-full  max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">

        <ProjectCardLeftImage src={ projectCardContext.image } />

        <div className="w-3/4 -ml-6 text-end flex flex-col items-end max-lg:bg-neutral-900 max-lg:p-10 max-md:p-5 max-lg:text-start max-lg:items-start max-md:max-h-fit">
          
          <ProjectCardHeader />
          
          <ProjectCardRightTitle title={ projectCardContext.title } />
          
          <ProjectCardRightDescription description={ projectCardContext.description } />
          
          <ProjectCardRightTechSkills techStack={ projectCardContext.techStack } />

          <ProjectCardRightSocialMedia 
            urlDeploy={ projectCardContext.urlDeploy } 
            urlGithub={ projectCardContext.urlGithub } />

        </div>

      </div>
    </div>
  )
}
