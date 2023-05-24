
import React from 'react'

export const ProjectCardLeftTitle = ({ title }: { title: string }) => {
  return (
    <h1 className=" text-2xl mt-1 top-[50px] left-0 right-0 bottom-0 max-h-fit w-fit">
      {title}
    </h1>
  )
}
