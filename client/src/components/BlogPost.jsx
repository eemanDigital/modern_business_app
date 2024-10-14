import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import placeholderImg from '../assets/placeholderImg.jpg';
import PropTypes from 'prop-types';
import { htmlToText } from 'html-to-text';
import '../styles/blog.scss';

// Helper function to format dates
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// BlogPost component
const BlogPost = ({ _id, title, body, date, author, photo, isFeatured }) => {
  // Convert HTML content to plain text
  const plainTextBody = htmlToText(body, {
    wordwrap: 130,
  });

  // Truncate the plain text body
  const truncatedBody = plainTextBody.substring(0, isFeatured ? 300 : 150);

  return (
    <div className={`blog-post ${isFeatured ? 'featured' : ''}`}>
      <div className='blog-post__image'>
        <img src={photo || placeholderImg} alt={title} />
      </div>
      <div className='blog-post__content'>
        <h2 className='blog-post__title'>
          <Link to={`/blog/${_id}`}>{title}</Link>
        </h2>
        <div className='blog-post__meta'>
          <span className='blog-post__author'>
            Author: {`${author?.firstName} ${author?.lastName}`}
          </span>
          <span className='blog-post__date'>
            <CiCalendarDate /> {formatDate(date)}
          </span>
        </div>
        <p className='blog-post__excerpt'>
          {truncatedBody}
          {plainTextBody.length > truncatedBody.length && '...'}
        </p>
        <Link to={`/blog/${_id}`} className='blog-post__read-more'>
          Read More
        </Link>
      </div>
    </div>
  );
};
BlogPost.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  photo: PropTypes.string,
  isFeatured: PropTypes.bool,
};

export default BlogPost;
