import { Link } from 'react-router-dom';
import { FaXTwitter } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  const date = new Date();
  const currentDate = date.getUTCFullYear();

  // console.log(currentDate);
  return (
    <footer>
      <div className='wrapper'>
        <div className='col-1'>
          <h3>Contact</h3>
          <div className='icons'>
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
          <p>+234 9021649021</p>
        </div>

        <div className='col-2'>
          <h3>What we offer</h3>
          <Link>Company Registration</Link>
          <Link>Business Name Registration</Link>
          <Link>NGO Registration</Link>
          <Link>Web Development</Link>
          <Link>Business Legal Documents</Link>
        </div>

        <div className='col-3'>
          <h3>Legal</h3>
          <Link>Terms and Conditions</Link>
          <Link>Privacy Policy</Link>
        </div>
        <div className='logo'>
          {' '}
          <h3>eeman</h3>
        </div>
      </div>
      <div className='caveat'>
        <p
          style={{
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '12px',
          }}>
          Caveat
        </p>
        <p
          style={{
            fontSize: '12px',
          }}>
          eeman is NOT a Law Firm and does not engage in legal practice or legal
          advisory or consultancy services. eeman is a platform enabling simple
          and convenient legal service based on user preference. Nothing on this
          website constitutes legal advice or creates a lawyer-client
          relationship. Please contact your lawyer for legal advice.
        </p>
        <p className='copyright'>
          Copyright &copy;{currentDate} All Rights Reserved.{' '}
          <span>
            <Link href='https://storyset.com/work'>
              Work illustrations by Storyset
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
