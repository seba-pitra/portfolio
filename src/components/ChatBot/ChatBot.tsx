import React, { useState, FC, useEffect, useRef, KeyboardEvent } from "react";
import { useForm }       from "react-hook-form"
import { SubmitHandler,  } from "react-hook-form"
import { Send } from "react-bootstrap-icons";
import Rocket from "./Rocket";
import rocketImg from "../../assets/img/rocket.jpg"
import rocketProfileImg from "../../assets/img/rocket-profile.jpg"

interface IFormValues {
  content: string;
}

type Role = "user" | "assistant";

interface IMessages {
  id:      string;
  role:    Role;
  content: string;
}

const ChatBot: FC = () => {
  const { register, handleSubmit, reset } = useForm< IFormValues >();

  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  
  const [isSelected, setIsSelected] = useState< boolean >(false);
  const [messages, setMessages] = useState< Array<IMessages> >([
    {
      id:      String(Date.now()),
      role:    "assistant",
      content: "Hi, my name's Rocket. I'm work with Sebastian to create amazing projects."
    },
    {
      id:      String(Date.now()),
      role:    "assistant",
      content: "How can I help you?"
    },
  ]);

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const onSubmit: SubmitHandler<IFormValues> = async(args) => {
    reset()

    setMessages([ ...messages, { id: String(Date.now()), role: "user", content: args.content } ])

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: args.content }]
      }),
    })
    .then(res => res.json())
    .then(data => {
      setMessages((prevMessages) => [...prevMessages, { id: String(Date.now()), ...data.choices[0].message }]);
    })
  };

  const handleKeyDown = (event: KeyboardEvent< HTMLTextAreaElement > ) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      onSubmit({ content: event.currentTarget.value })
    }
  }

  return (
    <div className="fixed bottom-0 right-0 transform mr-10 mb-10">
     {!isSelected && <div onClick={() => setIsSelected(true)} >
        <Rocket />
      </div>}

      {isSelected && 
        <>
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
                  onClick={() => setIsSelected(false)} 
                  className="w-full cursor-pointer text-neutral-400 flex justify-end text-[14px]">
                  Close chat
                </span>
            </div>
          </header>

          <div ref={chatContainerRef} className="bg-neutral-800 mt-16 text-[15px] max-w-sm max-h-96 overflow-auto p-3">
            {messages.length && messages.map((message: IMessages, index: number) => (
              message.role === "user" ?
                <div key={Math.random() * index} className="flex justify-end text-end w-full p-2 mb-1">
                  <p className="bg-blue-400 max-w-fit p-2 rounded-[3px]">
                    {message.content}
                  </p>
                </div>
                :
                <div key={Math.random() * index} className="flex justify-start text-start w-full p-2 mb-1">
                   <img 
                      src={rocketImg} 
                      alt="rocket-img-chat"
                      className="max-h-10" />
                  <p className="bg-neutral-500 max-w-fit p-2 rounded-[3px]">
                    {message.content}
                  </p>
                </div>
            ))}
          </div>
          
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col max-w-sm">

              <div className=" w-full flex gap-5 items-center justify-center p-4 bg-neutral-800 ">
                <textarea
                  onKeyDown={handleKeyDown}
                  {...register('content', { required: true })}
                  className=" text-neutral-200 focus:outline-none pl-2 pr-2 text-base bg-neutral-700 w-full resize-none overflow-y-auto min-h-[50px] max-h-[300px] pt-2 pb-2 rounded-skill-card" />

                <button type="submit">
                  <Send size={"25px"} color="#3498db" />
                </button>
              </div>

            </form>
          </>
        }
    </div>
  )
};

export default ChatBot;