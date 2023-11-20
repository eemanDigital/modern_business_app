import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItem } from "../constants/menuItem";
import MenuItems from "./MenuItems";
import logo from "../assets/logo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
    console.log(toggle);
  }
  return (
    <>
      <nav className="navbar container-fluid">
        <div className="logo">
          <NavLink className="links" to="/">
            <img
              src={logo}
              alt="eemaan digital logo"
              style={{ width: "64px" }}
            />
          </NavLink>
        </div>
        <ul className={toggle ? "open" : ""}>
          {menuItem.map((item, index) => {
            return <MenuItems items={item} key={index} />;
          })}
        </ul>
        <div onClick={handleToggle}>
          {toggle ? (
            <IoCloseSharp className="hamburger" />
          ) : (
            <CgMenuRightAlt className="hamburger" />
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
