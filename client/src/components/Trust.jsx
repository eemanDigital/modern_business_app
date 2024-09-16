import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { trust_card_data } from '../data/data';
import '../styles/trust.scss';
import Title from './Title';

const TrustCard = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='trust-card'>
      <div className='trust-card__header' onClick={() => setIsOpen(!isOpen)}>
        <div className='trust-card__title'>
          <span className='trust-card__icon'>{icon}</span>
          <h3>{title}</h3>
        </div>
        {isOpen ? (
          <IoIosArrowUp className='trust-card__arrow' />
        ) : (
          <IoIosArrowDown className='trust-card__arrow' />
        )}
      </div>
      <div className={`trust-card__content ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Trust = () => {
  return (
    <div className='trust-container'>
      <Title text='What' span='Differentiate Us' />
      <div className='trust-cards'>
        {trust_card_data.map((item, index) => (
          <TrustCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Trust;
