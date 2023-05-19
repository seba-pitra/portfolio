import  React        from "react";
import { useEffect } from "react";
import { useRef }    from "react";

const SkillsCards: React.FC = () => {
  const frontSkillsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const frontSkillsElement:HTMLDivElement = frontSkillsRef.current;

    if (frontSkillsElement && frontSkillsElement.getBoundingClientRect().top < window.innerHeight) {
      frontSkillsElement.className = "max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80 opacity-100 duration-[0.7s] ease-in-out" ;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={frontSkillsRef} className=" translate-y-2  opacity-0 max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80">
      <h1 className=" text-2xl mb-3 max-[500px]:text-center">Front End</h1>
      <div className="flex gap-3 bg-neutral-900 p-4 rounded max-[500px]:p-4 max-[500px]:flex-col max-[500px]:items-center">
        <div>
          <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/typescript-plain.svg?size=148&color=3498db"
              alt="typescript-icon"
              style={{height: "40px"}}
              className="-ml-1"
            />
            Typescript
          </div>

          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/javascript-plain.svg?size=128&color=3498db"
              alt="js-icon"
              style={{height: "40px"}}
              className="-ml-1"
            />
            Javascript
          </div>

          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <img
              src="https://icongr.am/devicon/react-original.svg?size=128&color=3498db"
              alt="react-icon"
              style={{height: "40px"}}
              className="-ml-1"
            />
            React
          </div>

          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <path fill="none" d="M0 0h128v128H0z"></path>
              <path
                d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 01-.3-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z"
                fill="#3498db"
              ></path>
            </svg>
            Redux
          </div>
        </div>
      
        <div className="max-[500px]:-mt-6 ">
          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <path
                fill="#3498db"
                d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
              ></path>
              <path
                fill="#3498db"
                d="M64 116.8l36.378-10.086 8.559-95.878H64z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
              ></path>
              <path
                fill="#fff"
                d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
              ></path>
            </svg>
            HTML
          </div>

          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <path
                fill="#3498db"
                d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"
              ></path>
              <path
                fill="#3498db"
                d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"
              ></path>
              <path
                fill="#fff"
                d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
              ></path>
              <path
                fill="#fff"
                d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"
              ></path>
              <path
                fill="#EBEBEB"
                d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
              ></path>
            </svg>
            CSS
          </div>
          
          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"  style={{height: "40px"}} className="-ml-2" alt="tailwind-icon" />
            TailwindCSS
          </div>

          <div className="flex items-center w-44 gap-2 text-lg max-[565px]:text-base bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
            <svg viewBox="0 0 128 128" style={{height: "40px"}} className="-ml-1">
              <defs>
                <linearGradient
                  id="bootstrap-original-a"
                  x1="76.079"
                  x2="523.48"
                  y1="10.798"
                  y2="365.95"
                  gradientTransform="translate(1.11 14.613) scale(.24566)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3498db" offset="0"></stop>
                  <stop stopColor="#3498db" offset="1"></stop>
                </linearGradient>
                <linearGradient
                  id="bootstrap-original-b"
                  x1="193.51"
                  x2="293.51"
                  y1="109.74"
                  y2="278.87"
                  gradientTransform="translate(0 52)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" offset="0"></stop>
                  <stop stopColor="#f1e5fc" offset="1"></stop>
                </linearGradient>
                <filter
                  id="bootstrap-original-c"
                  x="161.9"
                  y="135.46"
                  width="197"
                  height="249"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  ></feColorMatrix>
                  <feOffset dy="4"></feOffset>
                  <feGaussianBlur stdDeviation="8"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  ></feBlend>
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
              <path
                d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099-.228 6.546.068 15.026 2.202 21.94 2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883-2.134 6.914-2.43 15.394-2.202 21.94.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098.228-6.546-.068-15.026-2.203-21.94-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883 2.135-6.914 2.43-15.394 2.203-21.94z"
                fill="url(#bootstrap-original-a)"
              ></path>
              <path
                transform="translate(1.494 2.203) scale(.24566)"
                d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355 0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219 0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279 0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49 0 23.459-16.484 35.941-47.605 35.941z"
                fill="url(#bootstrap-original-b)"
                filter="url(#bootstrap-original-c)"
                stroke="#fff"
              ></path>
            </svg>
            Bootstrap
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default SkillsCards;
