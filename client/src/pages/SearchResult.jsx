import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { CiCalendarDate } from 'react-icons/ci';
import formatDate from '../lib/formattedDate';
import placeholderImg from '../assets/placeholderImg.jpg';

const SearchResults = () => {
  const { data, loading, error, dataFetcher } = useDataFetch();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryString = searchParams.toString();
    dataFetcher(`posts/search?${queryString}`);
  }, [location, dataFetcher]);

  if (loading) return <div>Loading search results...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='search-results'>
      <h3>Search Results</h3>
      {data?.posts?.length > 0 ? (
        <ul>
          {data.posts.map((post) => (
            <li key={post._id}>
              <div className='blog-post__image'>
                <img src={post?.photo || placeholderImg} alt={post?.title} />
              </div>
              <div className='blog-post__content'>
                <h2 className='blog-post__title'>
                  <Link to={`/blog/${post?._id}`}>{post?.title}</Link>
                </h2>
                <div className='blog-post__meta'>
                  <span className='blog-post__author'>
                    Author:{' '}
                    {`${post?.author?.firstName} ${post?.author?.lastName}`}
                  </span>
                  <span className='blog-post__date'>
                    <CiCalendarDate /> {formatDate(post?.date)}
                  </span>
                </div>
                <p className='blog-post__excerpt'>
                  {post?.body}
                  {/* {truncatedBody}
          {plainTextBody.length > truncatedBody.length && '...'} */}
                </p>
                <Link
                  to={`/blog/${post?._id}`}
                  className='blog-post__read-more'>
                  Read More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
