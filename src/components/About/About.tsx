import React            from "react";
import { ReactElement } from "react";
//--Components
import { AboutDescriptionContainer } from "./AboutDescriptionContainer";
import { AboutHeader }             from "./AboutHeader";
import { AboutSkillsCards }        from "./AboutSkillsCards";
import { AboutTestimonials }       from "./AboutTestimonials";
//--Hooks
import { useEffect } from "react";
import { useRef }    from "react";
import { useScroll } from "../../hooks";



interface Props {
  children?: ReactElement | ReactElement[];
}


const About = ({ children }: Props) => {
  const aboutmeDivRef = useRef<HTMLDivElement>(null);
  
  const { doScroll } = useScroll();

  useEffect(() => {
    window.addEventListener("scroll", () => doScroll([ aboutmeDivRef ]) );

    return () => {
      window.removeEventListener("scroll", () => doScroll([ aboutmeDivRef ]) );
    };
  }, [doScroll]);



  return (
    <section ref={aboutmeDivRef} className="opacity-0 pb-7 text-stone-300 text-start max-sm:p-6 w-4/5 max-[500px]:w-full mt-0 mb-0 ml-auto mr-auto duration-[1s] ease-in-out">
      
      { children }

    </section>
  )
};

About.Header       = AboutHeader;
About.Description  = AboutDescriptionContainer;
About.SkillsCards  = AboutSkillsCards;
About.Testimonials = AboutTestimonials;

export default About;