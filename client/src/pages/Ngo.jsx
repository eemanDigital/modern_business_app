import React from 'react';
import { Link } from 'react-router-dom';

import PostIncorporation from '../components/PostIncorporation';

import Packages from '../components/Packages';
import GeneralHero from '../components/GeneralHero';
import man_office from '../assets/man_office.jpg';
import ngoImg from '../assets/ngo_hands.jpg';
import '../styles/ngo_hero.scss';
import '../styles/ngo.scss';
import {
  RiMoneyDollarCircleLine,
  RiBuilding2Line,
  RiGovernmentLine,
  RiTeamLine,
} from 'react-icons/ri';
import PopularProducts from '../components/PopularProduct';

const characteristics = [
  {
    icon: <RiMoneyDollarCircleLine />,
    title: 'Non-Profit',
    description:
      'Does not aim to make profits but reinvest resources back into its goals.',
  },
  {
    icon: <RiBuilding2Line />,
    title: 'Legal Entity',
    description:
      'Holds a separate legal identity from its members, offering liability protection.',
  },
  {
    icon: <RiGovernmentLine />,
    title: 'Tax-Exempt',
    description:
      'May be entitled to tax exemptions depending on its activities and registration with relevant authorities.',
  },
  {
    icon: <RiTeamLine />,
    title: 'Membership-Based',
    description:
      'Usually managed by a board of trustees elected by its members.',
  },
];

const Ngo = () => {
  return (
    <>
      <GeneralHero
        image={man_office}
        title='Non Governmental Organisation'
        parentClass='n-feature'
        hideCta={true}
      />
      <section className='ngo'>
        <div className='ngo__content'>
          <h1>Incorporated Trustees</h1>
          <div className='ngo__explained'>
            <div className='ngo__text'>
              <p>
                In Nigeria, a non-governmental organization (NGO) can be
                registered as an incorporated trustee under part F of the
                Companies and Allied Matters Act (CAMA) 2020. Registering a
                non-profit organization as an incorporated trustee grants it
                legal personality. This means that the organization can sue and
                be sued independently, and its members are not personally liable
                for the organization's obligations or legal actions.
              </p>
              <p>
                This type of organization focuses on social or public benefit
                rather than generating profit.{' '}
                <div className='ngo__forms'>
                  <h2>Common Forms</h2>
                  <p>
                    Churches, mosques, NGOs, social clubs, alumni associations,
                    community groups, etc.
                  </p>
                </div>
              </p>
            </div>
            <div className='ngo__image-container'>
              <img
                src={ngoImg}
                alt='NGO representation'
                className='ngo__image'
              />
              <div className='ngo__image-overlay'>
                <i className='fas fa-hands-helping ngo__icon'></i>
              </div>
            </div>
          </div>

          <div className='ngo__characteristics'>
            <h2>Key Characteristics</h2>
            <ul className='ngo__list'>
              {characteristics.map((item, index) => (
                <li key={index} className='ngo__list-item'>
                  <div className='ngo__list-icon'>{item.icon}</div>
                  <div className='ngo__list-content'>
                    <strong>{item.title}:</strong> {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PopularProducts />

        <div className='ngo__register'>
          <div className='ngo__register-content'>
            <h2>Register your NGO from any part of the world</h2>
            <p>We provide maximum support to achieving your goals</p>
            <div className='ngo__register-buttons'>
              <Link to='/contact-us' className='ngo__button'>
                Start now
              </Link>
              <Link
                to='/contact-us'
                className='ngo__button ngo__button--secondary'>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <PostIncorporation />
      </section>
    </>
  );
};

export default Ngo;
