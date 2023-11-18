import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
function MenuItems({ items }) {
  return (
    <li>
      {items.submenu ? (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to={items.url}
          >
            {items.title}
            {/* <button type="button" aria-haspopup="menu"></button> */}
            <Dropdown submenu={items.submenu} />
          </NavLink>
        </li>
      ) : (
        <>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "links")}
            to={items.url}
          >
            {items.title}
          </NavLink>
        </>
      )}
    </li>
  );
}

export default MenuItems;
