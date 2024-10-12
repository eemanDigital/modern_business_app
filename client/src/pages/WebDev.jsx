import Trust from '../components/Faq';
import PostIncorporation from '../components/PostIncorporation';
import Packages from '../components/Packages';
import { packages } from '../data/data';

import '../styles/webdev.scss';
import Aside from '../components/Aside';
import WebDevHero from '../components/WebDevHero';

const WebDev = () => {
  return (
    <>
      <WebDevHero />
      <section className='company-section webdev'>
        <div className='comp-container'>
          <div className='text-1'>
            <h1 data-aos='fade-in'>Unleash Your Online Potential</h1>

            <p data-aos='fade-in'>
              In today&apos;s digital age, having a strong online presence is
              crucial for businesses of all sizes. Whether you&apos;re a
              seasoned entrepreneur or just starting out, a well-designed
              website can be your most valuable marketing tool. At [Your Company
              Name], we specialize in crafting unique and effective websites
              that cater to your specific needs and goals.
            </p>
            <h2 data-aos='fade-in'>
              Unveiling a World of Opportunities: Our Diverse Web Development
              Services
            </h2>
            <p data-aos='fade-in'>
              We understand that every business is unique, and no two websites
              should be the same. That&apos;s why we offer a diverse range of
              web development services to ensure your online platform perfectly
              reflects your brand and resonates with your target audience. Here
              are some of the types of websites we can build:
            </p>
            <h3 data-aos='fade-in'>For Businesses:</h3>
            <ul>
              <li data-aos='fade-in'>
                Professional Portfolios and Landing Pages: Showcase your
                expertise and convert visitors into clients with engaging
                portfolios and targeted landing pages.
              </li>
              <li data-aos='fade-in'>
                E-commerce Stores: Sell your products directly to customers with
                user-friendly online stores optimized for seamless transactions
                and secure payments.
              </li>
              <li data-aos='fade-in'>
                Business Websites: Establish a strong online presence and
                attract leads with informative and visually appealing business
                websites tailored to your industry.
              </li>
              <li data-aos='fade-in'>
                Member-Only Platforms: Build exclusive communities and manage
                valuable content with secure member-only platforms.
              </li>
            </ul>
            <h3 data-aos='fade-in'>For Individuals:</h3>
            <ul data-aos='fade-in'>
              <li>
                Personal Branding Websites: Showcase your talent and stand out
                from the crowd with personalized websites highlighting your
                skills and accomplishments.
              </li>
              <li data-aos='fade-in'>
                Blogs and Portfolios: Share your passions and build your online
                presence with captivating blogs and engaging portfolios.
              </li>
              <li data-aos='fade-in'>
                Event Websites: Create buzz and manage registrations for your
                events with dedicated event websites offering all essential
                information and forms.
              </li>
            </ul>
            <h2 data-aos='fade-in'>
              Beyond Design: Our Comprehensive Approach
            </h2>
            <p data-aos='fade-in'>
              We go beyond simply building beautiful websites. We offer a
              comprehensive approach that includes:
            </p>
            <ul>
              <li data-aos='fade-in'>
                SEO Optimization: Ensure your website ranks high in search
                results and attracts organic traffic.
              </li>
              <li data-aos='fade-in'>
                Mobile-Responsiveness: Guarantee a seamless user experience
                across all devices.
              </li>
              <li data-aos='fade-in'>
                Content Management Systems (CMS): Empower you to easily update
                and manage your website content.
              </li>
              <li data-aos='fade-in'>
                Ongoing Maintenance and Support: Enjoy worry-free website
                management with our reliable support services.
              </li>
            </ul>
            <h2 data-aos='fade-in'>
              Unlocking Your Vision: Partner with Us Today
            </h2>
            <p data-aos='fade-in'>
              At [Your Company Name], we&apos;re passionate about helping you
              achieve your digital goals. We collaborate closely with each
              client to understand their vision, target audience, and unique
              requirements. By leveraging our expertise and a wide range of web
              development services, we build websites that not only look
              stunning but also deliver tangible results.
            </p>
            <p data-aos='fade-in'>
              Contact us today for a free consultation and let&apos;s turn your
              online vision into reality!
            </p>
          </div>
          <Aside price='50k' title='Web Development' />
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
