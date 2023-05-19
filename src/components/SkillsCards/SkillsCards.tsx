import BackEndSkillsCards  from "./BackEndSkills";
import FrontEndSkillsCards from "./FrontEndSkills";
import OthersSkillsCards   from "./OthersSkills";
import React               from "react";


const SkillsCards: React.FC = () => {

  return (
    <>
      <div>
        <h2 
        className="text-lg font-medium p-0 m-0 tracking-wide
        uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
        after:mt-1 after:mb-1 after:ml-1 after:mr-1">
          Skills
        </h2>
      </div>

      <div  className=" flex justify-evenly flex-wrap  gap-4 mb-16 mt-3 max-[565px]:flex max-[565px]:flex-col max-[824px]:items-center max-[824px]:mt-8">
        <FrontEndSkillsCards />

        <BackEndSkillsCards />

        <OthersSkillsCards />
      </div>
    </>
  );
};

export default SkillsCards;
