import { virtualAprendePosts } from "../constants";
import Post from "../../../components/ui/Post";

function Posts () {
  return (
    <>
      {
        virtualAprendePosts.map((post) => (
          <Post profilePicture={post.profilePicture} author={post.author} date={post.date} body={post.body} image={post.image}/>
        ))
      }
    </>    
  )
}

export default Posts