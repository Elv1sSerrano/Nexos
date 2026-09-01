import { NavLink } from "react-router-dom"

function NewsCard ({route, label}) {
  return (
    <NavLink className="shrink-0 snap-start overflow-hidden rounded-xl border border-[#e3e3e3] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <img className="h-28 w-44 object-cover sm:h-32 sm:w-56" src={route} alt={label}/>
    </NavLink>    
  )
}

export default NewsCard
