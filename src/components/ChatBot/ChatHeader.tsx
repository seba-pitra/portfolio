import { FC }           from "react";
import React            from "react";
import rocketProfileImg from "../../assets/img/rocket-profile.jpg"

interface IProps {
  handleCloseChat: () => void;
}

const ChatHeader: FC<IProps> = ({ handleCloseChat }) => {

  return (
    <header className="fixed top-0 bg-neutral-800 p-2 w-full flex justify-center items-center">
    <div className="flex w-full gap-2 justify-center ">
      <img 
        src={rocketProfileImg} 
        alt="rocket-profile-chat"
        className="max-h-12 rounded-middle" />

      <div className="flex flex-col">
        <h1>Rocket</h1>
        <h2 className=" text-neutral-400">Assistant</h2>
      </div>
      
      <span
        onClick={handleCloseChat} 
        className="w-full cursor-pointer text-neutral-400 flex justify-end text-[14px]">
        Close chat
      </span>
    </div>
  </header>
  )
};

export default ChatHeader;