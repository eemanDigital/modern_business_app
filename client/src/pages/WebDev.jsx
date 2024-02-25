// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
// import Aside from '../../components/company/Aside';
import Trust from '../components/company/Trust';
import PostIncorporation from '../components/PostIncorporation';
// import { pre_inc_service } from '../../              /data';
import Packages from '../components/company/Packages';
import { packages } from '../data/data';
import partner from '../assets/partner.svg';
import WebDevSection from '../components/WebDevSection';
import Aside from '../components/company/Aside';

import '../styles/webdev.scss';

const WebDev = () => {
  return (
    <>
      <section className='company-section webdev'>
        <WebDevSection />

        <div className='comp-container'>
          <div className='text-1'>
            <h1>Unleash Your Online Potential</h1>

            <p>
              In today&apos;s digital age, having a strong online presence is
              crucial for businesses of all sizes. Whether you're a seasoned
              entrepreneur or just starting out, a well-designed website can be
              your most valuable marketing tool. At [Your Company Name], we
              specialize in crafting unique and effective websites that cater to
              your specific needs and goals.
            </p>
            <h2>
              Unveiling a World of Opportunities: Our Diverse Web Development
              Services
            </h2>
            <p>
              We understand that every business is unique, and no two websites
              should be the same. That's why we offer a diverse range of web
              development services to ensure your online platform perfectly
              reflects your brand and resonates with your target audience. Here
              are some of the types of websites we can build:
            </p>
            <h3>For Businesses:</h3>
            <ul>
              <li>
                Professional Portfolios and Landing Pages: Showcase your
                expertise and convert visitors into clients with engaging
                portfolios and targeted landing pages.
              </li>
              <li>
                E-commerce Stores: Sell your products directly to customers with
                user-friendly online stores optimized for seamless transactions
                and secure payments.
              </li>
              <li>
                Business Websites: Establish a strong online presence and
                attract leads with informative and visually appealing business
                websites tailored to your industry.
              </li>
              <li>
                Member-Only Platforms: Build exclusive communities and manage
                valuable content with secure member-only platforms.
              </li>
            </ul>
            <h3>For Individuals:</h3>
            <ul>
              <li>
                Personal Branding Websites: Showcase your talent and stand out
                from the crowd with personalized websites highlighting your
                skills and accomplishments.
              </li>
              <li>
                Blogs and Portfolios: Share your passions and build your online
                presence with captivating blogs and engaging portfolios.
              </li>
              <li>
                Event Websites: Create buzz and manage registrations for your
                events with dedicated event websites offering all essential
                information and forms.
              </li>
            </ul>
            <h2>Beyond Design: Our Comprehensive Approach</h2>
            <p>
              We go beyond simply building beautiful websites. We offer a
              comprehensive approach that includes:
            </p>
            <ul>
              <li>
                SEO Optimization: Ensure your website ranks high in search
                results and attracts organic traffic.
              </li>
              <li>
                Mobile-Responsiveness: Guarantee a seamless user experience
                across all devices.
              </li>
              <li>
                Content Management Systems (CMS): Empower you to easily update
                and manage your website content.
              </li>
              <li>
                Ongoing Maintenance and Support: Enjoy worry-free website
                management with our reliable support services.
              </li>
            </ul>
            <h2>Unlocking Your Vision: Partner with Us Today</h2>
            <p>
              At [Your Company Name], we're passionate about helping you achieve
              your digital goals. We collaborate closely with each client to
              understand their vision, target audience, and unique requirements.
              By leveraging our expertise and a wide range of web development
              services, we build websites that not only look stunning but also
              deliver tangible results.
            </p>
            <p>
              Contact us today for a free consultation and let's turn your
              online vision into reality!
            </p>
            <div className='how-to-start'>
              <h4>How to get started</h4>

              <p>
                You can start right now. We can form your Corporation of any
                type
              </p>

              <Link to='#'>Start Now</Link>
            </div>
            {/* <Aside /> */}
          </div>
          <div>
            <div className='WebDev background'>
              <img src={partner} alt='WebDev-image' />
            </div>
          </div>
        </div>

        <Trust />

        <div className='packages'>
          {packages.slice(7, 8).map((item, index) => {
            return (
              <Packages
                key={index}
                title={item.title}
                price={item.price}
                benefits={item.benefits}
              />
            );
          })}
        </div>

        <PostIncorporation />
      </section>
    </>
  );
};

export default WebDev;
