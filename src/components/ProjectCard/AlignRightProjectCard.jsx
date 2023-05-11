
import { BoxArrowUpRight} from "react-bootstrap-icons"
import { Github }         from "react-bootstrap-icons"
import { Link }           from "react-router-dom";

const AlignRightProjectCard = ({ title, image, description, techStack, urlGithub, urlDeploy }) => {
  return (
    <div className=" max-w-3xl mt-4 -ml-[150px] max-lg:-ml-0 transition-animationLineBefore duration-300">
      <div className="flex gap-5 h-96 w-[70%] max-lg:w-full  max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        {image && <img src={image} alt="project-img" className=" w-[100vh] h-[3%] rounded-skill-card max-lg:hidden"/>}

        <div className="w-3/4 -ml-6 text-end flex flex-col items-end max-lg:bg-neutral-900 max-lg:p-10 max-md:p-5 max-lg:text-start max-lg:items-start max-md:max-h-fit">
          <h1 className=" text-base text-blue-400">Featured Project</h1>
          <h1 className=" text-2xl mt-1">{title}</h1>
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