import { useParams } from "react-router-dom"
import { events } from "../../data"
import Icon from "../../components/ui/Icon"
import { calendatPath, ubicationPath } from "../../constants/iconPaths"

const Event = () => {

  const { eventId } = useParams()
  const data = events[eventId]

  return (
    <div>
      <img className="w-full h-[500px] object-cover" src={data.image} />
      <h3 className="text-xl font-bold mb-4">{data.title}</h3>
      <div className="flex flex-row gap-1">
        <Icon paths={calendatPath} />
        <p>{data.date}</p>
        <p>&middot;</p>
        <Icon paths={ubicationPath} />
        <p>{data.ubication}</p>
      </div>
      
    </div>
  )
}

export default Event