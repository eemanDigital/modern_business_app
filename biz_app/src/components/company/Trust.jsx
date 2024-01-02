import { Link } from 'react-router-dom';

import { trust_card_data } from '../../constants/data';
import Packages from './Packages';
import PostIncorporation from '../PostIncorporation';
// import biz_img from './../../assets/biz.jpg';

const Trust = () => {
  const first_five_data = trust_card_data.slice(0, 6);
  return (
    <div className='trust-container'>
      <h1>Why Do Businesses Trust Us?</h1>

      <div className='trust-cards'>
        {first_five_data.map((item, index) => {
          return (
            <div className='trust_card_col' key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className='t-col'>
          <h3>Choose Your Package</h3>
          <p>
            Choose the option that is right for your need and budget. No
            additional fees or hidden charge.
          </p>
        </div>
      </div>

      <Packages />

      <div className='custom'>
        <div className='custom-text'>
          <h1>
            Other Types of Company<span className=' arrow-right'></span>
          </h1>
          <h4>
            We can also help you with the registration of specialised companies
            such as:
          </h4>
          <ul>
            <li> Over One Million share capital</li>
            <li>Travel Agency</li>
            <li>Corporate investment adviser</li>
            <li>Agricultural seeds, productions, processing and marketing</li>
            <li>Shipping company/agent</li>
            <li>Bureau de change</li>
          </ul>
          <div className='custom-links'>
            {' '}
            <Link to='#'>Click here for full list</Link>
            <Link to='#'>Make Your Offer</Link>
          </div>
        </div>
        {/* <div className='custom-img'>
          <img src={biz_img} alt='' />
        </div> */}
      </div>
      <PostIncorporation />
    </div>
  );
};

export default Trust;
