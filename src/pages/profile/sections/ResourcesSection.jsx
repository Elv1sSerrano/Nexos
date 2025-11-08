import { useOutletContext } from "react-router-dom"
import Resource from "../../../components/ui/Resource"

const ResourcesSection = () => {

  const data = useOutletContext()

  return (
    <div className="grid grid-cols-2">
        {
          data.resources.map((resource) => (
            <Resource key={resource.id} {...resource} />
          ))
        }
    </div>
  )
}

export default ResourcesSection