import { NavLink } from "react-router-dom";
import Icon from "../../components/Icon";
import { configurationPath } from "../../constants/iconPaths";
import { newsCards, posts } from "./constants";
import NewsCard from "./components/NewsCard";
import Post from "../../components/Post";

function Feed () {
  return (
    <div>
      <div className="flex flex-row justify-between w-full">
        <h1 className="font-montserrat font-bold text-2xl">Novedades</h1>
        <NavLink>
          <Icon paths={configurationPath}/>
        </NavLink>        
      </div>
      <div className="flex flex-row gap-7 my-6">
        {
          newsCards.map((card, index) => (
            <NewsCard key={index} route={card.route} label={card.label}/>
          ))
        }
      </div>
      <div className="flex flex-col items-center gap-4">
        {
          posts.map((post) => (
            <Post profilePicture={post.profilePicture} author={post.author} date={post.date} body={post.body} image={post.image}/>
          ))
        }
      </div>
    </div>
  );
}

export default Feed