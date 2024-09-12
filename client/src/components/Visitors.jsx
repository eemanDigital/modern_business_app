import { FaUsers, FaBuilding, FaGlobe } from 'react-icons/fa';
import '../styles/visitors.scss';

const Visitors = () => {
  return (
    <>
      <div className='visitors'>
        <h2 className='visitors__title'>Our Growing Community</h2>
        <div className='visitors__grid'>
          <div className='visitors__item'>
            <FaUsers className='visitors__icon' />
            <div className='visitors__number'>10,000+</div>
            <div className='visitors__label'>Satisfied Clients</div>
          </div>
          <div className='visitors__item'>
            <FaBuilding className='visitors__icon' />
            <div className='visitors__number'>5,000+</div>
            <div className='visitors__label'>Businesses Registered</div>
          </div>
          <div className='visitors__item'>
            <FaGlobe className='visitors__icon' />
            <div className='visitors__number'>50+</div>
            <div className='visitors__label'>Countries Served</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
