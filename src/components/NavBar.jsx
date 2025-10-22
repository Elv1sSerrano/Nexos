import { NavLink } from "react-router-dom";
import { logoNexos, textLogoNexos } from "../assets/images";
import { connections, exit, messages, notifications, search } from "../assets/icon";


function NavBar () {
  return (
    <header className='padding-x py-5 w-full absolute z-10 bg-[#9929EA]'>
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
        <button className="absolute left-2 top-3.5"><img src={search}/></button>
        <input type="text" name="text" placeholder="Buscar" className="border rounded-full p-3 w-[470px] max-sm:w-full outline-none placeholder:font-montserrat placeholder:pl-6"/>
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