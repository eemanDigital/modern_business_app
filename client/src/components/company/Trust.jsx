// import { Link } from 'react-router-dom';

import { trust_card_data } from '../../constants/data';
import Packages from './Packages';
// import PostIncorporation from '../PostIncorporation';
// import biz_img from './../../assets/biz.jpg';

const Trust = ({ title, price, benefits }) => {
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

      {/* <Packages title={title} price={price} benefits={benefits} /> */}
    </div>
  );
};

export default Trust;
