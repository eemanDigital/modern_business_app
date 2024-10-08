// Feature.jsx
import React from 'react';
import '../styles/feature.scss';
import { GrUserExpert } from 'react-icons/gr';
import { IoTimeOutline } from 'react-icons/io5';
import { FaUsersGear, FaHandshakeAngle } from 'react-icons/fa6';

const Feature = ({ image, alt, title, description, ctaText }) => {
  return (
    <section className='feature'>
      <div className='feature__container'>
        <div className='feature__image-wrapper'>
          <img src={image} alt={alt} className='feature__image' />
        </div>
        <div className='feature__content'>
          <h2 className='feature__title'>
            {title.before} <span>{title.highlight}</span> {title.after}
          </h2>
          <p className='feature__text'>{description}</p>
          <ul className='feature__list'>
            <li>
              <GrUserExpert />
              Expert guidance
            </li>
            <li>
              <IoTimeOutline />
              Time-saving solutions
            </li>
            <li>
              <FaUsersGear />
              Tailored services
            </li>
            <li>
              <FaHandshakeAngle />
              Life-time Support
            </li>
          </ul>
          <button className='feature__cta'>{ctaText}</button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
