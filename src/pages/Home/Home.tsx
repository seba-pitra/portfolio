import { Github }    from "react-bootstrap-icons"
import { Link }      from "react-router-dom";
import { Linkedin }  from "react-bootstrap-icons"
import { useEffect } from "react";
import { useRef }    from "react";
import React from "react";

const Home = () => {
  const presentationRef = useRef(null);
  const nameRef  = useRef(null);
  const whoAmIRef = useRef(null);
  const socialMediaRef = useRef(null);

  const handleOpacity = () => {
    const presentationElement = presentationRef.current;
    const nameElement         = nameRef.current;
    const whoAmIElement       = whoAmIRef.current;
    const socialMediaElement  = socialMediaRef.current;

    if(presentationElement) {
      presentationElement.className = `opacity-100 duration-[0.5s] ease-in-out`;
    }
    if(nameElement) {
      nameElement.className = `text-5xl text-slate-200  m-0 p-0 leading-none font-bold font-poppins opacity-100 duration-[1s] ease-in-out`;
    } 
    if(whoAmIElement) {
      whoAmIElement.className = ` opacity-100 duration-[1.5s] ease-in-out`;
    } 
    if(socialMediaElement) {
      socialMediaElement.className  = `flex mt-3 -ml-4 gap-3 p-3 opacity-100 duration-[1s] ease-in-out`;
    } 
  }

  useEffect(() => {
    handleOpacity()
  }, [])

  return (
    <header className="fixed inset-0 flex items-center justify-center text-start ease-in-out duration-300 ">
      <div>
        <div ref={presentationRef} className="opacity-0 translate-y-4">
          <h3 ref={presentationRef} className=" text-blue-400 " >Hi, my name is</h3>
        </div>
        <div ref={nameRef} className="opacity-0 translate-y-4">
          <h1 className=" text-5xl text-slate-200  m-0 p-0 leading-none font-bold font-poppins">Sebastian Pitra</h1>
        </div>
        <div ref={whoAmIRef} className="opacity-0 translate-y-4" >
          <h2  className="text-2xl mt-5 text-slate-200">
            I am a passionate {" "}
            <span className="border-solid border-blue-400 border-b-2">developer</span> 
            {" "} from Argentine
          </h2>
        </div>

        <nav className=" mt-9 p-0">
          <ul className=" m-0 p-0 flex justify-start w-full list-none">
            <li className="relative">
              <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
              before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
              before:bg-blue-400 before:transition-animationLineBefore 
              hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/about"}>
                About
              </Link>
            </li>
            <li className="relative ml-8">
              <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
              before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
              before:bg-blue-400 before:transition-animationLineBefore 
              hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/projects"}>
                Projects
              </Link>
            </li>
            <li className="relative ml-8">
              <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
              before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
              before:bg-blue-400 before:transition-animationLineBefore 
              hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

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
  )
}

export default Home;