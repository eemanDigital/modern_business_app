import { FaUsers, FaBuilding, FaGlobe } from 'react-icons/fa';
import '../styles/visitors.scss';
import Title from './Title';

const Visitors = () => {
  return (
    <>
      <div className='visitors'>
        <Title text='Our' span='Growing Community' />
        <div className='visitors__grid'>
          <div className='visitors__item'>
            <FaUsers className='visitors__icon' />
            <div className='visitors__number' data-aos='zoom-out'>
              10,000+
            </div>
            <div className='visitors__label' data-aos='zoom-in'>
              Satisfied Clients
            </div>
          </div>
          <div className='visitors__item'>
            <FaBuilding className='visitors__icon' />
            <div className='visitors__number' data-aos='zoom-out'>
              5,000+
            </div>
            <div className='visitors__label' data-aos='zoom-out'>
              Businesses Registered
            </div>
          </div>
          <div className='visitors__item'>
            <FaGlobe className='visitors__icon' />
            <div className='visitors__number' data-aos='zoom-out'>
              50+
            </div>
            <div className='visitors__label' data-aos='zoom-out'>
              Countries Served
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
