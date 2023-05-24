import React from 'react'

export const ProjectCardLeftDescription = ({ description }: { description: string }) => {
  return (
    <p className="bg-blue-950 top-[200px] left-0 right-0 bottom-0 max-h-fit p-5 max-lg:-mr-0 -mr-[25%] rounded-skill-card min-w-[400px] max-lg:min-w-fit mt-2 max-lg:-ml-0 max-md:max-h-fit">
      {description}
    </p>
  )
}
