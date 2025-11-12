import EventCard from "../../../components/ui/EventCard";
import { nextEvents } from "../constants";

function EventsSection () {
  return (
    <div>
      <h1 className="font-bold text- mb-2 text-2xl">Próximos eventos</h1>
      <div className="flex flex-row gap-2">
        {nextEvents.map((event) => (
          <EventCard key={event.title} {...event}/>
        ))}
      </div>
    </div>
  )
}

export default EventsSection;