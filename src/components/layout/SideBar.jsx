import { NavLink } from "react-router-dom";
import Icon from "../ui/Icon";
import { sideBarItems, sideBarCommunities } from "./constants";
import { configurationPath } from "../../constants/iconPaths";
import Account from "../ui/Account";

function SideBar () {
  return (
    <aside className="fixed top-28 left-8 w-52">
      <div className="flex flex-col gap-4"> 
        {sideBarItems.map((item) => (
          <NavLink key={item.label} to={`/app/${item.label.toLowerCase()}`}            
            className={({ isActive }) => 
              `flex items-center space-x-3 p-2 transition-colors duration-200 ${
                isActive 
                  ? 'bg-purple-100 rounded-lg' 
                  : 'hover:bg-gray-100'
              }`}>          
            {({ isActive }) => (
              <>
                <Icon 
                  paths={item.icon}                  
                  className={isActive 
                    ? 'text-purple-700 w-6 h-6 shrink-0'
                    : 'text-[#303538] w-6 h-6 shrink-0'
                  } 
                />
                <p                   
                  className={isActive 
                    ? 'font-bold text-purple-700 flex-grow min-w-0 truncate'
                    : 'text-[#303538] flex-grow min-w-0 truncate'
                  }
                >
                  {item.label}
                </p>
              </>
            )}
          </NavLink>
          ))
        }
      </div>
      <hr class="border-t-2 border-gray-300 w-full my-4" />   
      <div className="flex flex-row items-center gap-4 mb-3">
        <h2 className="text-[#303538] font-semibold font-montserrat">Comunidades</h2>  
        <button><Icon className="text-[#303538] w-5 h-5" paths={configurationPath}/></button>
      </div>    
      <div className="flex flex-col gap-4">
        {
          sideBarCommunities.map((communitie) => (
            <Account key={communitie.label} label={communitie.label} image={communitie.image} />
          ))
        }
      </div>
    </aside>
  );
}

export default SideBar