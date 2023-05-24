import  React from "react";
import { ProjectCardContext }      from "../context";
import { ProjectCardRightContent } from "./ProjectCardRightContent";

interface IProps {
  description:  string;
  image:        string;
  isFirstItem?: boolean;
  techStack:    Array<string>;
  title:        string;
  urlDeploy?:   string;
  urlGithub?:   string;
}

const AlignRightProjectCard: React.FC<IProps> = ({ 
  title, image, description, techStack, urlGithub, urlDeploy
}) => {

  const { Provider } = ProjectCardContext
  
  return (
    <Provider value={{ title, image, description, techStack, urlGithub, urlDeploy }}>
      <ProjectCardRightContent />
    </Provider>
  )
}


export default AlignRightProjectCard;