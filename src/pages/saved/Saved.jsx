import HeadlessPost from "../../components/ui/HeadlessPost"
import { SearchPath } from "../../constants/iconPaths"
import { useSavedPostsContext } from "../../context/savedPosts/SavedPostsContext"
import Icon from "../../components/ui/Icon"

function Saved () {

  const savedPosts = useSavedPostsContext()

  return (
    <div>      
      <div className="flex flex-col items-center gap-3">
        {
          savedPosts.map((post) => (
            <HeadlessPost key={post.id} {...post} />
          ))
        }
      </div>
    </div>
  )
}

export default Saved