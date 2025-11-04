import Carousel from "../../../components/ui/Carousel"
import Post from "../../../components/ui/Post"
import Resource from "../../../components/ui/Resource"
import Event from "../components/Event"
import SummaryCard from "../components/SummaryCard"
import { useOutletContext } from "react-router-dom"

function Principal () {

  const data = useOutletContext()

  return (
    <div className="flex flex-col gap-3">
      <SummaryCard summary={data.summary.summary} />
      <Carousel title={"Destacados"} items={data.posts} Type={Post}/>
      <Carousel title={"Recursos"} items={data.resources} Type={Resource}/>
      <Carousel title={"Participación en eventos"} items={data.events} Type={Event}/>
    </div>
  )
}

export default Principal