import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/testimonials.scss';
import { testimonials } from '../data/data';

const Testimonial = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className='testimonial-section'>
      <h2 className='testimonial-title'>What Our Clients Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-card'>
            <div className='testimonial-content'>
              <FaQuoteLeft className='quote-icon' />
              <p className='testimonial-text'>{testimonial.message}</p>
            </div>
            <div className='testimonial-author'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='author-avatar'
              />
              <div className='author-info'>
                <h4 className='author-name'>{testimonial.name}</h4>
                <p className='author-position'>{testimonial.profession}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
