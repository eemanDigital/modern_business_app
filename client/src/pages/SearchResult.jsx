import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { CiCalendarDate } from 'react-icons/ci';
import formatDate from '../lib/formattedDate';
import placeholderImg from '../assets/placeholderImg.jpg';
import { truncateText } from '../lib/truncateText';
import { htmlToText } from 'html-to-text';
import GoBackButton from '../components/GoBackButton';
import { FixedSizeList as List } from 'react-window';
import '../styles/searchResults.scss';
import useSetWindowItemSize from '../hooks/useSetWindowItemSize';
import Loading from '../components/Loading';

const SearchResults = () => {
  const { data, loading, error, dataFetcher } = useDataFetch();
  const location = useLocation();
  const { itemSize } = useSetWindowItemSize(590, 300);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryString = searchParams.toString();
    dataFetcher(`posts/search?${queryString}`);
  }, [location, dataFetcher]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;

  const Row = ({ index, style }) => {
    const post = data.posts[index];
    return (
      <li key={post._id} style={style}>
        <div className='blog-post__image'>
          <img src={post?.photo || placeholderImg} alt={post?.title} />
        </div>
        <div className='blog-post__content'>
          <h2 className='blog-post__title'>
            <Link to={`/blog/${post?.slug}/${post._id}`}>{post?.title}</Link>
          </h2>
          <div className='blog-post__meta'>
            <span className='blog-post__author'>
              Author: {`${post?.author?.firstName} ${post?.author?.lastName}`}
            </span>
            <span className='blog-post__date'>
              <CiCalendarDate /> {formatDate(post?.date)}
            </span>
          </div>
          <p className='blog-post__excerpt'>
            {truncateText(
              htmlToText(post?.body, {
                wordwrap: 100,
              }),
              200 // Maximum length for the truncated text
            )}
          </p>
          <Link to={`/blog/${post?._id}`} className='blog-post__read-more'>
            Read More
          </Link>
        </div>
      </li>
    );
  };

  return (
    <>
      <GoBackButton />

      <div className='search-results'>
        <h3>Search Results</h3>
        {data?.posts?.length > 0 ? (
          <List
            height={600} // Height of the list container
            itemCount={data.posts.length} // Number of items in the list
            itemSize={itemSize} // Dynamic item size based on screen width
            width={'100%'} // Width of the list container
          >
            {Row}
          </List>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default SearchResults;
