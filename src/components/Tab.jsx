import { NavLink } from "react-router-dom";

function Tab ({name}) {
  return (
    <li>
      <NavLink 
        to={name}
        className={({isActive}) => (
          isActive ? 'text-purple-700' : ''
        )}
      >
        {name}
      </NavLink>
    </li>
  );
}

export default Tab