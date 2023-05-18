import React, { useState, FC, useEffect } from "react";
import rocketImg from "../../assets/img/rocket.jpg"


interface IProps {
  word: string;
  isLastMessage: boolean;
};

const TypewriterAnimation: FC<IProps> = ({ word, isLastMessage }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    if(!isLastMessage) setText(word);
    else {
      const intervalId = setInterval(() => {
        
        if (currentIndex === word.length - 1) {
          clearInterval(intervalId);
        } else {
          setText((prevText) => prevText + word[currentIndex])
          currentIndex++;
        }
      }, 50)
  
      return () => clearInterval(intervalId);
    }      
  }, [word, isLastMessage])

  return (
    <div className="flex justify-start text-start w-full p-2 mb-1">
      <img 
        src={rocketImg} 
        alt="rocket-img-chat"
        className="max-h-10" />
      <p className="bg-neutral-500 max-w-fit p-2 rounded-[3px]">
        {text}
      </p>
    </div>
  )
};

export default TypewriterAnimation;