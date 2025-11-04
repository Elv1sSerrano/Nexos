import Resource from "../../../components/ui/Resource"
import { popularProjects } from "../constants"

const PopularResourcesSection = () => {
  return (
    <div>
      <h1 className="font-bold text- mb-6 text-2xl">Proyectos populares</h1>
      <div className="flex flex-row gap-2">
        {popularProjects.map((project) => (
          <Resource key={project.title} {...project}/>
        ))}
      </div>
    </div>
  )
}

export default PopularResourcesSection