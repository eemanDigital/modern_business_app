import { useEffect, useState } from 'react';
import { heroContent } from '../data/data';
import Button from './Button.jsx';
import '../styles/hero.scss';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroContent.length);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className='hero'>
        {heroContent.map((content, index) => (
          <div
            key={index}
            className={`hero__slide ${index === currentSlide ? 'active' : ''}`}>
            <img
              src={content.image}
              alt={content.title}
              className='hero__background'
            />
            <div className='hero__content'>
              <h1 className='hero__title'>{content.title}</h1>
              <p className='hero__subtitle'>{content.subtitle}</p>
              <Button
                path='/contact-us'
                text='Get Started'
                className='hero__cta'
              />
            </div>
          </div>
        ))}
        <div className='hero__nav'>
          {heroContent.map((_, index) => (
            <div
              key={index}
              className={`hero__nav-dot ${
                index === currentSlide ? 'active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
