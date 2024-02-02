// import Description from '../../components/company/Description';
import { Link } from 'react-router-dom';
// import Aside from '../../components/company/Aside';
import Trust from '../components/company/Trust';
import PostIncorporation from '../components/PostIncorporation';
// import { pre_inc_service } from '../../              /data';
import Packages from '../components/company/Packages';
import { packages } from '../data/data';
import partner from '../assets/partner.svg';
import Button from '../components/Button';

import '../styles/partnership.scss';

const Partnership = () => {
  return (
    <section className='company-section'>
      <div className='comp-container'>
        <div className='text-1'>
          <h1>Partnership Registration</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit in
            libero officia ipsa maiores voluptates consequuntur unde qui
            assumenda, suscipit fugiat quasi modi animi ex hic rem eius
            voluptatibus facilis, illum ullam sint aliquid esse! Dolore
            quibusdam ut sit non necessitatibus dolores tempora officiis eaque
            officia doloribus modi quis natus unde error blanditiis, neque quas
            quidem amet ducimus quia explicabo veritatis quasi nesciunt est?
            Odit, accusantium optio? Sapiente ad cum quia optio pariatur saepe
            repellendus velit suscipit molestias illo, excepturi deserunt! Ab
            ullam minima voluptatem, cum amet nesciunt assumenda fugiat labore
            dolorem, dolor expedita architecto sapiente id delectus unde
            accusantium atque dicta. Dolorum iure quia porro minus consectetur
            ducimus ut assumenda, voluptatum eum error? Cumque mollitia sed
            fugiat animi atque tenetur ea distinctio magni iusto saepe
            blanditiis id, architecto laborum, fugit odio dolor doloribus nisi
            veritatis ab. Vero incidunt officiis ea labore rem! Ad ex cum enim
            harum quidem omnis culpa, fugiat expedita tempore, deserunt, sint
            atque dicta. Necessitatibus eveniet omnis quam dolores asperiores
            repellendus quia cumque nemo, id laudantium amet temporibus ducimus
            molestiae earum atque. Doloremque porro reiciendis veniam ipsam
            mollitia iusto culpa quibusdam cumque dolorem aut aliquam, nisi
            animi incidunt fugit harum nulla eos atque consequatur. Odio,
            mollitia.
            <Link to='#'>Learn more about company</Link>
          </p>
          <div className='how-to-start'>
            <h4>How to get started</h4>

            <p>
              You can start right now. We can form your Corporation of any type
            </p>

            <Link to='#'>Start Now</Link>
          </div>
        </div>
        <div>
          <div className='partnership background'>
            <img src={partner} alt='partnership-image' />
          </div>
        </div>
      </div>

      <Trust />

      <div className='packages'>
        {packages.slice(4, 7).map((item, index) => {
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
      <Button text='Start Now' icons='&#x2192;' />

      <PostIncorporation />
    </section>
  );
};

export default Partnership;
