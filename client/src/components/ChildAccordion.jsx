// import { useState } from 'react';
import '../styles/accordion.scss';

const ChildAccordion = ({ title, isActive, onShow, children }) => {
  // const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        {
          <button className='accordion-btn' onClick={onShow}>
            {title}
          </button>
        }
      </div>
      <p>{isActive && children}</p>
    </div>
  );
};

export default ChildAccordion;
