import { post_inc_services } from '../data/data';
import { Link } from 'react-router-dom';
const PostIncorporation = () => {
  return (
    <section className='post-inc-container'>
      <h1>Post Incorporation Services</h1>
      <p>
        If you have a company or business name already registered/incorporated
        and you want to make Any change, our teams of accredited CAC experts are
        on the standby to help you at affordable price.
      </p>
      <table className='post-inc-card'>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {post_inc_services.map((item, index) => (
            <tr className='post-inc_card_col' key={index}>
              <td>{item.serviceName}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to='https://wa.me/message/KTFL2G2JM3JTP1'> Start Now &#x2192;</Link>
    </section>
  );
};

export default PostIncorporation;
