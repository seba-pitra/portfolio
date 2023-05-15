import React            from "react";
import { EnvelopeFill } from "react-bootstrap-icons"
import { GeoAltFill  }  from "react-bootstrap-icons"
import { Globe }        from "react-bootstrap-icons"
import { Linkedin }     from "react-bootstrap-icons"
import { Github }       from "react-bootstrap-icons"
import { Link }         from "react-router-dom"

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-3 items-center">
        <EnvelopeFill color="#3498db" size={"25px"}/>
        <span>Email - sebastian.pitra10@gmail.com</span>
      </div>
      <div className="flex gap-3 items-center">
        <GeoAltFill  color="#3498db" size={"25px"}/>
        <span>Location - Misiones, Argentina</span>
      </div>
      <Link to={"http://localhost:3000/contact"}>
        <div className="flex gap-3 items-center">
          <Globe color="#3498db" size={"25px"}/>
          <span>Website</span>
        </div>
      </Link>
      <div className="flex gap-3 items-center">
        <Github color="#3498db" size={"25px"}/>
        <Link to={"https://github.com/seba-pitra"}  >
          Github
        </Link>
      </div>
      <div className="flex gap-3 items-center">
        <Linkedin color="#3498db" size={"25px"}/>
        <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"}>
          Linkedin
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia;