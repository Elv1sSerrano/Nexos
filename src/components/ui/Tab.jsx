import { NavLink } from "react-router-dom";

function Tab ({name, direction}) {
  return (
    <li>
      <NavLink 
        to={direction ? direction : name}
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