import { PiCertificateThin } from 'react-icons/pi';
import ourStory from '../assets/about-story.svg';
import Trust from '../components/Trust';
import '../styles/aboutUs.scss';
import Title from '../components/Title';

function AboutUs() {
  return (
    <section className='about-us'>
      <div className='about_hero'>
        <div className='about_hero__content'>
          <h1 className='about_hero__title' data-aos='zoom-out'>
            Digital Solutions for Your Business
          </h1>
          <p className='about_hero__text' data-aos='zoom-out'>
            Empowering your digital transformation with innovative, tailored
            solutions.
          </p>
        </div>
      </div>

      <div className='about_container'>
        <div className='certified' data-aos='zoom-out'>
          <PiCertificateThin className='certified__icon' />
          <div className='certified__content'>
            <span className='certified__text'>Certified Excellence</span>
            <p className='certified__description'>
              Founded on the principles of innovation, integrity, and
              uncompromising quality.
            </p>
          </div>
        </div>

        <div className='story'>
          <div className='story__content'>
            {/* <h2 className='section-title'>Our Story</h2> */}
            <Title text='Our' span='Story' />
            <p className='story__text'>
              <p data-aos='fade-in'>
                At Eeman Digital and IT Solutions our journey into the realm of
                web development and business registration services was inspired
                by a profound passion for technology and a relentless drive to
                empower businesses to succeed in the digital era.
              </p>

              <p data-aos='fade-in'>
                Born out of a vision to revolutionize the way businesses
                establish their online presence and streamline their operations,
                Eeman Digital and IT Solutions was founded on the principles of
                innovation, integrity, and excellence. We embarked on this
                entrepreneurial journey with a clear mission in mind – to make a
                meaningful impact on businesses of all sizes, across industries.
              </p>

              <p data-aos='fade-in'>
                From the inception of Eeman Digital and IT Solutions, our focus
                has been on understanding the unique needs and aspirations of
                our clients and translating them into tangible, transformative
                solutions. We believe in the power of collaboration, creativity,
                and continuous learning to drive sustainable growth and success
                for our clients.
              </p>
              <p data-aos='fade-in'>
                At Eeman Digital and IT Solutions, we are committed to staying
                at the forefront of technological advancements, embracing
                emerging trends, and adapting to evolving market dynamics. Our
                dedicated team of professionals brings a wealth of experience,
                expertise, and enthusiasm to every project, ensuring that we
                deliver unparalleled quality, innovation, and value to our
                clients.
              </p>

              <p data-aos='fade-in'>
                As we continue to expand our horizons and embark on new
                endeavors, our unwavering dedication to client satisfaction,
                ethical business practices, and social responsibility remains
                steadfast. We are deeply grateful for the trust and confidence
                that our clients place in us, and we remain committed to
                exceeding their expectations, every step of the way.
              </p>
              <p data-aos='fade-in'>
                With a relentless pursuit of excellence and a steadfast
                commitment to our core values, we are poised to chart new
                heights of success, forge lasting partnerships, and leave a
                lasting legacy in the ever-evolving landscape of web development
                and business services.Welcome to Eeman Digital and IT Solutions
                – where innovation meets impact, and possibilities are
                limitless.
              </p>
            </p>
            {/* <a href='#' className='btn btn--primary'>
              Learn More
            </a> */}
          </div>
          <img
            src={ourStory}
            alt='Our Story'
            className='story__image'
            data-aos='zoom-in'
          />
        </div>

        <div className='mission-vision'>
          <div className='mission-vision__item'>
            <h3 className='mission-vision__title' data-aos='fade-in'>
              Our Mission
            </h3>
            <p className='mission-vision__text' data-aos='fade-in'>
              To empower businesses worldwide with innovative web solutions that
              catalyze growth and drive digital transformation.
            </p>
          </div>
          <div className='mission-vision__item' data-aos='fade-in'>
            <h3 className='mission-vision__title'>Our Vision</h3>
            <p className='mission-vision__text'>
              To be the trusted ally for businesses seeking to thrive in the
              digital landscape, known for our expertise, creativity, and
              client-centric approach.
            </p>
          </div>
          <div className='mission-vision__item' data-aos='fade-in'>
            <h3 className='mission-vision__title'>Our Values</h3>
            <ul className='mission-vision__list'>
              <li>Unwavering Quality</li>
              <li>Client-Centric Innovation</li>
              <li>Integrity in Every Action</li>
              <li>Continuous Learning</li>
            </ul>
          </div>
        </div>

        <Trust />
      </div>
    </section>
  );
}

export default AboutUs;
