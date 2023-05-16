import React              from "react";
import { Github }         from "react-bootstrap-icons"
import { Link }           from "react-router-dom";
import { Linkedin }       from "react-bootstrap-icons"
import profile            from "../../assets/img/profile.jpg"
import SkillsCards        from "../../components/SkillsCards/SkillsCards";
import SwiperTestimonials from "../../components/SwiperTestimonials/SwiperTestimonial"; 
import { useEffect }      from "react";
import { useRef }         from "react";

const About:React.FC = () => {
  const aboutmeDivRef   = useRef<HTMLDivElement>(null);
  const skillsDivRef    = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const skillsElement: HTMLDivElement       = skillsDivRef.current;
    const testimonialsElement: HTMLDivElement = testimonialsRef.current;

    if(aboutmeDivRef.current) {
      aboutmeDivRef.current.className = ` duration-[1s] ease-in-out`;
    } 
    if (skillsElement && skillsElement.getBoundingClientRect().top < window.innerHeight) {
      skillsElement.className = "transition-opacity opacity-100 duration-[1s] ease-in-out" ;
    }
    if (testimonialsElement && testimonialsElement.getBoundingClientRect().top < window.innerHeight) {
      testimonialsElement.className = "transition-opacity opacity-100 duration-[1.5s] ease-in-out" ;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className=" pb-7 text-stone-300 text-start max-sm:p-6">
        <div className=" w-4/5 max-[500px]:w-full mt-0 mb-0 ml-auto mr-auto">
          <div ref={aboutmeDivRef} className=" opacity-0">
            <h2 
            className=" text-lg font-medium p-0 m-0 tracking-wide
            uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
            after:mt-1 after:mb-1 after:ml-1 after:mr-1  " >
              About
            </h2>
            <p className=" mt-2 mb-10 ml-0 mr-0 text-4xl font-bold uppercase text-slate-300">Learn more about me</p>

            <div className=" flex justify-around mb-16 w-full gap-10 items-center max-md:flex-col duration-[1s] ease-in-out">
              <img src={profile} className="max-h-80 rounded-middle max-lg:max-h-60" alt="profile_picture" />
              <div className="content">
                <h3 className=" font-bold text-2xl text-blue-400 mb-3">Full Stack Web Developer</h3>
                <p className=" max-w-3xl ">
                  I am a Full Stack Developer focused on creating clean and high-quality code. I consider myself a highly proactive and 
                  collaborative person, capable of working effectively in a team to meet project goals and exceed client expectations.
                  <br />
                  <br />
                  In addition, dedication and agile learning are values that I always apply in my daily work, 
                  allowing me to deliver high-quality results in a short time frame. 
                  I am always willing to face new challenges and contribute to the success of the organization where I collaborate.
                </p>
                <div className="flex mt-3 -ml-4 gap-3 p-3">
                  <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
                    <Linkedin color="rgb(59 130 246)" size={"20px"}/> 
                  </Link >
                  <Link to={"https://github.com/seba-pitra"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
                    <Github color="rgb(59 130 246)" size={"20px"} /> 
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div ref={skillsDivRef} className="translate-y-2 opacity-0">
            <SkillsCards />
          </div>

          <div ref={testimonialsRef} className="translate-y-2 opacity-0">
            <SwiperTestimonials />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;