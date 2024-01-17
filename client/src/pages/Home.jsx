import { Link, Outlet, NavLink } from 'react-router-dom';
import { homeView, cards, accordion } from '../constants/data.jsx';
import { FaBusinessTime, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdCorporateFare } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

import homepage from '../assets/laptop2.jpg';
import social_net from '../assets/social-net.png';
import img1 from '../assets/man.jpg';
import { useState } from 'react';

function Home() {
  const [open, setOpen] = useState(Array(accordion.length).fill(false));

  const handleToggleAccordion = (index) => {
    setOpen((prevOpen) => {
      const newOpenState = [...prevOpen];
      newOpenState[index] = !newOpenState[index];
      return newOpenState;
    });
  };
  return (
    <article>
      <div className='home'>
        <div className='wrapper'>
          <div className='container'>
            <div className='texts'>
              <h1>{homeView.title}</h1>
              <p>{homeView.message}</p>
              <button>
                <Link to='#'>Contact Us</Link>
              </button>
            </div>

            <div className='icons'>
              <FaBusinessTime />
              <CgWebsite />
              <MdCorporateFare />
            </div>
          </div>
        </div>
        <div className='social-img'>
          <img src={social_net} alt='' />
        </div>
      </div>
      <div className='card-wrapper'>
        {cards.map((card, index) => {
          return (
            <div className='cards' key={index}>
              {card.icon}
              <h4>{card.name}</h4>
              <div className='home-price'>
                <span>From &#8358;</span>
                <span className='price'>{card.price}k</span>
              </div>

              <Link> Start Now &#x2192;</Link>
            </div>
          );
        })}
      </div>

      <div className='special'>
        <div className='img'>
          <img src={homepage} alt='' />
        </div>
        <div className='contents'>
          <h3>
            Why <span>Choose Us</span>{' '}
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            reiciendis animi veritatis ipsam quidem natus incidunt, maiores
            possimus corrupti neque illum nam aliquid provident soluta rerum?
            Dignissimos aspernatur quibusdam laboriosam sed numquam ipsam, aut
            quis blanditiis modi culpa distinctio quasi fuga voluptatibus ab
            excepturi, harum facere ullam! Vero, officia aspernatur?
          </p>
          <div className='accordion'>
            <h3>Learn the requirements</h3>
            {accordion.map((el, index) => {
              return (
                <div key={index}>
                  <button
                    onClick={() => handleToggleAccordion(index)}
                    className='accordion-btn'>
                    <span className='arrow'>
                      {open[index] ? <FaChevronDown /> : <FaChevronUp />}
                    </span>
                    {/* <span className='arrow'>{}</span> */}
                    {el.title}
                  </button>

                  <div className={open[index] ? 'accordion-content' : ''}>
                    {open[index] &&
                      el.requirements.map((requirement) => (
                        <p key={requirement}>{requirement}</p>
                      ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section className='get-started-support'>
        <h1>Have More Questions, We Have Got You Covered</h1>
        <div className='container'>
          <div className='links'>
            <NavLink
              className={({ isActive }) => `${isActive ? 'active' : ''} link`}>
              {' '}
              Get Started{' '}
            </NavLink>
            <NavLink className='link' to='support'>
              {' '}
              Support
            </NavLink>
            <div className='link disappear' style={{ backgroundColor: 'grey' }}>
              Get Tools{' '}
            </div>
          </div>
          <Outlet />
        </div>
      </section>

      <section className='trust-section'>
        <div className='text'>
          <h3>Offer Business Formation and Filing Services to Your Clients</h3>
          <p>
            Build trust and confidence for your clients by offering business
            filings, annual registration, compliance, and more.
          </p>

          <h3>Pick Your Choice</h3>
          <div className='biz_list'>
            <Link to='#'>Company Registration</Link>
            <Link to='#'>Business Name Registration</Link>
            <Link to='#'>Incorporated Trustees</Link>
            <Link to='#'>Post-incorporation</Link>
            <Link to='#'>Website Development</Link>
            <Link to='#'>Patent Registration</Link>
          </div>

          <div className='link-btn'>
            <Link to='#'>
              <MdOutlineWifiCalling3 />
              Give a call
            </Link>
            <Link to=''>
              <FaWhatsapp />
              Chat with an Expert
            </Link>
          </div>
        </div>
        <div className='img'>
          <img src={img1} alt='' />
        </div>
      </section>
    </article>
  );
}

export default Home;
