import { useOutletContext } from "react-router-dom"
import Video from "../components/Video"

function Videos () {

  const data = useOutletContext()
  const videos = data.videos

  return (
    <div className="grid grid-cols-2 gap-4">
      {videos.map((video) => (
        <Video key={video.title} image={video.image} title={video.title} date={video.date} author={video.author} />
      ))}
    </div>
  )
}

export default Videos