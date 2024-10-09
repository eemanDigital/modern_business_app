import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const location = useLocation();

  const isAdmin = user?.data?.user?.role === 'admin';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // drop down mouse effect handlers
  const handleDropdownEnter = () => setDropdownOpen(true);
  const handleDropdownLeave = () => setDropdownOpen(false);

  //
  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMenu}>
        eemanTech
      </Link>
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
      </div>
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <li
          className={`nav-item ${location.pathname === '/' ? 'current' : ''}`}>
          <Link to='/' className='nav-link' onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li
          className={`nav-item dropdown ${dropdownOpen ? 'active' : ''}`}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}>
          <div className='nav-link dropdown-toggle'>
            Services
            <BiChevronDown className='dropdown-icon' />
          </div>
          <Dropdown
            className={`dropdown-menu ${dropdownOpen ? 'active' : ''}`}
            closeMenu={closeMenu}
          />
        </li>
        <li
          className={`nav-item ${
            location.pathname === '/about-us' ? 'current' : ''
          }`}>
          <Link to='/about-us' className='nav-link' onClick={closeMenu}>
            About
          </Link>
        </li>
        <li
          className={`nav-item ${
            location.pathname === '/blog' ? 'current' : ''
          }`}>
          <Link to='/blog' className='nav-link' onClick={closeMenu}>
            Blog
          </Link>
        </li>
        {/* <li
          className={`nav-item ${
            location.pathname === '/contact-us' ? 'current' : ''
          }`}>
          <Link to='/contact-us' className='nav-link' onClick={closeMenu}>
            Contact Us
          </Link>
        </li> */}
        {isAdmin && (
          <li
            className={`nav-item ${
              location.pathname === '/admin-board' ? 'current' : ''
            }`}>
            <Link to='/admin-board' className='nav-link' onClick={closeMenu}>
              Dashboard
            </Link>
          </li>
        )}
        <li className='nav-item'>
          {user ? (
            <button className='logout-btn' onClick={logout}>
              Logout
            </button>
          ) : (
            <Link
              to='/login'
              className={`nav-link ${
                location.pathname === '/login' ? 'current' : ''
              }`}
              onClick={closeMenu}>
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
