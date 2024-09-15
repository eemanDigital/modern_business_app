import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import webDevImg from '../assets/web-development.png';

import '../styles/WebDevSection.scss';

const WebDevSection = () => {
  return (
    <section className='web-dev-section'>
      <div className='text'>
        <h1>
          Apart from Registering your Businesses, we also build your dream
          websites
        </h1>
        <p>
          Apart from Business registration services, we also help you build
          solution by offering web development services that project your
          business and services
        </p>

        <div className='link-btn'>
          <Link to='/contact-us'>
            <MdOutlineWifiCalling3 />
            Give a call
          </Link>
          <Link to='https://wa.me/message/KTFL2G2JM3JTP1'>
            <FaWhatsapp />
            Chat with an Expert
          </Link>
        </div>
      </div>
      <div className='img'>
        <img src={webDevImg} alt='' />
      </div>
    </section>
  );
};

export default WebDevSection;
