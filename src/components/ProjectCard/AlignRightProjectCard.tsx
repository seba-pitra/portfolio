import { BoxArrowUpRight} from "react-bootstrap-icons"
import { Github }         from "react-bootstrap-icons"
import { Link }           from "react-router-dom";
import  React             from "react";
import { useEffect }      from "react";
import { useRef }         from "react";
import { useScroll }      from "../../hooks";

interface IProps {
  title:        string;
  subtitle?:        string;
  image:        string;
  description:  string;
  techStack:    Array<string>;
  isFirstItem?: boolean;
  urlDeploy?:   string;
  urlGithub?:   string;
}

const AlignRightProjectCard: React.FC<IProps> = ({ 
  title, subtitle, image, description, techStack, urlGithub, urlDeploy 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const {doScroll} = useScroll()

  useEffect(() => {

      window.addEventListener("scroll", () => doScroll([cardRef] ))

  }, [doScroll]);

  return (
    <div className="max-w-3xl mt-4 -ml-[150px] max-lg:-ml-0 ">
      <div ref={cardRef} className="opacity-0 translate-y-4 flex gap-5 h-96 w-[70%] max-lg:w-full  max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center ">
        {image && <img src={image} alt="project-img" className=" w-[100vh] h-[3%] rounded-skill-card max-lg:hidden"/>}

        <div className="w-3/4 -ml-6 text-end flex flex-col items-end max-lg:bg-neutral-900 max-lg:p-10 max-md:p-5 max-lg:text-start max-lg:items-start max-md:max-h-fit">
          <h1 className=" text-base text-blue-400">Featured Project</h1>
          <h1 className=" text-2xl mt-1">{title}</h1>
          <h3 className=" text-1xl mt-1">{subtitle}</h3>
          <p className=" bg-blue-950 p-5 rounded-skill-card min-w-[400px] max-lg:min-w-fit -ml-[30%] mt-2 max-lg:-ml-0 max-md:max-h-fit">
            {description}
          </p>
          <div className="flex justify-end gap-3 w-full mt-3 flex-wrap max-lg:justify-start">
            {
                techStack.map((techSkill, index) => 
                  <p key={index} className="text-sm text-neutral-400">
                    {techSkill}
                  </p>
                )
              }
          </div>

          <div className="flex max-lg:w-full gap-8 mt-4 max-lg:items-end max-lg:justify-end">
            {urlGithub && 
            <Link to={urlGithub} target="_blank">
              <Github size={"28px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
            </Link>
            }
            {urlDeploy && 
            <Link to={urlDeploy} target="_blank">
              <BoxArrowUpRight size={"25px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
            </Link>
            }
          </div>
        </div>

      </div>
    </div>
  )
}


export default AlignRightProjectCard;