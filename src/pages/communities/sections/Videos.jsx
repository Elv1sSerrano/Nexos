import Video from "../components/Video"
import { virtualAprendeVideos } from "../constants"

function Videos () {
  return (
    <div className="grid grid-cols-2 gap-4">
      {virtualAprendeVideos.map((video) => (
        <Video key={video.title} image={video.image} title={video.title} date={video.date} author={video.author} />
      ))}
    </div>
  )
}

export default Videos