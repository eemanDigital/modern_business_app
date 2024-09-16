import { packages } from '../data/data.jsx';
import Trust from '../components/Trust.jsx';
import WebDevSection from '../components/WebDevSection.jsx';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Feature from '../components/Feature.jsx';
import Visitors from '../components/Visitors.jsx';
import PricingPlan from '../components/PricingPlans.jsx';

function Home() {
  return (
    <section className='home-section'>
      <Hero />
      <Services packages={packages} />
      <Feature />
      <PricingPlan packages={packages} />

      <Visitors />
      <WebDevSection />

      <Trust />
    </section>
  );
}

export default Home;
