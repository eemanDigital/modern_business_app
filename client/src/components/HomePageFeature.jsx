// HomePageFeature.jsx
import React from 'react';
import Feature from './Feature';
import homepage from '../assets/laptop2.jpg';

const HomePageFeature = () => {
  return (
    <Feature
      image={homepage}
      alt='Why you need us'
      title={{
        before: 'Why',
        highlight: 'Register Your Business',
        after: 'with Us',
      }}
      description='Registering your business with us opens doors to endless possibilities. Gain credibility, legal protection, and access to funding. We streamline the registration process, ensuring compliance and peace of mind.'
      ctaText='Register Now'
    />
  );
};

export default HomePageFeature;
