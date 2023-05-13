import coninImage      from "../assets/img/conin.jpg"
import dogBreedsImage  from "../assets/img/dog-breeds.jpg"
import portamorImage   from "../assets/img/portamor.jpg"
import nonFungibleTownImage from "../assets/img/nonFungibleTown.jpg"
import { IProject } from "../types/databaseTypes"

export const projects: Array<IProject> =  [
  {
    title:       "CONIN SMT",
    image:        coninImage,
    description: "High-impact social project aimed at combating child malnutrition in Argentina. It allows users to make donations through Mercado Pago, in order to provide food and necessary resources to improve the health and well-being of affected children.", 
    techStack:   ["Javascript", "React", "Firebase", "NodeJS", "Mercado Pago"],
    urlDeploy:   "https://embajadores-conin.vercel.app/"
  },
  {
    title:       "Portamor",
    image:       portamorImage,
    description: "Project focused on promoting active aging among individuals through the implementation of an online education platform in Peru. This platform provides learning opportunities and personal development to the elderly population.", 
    techStack:   ["Javascript", "React", "NodeJS", "PostgreSQL"],
    urlGithub:   "https://github.com/seba-pitra/PI-DOGS",
  },
  {
    title:       "Non Fungible Town",
    image:       nonFungibleTownImage,
    description: "An NFT Ecommerce platform that provides seamless opportunities for buying and selling NFTs using cryptocurrencies as well as cash payments.", 
    techStack:   ["Javascript", "React", "Metamask", "NodeJS", "Firebase"],
    urlGithub:   "https://github.com/seba-pitra/e-commerce-NFT",
    urlDeploy:   "https://e-commerce-nft.vercel.app/"
  },
  {
    title:       "Dog Breeds",
    image:       dogBreedsImage,
    description: "User-friendly Single-Page-App that integrated an external dog breed API. The app empowered users to effortlessly filter, sort, and even create new dog breeds, complemented by a seamless pagination feature. This enhanced user experience enabled seamless exploration of a diverse range of dog breeds.", 
    techStack:   ["Javascript", "React", "Redux", "NodeJS", "PostgreSQL"],
    urlGithub:   "https://github.com/seba-pitra/PI-DOGS",
    urlDeploy:   "https://pi-dogs-rouge-beta.vercel.app/"
  }
]
