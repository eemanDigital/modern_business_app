import { Link } from 'react-router-dom';

import '../styles/OtherCompanyType.scss';

const OtherCompanyType = () => {
  return (
    <>
      <div className='custom'>
        <div className='custom-text'>
          <h1>
            Other Types of Company<span className=' arrow-right'></span>
          </h1>
          <h4>
            We can also help you with the registration of specialised companies
            such as:
          </h4>
          <ul>
            <li> Over One Million share capital</li>
            <li>Travel Agency</li>
            <li>Corporate investment adviser</li>
            <li>Agricultural seeds, productions, processing and marketing</li>
            <li>Shipping company/agent</li>
            <li>Bureau de change</li>
          </ul>
          <div className='custom-links'>
            {' '}
            <Link
              to='https://drive.google.com/file/d/1KGseyyrUB0BCVYrFlwWUgFbKOWSgrnkg/view?usp=sharing'
              target='_blank'>
              Click here for full list
            </Link>
            <Link to='https://wa.me/message/KTFL2G2JM3JTP1'>
              Make Your Offer
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherCompanyType;
