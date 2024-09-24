import PropTypes from 'prop-types';
import '../styles/packages.scss';

const Packages = ({ title, price, benefits }) => {
  return (
    <div className='generic_price_table' data-aos='fade'>
      <div className='generic_content'>
        <div className='generic_head_price'>
          <div className='generic_head_content'>
            <div className='head_bg'></div>
            <div className='head'>
              <span>{title}</span>
            </div>
          </div>
          <div className='generic_price_tag'>
            <span className='price'>
              <span className='sign'>₦</span>
              <span className='currency'>{price}</span>
            </span>
          </div>
        </div>
        <div className='generic_feature_list'>
          <ul>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <span className='fa fa-check'></span> {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className='generic_price_btn'>
          <a href='#' className='btn'>
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

Packages.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.array.isRequired,
};

export default Packages;
