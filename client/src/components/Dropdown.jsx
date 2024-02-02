import { NavLink } from 'react-router-dom';
function Dropdown({ submenu }) {
  return (
    <ul className='dropdown'>
      {submenu.map((menu, index) => {
        return (
          <li key={index}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'links')}
              to={menu.url}>
              {menu.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
