import tomasImage   from "../assets/img/tomas.jpg";
import josueImage   from "../assets/img/josue.jpg";
import lucasImage   from "../assets/img/lucas.png";
import ayrtonImage  from "../assets/img/ayrton.jpg"
import franImage    from "../assets/img/fran.png";

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
    name:     "Tomas Goyret",
    comment:  "Sebas is amazing! We work together developing an app for a foundation that has a huge impact.",
    comment2: "His incorporation into the dev team was key in giving development a boost. I have to highlight their commitment, willingness to solve problems at any time and their technical quality.",
    comment3: "It was a real pleasure to work with him and I hope we continue to fully with this.",
    role:     "Software Developer",
    profilePicture: tomasImage
  },
  {
    name:     "Francisco Schlatter",
    comment:  "Working with Sebastian was an amazing experience. His technical knowledge and development skills are outstanding. ",
    comment2: "He always gives his best to deliver exceptional results and exceed expectations.",
    comment3: "His ability to solve complex problems efficiently and his positive attitude make him a reliable collaborator.",
    role:     "Full Stack Developer",
    profilePicture: franImage
  },
  {
    name:    "Ayrton Juarez",
    comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur",
    role:    "Front End Developer",
    profilePicture: ayrtonImage
  },
  {
    name:     "Lucas Pedreira",
    comment:  "I had the opportunity to work closely with Sebastian and I must say that the experience was very positive.",
    comment2: "He is always willing to help, give advice and receive it too.",
    comment3: "He is a professional who shows that he likes what he does and dedicates the best of himself to it.",
    role:     "Freelance Developer",
    profilePicture: lucasImage
  },
]
