import tomasImage    from "../assets/img/tomas.jpg";
import josueImage    from "../assets/img/josue.jpg";
import lucasImage    from "../assets/img/lucas.png";
import ayrtonImage   from "../assets/img/ayrton.jpg"
import franImage     from "../assets/img/fran.png";
import milagrosImage from "../assets/img/milagros.jpg";

export interface ITestimonial {
  name:           string;
  comment:        string;
  comment2?:      string;
  comment3?:      string;
  role:           string;
  profilePicture: string;
}

export const testimonials: Array<ITestimonial> =  [
  {
    name:     "Josue Goyret",
    comment:  "Sebas is a proactive and committed professional, capable of understanding the needs of the frontend and generating efficient services from backend with clean code that is easy to maintain.",
    comment2: "His focus goes beyond basic responsibilities, seeking opportunities for improvement and adding value",
    comment3: "In addition to his technical skills, he stands out for his communication skills, which makes him a valuable asset to any project or development team.",
    role:     "Industrial Engineer",
    profilePicture: josueImage
  },
  {
    name:     "Milagros Molina",
    comment:  "Sebastian has been a remarkable team member throughout our time working together on the projects.",
    comment2: "He consistently demonstrates a willingness to help others, whether it's providing technical support, sharing his knowledge, or taking on additional tasks when needed.",
    comment3: "Sebastian consistently meets deadlines and achieves set goals, demonstrating his professionalism and dedication to his work.",
    role:     "Project Manager",
    profilePicture: milagrosImage
  },
  {
    name:     "Ayrton Juarez",
    comment:  "I had the opportunity to follow Sebastián's professional growth as a software developer.",
    comment2: "I can affirm that he is an excellent professional, with a broad command of the latest technologies and a great willingness to collaborate and continue learning and perfecting his skills",
    comment3: "Without a doubt, a pleasure to work with him and I would definitely do it again for the value he brings to the development team.",
    role:     "Front End Developer",
    profilePicture: ayrtonImage
  },
  {
    name:     "Tomas Goyret",
    comment:  "Sebas is amazing! We work together developing an app for a foundation that has a huge impact.",
    comment2: "His incorporation into the dev team was key in giving development a boost. I have to highlight their commitment, willingness to solve problems at any time and their technical quality.",
    comment3: "It was a real pleasure to work with him and I hope we continue to fully with this.",
    role:     "Software Developer",
    profilePicture: tomasImage
  },
  {
    name:     "Francisco Schlatter",
    comment:  "Working with Sebastian was an amazing experience. His technical knowledge and development skills are outstanding",
    comment2: "He consistently goes above and beyond to deliver exceptional results, consistently exceeding expectations.",
    comment3: "Sebastian's ability to efficiently solve complex problems, coupled with his positive attitude, makes him a highly reliable collaborator.",
    role:     "Full Stack Developer",
    profilePicture: franImage
  },
  {
    name:     "Lucas Pedreira",
    comment:  "I had the oportunity of working closely with Sebastian, and I can say that it was a very positive experience. ",
    comment2: "He consistently demonstrated his willingness to assist others, provide valuable advice, and be open to receiving feedback as well. His passion for his work shines through, and he consistently dedicates himself wholeheartedly to every task.",
    comment3: "He is a valuable asset to any team or project.",
    role:     "Freelance Developer",
    profilePicture: lucasImage
  },
]
