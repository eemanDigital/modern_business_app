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

  console.log(body);
  return (
    <div className='blog-wrapper'>
      <div className='blog-content'>
        {photo && (
          <img src={`http://localhost:3300/images/${photo}`} alt={title} />
        )}
        <div className='date_author'>
          <p>By: {author}</p>
          <p>
            <CiCalendarDate /> {formatDate(date)}
          </p>
        </div>
        <div className='title-desc'>
          <h1>
            <Link to={_id}>{title}</Link>
          </h1>
          {/* <p>{body.substring(0, 100)}...</p> */}
          <p dangerouslySetInnerHTML={{ __html: body.substring(0, 100) }} />
        </div>
        <Link to={`/blog/${_id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default BlogContent;
