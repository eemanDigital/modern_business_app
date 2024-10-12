import React from 'react';
import {
  FaLaptopCode,
  FaShoppingCart,
  FaBuilding,
  FaUsers,
  FaUser,
  FaBlog,
  FaCalendarAlt,
} from 'react-icons/fa';
import Title from '../components/Title';
import GeneralHero from '../components/GeneralHero';
import laptopImg from '../assets/laptop2.jpg';
import businessImg from '../assets/businessImg.jpg';
import brandImg from '../assets/brandImg.jpg';
import blogImg from '../assets/blogImg.jpg';
import personalImg from '../assets/personalImg.jpg';
import ecommerceImg from '../assets/ecommerce.jpg';
import memberSiteImg from '../assets/memberSiteImg.jpg';
import { webDevFAQs } from '../data/data';

import '../styles/webdev.scss';
import '../styles/webDevHero.scss';
import '../styles/webDevServices.scss';
import WebDevHighlight from '../components/WebDevHighlight';
import Faq from '../components/Faq';

const WebDev = () => {
  const services = [
    {
      title: 'Professional Portfolios',
      icon: <FaLaptopCode />,
      description:
        'Showcase your expertise and convert visitors into clients with engaging portfolios and targeted landing pages.',
      image: personalImg,
    },
    {
      title: 'E-commerce Stores',
      icon: <FaShoppingCart />,
      description:
        'Sell your products directly to customers with user-friendly online stores optimized for seamless transactions and secure payments.',
      image: ecommerceImg,
    },
    {
      title: 'Business Websites',
      icon: <FaBuilding />,
      description:
        'Establish a strong online presence and attract leads with informative and visually appealing business websites tailored to your industry.',
      image: businessImg,
    },
    {
      title: 'Member-Only Platforms',
      icon: <FaUsers />,
      description:
        'Build exclusive communities and manage valuable content with secure member-only platforms.',
      image: memberSiteImg,
    },
    {
      title: 'Personal Branding',
      icon: <FaUser />,
      description:
        'Showcase your talent and stand out from the crowd with personalized websites highlighting your skills and accomplishments.',
      image: brandImg,
    },
    {
      title: 'Blogs and Portfolios',
      icon: <FaBlog />,
      description:
        'Share your passions and build your online presence with captivating blogs and engaging portfolios.',
      image: blogImg,
    },
  ];

  return (
    <section className='webdev'>
      <GeneralHero
        image={laptopImg}
        title='Elevate Your Digital Presence, Cutting-edge web development solutions for your business'
        parentClass='w-feature'
        ctaText='Just A Click Away'
        // hideCta={true}
      />
      <Title text='Web Development Services' />
      <div className='text-content'>
        <h1>
          Unveiling a World of Opportunities: Our Diverse Web Development
          Services
        </h1>
        <p>
          We understand that every business is unique, and no two websites
          should be the same. That&apos;s why we offer a diverse range of web
          development services to ensure your online platform perfectly reflects
          your brand and resonates with your target audience. Here are some of
          the types of websites we can build:
        </p>
      </div>

      <WebDevHighlight />

      <div className='web-dev-services  '>
        {services.map((service, index) => (
          <div key={index} className='service-card'>
            <img
              src={service.image}
              alt={service.title}
              className='card-background'
            />
            <div className='card-overlay'></div>
            <div className='card-icon'>{service.icon}</div>
            <h3 className='card-title'>{service.title}</h3>
            <div className='card-content'>
              <div className='desc_icon'>{service.icon}</div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Title text='Faqs' />
      <div className='p_faq-container'>
        {webDevFAQs.map((faq, index) => (
          <div className='p_faq' key={index}>
            <Faq title={faq.question} description={faq.answer} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDev;
