import PropTypes from 'prop-types';
import '../styles/packages.scss';
import { Link } from 'react-router-dom';

const Packages = ({ title, price, benefits }) => {
  return (
    <>
      <div className='packages-container'>
        <div className='package-card'>
          <h2 className='package-title'>{title}</h2>
          <div className='package-price'>
            <span className='currency'>₦</span>
            {price}
          </div>
          <ul className='package-features'>
            {benefits?.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <Link to='/contact-us'>
            <button className='package-cta'>Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
};

Packages.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.array.isRequired,
};

export default Packages;
