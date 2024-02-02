// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
import Aside from '../components/company/Aside';
import Trust from '../components/company/Trust';
import PostIncorporation from '../components/PostIncorporation';
import { pre_inc_service } from '../data/data';
import { packages } from '../data/data';
import Packages from '../components/company/Packages';
import ngo_img from '../assets/ngo_img.svg';
import Button from '../components/Button';

const Ngo = () => {
  // const company_packages = packages.slice(0, 2);

  return (
    <section className='company-section'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Incorporated Trustees</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur, optio quod debitis ratione vel explicabo corporis
            mollitia dolores necessitatibus iusto eius facere expedita velit
            autem fugit. Laboriosam amet iste ipsa tempore quidem porro, ad in
            praesentium sapiente eius voluptatum voluptatibus recusandae aliquid
            officia facilis. Illum deleniti, facere temporibus illo possimus
            consectetur? Harum quaerat accusamus laudantium pariatur at, modi
            eos porro totam aliquam consequatur numquam distinctio unde nulla
            hic quisquam ratione impedit delectus asperiores reprehenderit a,
            quae sint expedita. Cumque vel rem quod vero ducimus officiis
            provident nam, blanditiis repellat, distinctio voluptate temporibus
            sunt laudantium nulla reprehenderit corporis eum harum sit quos
            beatae fugit praesentium explicabo! Nemo optio, quisquam facilis,
            obcaecati aperiam quaerat fuga iste facere libero in odio veniam
            magnam.
            <Link to='#'>Learn more about company</Link>
          </p>
          <div className='how-to-start'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='#'>Start Now</Link>
            {/* <Button text='Start Now' /> */}
          </div>
        </div>

        {pre_inc_service.map((item, index) => {
          if (index === 3) {
            // Render only the first price
            return <Aside key={index} price={item.price} title={item.title} />;
          }
          return null; // Render nothing for other prices
        })}
      </div>
      <Trust />
      <div className='packages'>
        {packages.slice(3, 4).map((item, index) => {
          return (
            <Packages
              key={index}
              title={item.title}
              price={item.price}
              benefits={item.benefits}
            />
          );
        })}

        <div>
          <Button text='Start Now' icons='&#x2192;' />
        </div>
      </div>
      {/* <Link> Start Now </Link> */}

      <div className='ngo-col-section'>
        <div className='ngo-col-wrapper'>
          <div className='ngo-col-text'>
            <h1>Register your NGO from any part of the world</h1>
            <p>We provide maximum support to achieving your goals</p>

            <Link to='#'>Start now</Link>
            <Link to='#'>Free Consultation</Link>
          </div>
          <div className='ngo-image'>
            <img src={ngo_img} alt='' />
            {/* <p>it can be done</p> */}
          </div>
        </div>
      </div>

      <PostIncorporation />
    </section>
  );
};

export default Ngo;
