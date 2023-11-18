import { NavLink } from "react-router-dom";
import { menuItem } from "./menuItem";
import MenuItems from "./MenuItems";

function NavBar() {
  return (
    <nav className="navbar container-fluid">
      <ul>
        <NavLink style={{ marginRight: "auto" }} className="links" to="/">
          LOGO
        </NavLink>
        {menuItem.map((item, index) => {
          return <MenuItems items={item} key={index} />;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
