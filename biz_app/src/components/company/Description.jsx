import { Link } from 'react-router-dom';
import Aside from './Aside';
import Trust from './Trust';
// import { cards } from '../constants/data.jsx';
// import '../constants/styles/company.scss';

const Description = () => {
  return (
    <>
      <div className='container'>
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
        <Aside />
      </div>
      <Trust />
    </>
  );
};

export default Description;
