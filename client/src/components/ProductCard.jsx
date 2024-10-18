import React, { useState } from 'react';

const ProductCard = ({ title, description, price, image, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='product-card'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${image})` }}>
      {!isHovered && <h3 className='product-title'>{title}</h3>}
      <div className='card-overlay'></div>

      <div className={`product-content ${isHovered ? 'visible' : ''}`}>
        <p className='product-description'>{description}</p>
        <a href='#' className='product-link'>
          Learn more
        </a>
        <p className='product-price'>{price}</p>
        {isHovered && <Icon className='product-icon' />}
      </div>
    </div>
  );
};

export default ProductCard;
