import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { menuItem } from '../constants/menuItem';
import MenuItems from './MenuItems';
// import logo from '../assets/logo.svg';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';

import { RxAvatar } from 'react-icons/rx';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoCloseSharp } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';

function NavBar() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prev) => !prev);
    console.log(toggle);
  }
  return (
    <>
      <div className='social-container'>
        <div className='social'>
          <Link to='#'>
            <FaFacebook />
          </Link>
          <Link to='#'>
            <FaInstagram />
          </Link>
          <Link to='#'>
            <FaLinkedin />
          </Link>
          <Link to='#'>
            <FaXTwitter />
          </Link>
          <Link to='#'>
            <FaWhatsapp />
          </Link>
          <Link to='mailto:eemandigitalconcept@gmail.com'>
            <CiMail />
          </Link>
        </div>
        <div className='phone'>
          <p>
            <span>Consult us for FREE:</span> +234 9021649021
          </p>
        </div>
      </div>
      <nav className='navbar container-fluid'>
        <div className='logo'>
          <NavLink className='links' style={{ color: 'white' }} to='/'>
            {/* <img
              src={logo}
              alt='eemaan digital logo'
              style={{ width: '64px' }}
            /> */}
            eemaan
          </NavLink>
        </div>
        <ul className={toggle ? 'open' : ''}>
          {menuItem.map((item, index) => {
            return <MenuItems items={item} key={index} />;
          })}

          {/* login link */}
          <div
            style={{ fontSize: '24px', fontWeight: '500', color: '#f0f0f0' }}>
            <Link to='login'>
              <RxAvatar />
            </Link>
          </div>
        </ul>

        {/* Hamburger toggling */}
        <div onClick={handleToggle}>
          {toggle ? (
            <IoCloseSharp className='hamburger' />
          ) : (
            <CgMenuRightAlt className='hamburger' />
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
