import PropTypes from 'prop-types';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import placeholderImg from '../assets/placeholderImg.jpg';
import formatDate from '../lib/formattedDate';

const PostCard = ({ posts }) => {
  console.log(posts[0].photo);

  return (
    <div className='post-grid'>
      {posts?.map((post) => (
        <article key={post._id} className='post-card'>
          <div className='post-image'>
            <img src={post?.photo} alt={post?.title} />
          </div>
          <div className='post-content'>
            <span className='post-category'>{post.category}</span>
            <h2 className='post-title'>
              <Link to={`/blog/${post.slug}/${post._id}`}>{post.title}</Link>
            </h2>
            <div className='post-meta'>
              <span className='post-author'>
                {`${post?.author?.firstName} ${post?.author?.lastName}`}
              </span>
              <span className='post-date'>
                <CiCalendarDate /> {formatDate(post.date)}
              </span>
            </div>
            <p className='post-excerpt'>
              {truncateText(htmlToText(post.body, { wordwrap: 100 }), 100)}
            </p>
            <Link to={`/blog/${post.slug}/${post._id}`} className='read-more'>
              Read More
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostCard;
