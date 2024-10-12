import React from 'react';
import '../styles/webDevHighlight.scss';

const WebDevHighlight = () => {
  return (
    <section className='web-dev-highlight'>
      <div className='web-dev-highlight__pattern'></div>
      <div className='web-dev-highlight__content'>
        <h2 className='web-dev-highlight__title' data-aos='fade-up'>
          Elevate Your Digital Presence
        </h2>
        <p
          className='web-dev-highlight__subtitle'
          data-aos='fade-up'
          data-aos-delay='100'>
          Cutting-edge web development solutions for your business
        </p>
        <ul
          className='web-dev-highlight__features'
          data-aos='fade-up'
          data-aos-delay='200'>
          <li>Responsive Design</li>
          <li>Custom Web Applications</li>
          <li>E-commerce Solutions</li>
          <li>Performance Optimization</li>
        </ul>
        <button
          className='web-dev-highlight__cta'
          data-aos='fade-up'
          data-aos-delay='300'>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default WebDevHighlight;
