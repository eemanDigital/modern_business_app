// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import Trust from '../components/Trust';
import PostIncorporation from '../components/PostIncorporation';
import { pre_inc_service } from '../data/data';
import { packages } from '../data/data';
import Packages from '../components/Packages';
import ngo_img from '../assets/ngo_img.svg';
import Button from '../components/Button';

const Ngo = () => {
  // const company_packages = packages.slice(0, 2);

  return (
    <section className='company-section ngo'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Incorporated Trustees</h1>
          <p>
            <p data-aos='fade-in'>
              In Nigeria, a non-governmental organization (NGO) can be
              registered as an incorporated trustee under part F of the
              Companies and Allied Matters Act (CAMA) 2020. Registering a
              non-profit organization as an incorporated trustee grants it legal
              personality. This means that the organization can sue and be sued
              independently, and its members are not personally liable for the
              organization&apos;s obligations or legal actions.
            </p>

            <p data-aos='fade-in'>
              This type of organization focuses on social or public benefit
              rather than generating profit. Here&apos;s a breakdown:
            </p>

            <ul>
              <li>
                <strong>Key Characteristics:</strong>
                <ul>
                  <li data-aos='fade-in'>
                    <strong>Non-Profit:</strong> Does not aim to make profits
                    but reinvest resources back into its goals.
                  </li>
                  <li data-aos='fade-in'>
                    <strong>Legal Entity:</strong> Holds a separate legal
                    identity from its members, offering liability protection.
                  </li>
                  <li data-aos='fade-in'>
                    <strong>Tax-Exempt:</strong> May be entitled to tax
                    exemptions depending on its activities and registration with
                    relevant authorities.
                  </li>
                  <li data-aos='fade-in'>
                    <strong>Membership-Based:</strong> Usually managed by a
                    board of trustees elected by its members.
                  </li>
                </ul>
              </li>
              <li data-aos='fade-in'>
                <strong>Common Forms:</strong> Churches, mosques, NGOs, social
                clubs, alumni associations, community groups. etc.
              </li>
            </ul>

            {/* <Link to='#'>Learn more about company</Link> */}
          </p>
          <div className='how-to-start' data-aos='fade-in'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='#'>Start Now</Link>
            {/* <Button text='Start Now' /> */}
          </div>
        </div>

        {pre_inc_service.map((item, index) => {
          if (index === 3) {
            // Render only the first price
            return <Aside key={index} price={item.price} title={item.title} />;
          }
          return null; // Render nothing for other prices
        })}
      </div>
      <Trust />
      <div className='packages'>
        {packages.slice(3, 4).map((item, index) => {
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

      <div className='ngo-col-section'>
        <div className='ngo-col-wrapper'>
          <div className='ngo-col-text'>
            <h1>Register your NGO from any part of the world</h1>
            <p>We provide maximum support to achieving your goals</p>

            <Link to='#'>Start now</Link>
            <Link to='#'>Free Consultation</Link>
          </div>
          <div className='ngo-image'>
            <img src={ngo_img} alt='' />
            {/* <p>it can be done</p> */}
          </div>
        </div>
      </div>

      <PostIncorporation />
    </section>
  );
};

export default Ngo;
