import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { heroContent } from '../data/data';
import Button from './Button';
import '../styles/hero.scss';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContent.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const titles = document.querySelectorAll('.hero__title');
    titles.forEach((title, index) => {
      title.classList.toggle('active', index === currentSlide);
    });
  }, [currentSlide]);

  return (
    <div className='hero-container'>
      <div className='hero'>
        <div className='hero__content-wrapper'>
          {heroContent.map((content, index) => (
            <div
              key={index}
              className={`hero__slide ${
                index === currentSlide ? 'active' : ''
              }`}>
              <div className='hero__content'>
                <div className='hero__welcome'>
                  <h3>at eemanTech we</h3>
                  <FaArrowRight />
                </div>
                <h1 className='hero__title'>{content.title}</h1>
                <p className='hero__subtitle'>{content.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='hero__btns'>
          <Button path='/contact-us' text='Get Started' className='hero__cta' />
          <Button
            path='https://search.cac.gov.ng'
            text='Business Name Availability'
            className='hero__avaBtn'
            icon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
