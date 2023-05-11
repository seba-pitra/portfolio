import profile           from "../../img/profile.jpg"
import SkillsCards       from "../../components/SkillsCards/SkillsCards";
import TestimonialsCards from "../../components/TestimonialsCards/TestimonialsCards";
import { useEffect } from "react";
import { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar";

const About = () => {
  const aboutmeDivRef = useRef(null);
  const skillsDivRef = useRef(null);
  const testimonialsRef = useRef(null);

  const handleOpacity = () => {
    setTimeout(() => {
      if(aboutmeDivRef.current) {
        aboutmeDivRef.current.className = `flex justify-around mb-16 w-full gap-10 items-center max-md:flex-col duration-[1s] ease-in-out`;
      } 
    }, 1000)
  }

  const handleScroll = () => {
    const skillsElement  = skillsDivRef.current;
    const testimonialsElement = testimonialsRef.current;

    if (skillsElement && skillsElement.getBoundingClientRect().top < window.innerHeight) {
      skillsElement.className = "transition-opacity opacity-100 duration-[1s] ease-in-out" ;
    }
    if (testimonialsElement && testimonialsElement.getBoundingClientRect().top < window.innerHeight) {
      testimonialsElement.className = "transition-opacity opacity-100 duration-[1.5s] ease-in-out" ;
    }
  };

  useEffect(() => {
    handleOpacity()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <section className="mt-10 pt-7 pb-7 text-stone-300 text-start max-sm:p-6">
        <div className=" w-4/5 max-[500px]:w-full mt-0 mb-0 ml-auto mr-auto">
          <h2 
          className=" text-lg font-medium p-0 m-0 tracking-wide
          uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
          after:mt-1 after:mb-1 after:ml-1 after:mr-1  " >
            About
          </h2>
          <p className=" mt-2 mb-10 ml-0 mr-0 text-4xl font-bold uppercase text-slate-300">Learn more about me</p>

          <div className="flex justify-around mb-16 w-full gap-10 items-center max-md:flex-col translate-y-2 opacity-0" ref={aboutmeDivRef}>
            <img src={profile} className="max-h-72 rounded-middle max-lg:max-h-60" alt="profile_picture" />
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
            </div>
          </div>

          <div ref={skillsDivRef} className="translate-y-2 opacity-0">
            <SkillsCards />
          </div>

          <div ref={testimonialsRef} className="translate-y-2 opacity-0">
            <TestimonialsCards />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;