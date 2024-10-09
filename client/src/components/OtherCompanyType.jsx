import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFileAlt,
  FaWhatsapp,
  FaBuilding,
  FaPlane,
  FaChartLine,
  FaSeedling,
  FaShip,
  FaMoneyBillWave,
} from 'react-icons/fa';
import '../styles/OtherCompanyType.scss';

const OtherCompanyType = () => {
  const specializedCompanies = [
    { name: 'Over One Million share capital', icon: <FaBuilding /> },
    { name: 'Travel Agency', icon: <FaPlane /> },
    { name: 'Corporate investment adviser', icon: <FaChartLine /> },
    {
      name: 'Agricultural seeds, productions, processing and marketing',
      icon: <FaSeedling />,
    },
    { name: 'Shipping company/agent', icon: <FaShip /> },
    { name: 'Bureau de change', icon: <FaMoneyBillWave /> },
  ];

  return (
    <section className='other-company-type'>
      <div className='container'>
        <h1 className='title'>Other Types of Company</h1>
        <div className='content'>
          <div className='info'>
            <p className='subtitle'>
              We can also help you with the registration of specialised
              companies such as:
            </p>
            <ul className='company-list'>
              {specializedCompanies.map((company, index) => (
                <li key={index}>
                  <span className='icon'>{company.icon}</span>
                  <span className='name'>{company.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='actions'>
            <Link
              to='https://drive.google.com/file/d/1KGseyyrUB0BCVYrFlwWUgFbKOWSgrnkg/view?usp=sharing'
              target='_blank'
              className='btn btn-primary'>
              <FaFileAlt /> View Full List
            </Link>
            <Link
              to='https://wa.me/message/KTFL2G2JM3JTP1'
              className='btn btn-secondary'>
              <FaWhatsapp /> Make Your Offer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherCompanyType;
