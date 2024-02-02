// import { Link } from 'react-router-dom';
import TrustCards from '../TrustCards';
// import Packages from './Packages';
// import PostIncorporation from '../PostIncorporation';
// import biz_img from './../../assets/biz.jpg';

const Trust = ({ title, price, benefits }) => {
  return (
    <div className='trust-container'>
      <TrustCards />

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
