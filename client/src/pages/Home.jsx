import { packages } from '../data/data.jsx';
import Trust from '../components/Trust.jsx';
import WebDevSection from '../components/WebDevSection.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Feature from '../components/Feature.jsx';
import Visitors from '../components/Visitors.jsx';

function Home() {
  return (
    <section className='home-section'>
      <Hero />
      <Services packages={packages} />
      <Feature />
      <Visitors />
      <WebDevSection />
      <div className='trust'>
        <Trust />
      </div>
    </section>
  );
}

export default Home;
