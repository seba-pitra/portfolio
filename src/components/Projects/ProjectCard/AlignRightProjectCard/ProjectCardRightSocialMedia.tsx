import React from 'react'
import { BoxArrowUpRight, Github } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

interface Props {
  urlGithub?: string;
  urlDeploy?: string;
}

export const ProjectCardRightSocialMedia = ({ urlGithub, urlDeploy }: Props) => {
  return (
    <div className="flex max-lg:w-full gap-8 mt-4 max-lg:items-end max-lg:justify-end">
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
