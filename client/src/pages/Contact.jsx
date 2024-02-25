// import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import './../styles/contact.scss';
const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        s
        transition={{ duration: 1 }}
        className='contact-detail-container'>
        <h1>Contact Us</h1>
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
        </div>
        <div className='contact-details'>
          <div className='phone'>
            <h2>Call on:</h2>
            <p>+234 9021649021</p>
          </div>
          <div className='whatsapp'>
            <h2> Chat with us</h2>

            <Link to='https://wa.me/message/KTFL2G2JM3JTP1'>
              <FaWhatsapp />
            </Link>
          </div>
          <div className='email'>
            <h2> Send us a mail:</h2>
            <Link to='mailto:eemandigitalconcept@gmail.com'>
              <CiMail />
            </Link>
          </div>
          <div className='work-hour'>
            <h2>Work Hours</h2>
            <p>Mon–Fri: 5 a.m.–7 p.m. WAT Weekends: 7 a.m.–4 p.m. WAT</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
