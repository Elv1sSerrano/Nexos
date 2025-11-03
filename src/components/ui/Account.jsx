import { NavLink } from "react-router-dom"

function Account ({label, image, direction, additionalStyle}) {
  return (
    <div>
      <NavLink to={`/app/${direction}`} className="flex items-center space-x-3">
        <img src={image} className="w-8 object-cover rounded-full"/>
        <p className={`flex-grow min-w-0 truncate ${additionalStyle}`}>{label}</p>
      </NavLink>
    </div>
  )
}

export default Account