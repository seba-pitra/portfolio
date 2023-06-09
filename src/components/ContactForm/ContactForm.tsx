import  React, { useEffect, useState }            from "react";
import { useRef }        from "react";
import { FC }            from "react";
import { send }          from "emailjs-com"
import { useForm }       from "react-hook-form"
import { useOpacity }    from "../../hooks";
import { SubmitHandler } from "react-hook-form"
import { toast }         from 'react-toastify';

interface IFormValues {
  from_name:  string;
  user_email: string;
  subject:    string;
  message:    string;
}

const ContactForm: FC = () => {
  const nameInputRef    = useRef<HTMLDivElement>(null);
  const emailInputRef   = useRef<HTMLDivElement>(null);
  const subjectInputRef = useRef<HTMLDivElement>(null);
  const messageInputRef = useRef<HTMLDivElement>(null);
  const submitButtonRef = useRef<HTMLDivElement>(null);

  const { 
    register, 
    handleSubmit, 
    reset, 
    formState:{errors} 
  } = useForm<IFormValues>();

  const [ references ] = useState(
    [nameInputRef, emailInputRef, subjectInputRef, messageInputRef, submitButtonRef]
  )

  const { doOpacity } = useOpacity();

  useEffect(() => {

    setTimeout(() => doOpacity(references), 1000)

  }, [doOpacity, references])

  const onSubmit: SubmitHandler<IFormValues> = async(data) => {
    const templateParams = {
      from_name:  data.from_name,
      user_email: data.user_email,
      subject:    data.subject,
      message:    data.message
    };

    const responseEmailJs = await send(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string, 
      templateParams, 
      process.env.REACT_APP_PUBLIC_KEY as string
    )

    if(responseEmailJs.status === 200) {
      reset();
      
      return toast.success("Message sent successfully", {
        position:        "bottom-left",
        autoClose:       5000,
        hideProgressBar: false,
        closeOnClick:    true,
        pauseOnHover:    true,
        draggable:       true,
        progress:        undefined,
        theme:           "light",
      })
    } 
   
    toast.error("Could not send message", {
      position:       "bottom-left",
      autoClose:       5000,
      hideProgressBar: false,
      closeOnClick:    true,
      pauseOnHover:    true,
      draggable:       true,
      progress:        undefined,
      theme:           "light",
    })
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col gap-10 mt-24 mb-20 max-sm:mr-4 max-sm:ml-4 text-start" >
        
      <span className=" text-blue-400">What’s Next?</span>
      <h1 className=" text-5xl font-bold -mt-8">Get In Touch</h1>
      
      <div className="flex gap-10 w-full max-md:flex-col">
        <div ref={nameInputRef} className="opacity-0 translate-y-4">
          <div className="flex flex-col text-start">
            <label htmlFor="from_name" className="text-lg">Name</label>
            <input 
            type="text" 
            id="from_name"
            {...register('from_name', { required: true })}
            className=" text-neutral-950 bg-neutral-100 p-2 w-[320px] rounded-skill-card text-lg border-none" />
            {errors.from_name && <span className=" text-red-500 mt-1">Name is required field</span>}
          </div>
        </div>

        <div ref={emailInputRef} className="opacity-0 translate-y-4">
          <div className="flex flex-col text-start">
            <label htmlFor="user-email" className="text-lg">Email</label>
            <input 
            type="email" 
            {...register('user_email', { required: true, pattern: /^\S+@\S+$/i })}
            className=" text-neutral-950 w-[320px] bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
            {errors.user_email && <span className=" text-red-500 mt-1">Email field is required</span>}
          </div>
        </div>
      </div>
      
      <div ref={subjectInputRef} className="opacity-0 translate-y-4">
        <div className="flex flex-col text-start">
          <label htmlFor="subject" className="text-lg">Subject</label>
          <input 
          type="text" 
          placeholder="Optional"
          {...register('subject', { required: false })} 
          className=" text-neutral-950  max-w-[680px] bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
        </div>
      </div>
      
      <div ref={messageInputRef} className="opacity-0 translate-y-4">
        <div className="flex flex-col text-start">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea 
          {...register('message', { required: true })} 
          className=" min-h-[120px]  max-w-[680px] text-neutral-950 bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
          {errors.message && <span className=" text-red-500 mt-1">Message field is required</span>}
        </div>
      </div>

      <div ref={submitButtonRef} className="opacity-0 translate-y-4 w-full">
        <button  type="submit" className="text-neutral-200 w-full max-w-[680px] bg-blue-500 p-3 rounded-skill-card text-xl border-none">
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm;