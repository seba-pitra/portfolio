import React from "react";

export const AboutHeader = () => {

  return (
    <>
      <h2 
        className=" text-lg font-medium p-0 m-0 tracking-wide
        uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
        after:mt-1 after:mb-1 after:ml-1 after:mr-1" >
          About
      </h2>

      <p className=" mt-2 mb-10 ml-0 mr-0 text-4xl font-bold uppercase text-slate-300">
        Learn more about me
      </p>
    </>
  )
};
