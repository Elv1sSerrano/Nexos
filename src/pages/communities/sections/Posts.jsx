import Post from "../../../components/ui/Post";
import { useOutletContext } from "react-router-dom";

function Posts () {

  const data = useOutletContext()
  const posts = data.posts

  return (
    <div className="flex flex-col items-center">
      {
        posts.map((post) => (
          <Post profilePicture={post.profilePicture} author={post.author} date={post.date} body={post.body} image={post.image}/>
        ))
      }
    </div>    
  )
}

export default Posts