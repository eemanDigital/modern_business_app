import { PiCertificateThin } from 'react-icons/pi';
import ourStory from '../assets/about-story.svg';
import { motion } from 'framer-motion';
import { useScrolls } from '../hooks/useScrolls';
// import Button from '../components/Button';
// import TrustCards from '../components/TrustCards';
import Trust from '../components/company/Trust';
// import { trust_card_data } from './../data/data';
import '../styles/aboutUs.scss';

function AboutUs() {
  const { ref, control, scrollVariant } = useScrolls();

  return (
    <section className='about-us-container'>
      <div className='about-us-img-container'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          s
          transition={{ duration: 1 }}
          className='about-bold-text'>
          <h1>Digital Solutions for Your Business</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          s
          transition={{ duration: 1 }}
          className='about-small-text'>
          <p>
            our focus has been on understanding the unique needs and aspirations
            of our clients and translating them into tangible, transformative
            solutions
          </p>
        </motion.div>
      </div>
      <div className='about-us-certified-div'>
        <span>
          <PiCertificateThin /> Certified
        </span>

        <span>
          Eeman Digital and IT Solutions was founded on the principles of
          innovation, integrity, and excellence.
        </span>
      </div>

      <motion.div
        ref={ref}
        variants={scrollVariant}
        initial='hidden'
        animate={control}
        className='our-story-container'>
        <div className='our-story-text'>
          <h1>Our Story</h1>
          <p>
            At Eeman Digital and IT Solutions our journey into the realm of web
            development and business registration services was inspired by a
            profound passion for technology and a relentless drive to empower
            businesses to succeed in the digital era.
          </p>

          <p>
            Born out of a vision to revolutionize the way businesses establish
            their online presence and streamline their operations, Eeman Digital
            and IT Solutions was founded on the principles of innovation,
            integrity, and excellence. We embarked on this entrepreneurial
            journey with a clear mission in mind – to make a meaningful impact
            on businesses of all sizes, across industries.
          </p>

          <p>
            From the inception of Eeman Digital and IT Solutions, our focus has
            been on understanding the unique needs and aspirations of our
            clients and translating them into tangible, transformative
            solutions. We believe in the power of collaboration, creativity, and
            continuous learning to drive sustainable growth and success for our
            clients.
          </p>
          <p>
            At Eeman Digital and IT Solutions, we are committed to staying at
            the forefront of technological advancements, embracing emerging
            trends, and adapting to evolving market dynamics. Our dedicated team
            of professionals brings a wealth of experience, expertise, and
            enthusiasm to every project, ensuring that we deliver unparalleled
            quality, innovation, and value to our clients.
          </p>

          <p>
            As we continue to expand our horizons and embark on new endeavors,
            our unwavering dedication to client satisfaction, ethical business
            practices, and social responsibility remains steadfast. We are
            deeply grateful for the trust and confidence that our clients place
            in us, and we remain committed to exceeding their expectations,
            every step of the way.
          </p>
          <p>
            With a relentless pursuit of excellence and a steadfast commitment
            to our core values, we are poised to chart new heights of success,
            forge lasting partnerships, and leave a lasting legacy in the
            ever-evolving landscape of web development and business
            services.Welcome to Eeman Digital and IT Solutions – where
            innovation meets impact, and possibilities are limitless.
          </p>
          {/* <Button text='Click' /> */}
        </div>
        <img src={ourStory} alt='' />
      </motion.div>

      {/* <div className='trust-cards'>
        {trust_card_data.map((item, index) => {
          return <TrustCards key={index} {...item} />;
        })}
      </div> */}

      <div className='mission-vision'>
        <div className='mission'>
          <h3>Our Mission</h3>
          <p>
            To empower businesses worldwide by providing seamless, innovative,
            and tailored web development solutions that catalyze growth, foster
            innovation, and drive digital transformation.
          </p>
        </div>
        <div className='vision'>
          <h3>Our Vision</h3>
          <p>
            Our mission is to leverage cutting-edge technologies, creative
            expertise, and client-centric strategies to deliver exceptional web
            development and business registration services. We aim to cultivate
            long-term partnerships, exceed client expectations, and become the
            trusted ally for businesses seeking to thrive in the digital
            landscape.
          </p>
        </div>
        <div className='value'>
          <ul>
            <h3>Our Values</h3>
            <li>Quality Delivery</li>
            <li>Customer Satisfaction</li>
            <li>Lorem ipsum.</li>
            <li>Customer Satisfaction</li>
          </ul>
        </div>
      </div>
      <div className='trust-container'>
        <Trust />
      </div>
    </section>
  );
}

export default AboutUs;
