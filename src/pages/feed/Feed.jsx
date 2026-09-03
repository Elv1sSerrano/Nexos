import Icon from "../../components/ui/Icon";
import { configurationPath } from "../../constants/iconPaths";
import { newsCards } from "./constants";
import NewsCard from "./components/NewsCard";
import HeadlessPost from "../../components/ui/HeadlessPost";
import { accountData } from "../../data";
// import fotoElvis from "../../assets/images/users/fotoElvis.jpeg"
import SemillerosCarousel from "../../components/researchgroups/SemillerosCarousel";

function Feed () {

  const posts = accountData.followingAccounts.map((account) => account.posts)  

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-sm font-medium text-[#616061]">Tu espacio de trabajo</p>
          <h1 className="font-montserrat text-2xl font-bold tracking-tight sm:text-3xl">Novedades</h1>
        </div>
        <button className="grid h-10 w-10 place-items-center rounded-lg border border-[#ddd] bg-white text-[#616061] shadow-sm hover:bg-[#f8f8f8]" aria-label="Configurar novedades">
          <Icon paths={configurationPath} className="h-5 w-5"/>
        </button>
      </div>
      <div className="-mx-1 mb-7 flex snap-x gap-3 overflow-x-auto px-1 pb-2 sm:gap-4">
        {
          newsCards.map((card, index) => (
            <NewsCard key={index} route={card.route} label={card.label}/>
          ))
        }
      </div>
      <SemillerosCarousel />
      {/* División para poner las publicaciones y el perfil del usuario en la derecha */}
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,680px)_280px] xl:justify-center">
        <div className="flex min-w-0 flex-col gap-4">
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
        {/* <aside className="surface-card sticky top-20 hidden h-full flex-col gap-4 p-5 xl:flex">
          <div className="flex flex-col items-center text-center">
            <img className="mb-3 h-20 w-20 rounded-full object-cover" src={fotoElvis} alt="Elvis Serrano" />
            <h3 className="font-bold">Elvis Serrano</h3>
            <p className="mt-1 text-sm text-[#616061]">Miembro de Virtual Aprende</p>
          </div>
          <hr className="border-[#e6e6e6]" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-[#616061]">Proyectos</span>
            <span className="text-lg font-bold text-[#1264a3]">6</span>
          </div>
        </aside> */}
      </div>
    </div>
  );
}

export default Feed
