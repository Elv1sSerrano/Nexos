import { NavLink } from "react-router-dom";

function Tab ({name}) {
  return (
    <li>
      <NavLink>{name}</NavLink>
    </li>
  );
}

export default Tab