import { TbWorldWww } from 'react-icons/tb';

const WebDevHero = () => {
  return (
    <section className='web-dev-hero'>
      <div className='web-dev-hero__content'>
        <h1 className='web-dev-hero__title' data-aos='fade-left'>
          Elevate Your Digital Presence
        </h1>
        <p className='web-dev-hero__subtitle' data-aos='fade-left'>
          Cutting-edge web development solutions for your business
        </p>
        <ul className='web-dev-hero__features' data-aos='fade-right'>
          <li>Responsive Design</li>
          <li>Custom Web Applications</li>
          <li>E-commerce Solutions</li>
          <li>Performance Optimization</li>
        </ul>
        <button className='web-dev-hero__cta'>Get Started</button>
      </div>
      <div className='web-dev-hero__image'>
        {/* Replace with an actual image in your project */}
        {/* <img src='/api/placeholder/500/300' alt='Web Development Services' />
         */}
        <TbWorldWww size={200} data-aos='fade-up' />
      </div>
    </section>
  );
};

export default WebDevHero;
