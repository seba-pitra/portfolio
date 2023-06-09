import  React           from "react";
import { EnvelopeFill } from "react-bootstrap-icons"
import { GeoAltFill  }  from "react-bootstrap-icons"
import { Github }       from "react-bootstrap-icons"
import { Globe }        from "react-bootstrap-icons"
import { Link }         from "react-router-dom"
import { Linkedin }     from "react-bootstrap-icons"
import { useEffect }    from "react";
import { useOpacity }   from "../../hooks";
import { useRef }       from "react";
import { useState }     from "react";

const SocialMedia = () => {
  const emailIconRef    = useRef<HTMLDivElement>(null);
  const locationIconRef = useRef<HTMLDivElement>(null);
  const webIconRef      = useRef<HTMLDivElement>(null);
  const githubIconRef   = useRef<HTMLDivElement>(null);
  const linkedinIconRef = useRef<HTMLDivElement>(null);

  const [ references ] = useState(
    [emailIconRef, locationIconRef, webIconRef, githubIconRef, linkedinIconRef]
  )

  const { doOpacity } = useOpacity();

  useEffect(() => {

    setTimeout(() => doOpacity(references), 1700)

  }, [doOpacity, references])

  return (
    <div className="flex flex-col gap-10">

      <div ref={emailIconRef} className=" opacity-0 translate-x-8">
        <div className="flex gap-2">
          <EnvelopeFill color="#3498db" size={"25px"}/>
          <span>Email - sebastian.pitra10@gmail.com</span>
        </div>
      </div>

      <div ref={locationIconRef} className="opacity-0 translate-x-8">
        <div className="flex gap-2">
          <GeoAltFill  color="#3498db" size={"25px"}/>
          <span>Location - Misiones, Argentina</span>
        </div>
      </div>

      <div ref={webIconRef} className="opacity-0 translate-x-8">
        <div className="flex gap-2">
          <Globe color="#3498db" size={"25px"}/>
          <Link to={"https://sebastian-pitra.vercel.app/"} target="_blank">
            <span>Website</span>
          </Link>
        </div>
      </div>

      <div ref={githubIconRef} className="opacity-0 translate-x-8">
        <div className="flex gap-2">
          <Github color="#3498db" size={"25px"}/>
          <Link to={"https://github.com/seba-pitra"} target="_blank" >
            Github
          </Link>
        </div>
      </div>

      <div ref={linkedinIconRef} className="opacity-0 translate-x-8">
        <div className="flex gap-2">
          <Linkedin color="#3498db" size={"25px"}/>
          <Link to={"https://www.linkedin.com/in/sebastian-pitra/"} target="_blank" >
            Linkedin
          </Link>
        </div>
      </div>

    </div>
  )
}

export default SocialMedia;