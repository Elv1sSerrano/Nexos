import { NavLink } from "react-router-dom";
import Icon from "../../../components/ui/Icon"
import { heartPath } from "../../../constants/iconPaths";

function Course({ link, image, title, description, author, date, recomendations}) {
  return (
    <div className="p-4 border-2">      
        <div className="flex flex-row gap-3">
          <img className="w-1/2" src={image} alt={title}/>
          <div className="flex flex-col gap-2 justify-center">
            <a className="hover:text-purple-700 transition duration-300" href={link} target="_blank">
              <h1 className="font-bold text-2xl">{title}</h1>
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
    </div>
  )
}

export default Course;