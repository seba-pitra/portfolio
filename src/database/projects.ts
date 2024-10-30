import coninImage from "../assets/img/conin.jpg";
import ingenesImage from "../assets/img/ingenes.jpg";
import surrogacyImage from "../assets/img/surrogacy-ingenes.jpg";


export interface IProject {
  title: string;
  subtitle?: string;
  image: string;
  description: string;
  techStack: Array<string>;
  isFirstItem?: boolean;
  urlDeploy?: string;
  urlGithub?: string;
}

export const projects: Array<IProject> = [
  {
    title: "Ingenes",
    subtitle: "More & Surrogacy",
    image: surrogacyImage,
    description:
      "Built a scheduling system for two new services, More and Surrogacy, designed to meet international standards and reach new markets like Europe. This involved adapting workflows and aligning with different cultural and regulatory requirements, expanding the company's global presence",
    techStack: ["Node", "Javascript", "Typescript", "Nest", "MySQL", "MongoDB"],
    urlDeploy: "https://www.ingenes.com/en/our-services/surrogacy/",
  },
  {
    title: "Ingenes",
    subtitle: "Fertility",
    image: ingenesImage,
    description:
      "Scheduling system that allows users to manage their medical appointments or get assistance from the contact center. This system was successfully launched in 21 branches across Mexico and the United States, making medical services more accessible to users",
    techStack: ["Node", "Javascript", "Typescript", "Nest", "MySQL", "MongoDB"],
    urlDeploy: "https://www.ingenes.com/en/",
  },
  {
    title: "CONIN SMT",
    image: coninImage,
    description:
      "High-impact social project aimed at combating child malnutrition in Argentina. It allows users to make donations through Mercado Pago, in order to provide food and necessary resources to improve the health and well-being of affected children.",
    techStack: ["Javascript", "React", "Firebase", "NodeJS", "Express", "SCRUM" , "Git", "Mercado Pago", ],
    urlDeploy: "https://embajadores-conin.vercel.app/",
  },
];
