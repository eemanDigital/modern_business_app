import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar ">
      <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
        LOGO
      </NavLink>
      <ul>
        <li>
          <NavLink className="links" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="blog">
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="tools">
            Tools
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
