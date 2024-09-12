import { Link } from 'react-router-dom';

import '../styles/services.scss';

const Services = ({ packages }) => {
  return (
    <div>
      <div className='services'>
        <h2 className='services__title'>
          Our <span>Incorporation Services</span>
        </h2>
        <div className='services__grid'>
          {packages.map((item, index) => (
            <div className='services__card' key={index}>
              <div className='services__card-header'>
                <h4>{item.title}</h4>
              </div>
              <div className='services__card-body'>
                <div className='services__icon'>{item.icon}</div>
                <div className='services__price'>
                  <span>from</span> &#8358;{item.price}k
                </div>
                <Link to='/contact-us' className='services__cta'>
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
