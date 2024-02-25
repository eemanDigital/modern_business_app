import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import { accordion } from '../data/data.jsx';

// const Accordion = () => {
//   const [open, setOpen] = useState(Array(accordion.length).fill(false));

//   const handleToggleAccordion = (index) => {
//     setOpen((prevOpen) => {
//       const newOpenState = [...prevOpen];
//       newOpenState[index] = !newOpenState[index];
//       return newOpenState;
//     });
//   };
//   return (
//     <div>
//       {' '}
//       <div className='accordion'>
//         <h3>Learn the requirements</h3>
//         {accordion.map((el, index) => {
//           return (
//             <div key={index}>
//               <button
//                 onClick={() => handleToggleAccordion(index)}
//                 className='accordion-btn'>
//                 <span className='arrow'>
//                   {open[index] ? <FaChevronDown /> : <FaChevronUp />}
//                 </span>
//                 {/* <span className='arrow'>{}</span> */}
//                 {el.title}
//               </button>

//               <div className={open[index] ? 'accordion-content' : ''}>
//                 {open[index] &&
//                   el.requirements.map((requirement) => (
//                     <p key={requirement}>{requirement}</p>
//                   ))}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Accordion;
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
