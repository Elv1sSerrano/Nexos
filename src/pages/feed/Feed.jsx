import { NavLink } from "react-router-dom";
import Icon from "../../components/ui/Icon";
import { configurationPath } from "../../constants/iconPaths";
import { newsCards } from "./constants";
import NewsCard from "./components/NewsCard";
import HeadlessPost from "../../components/ui/HeadlessPost";
import { accountData } from "../../data";

function Feed () {

  const posts = accountData.followingAccounts.map((account) => account.posts)  

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
            post.map((pos) => (
              <HeadlessPost key={pos.id} {...pos} />
            ))
          ))
        }
      </div>
    </div>
  );
}

export default Feed