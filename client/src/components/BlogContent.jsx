import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PostImageUpload from '../pages/PostImageUpload';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogContent = ({ _id, title, body, date, author, photo }) => {
  return (
    <div className='blog-card'>
      <PostImageUpload postId={_id} />
      {photo && (
        <div className='blog-card__image'>
          <img src={`http://localhost:3300/images/${photo}`} alt={title} />
        </div>
      )}
      <div className='blog-card__content'>
        <div className='blog-card__meta'>
          <span className='blog-card__author'>{author}</span>
          <span className='blog-card__date'>
            <CiCalendarDate /> {formatDate(date)}
          </span>
        </div>
        <h2 className='blog-card__title'>
          <Link to={`/blog/${_id}`}>{title}</Link>
        </h2>
        <p
          className='blog-card__excerpt'
          dangerouslySetInnerHTML={{ __html: `${body.substring(0, 150)}...` }}
        />
        <Link to={`/blog/${_id}`} className='blog-card__link'>
          Read More
        </Link>
      </div>
    </div>
  );
};

BlogContent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export default BlogContent;
