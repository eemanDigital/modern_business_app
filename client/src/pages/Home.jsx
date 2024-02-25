import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useScroll } from '../hooks/useScroll.jsx';

import { homeView, packages } from '../data/data.jsx';
import { FaBusinessTime } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdCorporateFare } from 'react-icons/md';
import homepage from '../assets/laptop2.jpg';
import social_net from '../assets/social-net.png';
import Button from '../components/Button.jsx';
import Trust from '../components/company/Trust.jsx';
import { motion } from 'framer-motion';
import { useScrolls } from '../hooks/useScrolls.jsx';
// import { useScroll } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

import '../styles/get-started-support.scss';
import WebDevSection from '../components/WebDevSection.jsx';

function Home() {
  const [toggle, setToggle] = useState(false);
  const { control, ref, scrollVariant } = useScrolls();

  // const { scrollYProgress } = useScroll();

  const variant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };
  // useEffect(() => {
  //   if (inView) {
  //     control.start('visible');
  //   } else {
  //     control.start('hidden');
  //   }
  // }, [control, inView]);
  return (
    <motion.section>
      <div className='home'>
        <div className='wrapper'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            s
            transition={{ duration: 1 }}
            className='texts'>
            <h1>{homeView.title}</h1>
            <p>{homeView.message}</p>
            <Button
              path='/contact-us'
              text='Contact Us'
              className='home-button'
            />
          </motion.div>

          <div className='icons'>
            <FaBusinessTime />
            <CgWebsite />
            <MdCorporateFare />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className='social-img'>
          <img src={social_net} alt='' />
        </motion.div>
      </div>
      {/* </div> */}
      <motion.div
        ref={ref}
        variants={scrollVariant}
        initial='hidden'
        animate={control}
        className='cards-section'>
        <h1>
          We Offer <span>Incorporation Services</span>
        </h1>

        <div id='services' className='card-wrapper'>
          {packages.map((item, index) => {
            return (
              <div className='cards' key={index}>
                {item.icon}
                <h4 onClick={() => setToggle(!toggle)}>{item.title}</h4>
                <div className={`${toggle ? 'open' : 'home-price'}`}>
                  <div className='price'>
                    <span style={{ fontWeight: 'normal' }}>from</span> &#8358;
                    {item.price}k
                  </div>
                  <Link to='/contact-us'> Start Now</Link>
                  {/* <Link> Start Now &#x2192;</Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        variant={variant}
        whileInView={{ scale: 1, transition: { duration: 0.5 } }}
        initial={{ scale: 0 }}
        // initial='hidden'
        // whileInView='visible'
        className='special'>
        <div className='img'>
          <img src={homepage} alt='' />
        </div>
        <div className='contents'>
          <h3>
            Why <span>Register Your Business with Us</span>{' '}
          </h3>
          <p>
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
      </motion.div>

      <WebDevSection />
      <div className='trust-container'>
        <Trust />
      </div>

      {/* <h2>What Are People Saying About Us ?</h2> */}
      {/* <Testimonials /> */}
    </motion.section>
  );
}

export default Home;
