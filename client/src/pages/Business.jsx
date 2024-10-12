import React from 'react';
import {
  FaCheckCircle,
  FaGavel,
  FaHandHoldingUsd,
  FaShieldAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PostIncorporation from '../components/PostIncorporation';
import Packages from '../components/Packages';
import { packages } from '../data/data';
import GeneralHero from '../components/GeneralHero';
import businessImg from '../assets/sole_proprietor.jpg';
import '../styles/business.scss';
import '../styles/business-hero.scss';
import BusinessComparison from '../components/BusinessComparison';
import { partnerships } from '../data/data';
import PartnershipCard from '../components/PartnershipCard';

const Business = () => {
  return (
    <>
      <section className='business'>
        <GeneralHero
          image={businessImg}
          title='Sole Proprietorship? We Have Got You Covered'
          parentClass='b-feature'
          ctaText='Just A Click Away'
          hideCta={true}
        />

        <div className='container'>
          <div className='image-wrapper'>
            {/* <img
              src={business}
              alt='Business representation'
              className='responsive-image'
            /> */}
          </div>
          <div className='content'>
            <h1>Business Name</h1>

            <p>
              A <strong>business name</strong> in Nigeria, as defined by the
              Corporate Affairs Commission (CAC), is the official name under
              which a sole proprietor or partnership operates. Unlike a
              corporation, a business name registration does not create a
              separate legal entity. The business is considered an extension of
              the owner(s), meaning the owner(s) are personally liable for the
              business’s debts and obligations.
            </p>

            <p>
              Registering a business name is ideal for small business owners who
              want to operate under a formal name without the complexities of
              incorporation. It provides legal protection for the business’s
              identity and improves credibility.
            </p>

            <p>
              Here are some key points to remember about business names in
              Nigeria:
            </p>
            <div className='cards'>
              <div className='card'>
                <FaGavel className='icon' />
                <div className='text'>
                  <h3>Legal Recognition:</h3>
                  <p>
                    Registering your business name with CAC is essential for
                    legal recognition and operation.
                  </p>
                </div>
              </div>
              <div className='card'>
                <FaCheckCircle className='icon' />
                <div className='text'>
                  <h3>Credibility & Trust:</h3>
                  <p>
                    A registered name enhances professionalism and builds trust
                    with customers and partners.
                  </p>
                </div>
              </div>
              <div className='card'>
                <FaHandHoldingUsd className='icon' />
                <div className='text'>
                  <h3>Funding:</h3>
                  <p>
                    Many financial institutions require registration before
                    providing loans or investments.
                  </p>
                </div>
              </div>
              <div className='card'>
                <FaShieldAlt className='icon' />
                <div className='text'>
                  <h3>Trademark Protection:</h3>
                  <p>
                    Registration helps prevent others from using similar names
                    that could infringe on your brand.
                  </p>
                </div>
              </div>
            </div>
            <div className='how-to-start'>
              <h4>How to get started</h4>
              <p>
                You can start right now. We can form your Corporation of any
                type.
              </p>
              <Link to='#' className='cta-btn'>
                Start Now
              </Link>
            </div>
          </div>
        </div>

        <BusinessComparison />

        <div className='partnership-section'>
          <div className='partnership-content'>
            <h1>We also offer partnership registration services</h1>
            <div className='partnership-cards'>
              {partnerships.map((partnership, index) => (
                <PartnershipCard key={index} {...partnership} />
              ))}
            </div>
            <div className='partnership-cta'>
              <Link to='#' className='cta-btn'>
                Start now
              </Link>
              <Link to='#' className='cta-btn'>
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PostIncorporation />
    </>
  );
};

export default Business;
