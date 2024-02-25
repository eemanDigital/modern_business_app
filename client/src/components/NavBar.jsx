import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useLogout } from '../hooks/useLogout';

import '../styles/navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false); // State to manage mobile menu
  const [dropdown, setDropdown] = useState(false); // State to manage dropdown
  const { user } = useAuthContext();
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';
  const { logout } = useLogout();

  // Toggle mobile menu
  const handleClick = () => setClick(!click);

  // Close mobile menu
  const closeMobileMenu = () => setClick(false);

  // Toggle dropdown on hover (for desktop) and click (for mobile)
  const handleDropdown = () => {
    if (window.innerWidth < 1960) {
      setDropdown(!dropdown); // Toggle dropdown for mobile view
    }
  };
  return (
    <header>
      <nav className='navbar'>
        {/* <div className='logo'> */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* <i className='bi bi-cloud-moon-fill'></i> */}
          eeman
        </Link>
        {/* </div> */}
        <div className='menu-icon' onClick={handleClick}>
          {/* <i className={click ? 'bi bi-x' : 'bi bi-list'} /> */}
          {click ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className='nav-item'
            onMouseEnter={handleDropdown}
            onMouseLeave={handleDropdown}>
            <Link to='#' className='nav-links' onClick={closeMobileMenu}>
              Services
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          {isAdmin && (
            <li className='nav-item'>
              <Link
                to='blog/write'
                className='nav-links'
                onClick={closeMobileMenu}>
                write
              </Link>
            </li>
          )}

          <li className='nav-item'>
            <Link className='nav-links'>
              {user && (
                <button className='logout-btn' onClick={() => logout()}>
                  Logout
                </button>
              )}
            </Link>
            {!user && (
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
