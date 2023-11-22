import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { menuItem } from '../constants/menuItem';
import MenuItems from './MenuItems';
import logo from '../assets/logo.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import { RxAvatar } from 'react-icons/rx';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoCloseSharp } from 'react-icons/io5';

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
          <Link>
            <img src={facebook} alt='facebook logo' />
          </Link>
          <Link>
            <img src={twitter} alt='twitter logo' />
          </Link>
          <Link>
            <img src={instagram} alt='instagram logo' />
          </Link>
          <Link>
            <img src={linkedin} alt='linkedin logo' />
          </Link>
        </div>
        <div className='phone'>
          <p>
            <span>Consult us for FREE:</span> +234 9021649021
          </p>
          <p>email: eemandigitalconcept@gmail.com</p>
        </div>
      </div>
      <nav className='navbar container-fluid'>
        <div className='logo'>
          <NavLink className='links' to='/'>
            <img
              src={logo}
              alt='eemaan digital logo'
              style={{ width: '64px' }}
            />
          </NavLink>
        </div>
        <ul className={toggle ? 'open' : ''}>
          {menuItem.map((item, index) => {
            return <MenuItems items={item} key={index} />;
          })}

          {/* login link */}
          <div style={{ fontSize: '24px', fontWeight: '500' }}>
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
