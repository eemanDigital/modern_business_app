import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
// import { useState } from "react";
function MenuItems({ items }) {
  // const displayStyle = {
  //   display: toggle ? "none" : "",
  // };

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
