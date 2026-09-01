import { NavLink } from "react-router-dom"

function Account ({label, image, direction, additionalStyle, additionalImageStyle}) {
  return (
    <div>
      <NavLink to={`/app/${direction}`} className="sidebar-account">
        <img src={image} alt="" className={`w-6 h-6 object-cover rounded-md ${additionalImageStyle}`}/>
        <p className={`flex-grow min-w-0 truncate ${additionalStyle || ""}`}>{label}</p>
      </NavLink>
    </div>
  )
}

export default Account
