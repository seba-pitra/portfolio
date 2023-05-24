import React               from 'react'
import { BoxArrowUpRight } from 'react-bootstrap-icons'
import { Github }          from 'react-bootstrap-icons'
import { Link }            from 'react-router-dom'

interface Props {
  urlGithub?: string;
  urlDeploy?: string;
}

export const ProjectCardLeftSocialMedia = ({ urlGithub, urlDeploy }: Props) => {
  return (
    <div className="flex w-full gap-8 mt-4 items-end justify-start">

      {
        urlGithub && 
        <Link to={urlGithub} target="_blank">
          <Github size={"28px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
        </Link>
      }

      {
        urlDeploy && 
        <Link to={urlDeploy} target="_blank">
          <BoxArrowUpRight size={"25px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
        </Link>
      }
      
    </div>
  )
}
