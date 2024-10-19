import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../styles/postCategoryNavbar.scss';

const PostCategoryNavbar = ({ categories }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className='category-navbar'>
      <button className='category-navbar__toggle' onClick={toggleNavbar}>
        {isExpanded ? <FaTimes /> : <FaBars />}
      </button>
      <ul className={`category-navbar__list ${isExpanded ? 'expanded' : ''}`}>
        {categories.map((category) => (
          <li key={category} className='category-navbar__item'>
            <Link to={`category/${category}`} className='category-navbar__link'>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PostCategoryNavbar;
