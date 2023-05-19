import React, { FC } from "react";
import rocketImg from "../../assets/img/rocket.jpg"


const Rocket: FC = () => {

  return (
    <div className="transition-animationLineBefore max-md:hidden">
      <p className="bg-neutral-800 mr-12 p-3 rounded-[5px]">
        Do you need help?
      </p>
      <div className="w-full flex justify-end">
        <div className="w-10 bg-neutral-800 mr-12 h-4 text-[0px] transform origin-bottom-left -mt-4 skew-y-6 ">m</div>
      </div>
      <div className="w-full flex justify-end">
        <img 
          src={rocketImg} 
          alt="rocket-img"
          className="max-h-32 -mr-8 hover:scale-110 duration-[0.3s] ease-in-out cursor-pointer" />
      </div>
    </div>
  )
};

export default Rocket;