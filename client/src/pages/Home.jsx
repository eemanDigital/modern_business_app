import { packages } from '../data/data.jsx';
import Trust from '../components/Trust.jsx';
// import WebDevSection from '../components/WebDevSection.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';

import Visitors from '../components/Visitors.jsx';
import Testimonial from '../components/Testimonials.jsx';
import HomePageFeature from '../components/HomePageFeature.jsx';
import ContactUs from '../components/ContactUs.jsx';

function Home() {
  return (
    <section className='home-section'>
      <Hero />
      <Services packages={packages} />
      <HomePageFeature />
      <Visitors />
      <Testimonial />
      <ContactUs />
      {/* <Trust /> */}
    </section>
  );
}

export default Home;
