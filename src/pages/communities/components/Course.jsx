import { NavLink } from "react-router-dom";
import Icon from "../../../components/ui/Icon"
import { heartPath } from "../../../constants/iconPaths";

function Course({ link, image, title, description, author, date, recomendations}) {
  return (
    <article className="h-full rounded-xl border border-[#e3d8f3] bg-white p-4">      
        <div className="flex flex-col gap-4 sm:flex-row">
          <img className="h-44 w-full rounded-lg object-cover sm:h-auto sm:w-2/5" src={image} alt={title}/>
          <div className="flex flex-col gap-2 justify-center">
            <a className="hover:text-purple-700 transition duration-300" href={link} target="_blank">
              <h1 className="text-xl font-bold sm:text-2xl">{title}</h1>
            </a>            
            <p className="opacity-85">{description}</p>
            <NavLink className={"hover:text-purple-600 transition-all duration-300"}>
              <p className="opacity-70">{author}</p>
            </NavLink>            
            <p>Publicación: {date}</p>
            <div className="flex flex-row items-center gap-2 text-red-600 font-bold">
              <button>
                <Icon className={'text-red-600'} paths={heartPath}/>
              </button>            
              <p>Recomendaciones</p>
              <p>{recomendations}</p>
            </div>
          </div>
        </div>      
    </article>
  )
}

export default Course;
