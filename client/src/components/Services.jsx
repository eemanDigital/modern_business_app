import React from 'react';
import '../styles/services.scss';
import Title from './Title';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Services = ({ packages }) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

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
    <div className='services'>
      <Title text='Our' span='Services' />
      <div className='slider-container'>
        <Slider {...settings}>
          {packages.map((item, index) => (
            <div className='services__card' key={index}>
              <div className='services__card-body'>
                <div className='services__icon'>{item.icon}</div>
                <h4 className='services__card-header'>{item.title}</h4>
                <p className='desc'>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-next`}
      style={{ ...style }}
      onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-arrow-prev`}
      style={{ ...style }}
      onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export default Services;
