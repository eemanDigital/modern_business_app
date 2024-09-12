import homepage from '../assets/laptop2.jpg';
import '../styles/feature.scss';

const Feature = () => {
  return (
    <>
      <div className='feature'>
        <div className='feature__image'>
          <img src={homepage} alt='Business Registration' />
        </div>
        <div className='feature__content'>
          <h3 className='feature__title'>
            Why <span>Register Your Business with Us</span>
          </h3>
          <p className='feature__text'>
            Registering your business with us opens doors to endless
            possibilities. Gain credibility, legal protection, and access to
            funding. We streamline the registration process, ensuring compliance
            and peace of mind. Our experts navigate complexities, saving you
            time and resources. Whether you're a budding entrepreneur or a
            seasoned NGO, our tailored solutions cater to your unique needs.
            Stand out in the market with our professional website building
            services included. Join us in shaping your vision into reality.
            Register your business today and embark on a journey of success with
            confidence.
          </p>
        </div>
      </div>
    </>
  );
};

export default Feature;
