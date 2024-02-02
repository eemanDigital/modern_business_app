// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
import Aside from '../components/company/Aside';
import Trust from '../components/company/Trust';
import PostIncorporation from '../components/PostIncorporation';
import { pre_inc_service } from '../data/data';
import { packages } from '../data/data';
import Packages from '../components/company/Packages';
import Button from '../components/Button';

const Company = () => {
  // const company_packages = packages.slice(0, 2);

  return (
    <section className='company-section'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Company</h1>
          <p>
            A Company is a separate legal entity that can shield the owners from
            personal liability and company debts. As a separate entity, it can
            buy real estate, enter into contracts, sue and be sued completely
            separately from its owners. Also, money can be raised easier via the
            sale of stock; its ownership can be transferred via the transfer of
            stock; the duration of the corporation is perpetual (the business
            can continue regardless of ownership); and the tax advantages can be
            considerable (i.e. you are able to deduct many business expenses,
            healthcare programs, etc. that other legal entities cannot). Income
            is reported completely separate via a tax return for the
            corporation.
            <Link to='#'>Learn more about company</Link>
          </p>
          <div className='how-to-start'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='#'>Start Now</Link>
          </div>
        </div>

        {pre_inc_service.map((item, index) => {
          if (index === 0) {
            // Render only the first price
            return <Aside key={index} price={item.price} title={item.title} />;
          }
          return null; // Render nothing for other prices
        })}
      </div>
      <Trust />
      <div className='packages'>
        {packages.slice(0, 2).map((item, index) => {
          return (
            <Packages
              key={index}
              title={item.title}
              price={item.price}
              benefits={item.benefits}
            />
          );
        })}
      </div>
      {/* <Link> Start Now &#x2192;</Link> */}
      <Button text='Start Now' icons='&#x2192;' />

      <div className='trust-container'>
        <div className='custom'>
          <div className='custom-text'>
            <h1>
              Other Types of Company<span className=' arrow-right'></span>
            </h1>
            <h4>
              We can also help you with the registration of specialised
              companies such as:
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
              <Link to='#'>Click here for full list</Link>
              <Link to='#'>Make Your Offer</Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <PostIncorporation />
    </section>
  );
};

export default Company;
