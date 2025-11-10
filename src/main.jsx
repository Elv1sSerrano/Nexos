import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SavedPostsProvider } from './context/savedPosts/SavedPostsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SavedPostsProvider>
      <App />
    </SavedPostsProvider>
  </StrictMode>,
)
