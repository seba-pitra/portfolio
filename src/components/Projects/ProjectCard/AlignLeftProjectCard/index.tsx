import  React from "react";
import { ProjectCardContext }     from "../context";
import { ProjectCardLeftContent } from "./ProjectCardLeftContent";

interface IProps {
  description:  string;
  image:        string;
  isFirstItem?: boolean;
  techStack:    Array<string>;
  title:        string;
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