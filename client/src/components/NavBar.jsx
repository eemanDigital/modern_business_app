import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiMenuAltRight, BiChevronDown } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { GrTechnology } from 'react-icons/gr';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const location = useLocation();
  const submenuRef = useRef(null);

  const isAdminAndAuthor =
    user?.data?.user?.role === 'admin' || user?.data?.user?.role === 'author';

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSubmenu(null);
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const submenu = [
    { title: 'Company Registration', url: '/services/company' },
    { title: 'Business Registration', url: '/services/business' },
    { title: 'NGO Registration', url: '/services/ngo' },
    { title: 'Web Development', url: '/services/webdev' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
          <GrTechnology /> eemanTech
        </Link>
        <button
          className='navbar-toggle'
          onClick={toggleMenu}
          aria-label='Toggle navigation menu'>
          {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li className={`navbar-item ${isActive('/') ? 'active' : ''}`}>
            <Link to='/' className='navbar-link' onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li
            className={`navbar-item has-submenu ${
              activeSubmenu === 0 || isActive('/services') ? 'active' : ''
            }`}
            ref={submenuRef}>
            <button
              className='navbar-link'
              onClick={() => toggleSubmenu(0)}
              aria-expanded={activeSubmenu === 0}
              aria-haspopup='true'>
              Services
              <BiChevronDown
                className={`submenu-icon ${
                  activeSubmenu === 0 ? 'active' : ''
                }`}
              />
            </button>
            <ul
              className={`navbar-submenu ${
                activeSubmenu === 0 ? 'active' : ''
              }`}>
              {submenu.map((item, index) => (
                <li
                  key={index}
                  className={`${isActive(item.url) ? 'active' : ''} dpw`}>
                  <Link
                    to={item.url}
                    className='navbar-link'
                    onClick={closeMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={`navbar-item ${isActive('/about-us') ? 'active' : ''}`}>
            <Link to='/about-us' className='navbar-link' onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={`navbar-item ${isActive('/blog') ? 'active' : ''}`}>
            <Link to='/blog' className='navbar-link' onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li className={`navbar-item ${isActive('/pricing') ? 'active' : ''}`}>
            <Link to='/pricing' className='navbar-link' onClick={closeMenu}>
              Pricing
            </Link>
          </li>
          {isAdminAndAuthor && (
            <li
              className={`navbar-item ${
                isActive('/admin-board') ? 'active' : ''
              }`}>
              <Link
                to='/admin-board'
                className='navbar-link'
                onClick={closeMenu}>
                Dashboard
              </Link>
            </li>
          )}
          <li className='navbar-item'>
            {user ? (
              <button className='navbar-link logout-btn' onClick={logout}>
                Logout
              </button>
            ) : (
              <Link
                to='/login'
                className={`navbar-link ${isActive('/login') ? 'active' : ''}`}
                onClick={closeMenu}>
                Login
              </Link>
            )}
          </li>

          {!user && (
            <li className='navbar-item'>
              <Link
                to='/signup'
                className={`navbar-link ${isActive('/signup') ? 'active' : ''}`}
                onClick={closeMenu}>
                Sign Up
              </Link>
            </li>
          )}

          {user && (
            <li className='navbar-item'>
              <Link
                to='/users/update'
                className={`navbar-link ${
                  isActive('/users/update') ? 'active' : ''
                }`}
                onClick={closeMenu}>
                Edit Profile
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
