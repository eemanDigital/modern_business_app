import React from 'react';
import Faq from '../components/Faq';
import { packages } from '../data/data';
import GeneralHero from '../components/GeneralHero';
import man from '../assets/man_outside.jpg';
import { faqs } from '../data/data';
import Title from '../components/Title';
import Packages from '../components/Packages';

import '../styles/pricing_hero.scss';
import '../styles/pricing.scss';
import PopularProducts from '../components/PopularProduct';

const Pricing = () => {
  return (
    <>
      <GeneralHero
        image={man}
        title='We offer the best packages for your needs'
        parentClass='pr-feature'
        hideCta={true}
      />
      <Title text='Pricing' />
      <div className='pricing-container'>
        {packages?.map((item, index) => (
          <Packages
            key={index}
            title={item.title}
            price={item.price}
            benefits={item.benefits}
          />
        ))}
      </div>

      <Title text='Faqs' />
      <div className='p_faq-container'>
        {faqs.map((faq, index) => (
          <div className='p_faq' key={index}>
            <Faq title={faq.question} description={faq.answer} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
