import { Dispatch }       from "react";
import { FC }             from "react";
import { SetStateAction } from "react";
import { KeyboardEvent }  from "react";
import React              from "react";
import { Send }           from "react-bootstrap-icons";
import { SubmitHandler }  from "react-hook-form"
import { useForm }        from "react-hook-form"

interface IFormValues { content: string; }

interface IMessages {
  id:      string;
  role:    "user" | "assistant";
  content: string;
}

interface IProps {
  messages: Array<IMessages>;
  setMessages: Dispatch< SetStateAction<IMessages[]> >;
}

const ChatForm: FC<IProps> = ({ messages, setMessages }) => {
  
  const { register, handleSubmit, reset } = useForm< IFormValues >();

  const handleKeyDown = (event: KeyboardEvent< HTMLTextAreaElement > ): void => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      onSubmit({ content: event.currentTarget.value })
    }
  }
  
  const onSubmit: SubmitHandler<IFormValues> = async(args):Promise<void> => {
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


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col max-w-sm">

      <div className=" w-full flex gap-5 items-center justify-center p-4 bg-neutral-800 ">
        <textarea
          onKeyDown={ handleKeyDown }
          {...register('content', { required: true })}
          className=" text-neutral-200 focus:outline-none pl-2 pr-2 text-base bg-neutral-700 w-full resize-none overflow-y-auto h-[50px] max-h-[300px] pt-2 pb-2 rounded-skill-card" />

        <button type="submit" >
          <Send size={"25px"} color={"#3498db"} />
        </button>
      </div>

  </form>
  )
};

export default ChatForm;