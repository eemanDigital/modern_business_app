// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
import Aside from '../components/Aside';
import Trust from '../components/Trust';
import PostIncorporation from '../components/PostIncorporation';
import { pre_inc_service } from '../data/data';
import Packages from '../components/Packages';
import { packages } from '../data/data';
import dream_img from '../assets/dream.svg';

const Business = () => {
  return (
    <section className='company-section'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Business Name</h1>
          <p>
            <strong>A &quot;business name&quot; in Nigeria</strong>, as defined
            by the Corporate Affairs Commission (CAC), is the official name
            under which your business operates and conducts its activities. It
            serves as a unique identifier for your company, separate from your
            personal name, and should ideally reflect your brand identity and
            the nature of your business.
          </p>

          <p>
            Here are some key points to remember about business names in
            Nigeria:
          </p>

          <ul>
            <li>
              <strong>Importance:</strong>
              <ul>
                <li>
                  <strong>Legal Recognition:</strong> Registering your business
                  name with CAC is essential for legal recognition and
                  operation. It separates your personal assets from business
                  liabilities.
                </li>
                <li>
                  <strong>Credibility & Trust:</strong> A registered name
                  enhances professionalism and builds trust with customers and
                  partners.
                </li>
                <li>
                  <strong>Funding:</strong> Many financial institutions require
                  registration before providing loans or investments.
                </li>
                <li>
                  <strong>Trademark Protection:</strong> Registration helps
                  prevent others from using similar names that could infringe on
                  your brand.
                </li>
              </ul>
            </li>
          </ul>

          <div className='how-to-start'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='#'>Start Now</Link>
          </div>
        </div>
        {pre_inc_service.map((item, index) => {
          if (index === 2) {
            // Render only the first price
            return <Aside key={index} price={item.price} title={item.title} />;
          }
          return null; // Render nothing for other prices
        })}
      </div>

      {/* <Trust /> */}
      <div className='packages'>
        {packages.slice(2, 3).map((item, index) => {
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
      <div className='dream-section'>
        <div className='dream-wrapper'>
          <div className='dream-text'>
            <h1>Register your deram business and keep it 100% complaint</h1>
            <p>Turn you ideam into your dream business</p>

            <Link to='#'>Start now</Link>
            <Link to='#'>Free Consultation</Link>
          </div>
          <div className='dream-image'>
            <img src={dream_img} alt='' />
            {/* <p>it can be done</p> */}
          </div>
        </div>
      </div>

      <PostIncorporation />
    </section>
  );
};

export default Business;
