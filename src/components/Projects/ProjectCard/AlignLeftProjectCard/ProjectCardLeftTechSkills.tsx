import React from 'react'

interface Props {
  techStack: Array<string>;
}

export const ProjectCardLeftTechSkills = ({ techStack }: Props) => {
  return (
    <div className="flex justify-start gap-3 w-full mt-3 flex-wrap max-lg:justify-start">
      {
        techStack.map((techSkill, index) => 
          <p key={index} className="text-sm text-neutral-400">
            {techSkill}
          </p>
        )
      }
    </div>
  )
}
