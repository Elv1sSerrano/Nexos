import { NavLink } from "react-router-dom";
import { logoNexos, textLogoNexos } from "../../../assets/images";
import { connections, exit, messages, notifications } from "../../../assets/icon";
import Icon from "../../../components/Icon";
import { SearchPath } from "../../../constants/iconPaths";


function NavBar () {
  return (
    <header className='padding-x py-5 w-full fixed z-30 bg-[#9929EA]'>
      <nav className='flex justify-between items-center max-container'>
      {/* Imágenes del lado izquierdo */}
      <NavLink to="/feed">
        <div className="flex items-center gap-2">
          <span><img src={logoNexos} alt="Logo Nexos" width={50}/></span>
          <span><img src={textLogoNexos} alt="Logo Nexos" width={110}/></span>
        </div>
      </NavLink>      
      {/* Barra de búsqueda */}
      <div className="relative flex flex-row justify-center">
        <button className="absolute left-4 top-3.5"><Icon className="text-[#171616ff] hover:text-purple-500" paths={SearchPath}/></button>
        <input type="text" name="text" placeholder="Buscar" className="pl-12 border rounded-full p-3 w-[470px] max-sm:w-full outline-none placeholder:font-montserrat"/>
      </div>      
      {/* Iconos finales */}
      <div className="flex flex-row justify-around gap-6">
        <img src={connections}/>
        <img src={messages}/>
        <img src={notifications}/>
        <NavLink to="/">
          <img src={exit}/>
        </NavLink>        
      </div>
    </nav>
    </header>    
  );
}

export default NavBar