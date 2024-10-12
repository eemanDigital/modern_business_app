import React from 'react';
import CountUp from 'react-countup';

const VisitorItem = ({ icon: Icon, end, label, isIntersecting }) => {
  return (
    <div className='visitors__item'>
      <Icon className='visitors__icon' />
      <div className='visitors__number' data-aos='zoom-out'>
        {isIntersecting && (
          <CountUp
            start={0}
            end={end}
            duration={2.5}
            separator=','
            suffix='+'
          />
        )}
      </div>
      <div className='visitors__label' data-aos='zoom-in'>
        {label}
      </div>
    </div>
  );
};

export default VisitorItem;