import  React        from "react";
import { ProjectCardLeftContent } from "./ProjectCardLeftContent";
import { ProjectCardContext } from "../context";

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
  title, isFirstItem, image, description, techStack, urlGithub, urlDeploy,
}: IProps) => {

  const { Provider }  = ProjectCardContext;

  
  return (
    <Provider value={{
        description,
        image,
        isFirstItem,
        techStack,   
        title,
        urlDeploy,
        urlGithub,
      }}>


        <ProjectCardLeftContent />
    
    </Provider>
  )
}

export default AlignLeftProjectCard;