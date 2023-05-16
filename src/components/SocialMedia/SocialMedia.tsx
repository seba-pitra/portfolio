import  React           from "react";
import { useRef }       from "react";
import { EnvelopeFill } from "react-bootstrap-icons"
import { GeoAltFill  }  from "react-bootstrap-icons"
import { Globe }        from "react-bootstrap-icons"
import { Linkedin }     from "react-bootstrap-icons"
import { Github }       from "react-bootstrap-icons"
import { Link }         from "react-router-dom"
import { useOpacity }   from "../../hooks";

const SocialMedia = () => {
  const emailIconRef    = useRef<HTMLDivElement>(null);
  const locationIconRef = useRef<HTMLDivElement>(null);
  const webIconRef      = useRef<HTMLDivElement>(null);
  const githubIconRef   = useRef<HTMLDivElement>(null);
  const linkedinIconRef = useRef<HTMLDivElement>(null);

  useOpacity({
    miliseconds: 1500,
    references: [
      {
        reference: emailIconRef,
        classNameProperties: "flex gap-3 items-center"
      },
      {
        reference: locationIconRef,
        classNameProperties: "flex gap-3 items-center"
      },
      {
        reference: webIconRef,
        classNameProperties: "flex gap-3 items-center"
      },
      {
        reference: githubIconRef,
        classNameProperties: "flex gap-3 items-center"
      },
      {
        reference: linkedinIconRef,
        classNameProperties: "flex gap-3 items-center"
      },
    ]
  })

  return (
    <div className="flex flex-col gap-10">
      <div ref={emailIconRef} className=" opacity-0 translate-x-4">
        <EnvelopeFill color="#3498db" size={"25px"}/>
        <span>Email - sebastian.pitra10@gmail.com</span>
      </div>
      <div ref={locationIconRef} className="opacity-0 translate-x-4">
        <GeoAltFill  color="#3498db" size={"25px"}/>
        <span>Location - Misiones, Argentina</span>
      </div>
      <div ref={webIconRef} className="opacity-0 translate-x-4">
        <Globe color="#3498db" size={"25px"}/>
        <Link to={"http://localhost:3000/contact"}>
          <span>Website</span>
        </Link>
      </div>
      <div ref={githubIconRef} className="opacity-0 translate-x-4">
        <Github color="#3498db" size={"25px"}/>
        <Link to={"https://github.com/seba-pitra"}  >
          Github
        </Link>
      </div>
      <div ref={linkedinIconRef} className="opacity-0 translate-x-4">
        <Linkedin color="#3498db" size={"25px"}/>
        <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"}>
          Linkedin
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia;