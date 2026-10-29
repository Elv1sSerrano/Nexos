import Carousel from "../../../components/ui/Carousel"
import HeadlessPost from "../../../components/ui/HeadlessPost"
import Resource from "../../../components/ui/Resource"
import Event from "../components/Event"
import SummaryCard from "../components/SummaryCard"
import { useOutletContext } from "react-router-dom"
import DynamicSemilleroPrincipal from "../components/DynamicSemilleroPrincipal"

function Principal () {

  const data = useOutletContext()

  if (data.isDynamic) return <DynamicSemilleroPrincipal data={data} />

  return (
    <div className="flex flex-col gap-5">
      <SummaryCard summary={data.summary?.summary} />
      <Carousel title="Destacados" items={data.posts} type={HeadlessPost} variant="post" />
      <Carousel title="Recursos" items={data.resources} type={Resource} variant="resource" />
      <Carousel title="Participación en eventos" items={data.events} type={Event} variant="event" />
    </div>
  )
}

export default Principal
