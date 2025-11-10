import { createContext, useContext, useState } from "react";

const SavedPostsContext = createContext()

export function SavedPostsProvider({ children }) {
  const [savedPosts, setSavedPosts] = useState([])

  function savePost(post) {
    return null
  }
}