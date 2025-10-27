import Project from "../components/Project"
import { projects } from "../constants"

function Projects () {
  return (
    <div className="grid grid-cols-2 gap-4">      
      {
        projects.map((project) => (
          <Project key={project.projectName} projectName={project.projectName} background={project.background} date={project.date} 
          projectType={project.projectType} projectPercentage={project.projectPercentage}  projectProgressColor={project.projectProgressColor}
          participants={project.participants}
          />
        ))
      }
    </div>
  )
}

export default Projects