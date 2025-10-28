import Project from "../components/Project"
import { projects } from "../constants"

function Projects () {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-10">      
      {
        projects.map((project) => (
          <Project key={project.projectName} projectName={project.projectName} background={project.background} date={project.date} 
          projectDescription={project.projectDescription} projectPercentage={project.projectPercentage}  projectProgressColor={project.projectProgressColor}
          participants={project.participants}
          />
        ))
      }
    </div>
  )
}

export default Projects