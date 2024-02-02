import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuItem } from '../data/menuItem';
import MenuItems from './MenuItems';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import SocialMedia from './SocialMedia';
import { RxAvatar } from 'react-icons/rx';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoCloseSharp } from 'react-icons/io5';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const username = user?.data?.user?.username;

  function handleToggle() {
    setToggle((prev) => !prev);
    console.log(toggle);
  }
  return (
    <>
      <SocialMedia />
      <nav className='navbar container-fluid'>
        <div className='logo'>
          <Link className='links' style={{ color: 'white' }} to='/'>
            {/* <img
              src={logo}
              alt='eemaan digital logo'
              style={{ width: '64px' }}
            /> */}
            eemaan
          </Link>
        </div>
        <ul className={toggle ? 'open' : ''}>
          {menuItem.map((item, index) => {
            return <MenuItems items={item} key={index} />;
          })}

          {/* login link */}
          {!user && (
            <div
              style={{ fontSize: '24px', fontWeight: '500', color: '#f0f0f0' }}>
              {!user && (
                <Link to='login'>
                  <RxAvatar />
                </Link>
              )}
            </div>
          )}
          {user && (
            <div className='logout'>
              <span>{username}</span>
              <button onClick={() => logout()}>Log out </button>
            </div>
          )}
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
