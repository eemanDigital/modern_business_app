import { PiCertificateThin } from 'react-icons/pi';
import aboutImg from '../assets/homepage1.jpg';
import '../styles/aboutUs.scss';
import Button from '../components/Button';
import TrustCards from '../components/TrustCards';

function AboutUs() {
  return (
    <section className='about-us-container'>
      <div className='about-us-img-container'>
        <div className='about-bold-text'>
          <h1>Digital Solutions for Your Business</h1>
        </div>
        <div className='about-small-text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            fuga.
          </p>
        </div>
      </div>
      <div className='about-us-certified-div'>
        <span>
          <PiCertificateThin /> Certified
        </span>

        <span>
          {' '}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel a
          voluptates fuga neque quo dolore tempora unde maxime labore modi.
        </span>
      </div>

      <div className='our-story-container'>
        {/* <img src='' alt='' /> */}

        <div className='box'>
          <div className='box-icon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='42'
              height='42'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z'></path>
            </svg>
          </div>
          <div className='box-label'>MASTERclassName</div>
          <div className='box-title'>Placid.app Editor Basics ✨</div>
          <div className='box-image'>
            <img src={aboutImg} alt='' />
          </div>
          <div className='studio-button'>
            <div className='studio-button-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'>
                <circle cx='12' cy='12' r='10'></circle>
              </svg>
            </div>
            <div className='studio-button-label'>Get in Touch</div>
          </div>
        </div>

        <div className='our-story-text'>
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            asperiores amet fuga ad? Magni maiores esse aut minus aperiam
            aspernatur exercitationem, facere, corrupti porro error cum tempora!
            Sed, esse ducimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat labore commodi aperiam rerum hic
            temporibus non eveniet accusantium eos architecto.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            asperiores amet fuga ad? Magni maiores esse aut minus aperiam
            aspernatur exercitationem, facere, corrupti porro error cum tempora!
            Sed, esse ducimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repellat labore commodi aperiam rerum hic
            temporibus non eveniet accusantium eos architecto.
          </p>

          <Button text='Click' />
        </div>
      </div>

      <TrustCards />

      <div className='mission-vision'>
        <div className='mission'>
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quidem reprehenderit repudiandae quisquam tempora numquam, deserunt
            quas aliquam iste, vero quia, ipsum asperiores cum assumenda!
          </p>
        </div>
        <div className='vision'>
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            quidem reprehenderit repudiandae quisquam tempora numquam, deserunt
            quas aliquam iste, vero quia, ipsum asperiores cum assumenda!
          </p>
        </div>
        <div className='value'>
          <h3>Our Values</h3>
          <p>Quality Delivery</p>
          <p>Customer Satisfaction</p>
          <p>Lorem ipsum.</p>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
