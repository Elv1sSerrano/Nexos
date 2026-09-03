import HeadlessPost from "../../../components/ui/HeadlessPost";
import Post from "../../../components/ui/Post";
import { useOutletContext } from "react-router-dom";
import EmptyDynamicSection from "../components/EmptyDynamicSection";

function Posts () {

  const data = useOutletContext()
  if (data.isDynamic) return <EmptyDynamicSection label="publicaciones" />;
  const posts = data.posts

  return (
    <div className="flex flex-col items-center gap-5">
      {
        posts.map((post) => (
          <HeadlessPost key={post.id} {...post} />          
        ))
      }
    </div>    
  )
}

export default Posts
