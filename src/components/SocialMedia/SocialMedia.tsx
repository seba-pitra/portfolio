import React            from "react";
import { useEffect }    from "react";
import { useRef }       from "react";
import { EnvelopeFill } from "react-bootstrap-icons"
import { GeoAltFill  }  from "react-bootstrap-icons"
import { Globe }        from "react-bootstrap-icons"
import { Linkedin }     from "react-bootstrap-icons"
import { Github }       from "react-bootstrap-icons"
import { Link }         from "react-router-dom"

const SocialMedia = () => {
  const emailIconRef    = useRef<HTMLDivElement>(null);
  const locationIconRef = useRef<HTMLDivElement>(null);
  const webIconRef      = useRef<HTMLDivElement>(null);
  const githubIconRef   = useRef<HTMLDivElement>(null);
  const linkedinIconRef = useRef<HTMLDivElement>(null);

  const handleOpacity = () => {
    const emailElement    = emailIconRef.current;
    const locationElement = locationIconRef.current;
    const webElement      = webIconRef.current;
    const githubElement   = githubIconRef.current;
    const linkedinElement = linkedinIconRef.current;

    setTimeout(() => {
      if(emailElement) {
        emailElement.className = ` opacity-100 duration-[0.3s] ease-in-out flex gap-3 items-center`;
      } 
      if(locationElement) {
        locationElement.className = `opacity-100 duration-[0.5s] ease-in-out flex gap-3 items-center`;
      }
      if(webElement) {
        webElement.className = `opacity-100 duration-[0.8s] ease-in-out flex gap-3 items-center`;
      } 
      if(githubElement) {
        githubElement.className  = `opacity-100 duration-[1.1s] ease-in-out flex gap-3 items-center`;
      } 
      if(linkedinElement) {
        linkedinElement.className  = `opacity-100 duration-[1.3s] ease-in-out flex gap-3 items-center`;
      } 
    }, 1700)
  }

  useEffect(() => {
    handleOpacity()
  }, [])

  return (
    <div className="flex flex-col gap-10">
      <div ref={emailIconRef} className=" opacity-0 translate-x-8">
        <EnvelopeFill color="#3498db" size={"25px"}/>
        <span>Email - sebastian.pitra10@gmail.com</span>
      </div>
      <div ref={locationIconRef} className="opacity-0 translate-x-8">
        <GeoAltFill  color="#3498db" size={"25px"}/>
        <span>Location - Misiones, Argentina</span>
      </div>
      <div ref={webIconRef} className="opacity-0 translate-x-8">
        <Globe color="#3498db" size={"25px"}/>
        <Link to={"https://sebastian-pitra.vercel.app/"} target="_blank">
          <span>Website</span>
        </Link>
      </div>
      <div ref={githubIconRef} className="opacity-0 translate-x-8">
        <Github color="#3498db" size={"25px"}/>
        <Link to={"https://github.com/seba-pitra"} target="_blank" >
          Github
        </Link>
      </div>
      <div ref={linkedinIconRef} className="opacity-0 translate-x-8">
        <Linkedin color="#3498db" size={"25px"}/>
        <Link to={"https://www.linkedin.com/in/sebastian-pitra/"} target="_blank" >
          Linkedin
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia;