import React from "react";
import { FC } from "react";
import { send } from "emailjs-com"
import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"
import { toast } from 'react-toastify';
import { EnvelopeFill } from "react-bootstrap-icons"
import { GeoAltFill  } from "react-bootstrap-icons"
import { Globe } from "react-bootstrap-icons"
import { Linkedin } from "react-bootstrap-icons"
import { Github } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

interface IFormValues {
  from_name: string;
  user_email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async(data) => {
    const templateParams = {
      from_name: data.from_name,
      user_email: data.user_email,
      subject: data.subject,
      message: data.message
    };

    const responseEmailJs = await send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID, 
      templateParams, 
      process.env.REACT_APP_PUBLIC_KEY
    )

    if(responseEmailJs.status === 200) {
      return toast.success("Message sent successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    } 
   
    toast.error("Could not send message", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    })
  };

  return (
    <section className="flex justify-evenly items-center max-lg:flex-col mb-28">
      <form
      onSubmit={handleSubmit(onSubmit)} 
      className="flex flex-col gap-10 mt-10 mb-20 max-sm:mr-4 max-sm:ml-4 text-start" >
        <span className=" text-blue-400">What’s Next?</span>
        <h1 className=" text-5xl font-bold -mt-8">Get In Touch</h1>
        
        <div className="flex gap-10 w-full max-md:flex-col">
          <div className="flex flex-col text-start">
            <label htmlFor="user-name" className="text-lg">Name</label>
            <input 
            name="user-name"
            type="text" 
            {...register('from_name', { required: true })}
            className=" text-neutral-950 bg-neutral-100 p-2 w-[320px] rounded-skill-card text-lg border-none" />
            {errors.from_name && <span className=" text-red-500 mt-1">Name is required field</span>}
          </div>

          <div className="flex flex-col text-start">
            <label htmlFor="user-email" className="text-lg">Email</label>
            <input 
            name="user-email"
            type="email" 
            placeholder="Email"
            {...register('user_email', { required: true, pattern: /^\S+@\S+$/i })}
            className=" text-neutral-950 w-[320px] bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
            {errors.user_email && <span className=" text-red-500 mt-1">Email field is required</span>}
          </div>
        </div>
        
        <div className="flex flex-col text-start">
          <label htmlFor="subject" className="text-lg">Subject</label>
          <input 
          name="subject"
          type="text" 
          placeholder="Optional"
          {...register('subject', { required: false })} 
          className=" text-neutral-950  max-w-[680px] bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
        </div>
        
        <div className="flex flex-col text-start">
          <label htmlFor="message" className="text-lg">Message</label>
          <textarea 
          {...register('message', { required: true })} 
          className=" min-h-[120px]  max-w-[680px] text-neutral-950 bg-neutral-100 p-2 rounded-skill-card text-lg border-none" />
          {errors.message && <span className=" text-red-500 mt-1">Message field is required</span>}
        </div>

        <button type="submit" className="text-neutral-200 max-w-[680px] bg-blue-500 p-3 rounded-skill-card text-xl border-none">
          Send Message
        </button>
      </form>
      
      <div className="flex flex-col gap-10">
        <div className="flex gap-3 items-center">
          <EnvelopeFill color="#3498db" size={"25px"}/>
          <span>Email - sebastian.pitra10@gmail.com</span>
        </div>
        <div className="flex gap-3 items-center">
          <GeoAltFill  color="#3498db" size={"25px"}/>
          <span>Location - Misiones, Argentina</span>
        </div>
        <Link to={"http://localhost:3000/contact"}>
          <div className="flex gap-3 items-center">
            <Globe color="#3498db" size={"25px"}/>
            <span>Website</span>
          </div>
        </Link>
        <div className="flex gap-3 items-center">
          <Github color="#3498db" size={"25px"}/>
          <Link to={"https://github.com/seba-pitra"}  >
            Github
          </Link>
        </div>
        <div className="flex gap-3 items-center">
          <Linkedin color="#3498db" size={"25px"}/>
          <Link to={"https://www.linkedin.com/in/sebasti%C3%A1n-pitra-97b5b7248/"}>
            Linkedin
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact;