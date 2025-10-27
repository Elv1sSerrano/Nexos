import { NavLink } from "react-router-dom";

function Tab ({name}) {
  return (
    <li>
      <NavLink 
        to={name}
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