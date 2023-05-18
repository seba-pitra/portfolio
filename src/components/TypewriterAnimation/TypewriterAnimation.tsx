import React, { useState, FC, useEffect } from "react";
import rocketImg from "../../assets/img/rocket.jpg"


interface IProps {
  word: string;
  isLastMessage: boolean;
  scrollToButtom: () => void;
};

const TypewriterAnimation: FC<IProps> = ({ word, isLastMessage, scrollToButtom }) => {
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
          scrollToButtom()
          currentIndex++;
        }
      }, 30)
      
      return () => {
        clearInterval(intervalId)
      };
    }      
  }, [word, isLastMessage, scrollToButtom])

  return (
    <div className="flex justify-start text-start w-full p-1 mb-1">
      <img 
        src={rocketImg} 
        alt="rocket-img-chat"
        className="max-h-10" />
      <p className="bg-neutral-500 max-w-[90%] p-2 rounded-[3px]">
        {text}
      </p>
    </div>
  )
};

export default TypewriterAnimation;