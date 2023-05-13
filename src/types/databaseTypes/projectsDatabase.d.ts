export interface IProject {
  title: string;
  image: string;
  description: string;
  techStack: Array<string>;
  isFirstItem?: boolean;
  urlDeploy?: string;
  urlGithub?: string;
}