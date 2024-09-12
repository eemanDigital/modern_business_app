import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import PostIncorporation from '../components/PostIncorporation';
import { pre_inc_service } from '../data/data';
import { packages } from '../data/data';
import Packages from '../components/Packages';
import OtherCompanyType from '../components/OtherCompanyType';

const Company = () => {
  // const company_packages = packages.slice(0, 2);

  return (
    <section className='company-section'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Company</h1>
          <p>
            A company limited by shares is a type of business structure where
            the liability of its owners, known as shareholders, is limited to
            the amount of money they invested in the company through purchasing
            shares. This means their personal assets (like their house or car)
            are protected if the company encounters financial difficulties or
            declares bankruptcy.
            <p>
              <strong>
                Here are some key features of a company limited by shares:
              </strong>{' '}
            </p>
            <p>
              <strong>Limited Liability: </strong>This is the biggest advantage
              for owners. They only risk losing the money they invested in the
              company, not their personal wealth.
            </p>
            <p>
              <strong>Separate Legal Entity:</strong> The company is treated as
              a separate legal entity from its owners, meaning it can enter
              contracts, own property, and incur debts in its own name.
            </p>
            <p>
              <strong>Share Capital:</strong>
              The company raises capital by issuing shares. Each share
              represents a portion of ownership in the company. Shareholders
              have voting rights based on the number of shares they own.
            </p>
            <p>
              <strong>Management: </strong>The company is managed by directors,
              who are appointed by the shareholders. They are responsible for
              making decisions about the day-to-day operations of the business.
            </p>
            <h4> Types of Companies Limited by Shares:</h4>
            <p>
              <strong> Private Limited Company:</strong>
              Shares are not offered to the public and there are restrictions on
              transferring ownership. This is the most common type of company
              limited by shares in many countries.
            </p>
            <p>
              <strong>Public Limited Company:</strong> Shares can be listed on a
              stock exchange and traded by the public. These companies typically
              have larger numbers of shareholders.
            </p>
            <p>
              <strong>Registration:</strong> Companies limited by shares need to
              be registered with a government agency, like the Corporate Affairs
              Commission (CAC) in Nigeria.
            </p>
            Overall, a company limited by shares offers a balance between
            personal liability protection and access to capital, making it a
            popular choice for many businesses.
            <Link to='#'>Learn more about company</Link>
          </p>
          <div className='how-to-start'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='/contact-us'>Start Now</Link>
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

      <div className='packages company-package'>
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
      {/* <Trust /> */}

      <div className='trust-container'>
        <OtherCompanyType />
      </div>
      <div></div>

      <PostIncorporation />
    </section>
  );
};

export default Company;
