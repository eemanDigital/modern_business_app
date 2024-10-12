import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import { faq_card_data } from '../data/data';
import '../styles/faqs.scss';

const Faq = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='faq-card'>
      <div className='faq-card__header' onClick={() => setIsOpen(!isOpen)}>
        <div className='faq-card__title'>
          {/* <span className='faq-card__icon'>{icon}</span> */}
          <h3>{title}</h3>
        </div>
        {isOpen ? (
          <IoIosArrowUp className='faq-card__arrow' />
        ) : (
          <IoIosArrowDown className='faq-card__arrow' />
        )}
      </div>
      <div className={`faq-card__content ${isOpen ? 'open' : ''}`}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Faq;
