import ChatForm      from "./ChatForm";
import ChatMessages  from "./ChatMessages";
import ChatHeader    from "./ChatHeader";
import ChatWindow    from "./ChatWindow";
import { FC }        from "react";
import React         from "react";
import Rocket        from "./Rocket";
import { useState }  from "react";
import { useEffect } from "react";
import { useRef }    from "react";


interface IMessages {
  id:      string;
  role:    "user" | "assistant";
  content: string;
}

const ChatBot: FC = () => {

  const chatContainerRef         = useRef<HTMLDivElement>(null);
  const chatContainerMessagesRef = useRef<HTMLDivElement>(null);
  const rocketContainerRef       = useRef<HTMLDivElement>(null);
  
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [messages, setMessages]     = useState< Array<IMessages> >([
    {
      id:      String(Date.now()),
      role:    "assistant",
      content: "Hi, my name's Rocket. I'm work with Sebastian creating amazing projects. How can I help you?"
    }
  ]);

  useEffect(() => {
    !isSelected && setTimeout(() => {
      if(rocketContainerRef.current) {
        rocketContainerRef.current.className = ` opacity-100 duration-[0.7s] ease-in-out `;
      } 
    }, 2000);

  }, [isSelected]);


  const handleOpenChat = (): void => {
    setTimeout(() => {
      if(rocketContainerRef.current) {
        rocketContainerRef.current.className = `translate-x-80 opacity-0 duration-[0.7s] ease-in-out `;
      } 
    }, 100)

    setTimeout(() => setIsSelected(true), 500)

    setTimeout(() => {
      if(chatContainerRef.current) {
        chatContainerRef.current.className = ` opacity-100 duration-[0.7s] ease-in-out `;
      } 
    }, 800)
  };


  const handleCloseChat = (): void => {
    setTimeout(() => {
      if(chatContainerRef.current) {
        chatContainerRef.current.className = ` opacity-0 translate-x-80 duration-[0.7s] ease-in-out `;
      } 
    }, 100)

    setTimeout(() => setIsSelected(false), 1000)
  };


  return (
    <div className="fixed bottom-0 right-0 max-sm:mr-3 transform mr-10 mb-10">
     {
        !isSelected && 
        <div 
          className="opacity-0"
          ref={rocketContainerRef} 
          onClick={handleOpenChat} > 
          <Rocket />
          <ChatWindow />
        </div>
      }

      {isSelected && 
        <div ref={chatContainerRef} className="translate-x-80 opacity-0 duration-[0.3s] ease-in-out">
          <ChatHeader handleCloseChat={handleCloseChat} />

          <ChatMessages 
            messages={messages}
            chatContainerMessagesRef={chatContainerMessagesRef} />

          <ChatForm 
            messages={messages}
            setMessages={setMessages} />
        </div>
      }
    </div>
  )
};

export default ChatBot;