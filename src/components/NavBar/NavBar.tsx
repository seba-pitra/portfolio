import { Link }      from "react-router-dom";
import  React        from "react";
import { useEffect } from "react";
import { useRef }    from "react";

const NavBar: React.FC = () => {
  const contactRef  = useRef<HTMLLIElement>(null);
  const homeRef     = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLLIElement>(null);
  const resumeRef   = useRef<HTMLLIElement>(null);

  const handleOpacity = () => {
    if(homeRef.current) {
      homeRef.current.className = `relative ml-8 opacity-100 duration-[1.8s] ease-in-out`;
    }
    
    if(projectsRef.current) {
      projectsRef.current.className = `relative ml-8 opacity-100 duration-[1.6s] ease-in-out`;
    } 
    if(contactRef.current) {
      contactRef.current.className  = `relative ml-8 opacity-100 duration-[1.3s] ease-in-out`;
    } 
    if(resumeRef.current) {
      resumeRef.current.className  = `relative ml-8 opacity-100 duration-[1s] ease-in-out`;
    } 
  }

  useEffect(() => {
    handleOpacity()
  }, [])

  return (
    <nav className=" mt-9 p-0">
      <ul className=" m-0 p-0 flex justify-end w-11/12 list-none">
        <li  ref={homeRef} className="relative ml-8 opacity-0 -translate-y-4">
          <Link className=" text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
            Home
          </Link>
        </li>
        <li ref={projectsRef} className="relative ml-8 opacity-0 -translate-y-4">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/projects"}>
            Projects
          </Link>
        </li>
        <li ref={contactRef} className="relative ml-8 opacity-0 -translate-y-4">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li ref={resumeRef} className="relative ml-8 opacity-0 -translate-y-4">
          <Link className="text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
          before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
          before:bg-blue-400 before:transition-animationLineBefore 
          hover:before:visible hover:before:w-6 hover:text-neutral-50" target="_blank" to={"/resume"}>
            Resume
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};

export default NavBar;
