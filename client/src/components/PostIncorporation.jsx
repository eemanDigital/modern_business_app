import React from 'react';
import { post_inc_services } from '../data/data';
import { Link } from 'react-router-dom';
import Title from './Title';
import '../styles/post_inc.scss';

const PostIncorporation = () => {
  return (
    <section className='post-incorporation'>
      <div className='container'>
        <Title text='Post' span='Incorporation Services' />
        <p className='description'>
          If you have a company or business name already registered/incorporated
          and you want to make any change, our teams of accredited CAC experts
          are on standby to help you at affordable prices.
        </p>
        <div className='table-container'>
          <table className='services-table'>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {post_inc_services.map((item, index) => (
                <tr key={index}>
                  <td>{item.serviceName}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to='/contact-us' className='cta-button'>
          Start Now <span className='arrow'>→</span>
        </Link>
      </div>
    </section>
  );
};

export default PostIncorporation;
