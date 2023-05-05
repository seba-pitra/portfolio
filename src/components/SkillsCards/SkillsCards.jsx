
const SkillsCards = () => {
  return (
    <div>
      <div>
        <h2 
        className="text-lg font-medium p-0 m-0 tracking-wide
        uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
        after:mt-1 after:mb-1 after:ml-1 after:mr-1">
          Skills
        </h2>
      </div>

      <div className="flex justify-evenly flex-wrap  gap-4 mb-16 mt-3 max-[565px]:flex max-[565px]:flex-col max-[824px]:items-center max-[824px]:mt-8">
        {/* FRONT-END */}
        <div className="max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80">
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

        {/* BACK-END */}
        <div className="max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80  max-[500px]:mt-10">
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

        {/* OTHERS */}
        <div className="max-[565px]:flex max-[565px]:flex-col max-[500px]:w-80  max-[500px]:mt-10">
          <h1 className="text-2xl mb-3 max-[500px]:text-center">Others</h1>
          <div className="flex flex-col bg-neutral-900 p-4 rounded max-[500px]:p-4 max-[500px]:items-center">
            <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
              <svg
                role="img"
                style={{height: "40px"}}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Postman</title>
                <path
                  d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"
                  fill="#3498db"
                ></path>
              </svg>
              Postman
            </div>

            <div className="flex items-center w-44 gap-2 text-lg bg-neutral-800 p-4 mt-2 mb-2 rounded-r-skill-card max-[565px]:w-40 max-[565px]:gap-2 max-[500px]:w-64 max-[500px]:flex max-[500px]:justify-start max-[500px]:text-2xl">
              <img
                src="https://icongr.am/devicon/git-plain.svg?size=148&color=3498db"
                alt="git-icon"
                style={{height: "40px"}}
              />
              Git
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SkillsCards;
