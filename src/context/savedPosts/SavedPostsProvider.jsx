import { useState } from "react";
import posts from "../../data/posts";

import { SavedPostsContext, SavePostsToggleContext, IsSavedPostContext } from "./SavedPostsContext"


export function SavedPostsProvider({ children }) {

  const [savedPosts, setSavedPosts] = useState([])
  const [isSaved, setIsSaved] = useState(false)

  const savePost = (id) => {
    const foundPost = posts.find((post) => post.id === id)
    if(!foundPost) return

    setIsSaved(pre => !pre)
    if (!savedPosts.some(p => p.id === foundPost.id)) {
      setSavedPosts( prev => [...prev, foundPost])
    } else {
      setSavedPosts(prev => prev.filter(p => p.id !== foundPost.id))
    }
  }

  return (
    <SavedPostsContext.Provider value={savedPosts}>
      <SavePostsToggleContext.Provider value={savePost}>
        <IsSavedPostContext.Provider value={isSaved}>
          {children}
        </IsSavedPostContext.Provider>
      </SavePostsToggleContext.Provider>
    </SavedPostsContext.Provider>
  )
  
}