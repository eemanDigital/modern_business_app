import { Link } from 'react-router-dom';
import { GrUserExpert } from 'react-icons/gr';
import { IoTimeOutline } from 'react-icons/io5';
import manSky from '../assets/man_skyscrapper.jpg';
import scrapper from '../assets/blue_scrapper.jpg';
import GeneralHero from '../components/GeneralHero';
import Packages from '../components/Packages';
import OtherCompanyType from '../components/OtherCompanyType';
import PostIncorporation from '../components/PostIncorporation';
import { packages } from '../data/data';
import '../styles/company.scss';
import { FaChartLine, FaHandshakeAngle, FaUsersGear } from 'react-icons/fa6';
import { FaFileAlt, FaShieldAlt } from 'react-icons/fa';
import Title from '../components/Title';
import '../styles/companyHero.scss';

const Company = () => {
  const listContent = (
    <>
      <li>
        <GrUserExpert />
        Expert guidance
      </li>
      <li>
        <IoTimeOutline />
        Time-saving solutions
      </li>
      <li>
        <FaUsersGear />
        Tailored services
      </li>
    </>
  );

  const benefits = (
    <ul className='benefits-list'>
      <li>
        <GrUserExpert />
        <div>
          <h2>Attract Investors</h2>
          <p>
            Raise funds by appealing to investors who prefer companies that can
            issue stock.
          </p>
        </div>
      </li>
      <li>
        <FaFileAlt />
        <div>
          <h2>Look More Official</h2>
          <p>
            Enhance credibility and professionalism, which attracts and retains
            top talent.
          </p>
        </div>
      </li>
      <li>
        <FaUsersGear />
        <div>
          <h2>Tailored Services</h2>
          <p>
            Corporations are perceived as credible, making it easier to partner
            with other companies.
          </p>
        </div>
      </li>
      <li>
        <FaHandshakeAngle />
        <div>
          <h2>Lifetime Support</h2>
          <p>
            Corporations offer liability protection, shielding owners from
            business debts.
          </p>
        </div>
      </li>
      <li>
        <FaShieldAlt />
        <div>
          <h2>Limited Liability</h2>
          <p>
            Owners' personal assets are protected from business liabilities and
            lawsuits.
          </p>
        </div>
      </li>
      <li>
        <FaChartLine />
        <div>
          <h2>Separate Legal Entity</h2>
          <p>
            A company is distinct from its owners, making it easier to raise
            funds and enter contracts.
          </p>
        </div>
      </li>
    </ul>
  );

  return (
    <section className='company-section'>
      <GeneralHero
        image={manSky}
        title="It's never been easier to incorporate a business"
        listContent={listContent}
        ctaText='Give Us a Try'
        parentClass='c-feature'
      />
      <div className='comp-container'>
        <div className='content'>
          <div>
            <h1>Why Form a Company?</h1>
            <p>
              A company limited by shares is a structure where the liability of
              owners is limited to their share investment, protecting personal
              assets.
            </p>
            <p>
              <strong>Key Advantages of Forming a Company:</strong>
            </p>
            {benefits}
            <p>Ready to start? Let us help you form your corporation today!</p>
            <Link to='/contact-us' className='start-now-link'>
              Start Now
            </Link>
          </div>
        </div>
        <img src={scrapper} alt='Skyscraper' className='coy_img' />
      </div>
      <Title text='Pricing' />

      <div className='packages company-package'>
        {packages.slice(0, 2).map((item, index) => (
          <Packages
            key={index}
            title={item.title}
            price={item.price}
            benefits={item.benefits}
          />
        ))}
      </div>

      <div className='trust-container'>
        <OtherCompanyType />
      </div>

      <PostIncorporation />
    </section>
  );
};

export default Company;
