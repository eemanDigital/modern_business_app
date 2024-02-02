import { testimonials } from '../data/data';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import '../styles/testimonials.scss';

const Testimonials = () => {
  return (
    <>
      <div className='testimonials'>
        <h2>What Are People Saying About Us ?</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
          autoPlay={true}
          interval={5000}>
          {testimonials.map((el, index) => {
            return (
              <>
                <img src={el.image} alt={el.name} />
                <div key={index} className='myCarousel'>
                  <h3>{el.name}</h3>
                  <h4>{el.profession}</h4>
                  <p>{el.message}</p>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Testimonials;
