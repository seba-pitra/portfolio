import {Link, useLocation} from "react-router-dom";

const NavBar = () => {
  const {pathname} = useLocation();

  return (
    <nav className=" mt-9 p-0">
      {pathname === "/" ? (
        <div></div>
      ) : (
        <div>
          <ul className=" m-0 p-0 flex justify-end w-11/12 list-none">
            <li className="relative ml-8">
              <Link className=" text-neutral-300 flex items-center justify-between p-0 text-base font-normal duration-300 
              before:absolute before:w-0 before:h-line-title before:-bottom-1 before:left-0 
              before:bg-blue-400 before:transition-animationLineBefore 
              hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
                Home
              </Link>
            </li>
            <li className="relative ml-8">
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
              hover:before:visible hover:before:w-6 hover:text-neutral-50" to={"/"}>
                Resume
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
                Services
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
        </div>
      )}
    </nav>
  );
};

export default NavBar;
