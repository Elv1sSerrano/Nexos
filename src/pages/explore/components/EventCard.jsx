import Icon from "../../../components/ui/Icon"
import { savedPath } from "../../../constants/iconPaths"

function EventCard ({image}) {
  return (
    <div>
      <div className="relative">
        <img src={image}/>
      </div>      
      <div className="absolute">
        <Icon className={"bg-white rounded-full p-2"} paths={savedPath} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default EventCard