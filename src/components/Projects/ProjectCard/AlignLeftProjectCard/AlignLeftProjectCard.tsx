import  React        from "react";
import { useEffect } from "react";
import { useRef }    from "react";
import * as hooks    from "../../../../hooks";
import { ProjectCardLeftContent } from "./ProjectCardLeftContent";
import { ProjectCardLeftContext } from "./context";

interface IProps {
  title:        string;
  image:        string;
  description:  string;
  techStack:    Array<string>;
  isFirstItem?: boolean;
  urlDeploy?:   string;
  urlGithub?:   string;
}

const AlignLeftProjectCard = ({ 
  title, isFirstItem, image, description, techStack, urlGithub, urlDeploy 
}: IProps) => {

  const   cardRef     = useRef<HTMLDivElement>(null);
  const { Provider }  = ProjectCardLeftContext;
  const { doScroll }  = hooks.useScroll();
  const { doOpacity } = hooks.useOpacity();


  useEffect(() => {
    
    if(isFirstItem) {
      setTimeout(() => doOpacity([cardRef]), 1000)
    }

    window.addEventListener("scroll", () => doScroll([ cardRef ]) )

  }, [isFirstItem, doScroll, doOpacity]);


  
  return (
    <Provider value={{
        title,
        image,
        description,
        techStack,   
        isFirstItem,
        urlDeploy,
        urlGithub,
      }}>

      <div ref={cardRef} className="opacity-0 translate-y-8  max-w-3xl -ml-[150px] max-lg:-ml-0 transition-opacity  duration-[1s] ease-in-out">

        <ProjectCardLeftContent />

      </div>
    
    </Provider>
  )
}

export default AlignLeftProjectCard;