import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SavedPostsProvider } from './context/savedPosts/SavedPostsProvider.jsx'
import { LikedPostsProvider } from './context/likedPosts/LikedPostsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SavedPostsProvider>
      <LikedPostsProvider>
        <App />
      </LikedPostsProvider>
    </SavedPostsProvider>
  </StrictMode>,
)
