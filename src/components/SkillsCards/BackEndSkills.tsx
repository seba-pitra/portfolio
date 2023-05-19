import  React        from "react";
import { useEffect } from "react";
import { useRef }    from "react";

const BackEndSkillsCards: React.FC = () => {
  const backSkillsRef  = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const backSkillsElement :HTMLDivElement  = backSkillsRef.current;
    
    if (backSkillsElement && backSkillsElement.getBoundingClientRect().top < window.innerHeight) {
      backSkillsElement.className = "max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80  max-[500px]:mt-10 opacity-100 duration-[1.3s] ease-in-out" ;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={backSkillsRef} className="opacity-0 translate-y-2 ">
      <h1 className=" text-2xl mb-3 max-[500px]:text-center">Back End</h1>
      <div  className="flex gap-3 bg-neutral-900 p-4 rounded max-[500px]:p-4 max-[500px]:flex-col max-[500px]:items-center">
        <div>
          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/nodejs-plain.svg?size=148&color=3498db"
              alt="nodejs-icon"
              style={{height: "40px"}}
              className="-ml-1"
            />
            NodeJS
          </div>

          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/express-original.svg?size=148&color=3498db"
              alt="express-icon"
              style={{height: "40px"}}
            />
            Express
          </div>

          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/mongodb-plain.svg?size=148&color=3498db"
              alt="mongodb-icon"
              style={{height: "40px"}}
            />
            MongoDB
          </div>
        </div>

        <div className="max-[500px]:-mt-6">
          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/postgresql-plain.svg?size=148&color=3498db"
              alt="postgresql-icon"
              style={{height: "40px"}}
              className="-ml-1"
            />
            PostgreSQL
          </div>

          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <path
                fill="#2f406a"
                d="M101.84 41.72V86l-37.66 22.32-.34.31v16.57l.34.32 53-30.64V33.12l-.5-.12-15 8.36.08.36"
              ></path>
              <path
                fill="#2379bd"
                d="M26.4 86.4l37.78 21.92v17.2l-53.4-30.76V33.24l.55-.08 14.91 8.67.16.5V86.4"
              ></path>
              <path
                fill="#03afef"
                d="M26.4 42.32l-15.62-9.08L64.06 2.48l53.16 30.64-15.38 8.6-37.78-21.56L26.4 42.32"
              ></path>
              <path
                fill="#2f406a"
                d="M63.53 81.33l-.41-.42V64.27l.41-.21.1-.41 14.27-8.32.44.1v17.15l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M48.48 73.11V55.3h.41l14.51 8.45.12.33v17.25l-15.04-8.22"
              ></path>
              <path
                fill="#03afef"
                d="M63.29 46.54L48.48 55.3l15.05 8.76 14.8-8.64-15.04-8.88"
              ></path>
              <path
                fill="#2f406a"
                d="M45.11 92.19l-.41-.42V75.13l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M30.06 84V66.16h.41L45 74.59l.12.33v17.27L30.06 84"
              ></path>
              <path
                fill="#03afef"
                d="M44.86 57.4l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
              ></path>
              <path
                fill="#2f406a"
                d="M83.27 92.6l-.41-.42V75.54l.41-.21.1-.41 14.27-8.32.44.1v17.14L83.27 92.6"
              ></path>
              <path
                fill="#2379bd"
                d="M68.22 84.38V66.57h.41L83.15 75l.12.33V92.6l-15.05-8.22"
              ></path>
              <path
                fill="#03afef"
                d="M83 57.81l-14.8 8.76 15.05 8.76 14.8-8.64L83 57.81"
              ></path>
              <path
                fill="#2f406a"
                d="M64.85 103.46l-.41-.42V86.4l.41-.21.1-.41 14.27-8.32.44.1V94.7l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M49.8 95.23v-17.8h.41l14.51 8.45.12.33v17.27L49.8 95.23"
              ></path>
              <path
                fill="#03afef"
                d="M64.6 68.67l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
              ></path>
              <path
                fill="#2f406a"
                d="M63.53 57.73l-.41-.42V40.67l.41-.21.1-.41 14.27-8.33.44.1V49l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M48.48 49.5V31.7h.41l14.51 8.45.12.33v17.25L48.48 49.5"
              ></path>
              <path
                fill="#03afef"
                d="M63.29 22.94L48.48 31.7l15.05 8.76 14.8-8.64-15.04-8.88"
              ></path>
              <path
                fill="#2f406a"
                d="M45.11 68.59l-.41-.42V51.53l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M30.06 60.36V42.55h.41L45 51l.12.33v17.26l-15.06-8.23"
              ></path>
              <path
                fill="#03afef"
                d="M44.86 33.8l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
              ></path>
              <path
                fill="#2f406a"
                d="M83.27 69l-.41-.42V51.94l.41-.21.1-.41L97.64 43l.44.1v17.14L83.27 69"
              ></path>
              <path
                fill="#2379bd"
                d="M68.22 60.77V43h.41l14.51 8.45.12.33V69l-15.04-8.23"
              ></path>
              <path
                fill="#03afef"
                d="M83 34.21L68.22 43l15.05 8.76 14.8-8.64L83 34.21"
              ></path>
              <path
                fill="#2f406a"
                d="M64.85 79.85l-.41-.42V62.79l.41-.21.1-.41 14.27-8.32.44.1v17.14l-14.8 8.76"
              ></path>
              <path
                fill="#2379bd"
                d="M49.8 71.63V53.82h.41l14.51 8.45.12.33v17.25L49.8 71.63"
              ></path>
              <path
                fill="#03afef"
                d="M64.6 45.06l-14.8 8.76 15.05 8.76 14.8-8.64-15.05-8.88"
              ></path>
            </svg>
            Sequelize
          </div>

          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <path
                fill="#3498db"
                d="M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
              ></path>
            </svg>
            Firebase
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEndSkillsCards;