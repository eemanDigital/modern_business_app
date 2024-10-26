import React from 'react';
import '../styles/webDevHighlight.scss';
import Button from './Button';

const WebDevHighlight = () => {
  return (
    <section className='web-dev-highlight'>
      <div className='web-dev-highlight__pattern'></div>
      <div className='web-dev-highlight__content'>
        <h2 className='web-dev-highlight__title'>
          Elevate Your Digital Presence
        </h2>
        <p className='web-dev-highlight__subtitle'>
          Cutting-edge web development solutions for your business
        </p>
        <ul className='web-dev-highlight__features'>
          <li>Responsive Design</li>
          <li>Custom Web Applications</li>
          <li>E-commerce Solutions</li>
          <li>Performance Optimization</li>
        </ul>

        <Button
          path='/contact-us'
          text='Get Started'
          className='web-dev-highlight__cta'
        />
      </div>
    </section>
  );
};

export default WebDevHighlight;
