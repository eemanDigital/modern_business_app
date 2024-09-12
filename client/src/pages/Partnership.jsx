import { Link } from 'react-router-dom';
import Trust from '../components/Trust';
import PostIncorporation from '../components/PostIncorporation';
import Aside from '../components/Aside';
import Packages from '../components/Packages';
import { packages } from '../data/data';
import partner from '../assets/partner.svg';
import Button from '../components/Button';

import '../styles/partnership.scss';

const PARTNERSHIP_DATA = [
  {
    title: 'Partnership',
    price: '25k',
    img: partner,
  },
];

const Partnership = () => {
  return (
    <section className='company-section partnership'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Partnership Registration</h1>
          <p>
            Under the Companies and Allied Matters Act (CAMA) 2020, a
            partnership is an agreement between two or more individuals to carry
            on a business in common with a view to profit. The key features of a
            partnership include:
          </p>

          <ul>
            <li>
              <strong>Mutual agency:</strong> Each partner acts as an agent for
              the other partners, binding the partnership in dealings with third
              parties.
            </li>
            <li>
              <strong>Joint and several liability:</strong> All partners are
              personally liable for the debts and obligations of the
              partnership, regardless of their individual contribution.
            </li>
            <li>
              <strong>Sharing of profits and losses:</strong> Profits and losses
              are shared among the partners according to the agreed-upon terms,
              or in equal proportions if no agreement exists.
            </li>
          </ul>

          <p>
            <strong>Types of Partnerships in Nigeria:</strong>
          </p>

          <ol>
            <li>
              <strong>General Partnership:</strong> This is the most common type
              of partnership, with the characteristics mentioned above. There
              are no formalities required to form a general partnership, though
              having a written agreement is highly recommended.
            </li>
            <li>
              <strong>Limited Liability Partnership (LLP):</strong> An LLP
              offers limited liability to its partners similar to a limited
              liability company. While some partners can manage the business
              (general partners), others can enjoy limited liability with no
              involvement in management (limited partners). LLPs require
              registration with the Corporate Affairs Commission (CAC).
            </li>
            <li>
              <strong>Limited Partnership (LP):</strong> This type has at least
              one general partner with unlimited liability and at least one
              limited partner with limited liability similar to an LLP. The
              limited partner cannot take part in management and their liability
              is limited to their investment in the partnership. LPs also
              require registration with the CAC.
            </li>
          </ol>

          <p>
            <strong>Additional points to note:</strong>
          </p>

          <ul>
            <li>
              <strong>Partnership Agreement:</strong> While not mandatory,
              having a written partnership agreement is vital for outlining the
              rights, responsibilities, profit-sharing, and dispute resolution
              mechanisms among partners.
            </li>
            <li>
              <strong>Registration:</strong> General partnerships do not require
              registration, but LLPs and LPs must register with the CAC.
            </li>
            <li>
              <strong>Taxation:</strong> Partnerships are not separate tax
              entities; each partner reports their share of the
              partnership&apos;s income or loss on their individual tax returns.
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
        <div>
          {/* <div className='partnership background'>
            <img src={partner} alt='partnership-image' />
          </div> */}
        </div>
        {PARTNERSHIP_DATA.map((item, index) => {
          if (index === 0) {
            // Render only the first price
            return <Aside key={index} {...item} />;
          }
          return null; // Render nothing for other prices
        })}
      </div>

      <Trust />

      <div className='packages partnership-packages'>
        {packages.slice(4, 7).map((item, index) => {
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
      <div style={{ marginBottom: '2rem' }} className='partnership-btn'>
        <Button text='Start Now' icons='&#x2192;' />
      </div>

      <PostIncorporation />
    </section>
  );
};

export default Partnership;
