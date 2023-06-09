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
import { useOpacity } from "../../hooks";


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

  const [ references ] = useState([rocketContainerRef]);
  const { doOpacity }  = useOpacity();

  useEffect(() => {

    setTimeout(() => doOpacity(references), 2000)

  }, [doOpacity, references])


  const handleOpenChat = (): void => {
    setTimeout(():void => {
      if(rocketContainerRef.current) {
        rocketContainerRef.current.className = `translate-x-80 opacity-0 duration-[0.7s] ease-in-out `;
      } 
    }, 100)

    setTimeout(():void => setIsSelected(true), 500)

    setTimeout(():void => {
      if(chatContainerRef.current) {
        chatContainerRef.current.className = ` opacity-100 duration-[0.7s] ease-in-out `;
      } 
    }, 800)
  };


  const handleCloseChat = (): void => {
    setTimeout(():void => {
      if(chatContainerRef.current) {
        chatContainerRef.current.className = ` opacity-0 translate-x-80 duration-[0.7s] ease-in-out `;
      } 
    }, 100)

    setTimeout(():void => setIsSelected(false), 1000)
  };


  return (
    <div className="absolute">
      <div className="fixed bottom-0 right-0 max-sm:mr-3 transform mr-10 mb-10 z-10">

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
    </div>
  )
};

export default ChatBot;