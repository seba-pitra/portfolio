import { AlignLeftProjectCard } from "../../components/ProjectCard";
import { AlignRightProjectCard} from "../../components/ProjectCard";
import { projects }             from "../../database";

const Projects = () => {

  return (
   <section className=" w-4/5 max-[500px]:w-full mt-10 mb-0 ml-auto mr-auto pt-7 pb-7 text-stone-300 text-start">
      <h2 
        className=" text-lg font-medium p-0 m-0 tracking-wide
        uppercase text-gray-400 after:w-32 after:h-line-title after:inline-block after:bg-blue-400 
        after:mt-1 after:mb-1 after:ml-1 after:mr-1  " >
          Projects
        </h2>
        <div className="w-full mt-16 flex flex-col items-center gap-24">
          {
            projects.map((project, index) => 
              index % 2 === 0 ? 
              <AlignLeftProjectCard 
              key={index}
              title={project.title} 
              image={project.image}
              description={project.description} 
              techStack={project.techStack} 
              urlGithub={project.urlGithub} 
              urlDeploy={project.urlDeploy} />
              :
              <AlignRightProjectCard 
              key={index}
              title={project.title} 
              image={project.image}
              description={project.description} 
              techStack={project.techStack} 
              urlGithub={project.urlGithub} 
              urlDeploy={project.urlDeploy} />
            )
          }
        </div>
   </section>
  )
}

export default Projects;