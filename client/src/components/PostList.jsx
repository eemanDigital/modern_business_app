import React from 'react';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import placeholderImg from '../assets/placeholderImg.jpg';
import PropTypes from 'prop-types';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import '../styles/posts.scss';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const PostCard = ({ post }) => (
  <div className='post-card'>
    <div
      className='post-image'
      style={{ backgroundImage: `url(${post?.photo || placeholderImg})` }}
    />
    <div className='post-details'>
      <h2 className='post-title'>
        <Link to={`/blog/${post?.slug}/${post._id}`}>{post?.title}</Link>
      </h2>
      <div className='post-meta'>
        <span className='post-author'>
          {`${post?.author?.firstName} ${post?.author?.lastName}`}
        </span>
        <span className='post-date'>
          <CiCalendarDate /> {formatDate(post?.date)}
        </span>
      </div>
      <p className='post-excerpt'>
        {truncateText(htmlToText(post?.body, { wordwrap: 100 }), 150)}
      </p>
      <Link to={`/blog/${post?.slug}/${post._id}`} className='read-more'>
        Read More
      </Link>
    </div>
  </div>
);

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

const PostList = ({ posts }) => {
  console.log(posts, 'POST');

  const featuredPost = posts?.find((post) => post.featured);
  const regularPosts = posts?.filter((post) => !post.featured);

  return (
    <div className='blog-container'>
      {featuredPost && <FeaturedPost post={featuredPost} />}
      <div className='post-list'>
        {regularPosts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
      photo: PropTypes.string,
      featured: PropTypes.bool,
    })
  ).isRequired,
};

export default PostList;
