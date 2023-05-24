import React        from 'react'
import { Github }   from 'react-bootstrap-icons'
import { Link }     from 'react-router-dom'
import { Linkedin } from 'react-bootstrap-icons'

export const AboutSocialMedia = () => {
  return (
    <div className="flex mt-3 -ml-4 gap-3 p-3">

      <Link 
        to={"https://www.linkedin.com/in/sebastian-pitra/"} 
        target="_blank" 
        className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
        <Linkedin color="rgb(59 130 246)" size={"20px"}/> 
      </Link >

      <Link 
        to={"https://github.com/seba-pitra"} 
        target="_blank" 
        className="bg-gray-800 p-3 rounded-middle hover:bg-gray-700 transition-animationLineBefore duration-300"> 
        <Github color="rgb(59 130 246)" size={"20px"} /> 
      </Link>

    </div>
  )
}
