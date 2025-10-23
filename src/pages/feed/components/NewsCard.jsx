import { NavLink } from "react-router-dom"

function NewsCard ({route, label}) {
  return (
    <NavLink>
      <img className="rounded-lg w-72" src={route} alt={label}/>
    </NavLink>    
  )
}

export default NewsCard