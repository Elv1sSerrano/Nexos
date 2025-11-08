import { useOutletContext } from "react-router-dom"
import HeadlessPost from "../../../components/ui/HeadlessPost"

const PostSection = () => {

  const data = useOutletContext()

  return (
    <div className="flex flex-col gap-3 items-center">
      {
        data.posts.map((post) => (
          <HeadlessPost key={post.id} {...post} />
        ))
      }
    </div>
  )
}

export default PostSection