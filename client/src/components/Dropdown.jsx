import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/dropdown.scss';

const submenu = [
  {
    title: 'Company Registration',
    url: 'company',
    cName: 'drop-d-link',
  },
  {
    title: 'Business Registration',
    url: 'business',
    cName: 'drop-d-link',
  },
  {
    title: 'NGO Registration',
    url: 'ngo',
    cName: 'drop-d-link',
  },

  {
    title: 'Partnership',
    url: 'partnership',
    cName: 'drop-d-link',
  },

  {
    title: 'Web Development',
    url: 'webdev',
    cName: 'drop-d-link',
  },
];

function Dropdown() {
  const [click, setClick] = useState(false);

  // Toggle dropdown
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'drop-d-menu clicked' : 'drop-d-menu'}>
        {submenu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.url}
                onClick={() => setClick(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
