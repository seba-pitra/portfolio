import React from 'react';
import { AboutPicture } from './AboutPicture';
import { AboutDescription } from './AboutDescription';
import { AboutSocialMedia } from './AboutSocialMedia';
import profile            from "../../assets/img/profile.jpg";

export const AboutDescriptionContainer = () => {
  return (
    <div className=" flex justify-around mb-16 w-full gap-10 items-center max-md:flex-col duration-[1s] ease-in-out">
      <AboutPicture src={profile} />

      <div className="content">
        <AboutDescription />
        
        <AboutSocialMedia />
      </div>
    </div>
  )
}
