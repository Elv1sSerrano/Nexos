import { useParams } from "react-router-dom"
import { events } from "../../data"
import Icon from "../../components/ui/Icon"
import { calendarPath, ubicationPath } from "../../constants/iconPaths"
import Tag from "../../components/ui/Tag"
import AccountsList from "./components/AccountsList"
import StorieContainer from "../../components/ui/StorieContainer"

const Event = () => {

  const { eventoId } = useParams()
  const data = events[eventoId]
  console.log(eventoId)
  console.log(data)

  if (!data) return <p className="text-4xl font-bold font-inter">No se encontró la página que estás buscando</p>

  const tag = data.tag
  const participants = data.participants
  const stories = data.stories
  

  return (
    <div>
      <h3 className="text-4xl font-bold mb-4">{data.title}</h3>
      <img className="w-[600px] mb-6" src={data.image} />      
      <div className="flex flex-row gap-1 items-center">
        <Icon paths={calendarPath} />
        <p>{data.date}</p>
        <p>&middot;</p>
        <Icon paths={ubicationPath} />
        <p>{data.ubication}</p>
      </div>
      <Tag bg={tag.bg} icon={tag.icon} category={tag.category} />
      <h3 className="text-lg font-semibold">Acerca del evento</h3>
      <p className="opacity-70 mb-3">{data.description}</p>
      <h4 className="font-medium mb-3">Participantes</h4>
      <div className="flex flex-row gap-3">
        {participants.map((participant) => (
          <AccountsList key={participant.name} {...participant}/>
        ))}
      </div>
      <hr className="border-t-2 border-gray-600 w-full my-4" />
      <h4 className="font-medium mb-3">Publicaciones</h4>
      {
        stories.map((storie) => (
          <StorieContainer key={storie.id} {...storie} />
        ))
      }
    </div>
  )
}

export default Event