import { useState } from "react";
import { commentPath, likeFilledPath, likePath, savedFilledPath, savedPath, sendPath } from "../../constants/iconPaths";
import Icon from "./Icon";
import { useSavedPostsContext, useSavedPostsToggleContext } from "../../context/savedPosts/SavedPostsContext";
import { useLikedPostsContext, useLikePostsToggleContext } from "../../context/likedPosts/LikedPostsContext";

const HeadlessPost = ({ profilePicture, author, date, body, image, id }) => {
  const [showReactions, setShowReactions] = useState(false)  
  
  const savePost = useSavedPostsToggleContext()  
  const savedPosts = useSavedPostsContext()
  const likePost = useLikePostsToggleContext()
  const likedPosts = useLikedPostsContext()

  return (
    <div
      onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
      className="relative"
    >
      <article className="surface-card overflow-hidden">
        <div className="flex items-center gap-3 p-4 pb-2">
          <img className="h-10 w-10 shrink-0 rounded-lg object-cover" src={profilePicture} alt="" />
          <div className="flex flex-col">
            <p className="text-sm font-bold">{author}</p>
            <p className="text-xs text-[#616061]">{date}</p>
          </div>
        </div>
        {
          image && (<img src={image} alt="" className="mt-2 max-h-[520px] w-full object-cover" />) 
        }        
        <p className="p-4 pt-3 text-sm leading-6 text-[#2c2d2e] sm:text-base">{body}</p>
      </article>
      
      {showReactions && (
        <div          
          className="absolute right-3 top-3 z-20 flex gap-1 rounded-lg border border-[#ddd] bg-white p-1 shadow-lg sm:right-[-3.25rem] sm:top-1/2 sm:flex-col sm:-translate-y-1/2"
        >
          <button onClick={() => likePost(id)}>
            <Icon 
              paths={likedPosts.find((post) => post.id === id) ? likeFilledPath : likePath } 
              className={likedPosts.find((post) => post.id === id) ? "h-8 w-8 rounded p-1.5 text-[#1264a3]" : "h-8 w-8 rounded p-1.5 text-[#454245] hover:bg-[#f3f3f3]"} />
          </button>
          <button>
            <Icon paths={commentPath} className="h-8 w-8 rounded p-1.5 text-[#454245] hover:bg-[#f3f3f3]" />
          </button>
          <button>
            <Icon paths={sendPath} className="h-8 w-8 rounded p-1.5 text-[#454245] hover:bg-[#f3f3f3]" />
          </button>
          <button onClick={() => savePost(id)}>
            <Icon 
              paths={savedPosts.find((post) => post.id === id) ? savedFilledPath : savedPath} 
              className={savedPosts.find((post) => post.id === id) ? "h-8 w-8 rounded p-1.5 text-[#d99c00]" : "h-8 w-8 rounded p-1.5 text-[#454245] hover:bg-[#f3f3f3]"} 
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadlessPost;
