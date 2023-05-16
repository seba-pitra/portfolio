import  About         from "../../components/About/About";
import { Github }     from "react-bootstrap-icons"
import { Link }       from "react-router-dom";
import { Linkedin }   from "react-bootstrap-icons"
import { useRef }     from "react";
import  React         from "react";
import { useOpacity } from "../../hooks";

const Home: React.FC = () => {
  const containerRef    = useRef<HTMLDivElement>(null);
  const presentationRef = useRef<HTMLDivElement>(null);
  const nameRef         = useRef<HTMLDivElement>(null);
  const whoAmIRef       = useRef<HTMLDivElement>(null);
  const socialMediaRef  = useRef<HTMLDivElement>(null);
  const descriptionRef  = useRef<HTMLDivElement>(null);

  useOpacity({
    miliseconds: 2000,
    references: [
    { reference: containerRef },
    { reference: presentationRef }, 
    { reference: whoAmIRef }, 
    {
      reference: nameRef,
      classNameProperties: "text-5xl text-slate-200  m-0 p-0 leading-none font-bold font-poppins",
    }, 
    {
      reference: descriptionRef,
      classNameProperties: "flex mt-3 -ml-4 gap-3 p-3",
    },
    {
      reference: socialMediaRef,
      classNameProperties: "flex mt-3 -ml-4 gap-3 p-3",
    }, 
  ]
  })

  return (
    <div>
      <header className="flex w-4/5 mt-24 mb-24 ml-auto mr-auto text-start ease-in-out duration-300 ">
        <div ref={containerRef} className="opacity-0">
          <div ref={presentationRef} className="opacity-0 translate-y-4">
            <h3 className=" text-blue-400 " >Hi, my name is</h3>
          </div>
          <div ref={nameRef} className="opacity-0 translate-y-4">
            <h1 className=" text-7xl max-sm:text-5xl text-slate-200 mt-2  m-0 p-0 leading-none font-bold font-poppins">Sebastian Pitra</h1>
          </div>
          <div ref={whoAmIRef} className="opacity-0 translate-y-4" >
            <h2  className="text-4xl max-sm:text-2xl mt-5 text-slate-200">
              I'm a passionate {" "}
              <span className="border-solid border-blue-400 border-b-2">developer</span> 
              {" "} from Argentine
            </h2>
          </div>
          <div ref={descriptionRef} className="opacity-0 translate-y-4" >
            <h2  className="text-1xl max-sm:text-base max-w-2xl text-slate-200">
             I write clean code and build exceptional digital experiences.
            </h2>
          </div>

          <div ref={socialMediaRef} className="opacity-0 translate-y-4">
            <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
              <Linkedin color="rgb(59 130 246)" size={"20px"}/> 
            </Link >
            <Link to={"https://github.com/seba-pitra"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
              <Github color="rgb(59 130 246)" size={"20px"} /> 
            </Link>
          </div>
        </div>
      </header>

      <About />
    </div>
  )
}

export default Home;