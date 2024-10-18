import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import formatDate from '../lib/formattedDate';
import { useDataFetch } from '../hooks/useDataFetch';

import '../styles/postByCategory.scss';

const PostsByCategory = ({ category }) => {
  const { data, loading, error, dataFetcher } = useDataFetch();

  useEffect(() => {
    dataFetcher(`posts/search?category=${category}&limit=2`);
  }, [dataFetcher, category]);

  if (loading) return <div className='posts-aside__loading'>Loading...</div>;
  if (error) return <div className='posts-aside__error'>{error}</div>;

  return (
    <aside className='posts-aside'>
      <h3 className='posts-aside__header'>
        <span className='posts-aside__header-text'>{category} News</span>
      </h3>
      <ul className='posts-aside__list'>
        {data?.posts?.length > 0 ? (
          data.posts.map((post) => (
            <li key={post._id} className='posts-aside__item'>
              <Link
                to={`/blog/${post?.slug}/${post._id}`}
                className='posts-aside__link'>
                <h4 className='posts-aside__title'>{post?.title}</h4>
                <div className='posts-aside__meta'>
                  <CiCalendarDate />
                  <span>{formatDate(post?.date)}</span>
                </div>
                <p className='posts-aside__excerpt'>
                  {truncateText(htmlToText(post?.body, { wordwrap: 100 }), 100)}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <li className='posts-aside__no-posts'>
            No posts available for this category.
          </li>
        )}
      </ul>
      <Link to={`category/${category}`} className='posts-aside__more-button'>
        More {category} News...
      </Link>
    </aside>
  );
};

export default PostsByCategory;
