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

  if (!data) return <p className="text-4xl font-bold font-inter">No se encontró la página que estás buscando</p>

  const tag = data.tag
  const participants = data.participants
  const stories = data.stories
  

  return (
    <div className="font-inter flex flex-col gap-4">
      <img className="w-full h-[500px] object-cover object-top rounded-lg" src={data.image} />      
      <h3 className="text-4xl font-bold">{data.title}</h3>
      <div className="flex flex-row gap-1 items-center">
        <Icon paths={calendarPath} />
        <p>{data.date}</p>
        <p>&middot;</p>
        <Icon paths={ubicationPath} />
        <p>{data.ubication}</p>
      </div>
      <Tag bg={tag.bg} icon={tag.icon} category={tag.category} />
      <h3 className="text-2xl font-semibold">Acerca del evento</h3>
      <p className="opacity-70">{data.description}</p>
      <h4 className="font-semibold text-xl">Participantes</h4>
      <hr className="border-t-2 border-gray-600 w-full" />
      <div className="flex flex-row gap-3">
        {participants.map((participant) => (
          <AccountsList key={participant.name} {...participant}/>
        ))}
      </div>
      <hr className="border-t-2 border-gray-600 w-full" />
      <h4 className="font-semibold text-xl">Publicaciones</h4>
      {
        stories.map((storie) => (
          <StorieContainer key={storie.id} {...storie} />
        ))
      }
    </div>
  )
}

export default Event