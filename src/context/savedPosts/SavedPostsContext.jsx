import { createContext, useContext } from "react"

export const SavedPostsContext = createContext()
export const SavePostsToggleContext = createContext()
export const IsSavedPostContext = createContext()

export function useSavedPostsContext() {
  return useContext(SavedPostsContext)
}

export function useIsSavedPostContext() {
  return useContext(IsSavedPostContext)
}

export function useSavedPostsToggleContext() {
  return useContext(SavePostsToggleContext)
}