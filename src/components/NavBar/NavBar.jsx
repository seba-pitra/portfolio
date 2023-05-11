import { useEffect, useRef } from "react";
import { Link }       from "react-router-dom";

const NavBar = () => {
  const aboutRef    = useRef(null);
  const contactRef  = useRef(null);
  const homeRef     = useRef(null);
  const projectsRef = useRef(null);

  const handleOpacity = () => {
    if(homeRef.current) {
      homeRef.current.className = `relative ml-8 opacity-100 duration-[0.5s] ease-in-out`;
    }
    if(aboutRef.current) {
      aboutRef.current.className = `relative ml-8 opacity-100 duration-[1s] ease-in-out`;
    } 
    if(projectsRef.current) {
      projectsRef.current.className = `relative ml-8 opacity-100 duration-[1.5s] ease-in-out`;
    } 
    if(contactRef.current) {
      contactRef.current.className  = `relative ml-8 opacity-100 duration-[2s] ease-in-out`;
    } 
  }

  useEffect(() => {
    handleOpacity()
  }, [])

  return (
    <nav className=" mt-9 p-0">
      <div>
        <ul className=" m-0 p-0 flex justify-end w-11/12 list-none">
          <li  ref={homeRef} className="relative ml-8 opacity-0 translate-y-4">
            <Link className=" text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
            before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
            before:bg-blue-400 before:transition-animationLineBefore 
            hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
              Home
            </Link>
          </li>
          <li  ref={aboutRef} className="relative ml-8 opacity-0 translate-y-4">
            <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
            before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
            before:bg-blue-400 before:transition-animationLineBefore 
            hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/about"}>
              About
            </Link>
          </li>
          <li ref={projectsRef} className="relative ml-8 opacity-0 translate-y-4">
            <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
            before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
            before:bg-blue-400 before:transition-animationLineBefore 
            hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/projects"}>
              Projects
            </Link>
          </li>
          <li ref={contactRef} className="relative ml-8 opacity-0 translate-y-4">
            <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
            before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
            before:bg-blue-400 before:transition-animationLineBefore 
            hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
              Contact
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </div>
    </nav>
  );
};

export default NavBar;
