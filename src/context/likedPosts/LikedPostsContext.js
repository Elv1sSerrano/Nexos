import { createContext, useContext } from "react";

export const LikedPostsContext = createContext()
export const LikePostsToggleContext = createContext()
export const IsLikedPostContext = createContext()

export function useLikedPostsContext() {
  return useContext(LikedPostsContext)
}

export function useLikePostsToggleContext() {
  return useContext(LikePostsToggleContext)
}

export function useIsLikedPostContext() {
  return useContext(IsLikedPostContext)
}