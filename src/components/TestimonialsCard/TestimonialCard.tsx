import React from "react";

export interface IProps {
  name:           string;
  comment:        string;
  role:           string;
  profilePicture: string;
}

const TestimonialCard: React.FC<IProps> = ({ name, comment, profilePicture, role }) => {
  return (
    <div className="h-24 w-80 max-[600px]:-ml-[130px] max-sm:w-72">
      <p className=" bg-neutral-800 p-4 pb-16 font-montserrat rounded-skill-card max-sm:w-64">
        {comment}
      </p>
      <div className="flex">
        <img
          src={profilePicture}
          alt="testimonial_picture"
          className=" max-h-24 rounded-middle border-solid border-4 border-neutral-600 -mt-12 ml-2 max-[500px]:max-h-18 max-[500px]:max-w-[100px]"
        />
        <div className="flex flex-col">
          <h1 className=" ml-2 mt-0 text-base">{name}</h1>
          <h1 className=" ml-2 mt-1 text-sm text-neutral-400">{role}</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
