import { post_inc_services } from '../data/data';
import { Link } from 'react-router-dom';
import Title from './Title';
const PostIncorporation = () => {
  return (
    <section className='post-inc-container' data-aos='zoom-out'>
      <Title text='Post' span='Incorporation Services' />
      <p data-aos='zoom-in'>
        If you have a company or business name already registered/incorporated
        and you want to make Any change, our teams of accredited CAC experts are
        on the standby to help you at affordable price.
      </p>
      <table className='post-inc-card'>
        <thead>
          <tr data-aos='zoom-out'>
            <th>Service Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody data-aos='fade'>
          {post_inc_services.map((item, index) => (
            <tr className='post-inc_card_col' key={index}>
              <td>{item.serviceName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to='/contact-us'> Start Now &#x2192;</Link>
    </section>
  );
};

export default PostIncorporation;
