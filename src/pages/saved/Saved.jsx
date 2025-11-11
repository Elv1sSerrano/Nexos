import HeadlessPost from "../../components/ui/HeadlessPost"
import { useSavedPostsContext } from "../../context/savedPosts/SavedPostsContext"

function Saved () {

  const savedPosts = useSavedPostsContext()

  return (
    <div>            
      <div className="flex flex-col items-center gap-3">
        { savedPosts.length
          ? savedPosts.map((post) => (<HeadlessPost key={post.id} {...post} />))
          : <p className="text-2xl font-semibold">Aún no has guardado ninguna publicación</p>
        }
      </div>
    </div>
  )
}

export default Saved