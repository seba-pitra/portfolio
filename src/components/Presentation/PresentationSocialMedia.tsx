import { useRef }     from "react";
import   React        from "react";
import { useEffect }  from "react";
import { useOpacity } from "../../hooks";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "react-bootstrap-icons";

export const PresentationSocialMedia = () => {

  const socialMediaRef = useRef<HTMLDivElement>(null);

  const { doOpacity } = useOpacity();

  useEffect(() => {

    if( socialMediaRef.current ) {
      setTimeout( () => doOpacity([ socialMediaRef ]), 1300 )
    }

  }, [doOpacity, socialMediaRef])

  return (
    <div ref={socialMediaRef} className="opacity-0 translate-x-4 flex  mt-3 -ml-4 gap-3 p-3">
      <div className="flex  mt-3 -ml-4 gap-3 p-3">
        <Link to={"https://www.linkedin.com/in/sebastian-pitra/"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
          <Linkedin color="rgb(59 130 246)" size={"20px"}/> 
        </Link >
        <Link to={"https://github.com/seba-pitra"} target="_blank" className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
          <Github color="rgb(59 130 246)" size={"20px"} /> 
        </Link>
      </div>
    </div>
  )
};
