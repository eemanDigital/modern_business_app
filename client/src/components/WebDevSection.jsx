import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

import '../styles/webDevSection.scss';

const WebDevSection = () => {
  return (
    <section className='web-dev-section'>
      <div className='text'>
        <h1 data-aos='zoom-in'>
          Apart from Registering your Businesses, we also build your dream
          websites
        </h1>
        <p data-aos='zoom-in'>
          Apart from Business registration services, we also help you build
          solution by offering web development services that project your
          business and services
        </p>

        <div className='link-btn'>
          <Link to='https://wa.me/message/KTFL2G2JM3JTP1' data-aos='zoom-out'>
            <FaWhatsapp />
            Chat with an Expert
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevSection;
