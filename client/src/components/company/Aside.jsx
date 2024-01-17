import { PiCertificateThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const Aside = ({ price, title }) => {
  return (
    <div className='aside'>
      <div className='aside-container'>
        <h3>{title}</h3>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
            />
          </svg>
        </span>
        <strong>
          From &#8358; <span className='amount'>{price}</span>
        </strong>

        <Link> Start Now &#x2192;</Link>
      </div>
      <div className='why-us'>
        <h3>Why You Should Engage Us</h3>
        <Link to='#'>Why we are better</Link>
        <Link>Clients&apos; Testimonials</Link>
        <Link to='#'>Others</Link>
        <div className='accredited'>
          <strong>CAC Accredited</strong>

          <PiCertificateThin />
        </div>
      </div>
    </div>
  );
};

export default Aside;
