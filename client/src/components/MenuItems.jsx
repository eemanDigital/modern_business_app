import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
// import { FaAngleDown } from 'react-icons/fa6';
// import { FaAngleUp } from 'react-icons/fa6';
// import { useState } from 'react';
// import { RxAvatar } from "react-icons/rx";

// import { useState } from "react";
function MenuItems({ items }) {
  // const [display, setDisplay] = useState(false);

  // const handleDisplay = () => {
  //   setDisplay((prev) => !prev);
  // };
  return (
    <li>
      {items.submenu ? (
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'active' : 'links')}
            to={items.url}>
            {items.title}
            {/* <button type="button" aria-haspopup="menu"></button> */}
            {/* {display ? <Dropdown submenu={items.submenu} /> : ''} */}
            {<Dropdown submenu={items.submenu} />}
          </NavLink>
          {/* {display ? <FaAngleDown style={styleAngle} /> : <FaAngleUp />} */}
        </li>
      ) : (
        <>
          <NavLink
            // className={({ isActive }) => (isActive ? 'active' : 'links')}
            to={items.url}>
            {items.title}
          </NavLink>
          {/* <div><NavLink>
            < RxAvatar/>
          </NavLink></div> */}
        </>
      )}
    </li>
  );
}

const styleAngle = {
  color: '#fff',
  paddingLeft: '.4rem',
};
export default MenuItems;
