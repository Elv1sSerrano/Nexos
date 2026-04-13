import { NavLink } from "react-router-dom";
import Icon from "../../components/ui/Icon";
import { configurationPath } from "../../constants/iconPaths";
import { newsCards } from "./constants";
import NewsCard from "./components/NewsCard";
import HeadlessPost from "../../components/ui/HeadlessPost";
import { accountData } from "../../data";
import fotoElvis from "../../assets/images/users/fotoElvis.jpeg"

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
      {/* División para poner las publicaciones y el perfil del usuario en la derecha */}
      <div className="flex flex-row gap-8 justify-center">
        {/* Parte de los posts */}
        <div className="flex flex-col gap-3">
          {
            posts
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              post.map((pos) => (
                <HeadlessPost key={pos.id} {...pos} />
              ))
            ))
          }
        </div>
        {/* Parte del perfil del usuario */}
        <div className="p-1 w-[400px] h-full flex flex-col gap-3 border-2 rounded-lg bg-white">
          {/* Información general del usuario */}
          <div className="flex flex-col items-center">
            <img className="rounded-full w-[100px] h-[100px] object-cover mb-3 mt-3" src={fotoElvis} />
            <h3 className="font-bold">Elvis Serrano</h3>
            <p className="font-light text-gray-800">Miembro de virtual aprende</p>
          </div>
          <hr className="border-t-2 border-gray-300 w-full my-2" />
          {/* Participacion en proyectos */}
          <div className="flex flex-col items-center gap-1">
            <h3 className="font-bold">Participaciones en proyectos</h3>
            <p className="font-medium text-[30px]">6</p>
          </div>
          {/* Parte de redes sociales */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-row">              
              <img src="" />
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed