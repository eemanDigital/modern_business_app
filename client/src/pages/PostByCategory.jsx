import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import formatDate from '../lib/formattedDate';
import placeholderImg from '../assets/placeholderImg.jpg';
import { useDataFetch } from '../hooks/useDataFetch';

import '../styles/PostByCategory.scss';

const PostsByCategory = ({ category }) => {
  const { data, loading, error, dataFetcher } = useDataFetch();

  useEffect(() => {
    dataFetcher(`posts/search?category=${category}`);
  }, [dataFetcher, category]);

  if (loading) return <div className='loading'>Loading...</div>;
  if (error) return <div className='error'>{error}</div>;

  return (
    <div className='posts-by-category'>
      <h3>{category} News</h3>
      <div className='posts-grid'>
        {data?.posts?.length > 0 ? (
          data.posts.map((post) => (
            <div key={post._id} className='post-category-card'>
              <div className='post-details'>
                <h2 className='post-title'>
                  <Link to={`/blog/${post?.slug}/${post._id}`}>
                    {post?.title}
                  </Link>
                </h2>
                <div className='post-meta'>
                  <CiCalendarDate />
                  <span>{formatDate(post?.date)}</span>
                </div>
                <p className='post-excerpt'>
                  {truncateText(htmlToText(post?.body, { wordwrap: 100 }), 150)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className='no-posts'>No posts available for this category.</div>
        )}
      </div>
    </div>
  );
};

export default PostsByCategory;
