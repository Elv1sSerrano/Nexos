import { NavLink } from "react-router-dom";
import Icon from "../ui/Icon";
import { sideBarItems, sideBarCommunities, sidebarChannels } from "./constants";
import { configurationPath } from "../../constants/iconPaths";
import Account from "../ui/Account";
import { X } from "lucide-react";

function SideBar ({ isOpen, onClose }) {
  return (
    <>
      <button className={`sidebar-backdrop ${isOpen ? "is-visible" : ""}`} onClick={onClose} aria-label="Cerrar menú" />
      <aside className={`app-sidebar ${isOpen ? "is-open" : ""}`}>
      <div className="sidebar-title">
        <span>Espacio de trabajo</span>
        <button onClick={onClose} className="lg:hidden" aria-label="Cerrar menú"><X size={20} /></button>
      </div>
      <div className="flex flex-col gap-1"> 
        {sideBarItems.map((item) => (
          <NavLink key={item.label} to={`/app/${item.direction}`} onClick={onClose}
            className={({ isActive }) => 
              `sidebar-link ${
                isActive 
                  ? 'is-active' 
                  : ''
              }`}>          
            {({ isActive }) => (
              <>
                <Icon 
                  paths={item.icon}                  
                  className={isActive 
                    ? 'text-white w-5 h-5 shrink-0'
                    : 'text-[#b7a9bc] w-5 h-5 shrink-0'
                  } 
                />
                <p                   
                  className={isActive 
                    ? 'font-semibold text-white flex-grow min-w-0 truncate'
                    : 'text-[#eee8ef] flex-grow min-w-0 truncate'
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
      <hr className="sidebar-divider" />
      <div className="sidebar-section-title">
        <h2>Canales</h2>  
        <button aria-label="Configurar canales"><Icon className="w-4 h-4" paths={configurationPath}/></button>
      </div>    
      <div className="flex flex-col gap-1">
        {
          sidebarChannels.map((communitie) => (
            <Account key={communitie.label} label={communitie.label} direction={communitie.direction} image={communitie.image} />
          ))
        }
      </div>
      <hr className="sidebar-divider" />
      <div className="sidebar-section-title">
        <h2>Comunidades</h2>  
        <button aria-label="Configurar comunidades"><Icon className="w-4 h-4" paths={configurationPath}/></button>
      </div>    
      <div className="flex flex-col gap-1">
        {
          sideBarCommunities.map((communitie) => (
            <Account key={communitie.label} label={communitie.label} direction={communitie.direction} image={communitie.image} />
          ))
        }
      </div>
      </aside>
    </>
  );
}

export default SideBar
