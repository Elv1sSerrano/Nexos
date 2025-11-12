import { useOutletContext } from "react-router-dom"
import EventCard from "../../../components/ui/EventCard"
import { events } from "../../../data"

const InstitutionEvents = () => {

  const data = useOutletContext()
  const eventsId = data.nextEvents
  
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-5">Proximos eventos</h1>
      <section className="grid grid-cols-3">
        {
          eventsId.map((event) => (
            <EventCard key={eventsId} {...events[event]}/>
          ))
        }
      </section>
    </section>
  )
}

export default InstitutionEvents