import Carousel from "../components/Carousel"
import { virtualAprendeEvents, virtualAprendePosts, virtualAprendeResources, virtualAprendeSummary } from "../constants"
import Post from "../../../components/ui/Post"
import Resource from "../components/Resource"
import Event from "../components/Event"
import SummaryCard from "../components/SummaryCard"

function Principal () {
  return (
    <div className="flex flex-col gap-3">
      <SummaryCard summary={virtualAprendeSummary.summary} />
      <Carousel title={"Destacados"} items={virtualAprendePosts} Type={Post}/>
      <Carousel title={"Recursos"} items={virtualAprendeResources} Type={Resource}/>
      <Carousel title={"Participación en eventos"} items={virtualAprendeEvents} Type={Event}/>
    </div>
  )
}

export default Principal