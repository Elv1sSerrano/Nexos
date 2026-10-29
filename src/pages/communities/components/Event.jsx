import { PlayCircle } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";

function Event({ image, title, id, description }) {
  const { semilleroId } = useParams();
  const content = (
    <article className={`group relative overflow-hidden rounded-xl ${id ? "cursor-pointer" : ""}`}>
      <img className="h-72 w-full object-cover brightness-75 transition duration-300 group-hover:scale-105 sm:h-80" src={image} alt={title} />
      <div className="absolute inset-x-0 top-0"><h3 className="bg-[#611f69]/90 p-3 text-sm font-bold text-white sm:p-4">{title}</h3></div>
      {id && <div className="absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/20"><PlayCircle className="h-12 w-12 text-white opacity-90 drop-shadow" /></div>}
      {description && <p className="sr-only">{description}</p>}
    </article>
  );

  return id ? <NavLink to={`/app/semillero/${semilleroId}/eventos/${id}`} aria-label={`Ver información de ${title}`}>{content}</NavLink> : content;
}

export default Event;
