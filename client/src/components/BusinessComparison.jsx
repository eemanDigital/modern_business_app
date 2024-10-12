import React from 'react';
import {
  FaBuilding,
  FaUser,
  FaFileAlt,
  FaBalanceScale,
  FaChartLine,
} from 'react-icons/fa';
import '../styles/businessComparison.scss';

const BusinessComparison = () => {
  const comparisons = [
    {
      title: 'Legal Status',
      icon: <FaBalanceScale />,
      businessName: 'Does not separate the business from the owner(s)',
      corporation:
        'Independent legal entity, offering limited liability protection',
      elaboration:
        'This means that in a business name structure, the owner is personally responsible for all debts and legal issues of the business. In a corporation, the company itself bears this responsibility, protecting the personal assets of shareholders.',
    },
    {
      title: 'Ownership Structure',
      icon: <FaUser />,
      businessName: 'Typically used by sole proprietors or partnerships',
      corporation:
        'Involves shareholders, with liability limited to their investment',
      elaboration:
        'Business names are simpler structures suitable for individual entrepreneurs or small partnerships. Corporations can have multiple shareholders, making them more suitable for larger or growing businesses with multiple investors.',
    },
    {
      title: 'Registration Simplicity',
      icon: <FaFileAlt />,
      businessName: 'Faster, simpler, and more affordable to register',
      corporation: 'Requires more documentation and compliance',
      elaboration:
        'Registering a business name usually involves a simple form and fee. Incorporating requires articles of incorporation, bylaws, and potentially lawyer involvement, making it a more complex process.',
    },
    {
      title: 'Taxation',
      icon: <FaChartLine />,
      businessName: "Income reported on owner's personal tax return",
      corporation: 'Taxed separately from owners',
      elaboration:
        'Business name owners report all profits as personal income. Corporations pay corporate tax on profits, and shareholders pay personal tax on dividends, potentially leading to double taxation but also offering more tax planning opportunities.',
    },
    {
      title: 'Perception',
      icon: <FaBuilding />,
      businessName: 'Enhances credibility compared to unregistered businesses',
      corporation: 'Generally seen as more structured and reliable',
      elaboration:
        'While both structures improve business credibility, corporations are often perceived as more established and professional, which can be advantageous when dealing with clients, partners, or investors.',
    },
  ];

  return (
    <div className='business-comparison'>
      <h2>Key Differences Between a Business Name and a Corporation</h2>
      <table>
        <thead>
          <tr>
            <th>Aspect</th>
            <th>Business Name</th>
            <th>Corporation</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className='aspect'>
                  {item.icon}
                  <strong>{item.title}</strong>
                </td>
                <td>{item.businessName}</td>
                <td>{item.corporation}</td>
              </tr>
              <tr className='elaboration'>
                <td colSpan='3'>{item.elaboration}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessComparison;
