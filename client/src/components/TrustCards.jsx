import { IoIosArrowDropdown } from 'react-icons/io';
import { IoIosArrowDropup } from 'react-icons/io';

const TrustCards = ({
  icon,
  title,
  description,
  isOpen,
  toggleOpen,
  heading,
}) => {
  return (
    <>
      <div className='trust_card_col'>
        {icon}
        <h3 onClick={toggleOpen}>
          {title} {isOpen ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
        </h3>
        <div className={`card-description ${isOpen ? 'open' : 'close'}`}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TrustCards;
