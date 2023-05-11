
import { Github, BoxArrowUpRight} from "react-bootstrap-icons"
import { Link } from "react-router-dom";

const AlignLeftProjectCard = ({ title, image, description, techStack, urlGithub, urlDeploy }) => {
  return (
    <div className=" max-w-3xl -ml-[150px] max-lg:-ml-0 transition-animationLineBefore duration-300">
      <div className="flex relative gap-5 h-96 w-[70%] max-lg:w-full  max-lg:relative max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
        
        <div className="w-64 max-lg:w-3/4 relative text-start flex flex-col items-start max-lg:bg-neutral-900 max-lg:p-10 max-md:p-5 max-lg:text-start max-lg:items-start max-md:max-h-fit">
          <div className="absolute max-lg:static">
            <h1 className=" text-base text-blue-400 w-fit">Featured Project</h1>
            <h1 className=" text-2xl mt-1 top-[50px] left-0 right-0 bottom-0 max-h-fit w-fit">{title}</h1>
            <p className="  bg-blue-950 top-[200px] left-0 right-0 bottom-0 max-h-fit p-5 max-lg:-mr-0 -mr-[25%] rounded-skill-card min-w-[400px] max-lg:min-w-fit mt-2 max-lg:-ml-0 max-md:max-h-fit">
              {description}
            </p>
            <div className="flex justify-start gap-3 w-full mt-3 flex-wrap max-lg:justify-start">
              {
                techStack.map((techSkill, index) => 
                  <p key={index} className="text-sm text-neutral-400">
                    {techSkill}
                  </p>
                )
              }
            </div>
  
            <div className="flex w-full gap-8 mt-4 items-end justify-start">
              {urlGithub && 
              <Link to={urlGithub} target="_blank">
                <Github size={"28px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
              </Link>}
              {urlDeploy && 
              <Link to={urlDeploy} target="_blank">
                <BoxArrowUpRight size={"25px"} className=" hover:text-blue-400 cursor-pointer transition-animationLineBefore" />
              </Link>
              }
            </div>
          </div>
          </div>
  
        {image && <img src={image} alt="project-img" className=" ml-[75%]  w-[100vh] h-[3%] rounded-skill-card max-lg:hidden"/>}
  
      </div>
    </div>
  )
}

export default AlignLeftProjectCard;