import { useState } from 'react';
import TrustCards from './TrustCards';
import { trust_card_data } from '../data/data';
import Title from './Title';

const Trust = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='trust-container'>
      <Title text='What' span=' differentiate Us' />
      <div className='trust-cards'>
        {trust_card_data.map((item, index) => (
          <TrustCards
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            isOpen={isOpen}
            toggleOpen={toggleOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
