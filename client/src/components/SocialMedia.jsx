// import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import './../styles/socialMedia.scss';
const SocialMedia = () => {
  return (
    <>
      <div className='social-container'>
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
          <Link to='#'>
            <FaWhatsapp />
          </Link>
          <Link to='mailto:eemandigitalconcept@gmail.com'>
            <CiMail />
          </Link>
        </div>
        <div className='phone'>
          <p>
            <span>Consult us for FREE:</span> +234 9021649021
          </p>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
