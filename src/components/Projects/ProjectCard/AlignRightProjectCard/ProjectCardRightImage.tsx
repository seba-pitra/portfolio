import React from 'react'

export const ProjectCardLeftImage = ({ src = "" }) => {
  return (
    <>
      {src && <img src={src} alt="project-img" className=" w-[100vh] h-[3%] rounded-skill-card max-lg:hidden"/>}
    </>
  )
}
