import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './../styles/socialIcons.scss';

const SocialIcons = () => {
  return (
    <div className='contact-detail-container'>
      <div className='social'>
        <Link to='#'>
          <FaFacebook />
        </Link>
        <Link to='#'>
          <FaInstagram />
        </Link>
        <Link to='#'>
          <FaLinkedin />
        </Link>
        <Link to='#'>
          <FaXTwitter />
        </Link>
        <Link to='https://wa.me/message/KTFL2G2JM3JTP1'>
          <FaWhatsapp />
        </Link>
      </div>
      {/* <div className='contact-details'>
        <div className='phone'>
          <h2>Call on:</h2>
          <p>+234 9021649021</p>
        </div>
        <div className='whatsapp'>
          <h2>Chat with us:</h2>
          <Link to='https://wa.me/message/KTFL2G2JM3JTP1'>
            <FaWhatsapp /> WhatsApp
          </Link>
        </div>
        <div className='email'>
          <h2>Send us a mail:</h2>
          <Link to='mailto:eemandigitalconcept@gmail.com'>
            <CiMail /> eemandigitalconcept@gmail.com
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default SocialIcons;
