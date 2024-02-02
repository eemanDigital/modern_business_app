// import { RxEyeOpen } from 'react-icons/rx';
// import { SlLike } from 'react-icons/sl';
// import { FaRegCommentAlt } from 'react-icons/fa';
import { CiCalendarDate } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import formatDate from '../lib/formattedDate';

const BlogContent = (props) => {
  // console.log(props);
  // const { id, img, title, description, author, date, likes, views } = props;
  const { _id, title, body, date, author, photo } = props;
  // console.log(photo);
  return (
    <div className='blog-wrapper'>
      {photo && (
        <img src={`http://localhost:3300/images/${photo}`} alt={title} />
      )}
      <div className='blog-content-text'>
        <div className='date_author'>
          <p>By: {author}</p>
          <p>
            <CiCalendarDate /> {formatDate(date)}
          </p>
        </div>
        <h1>
          <Link to={_id}>{title}</Link>
        </h1>
        <p>{body.substring(0, 100)}...</p>

        {/* <div className='blog_content_icons'>
          <span>
            <RxEyeOpen /> {views} |
          </span>
          <span>
            <SlLike /> {likes} |
          </span>

          <span>
            <FaRegCommentAlt />
          </span>
        </div> */}

        <Link to={`/blog/${_id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogContent;
