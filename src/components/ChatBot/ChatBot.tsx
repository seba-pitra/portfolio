import { FC }              from "react";
import { KeyboardEvent }   from "react";
import React               from "react";
import Rocket              from "./Rocket";
import rocketProfileImg    from "../../assets/img/rocket-profile.jpg"
import { Send }            from "react-bootstrap-icons";
import { SubmitHandler }   from "react-hook-form"
import TypewriterAnimation from "../TypewriterAnimation/TypewriterAnimation";
import { useState }        from "react";
import { useEffect }       from "react";
import { useRef }          from "react";
import { useForm }         from "react-hook-form"


interface IFormValues { content: string; }

interface IMessages {
  id:      string;
  role:    "user" | "assistant";
  content: string;
}

const ChatBot: FC = () => {
  const { register, handleSubmit, reset } = useForm< IFormValues >();

  const chatContainerMessagesRef = useRef<HTMLDivElement>(null);
  const chatContainerRef         = useRef<HTMLDivElement>(null);
  const rocketContainerRef       = useRef<HTMLDivElement>(null);
  
  const [isSelected, setIsSelected] = useState< boolean >(false);
  const [messages, setMessages] = useState< Array<IMessages> >([
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
        messages: [{ role: "user", content: process.env.REACT_APP_OPENAI_DEFAULT_MESSAGE + args.content }]
      }),
    })
    .then(res => res.json())
    .then(data => {
      setMessages((prevMessages) => [...prevMessages, { id: String(Date.now()), ...data.choices[0].message }]);
    })
  };

  const handleKeyDown = (event: KeyboardEvent< HTMLTextAreaElement > ): void => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      onSubmit({ content: event.currentTarget.value })
    }
  }

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

  const scrollToBottom = () => {
    const chatContainer = chatContainerMessagesRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="fixed bottom-0 right-0 transform mr-10 mb-10">
     {
        !isSelected && 
        <div 
          className="opacity-0"
          ref={rocketContainerRef} 
          onClick={handleOpenChat} > 
          <Rocket />
        </div>
      }

      {isSelected && 
        <div ref={chatContainerRef} className="translate-x-80 opacity-0 duration-[0.3s] ease-in-out">
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
          
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col max-w-sm">

                <div className=" w-full flex gap-5 items-center justify-center p-4 bg-neutral-800 ">
                  <textarea
                    onKeyDown={handleKeyDown}
                    {...register('content', { required: true })}
                    className=" text-neutral-200 focus:outline-none pl-2 pr-2 text-base bg-neutral-700 w-full resize-none overflow-y-auto h-[50px] max-h-[300px] pt-2 pb-2 rounded-skill-card" />

                  <button type="submit">
                    <Send size={"25px"} color="#3498db" />
                  </button>
                </div>

            </form>
          </div>
        }
    </div>
  )
};

export default ChatBot;