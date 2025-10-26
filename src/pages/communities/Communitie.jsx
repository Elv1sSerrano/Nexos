import { NavLink } from "react-router-dom";
import { bannerVirtualAprende, logoVirtualAprende } from "../../assets/images";
import Tab from "../../components/Tab";
import Post from "../../components/Post";
import { tabs, virtualAprendeNexos, virtualAprendePosts } from "./constants";

function Communitie () {
  return (
    <section>
      <div className="h-56 w-full relative z-10">   
        <img src={bannerVirtualAprende}/>     
        <div className="w-48 h-48 absolute bottom-[-150px] left-14 z-20">
          <img className="rounded-full" src={logoVirtualAprende} />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="ml-72 mt-6 max-w-[650px]">
          <div className="flex flex-row gap-8 items-center">
            <h1 className="font-bold text-4xl">Virtual Aprende</h1>
            <div className="flex flex-row gap-3 items-center">
              <button className="text-white bg-purple-500 px-4 py-2 rounded-md">Seguir</button>
              <button className="border-2 px-4 py-2 rounded-md border-gray-700 text-gray-700">Mensaje</button>
            </div>          
          </div>
          <p className="mt-2">El Grupo de investigación interinstitucional en ambientes virtuales de aprendizaje "Virtus" es una organización avalada por ... ver más</p>
          <hr class="border-t-2 border-gray-300 w-full my-4" />
          <ul className="flex flex-row justify-between my-6">
            {
              tabs.map((tab) => (
                <Tab name={tab.name} />
              ))
            }
          </ul>        
        </div>
        <div className="flex flex-col gap-4">
          <div className="mt-10">
            <h3 className="font-semibold text-xl mb-3">Nexos</h3>
            <div className="flex flex-col gap-2">
              {virtualAprendeNexos.map((nexo) => (
                <NavLink to={`/app/${nexo.label.toLowerCase()}`} className="flex items-center space-x-3">
                  <img src={nexo.image} className="w-8 object-cover rounded-full"/>
                  <p className="flex-grow min-w-0 truncate">{nexo.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-3">Miembros</h3>
            <div className="flex flex-col gap-2">
              {virtualAprendeNexos.map((nexo) => (
                <NavLink to={`/app/${nexo.label.toLowerCase()}`} className="flex items-center space-x-3">
                  <img src={nexo.image} className="w-8 object-cover rounded-full"/>
                  <p className="flex-grow min-w-0 truncate">{nexo.label}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        {
          virtualAprendePosts.map((post) => (
            <Post profilePicture={post.profilePicture} author={post.author} date={post.date} body={post.body} image={post.image}/>
          ))
        }
      </div>
    </section>
  );
}

export default Communitie