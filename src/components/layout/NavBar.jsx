import { NavLink } from "react-router-dom";
import { logoNexos, textLogoNexos } from "../../assets/images";
import Icon from "../ui/Icon";
import { connectionsPath, exitPath, messagesPath, notificationsPath } from "../../constants/iconPaths";
import { Menu, Search } from "lucide-react";


function NavBar ({ onMenuClick }) {
  return (
    <header className='app-header'>
      <nav className='app-nav'>
        <button onClick={onMenuClick} className="nav-icon-button lg:hidden" aria-label="Abrir menú">
          <Menu size={22} />
        </button>
        <NavLink to="/app/inicio">
          <div className="flex items-center gap-2 shrink-0">
            <img src={logoNexos} alt="Logo Nexos" className="h-9 w-9 object-contain"/>
            <img src={textLogoNexos} alt="Nexos" className="hidden h-6 w-auto sm:block"/>
          </div>
        </NavLink>
        <label className="nav-search">
          <Search size={18} aria-hidden="true" />
          <input type="search" name="text" placeholder="Buscar en Nexos" aria-label="Buscar en Nexos" />
        </label>
        <div className="flex items-center gap-1 sm:gap-2">  
          <NavLink to="/app/conexiones">
            <Icon paths={connectionsPath} className="nav-action" />
          </NavLink>                
          <button className="hidden sm:block" aria-label="Mensajes"><Icon paths={messagesPath} className="nav-action"/></button>
          <button className="hidden sm:block" aria-label="Notificaciones"><Icon paths={notificationsPath} className="nav-action"/></button>
          <NavLink to="/">
            <Icon paths={exitPath} className="nav-action"/>          
          </NavLink>        
        </div>
      </nav>
    </header>    
  );
}

export default NavBar
