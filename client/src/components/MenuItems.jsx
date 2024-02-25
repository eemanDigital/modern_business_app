// import { NavLink } from 'react-router-dom';
// import Dropdown from './Dropdown';
// import { FaAngleDown } from 'react-icons/fa6';
// import { FaAngleUp } from 'react-icons/fa6';
// import { useState } from 'react';
// // import { RxAvatar } from 'react-icons/rx';

// import '../styles/menu-dropdown.scss';

// function MenuItems() {
//   // const [display, setDisplay] = useState(false);

//   // const handleDisplay = () => {
//   //   setDisplay((prev) => !prev);
//   //   return (
//   //     <ul className={`navbar-items ${display ? 'open' : ''}`}>
//   //       {/* Render main menu items only on larger screens */}
//   //       {window.innerWidth > 768 && <MenuItems />}
//   //       {/* Always render dropdown on click */}
//   //       <Dropdown />
//   //       {/* ... other elements ... */}
//   //     </ul>
//   //   );
//   // };

//   return (
//     <>
//       <li>
//         <NavLink
//           className={({ isActive }) => (isActive ? 'active' : 'links')}
//           to='/'>
//           {' '}
//           Home{' '}
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) => (isActive ? 'active' : 'links')}
//           to='/services'>
//           {' '}
//           Services{' '}
//         </NavLink>
//         <Dropdown />

//         {/* <span className='display-at-breakpoint' onClick={handleDisplay}>
//           {display ? <FaAngleDown /> : <FaAngleUp />}
//         </span> */}
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) => (isActive ? 'active' : 'links')}
//           to='/blog'>
//           {' '}
//           Blog{' '}
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) => (isActive ? 'active' : 'links')}
//           to='/about-us'>
//           {' '}
//           Who We Are{' '}
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           className={({ isActive }) => (isActive ? 'active' : 'links')}
//           to='blog/write'>
//           {' '}
//           Write{' '}
//         </NavLink>
//       </li>
//     </>
//   );
// }

// export default MenuItems;
