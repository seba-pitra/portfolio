import { Link }      from "react-router-dom";
import  React        from "react";
import { useEffect } from "react";
import { useRef }    from "react";

const NavBar: React.FC = () => {
  const contactRef  = useRef<HTMLLIElement>(null);
  const homeRef     = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const resumeRef   = useRef<HTMLLIElement>(null);

  const handleOpacity = ():void => {
    setTimeout(():void => {
      if(homeRef.current) {
        homeRef.current.className = `relative ml-8 max-sm:ml-0 opacity-100 duration-[1.4s] ease-in-out`;
      }
      if(projectsRef.current) {
        projectsRef.current.className = `relative ml-8 max-sm:ml-0 opacity-100 duration-[1.1s] ease-in-out`;
      } 
      if(contactRef.current) {
        contactRef.current.className  = `relative ml-8 max-sm:ml-0 opacity-100 duration-[0.8s] ease-in-out`;
      } 
      if(resumeRef.current) {
        resumeRef.current.className  = `relative ml-8 max-sm:ml-0 opacity-100 duration-[0.5s] ease-in-out`;
      } 
    }, 1000)
  }

  useEffect(():void => {
    handleOpacity()
  }, [])

  return (
    <nav className=" p-0 fixed bg-neutral-950 flex w-full items-center h-[70px] top-0 z-10  ">
      <ul className=" m-0 p-0 flex justify-end  max-sm:w-full max-sm:justify-evenly  max-sm:pt-0 w-11/12 list-none">
        <li  ref={homeRef} className="relative opacity-0 -translate-y-8">
          <Link className=" text-neutral-300 flex items-center justify-between p-0 text-xl max-sm:text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
            Home
          </Link>
        </li>
        <li ref={projectsRef} className="relative opacity-0 -translate-y-8">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-xl max-sm:text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/projects"}>
            Projects
          </Link>
        </li>
        {/* <li ref={contactRef} className="relative opacity-0 -translate-y-8">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-xl max-sm:text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/contact"}>
            Contact
          </Link>
        </li> */}
        <li ref={resumeRef} className="relative opacity-0 -translate-y-8">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-xl max-sm:text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" target="_blank" to={"/resume"}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
