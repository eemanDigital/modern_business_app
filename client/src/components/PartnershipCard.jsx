import { Link } from 'react-router-dom';
import '../styles/partnershipSection.scss';

const PartnershipCard = ({ title, description, icon: Icon }) => (
  <div className='partnership-card'>
    <Icon className='card-icon' />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default PartnershipCard;
