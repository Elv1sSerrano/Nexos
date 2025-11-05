import { NavLink } from "react-router-dom"
import Account from "../../../components/ui/Account"
import Icon from "../../../components/ui/Icon"
import { savedPath } from "../../../constants/iconPaths"

function EventCard ({image, direction, title, date, location, institution}) {
  return (
    <div className="w-[500px] rounded-xl bg-white">
      <NavLink to={direction} >
        <div className="relative z-10 overflow-hidden rounded-xl">
          <img className="object-top object-cover w-[500px] h-[250px] rounded-xl hover:scale-110 transition duration-300" src={image}/>
        </div>      
        <div className="absolute top-2 right-2 z-20">
          <Icon className={"bg-white rounded-full p-2"} paths={savedPath} />
        </div>      
        <div className="p-4 flex flex-col gap-1 rounded-t-md">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="opacity-50">{date}</p>
          <p className="opacity-50">{location}</p>
          <Account key={institution.image} label={institution.label} image={institution.image} additionalStyle={"opacity-50"} />
        </div>        
      </NavLink>      
    </div>
  )
}

export default EventCard