import EventsSection from "./sections/EventsSection";
import PopularResourcesSection from "./sections/PopularResourcesSection";

function Explore () {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <EventsSection />
      </div>
      <div>
        <PopularResourcesSection />
      </div>
    </div>    
  )
}

export default Explore;