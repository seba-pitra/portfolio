import { createContext } from "react";

interface IProps {
  title:        string;
  image:        string;
  description:  string;
  techStack:    Array<string>;
  isFirstItem?: boolean;
  urlDeploy?:   string;
  urlGithub?:   string;
}

export const ProjectCardLeftContext = createContext<IProps>({} as IProps);