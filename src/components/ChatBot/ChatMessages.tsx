import { FC }               from "react";
import { MutableRefObject } from "react";
import React                from "react";
import TypewriterAnimation  from "../TypewriterAnimation/TypewriterAnimation";

interface IMessages {
  id:      string;
  role:    "user" | "assistant";
  content: string;
}

interface IProps {
  messages: Array<IMessages>;
  chatContainerMessagesRef: MutableRefObject<HTMLDivElement>;
}

const ChatMessages: FC<IProps> = ({ messages, chatContainerMessagesRef }) => {
  const scrollToBottom = ():void => {
    const chatContainer = chatContainerMessagesRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };


  return (
    <div ref={chatContainerMessagesRef} className="bg-neutral-800 mt-16 text-[15px] w-[384px] h-[300px] overflow-auto p-3">
      {messages.length && messages.map((message: IMessages, index: number) => (

        message.role === "user" ?
        <div key={Math.random() * index} className="flex justify-end text-end w-full p-1 mb-1">
          <p className="bg-blue-400 max-w-fit p-2 rounded-[3px]">
            {message.content}
          </p>
        </div>
        : 
        <TypewriterAnimation 
          scrollToButtom={scrollToBottom}
          isLastMessage={index === messages.length - 1}
          key={Math.random() * index} 
          word={message.content} />

      ))}
  </div>
  )
};

export default ChatMessages;