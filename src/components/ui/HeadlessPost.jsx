import { useState } from "react";
import { commentPath, likePath, savedFilledPath, savedPath, sendPath } from "../../constants/iconPaths";
import Icon from "./Icon";
import posts from "../../data/posts";

const HeadlessPost = ({ profilePicture, author, date, body, image, id }) => {
  const [showReactions, setShowReactions] = useState(false)
  const [saved, setSaved] = useState(false)
  const [savedPosts, setSavedPosts] = useState([])

  function savePost(id) {
    setSaved(prev => !prev)
    const foundPost = posts.find((post) => post.id === id)
    if (!savedPosts.some(p => p.id === foundPost.id)) {
      setSavedPosts( prev => [...prev, foundPost])
    } else {
      setSavedPosts(prev => prev.filter(p => p.id !== foundPost.id))
    }
  }

  return (
    <div
      onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)}
      className="relative flex flex-row gap-[1px]"
    >
      <div className="p-1 w-[600px] flex flex-col gap-3 border-2 rounded-lg bg-white">
        <div className="flex flex-row justify-start items-center">
          <img className="w-8 object-cover rounded-full mr-2" src={profilePicture} alt="" />
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold m-0">{author}</p>
            <p className="text-[12px] font-normal m-0">{date}</p>
          </div>
        </div>
        {
          image && (<img src={image} alt={id} className="w-full max-h-[600px] object-cover rounded-md" />) 
        }        
        <p className="font-inter">{body}</p>
      </div>
      
      {showReactions && (
        <div          
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-white shadow-lg rounded-lg p-2"
        >
          <button>
            <Icon paths={likePath} className={"rounded-full text-black w-8"} />
          </button>
          <button>
            <Icon paths={commentPath} className={"rounded-full text-black w-8"} />
          </button>
          <button>
            <Icon paths={sendPath} className={"rounded-full text-black w-8"} />
          </button>
          <button onClick={() => savePost(id)}>
            <Icon 
              paths={saved ? savedFilledPath : savedPath} 
              className={saved ? "rounded-full text-yellow-500 w-8" : "rounded-full text-black w-8"} 
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadlessPost;
