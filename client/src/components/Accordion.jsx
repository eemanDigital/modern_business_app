import { useState } from 'react';

import ChildAccordion from './ChildAccordion.jsx';

import '../styles/accordion.scss';

const Accordion = () => {
  const [isActiveIndex, setIsActiveIndex] = useState('');

  console.log(isActiveIndex);
  return (
    <div className='accordion'>
      <div>
        <h1>Registration Requirement</h1>
      </div>
      <ChildAccordion
        isActive={isActiveIndex === 'business'}
        onShow={() => setIsActiveIndex('business')}
        title='Business Registration'>
        Business Reg
      </ChildAccordion>
      <ChildAccordion
        isActive={isActiveIndex === 'company'}
        onShow={() => setIsActiveIndex('company')}
        title='Company Registration'>
        Company Reg
      </ChildAccordion>
      <ChildAccordion
        isActive={isActiveIndex === 'ngo'}
        onShow={() => setIsActiveIndex('ngo')}
        title='Ngo Registration'>
        NGO Reg
      </ChildAccordion>
    </div>
  );
};

export default Accordion;
