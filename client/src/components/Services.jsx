import { Link } from 'react-router-dom';

import '../styles/services.scss';
import Title from './Title';

const Services = ({ packages }) => {
  return (
    <div>
      <div className='services'>
        <Title text='Our' span='Incorporation Services' />
        <div className='services__grid'>
          {packages.map((item, index) => (
            <div className='services__card' key={index}>
              <div className='services__card-body'>
                <div className='services__icon'>{item.icon}</div>

                <h4 className='services__card-header'>{item.title}</h4>

                <p className='desc'>{item.description}</p>
                {/* <div className='services__price'>
                  <span>from</span> &#8358;{item.price}k
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Link to='/contact-us' className='services__cta'>
        Get Started
      </Link> */}
    </div>
  );
};

export default Services;