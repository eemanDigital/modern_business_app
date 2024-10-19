import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import '../styles/webDevServices.scss';

const WebDevServices = ({ services }) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowScrollIndicator(window.innerWidth <= 768); // Assuming $breakpoint-md is 768px
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className='web-dev-services-container'>
      <div className='web-dev-services'>
        {services.map((service, index) => (
          <div key={index} className='service-card'>
            <img
              src={service.image}
              alt={service.title}
              className='card-background'
            />
            <div className='card-overlay'></div>
            <div className='card-icon'>{service.icon}</div>
            <h3 className='card-title'>{service.title}</h3>
            <div className='card-content'>
              <div className='desc_icon'>{service.icon}</div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {showScrollIndicator && (
        <div className='scroll-indicator'>
          <FaArrowAltCircleRight size={24} />
        </div>
      )}
    </div>
  );
};

export default WebDevServices;
