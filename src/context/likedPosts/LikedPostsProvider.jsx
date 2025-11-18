import { useState } from "react";
import posts from "../../data/posts";
import { IsLikedPostContext, LikedPostsContext, LikePostsToggleContext } from "./LikedPostsContext";

export function LikedPostsProvider({ children }) {

  const [likedPosts, setLikedPosts] = useState([])
  const [isLiked, setIsLiked] = useState(false)

  const likePost = (id) => {
    const foundPost = posts.find((post) => post.id === id)

    if(!foundPost) return

    setIsLiked(pre => !pre)
    if (!likedPosts.some(p => p.id === foundPost.id)) {
      setLikedPosts( prev => [...prev, foundPost])
    } else {
      setLikedPosts(prev => prev.filter(p => p.id !== foundPost.id))
    }
  }
  return (
    <div>
      <LikedPostsContext.Provider value={likedPosts}>
        <LikePostsToggleContext.Provider value={likePost}>
          <IsLikedPostContext.Provider value={isLiked}>
            {children}
          </IsLikedPostContext.Provider>
        </LikePostsToggleContext.Provider>
      </LikedPostsContext.Provider>
    </div>
  )
}