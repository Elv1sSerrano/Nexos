import { NavLink } from "react-router-dom";
import Icon from "../../../components/Icon";
import { sideBarItems } from "../constants";

function SideBar () {
  return (
    <aside className="fixed top-28 left-8">
      <div className="flex flex-col gap-4"> 
        {
          sideBarItems.map((item) => (
            <NavLink className="flex items-center space-x-3">
              <Icon className={"text-[#303538] w-6 h-6 shrink-0"} paths={item.icon}/>
              <p className="flex-grow min-w-0 truncate">{item.label}</p>
            </NavLink>
          ))
        }                                 
      </div>
      <hr class="border-t border-gray-300 w-full my-4" />       
    </aside>
  );
}

export default SideBar