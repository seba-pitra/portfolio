import  React             from "react";
import { ProjectCardRightContent } from "./ProjectCardRightContent";
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