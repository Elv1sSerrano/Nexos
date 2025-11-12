import { NavLink } from "react-router-dom";

function Tab ({name, direction}) {
  
  const slugify = (text) => {
    return text
      .normalize("NFD") // 1. Descompone los caracteres acentuados (e.g., "á" en "a" + acento)
      .replace(/[\u0300-\u036f]/g, "") // 2. Elimina los acentos diacríticos
      .toLowerCase() // 3. Convierte todo a minúsculas
      .replace(/\s+/g, '-') // 4. Reemplaza cualquier espacio (o secuencia de espacios) con un guion
      // eslint-disable-next-line
      .replace(/[^\w\-]+/g, '') // 5. Elimina cualquier carácter que NO sea una palabra, un número o un guion.
      // eslint-disable-next-line
      .replace(/\-\-+/g, '-') // 6. Reemplaza guiones múltiples por uno solo (limpieza final)
      .replace(/^-+/, '') // 7. Elimina guiones al inicio
      .replace(/-+$/, ''); // 8. Elimina guiones al final
  };
    
  // Genera el slug del nombre
  const slugifiedName = slugify(name);
    
  // La ruta final utiliza 'direction' si existe, sino el slug generado
  const tabPath = direction ? direction : slugifiedName;

  return (
    <li>
      <NavLink 
        to={tabPath}        
        className={({isActive}) => (
          isActive && 'text-purple-700 font-semibold'           
        )}
      > 
      {({ isActive }) => (
        <>          
          {name}          
          <hr
            className={`w-full border-t-2 my-1 ${
              isActive ? 'border-purple-700' : 'border-transparent'
            }`}
          />
        </>
      )}       
      </NavLink>
    </li>
  );
}

export default Tab