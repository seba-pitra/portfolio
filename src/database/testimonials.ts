import testimonial2 from "../assets/img/tomas.jpg";
import testimonial3 from "../assets/img/testimonials-3.jpg";
import testimonial4 from "../assets/img/lucas.png";
import ayrtonImage from "../assets/img/ayrton.jpg"
import franImage    from "../assets/img/fran.png";

export interface ITestimonial {
  name:           string;
  comment:        string;
  role:           string;
  profilePicture: string;
}

export const testimonials: Array<ITestimonial> =  [
  {
    name: "Lorem Ipsum",
    comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur",
    role: "Industrial Engineer",
    profilePicture: testimonial3
  },
  {
    name: "Francisco Schlatter",
    comment:"Working with Sebastian was an amazing experience. His technical knowledge and development skills are outstanding. He always gives his best to deliver exceptional results and exceed expectations. His ability to solve complex problems efficiently and his positive attitude make him a reliable collaborator.",
    role: "Full Stack Developer",
    profilePicture: franImage
  },
  {
    name: "Ayrton Juarez",
    comment:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est enim vero illo numquam eum officia, ut incidunt dolores reiciendis rem, laborum inventore nemo? Maiores quam voluptates enim amet consequuntur",
    role: "Front End Developer",
    profilePicture: ayrtonImage
  },
  {
    name: "Tomas Goyret",
    comment:"Sebas is amazing! We work together developing an app for a foundation that has a huge impact. His incorporation into the dev team was key in giving development a boost. I have to highlight their commitment, willingness to solve problems at any time and their technical quality. It was a real pleasure to work with him and I hope we continue to fully with this.",
    role: "Software Developer",
    profilePicture: testimonial2
  },
  {
    name: "Lucas Pedreira",
    comment:"I had the opportunity to work with Sebastian and the experience was very positive, he is always willing to help, give advice and receive it too. He is a professional who shows that he likes what he does and dedicates the best of himself to it.",
    role: "Freelance Developer",
    profilePicture: testimonial4
  },
]
