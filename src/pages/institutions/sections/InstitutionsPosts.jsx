import { useOutletContext } from "react-router-dom"
import HeadlessPost from "../../../components/ui/HeadlessPost"

const InstitutionPosts = () => {

  const data = useOutletContext()
  const posts = data.posts

  return (
    <section className="flex flex-col items-center gap-3">
      {
        posts.map((post) => (
          <HeadlessPost key={post.id} {...post} />
        ))
      }
    </section>
  )
}

export default InstitutionPosts