export interface IProject {
  title: string;
  image: string;
  description: string;
  techStack: Array<string>;
  urlDeploy?: string;
  urlGithub?: string;
}