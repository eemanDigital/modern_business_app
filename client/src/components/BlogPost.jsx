import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import placeholderImg from '../assets/placeholderImg.jpg';

import '../styles/blog.scss';

const baseUrl = import.meta.env.VITE_BASE_URL;

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogPost = ({ _id, title, body, date, author, photo, isFeatured }) => {
  return (
    <div className={`blog-post ${isFeatured ? 'featured' : ''}`}>
      <div className='blog-post__image'>
        <img
          src={photo ? `${baseUrl}images/${photo}` : placeholderImg}
          alt={title}
        />
      </div>
      <div className='blog-post__content'>
        <h2 className='blog-post__title'>
          <Link to={`/blog/${_id}`}>{title}</Link>
        </h2>
        <div className='blog-post__meta'>
          <span className='blog-post__author'>{author}</span>
          <span className='blog-post__date'>
            <CiCalendarDate /> {formatDate(date)}
          </span>
        </div>
        <p
          className='blog-post__excerpt'
          dangerouslySetInnerHTML={{
            __html: `${body.substring(0, isFeatured ? 300 : 150)}...`,
          }}
        />
        <Link to={`/blog/${_id}`} className='blog-post__link'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
