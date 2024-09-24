import { Link } from 'react-router-dom';

const submenu = [
  { title: 'Company Registration', url: 'company' },
  { title: 'Business Registration', url: 'business' },
  { title: 'NGO Registration', url: 'ngo' },
  { title: 'Partnership', url: 'partnership' },
  { title: 'Web Development', url: 'webdev' },
];

const Dropdown = ({ className, closeMenu }) => {
  return (
    <ul className={className}>
      {submenu.map((item, index) => (
        <li key={index}>
          <Link to={item.url} className='dropdown-link' onClick={closeMenu}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
