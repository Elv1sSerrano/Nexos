import { useOutletContext } from "react-router-dom"
import Video from "../components/Video"
import EmptyDynamicSection from "../components/EmptyDynamicSection";

function Videos () {

  const data = useOutletContext()
  if (data.isDynamic) return <EmptyDynamicSection label="videos" />;
  const videos = data.videos

  return (
    <section className="surface-card p-4 sm:p-6">
      <div className="mb-5"><p className="text-sm font-semibold text-[#611f69]">Contenido audiovisual</p><h1 className="text-xl font-bold sm:text-2xl">Videos del semillero</h1></div>
      <div className="space-y-3">{videos.map((video) => <Video key={video.url || video.title} {...video} />)}</div>
    </section>
  )
}

export default Videos
