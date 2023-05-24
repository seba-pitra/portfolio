import React from 'react'

export const ProjectCardRightDescription = ({ description }: { description: string }) => {
  return (
    <p className=" bg-blue-950 p-5 rounded-skill-card min-w-[400px] max-lg:min-w-fit -ml-[30%] mt-2 max-lg:-ml-0 max-md:max-h-fit">
      {description}
    </p>
  )
}
