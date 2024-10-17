import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import placeholderImg from '../assets/placeholderImg.jpg';
import formatDate from '../lib/formattedDate';
import { truncateText } from '../lib/truncateText';
import { htmlToText } from 'html-to-text';

const FeaturedPost = ({ post }) => (
  <div className='featured-post'>
    <div className='post-content'>
      <div
        className='post-image'
        style={{ backgroundImage: `url(${post.photo || placeholderImg})` }}
      />
      <div className='post-details'>
        <h2 className='post-title'>
          <Link to={`/blog/${post.slug}/${post._id}`}>{post.title}</Link>
        </h2>
        <div className='post-meta'>
          <span className='post-author'>
            {`${post.author.firstName} ${post.author.lastName}`}
          </span>
          <span className='post-date'>
            <CiCalendarDate /> {formatDate(post.date)}
          </span>
        </div>
        <p className='post-excerpt'>
          {truncateText(htmlToText(post.body, { wordwrap: 100 }), 300)}
        </p>
        <Link to={`/blog/${post.slug}/${post._id}`} className='read-more'>
          Read Full Article
        </Link>
      </div>
    </div>
  </div>
);

export default FeaturedPost;
