import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import { CiCalendarDate } from 'react-icons/ci';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import formatDate from '../lib/formattedDate';
import { useDataFetch } from '../hooks/useDataFetch';
import placeholderImg from '../assets/placeholderImg.jpg';

import '../styles/fullCategoryPage.scss';
import GoBackButton from '../components/GoBackButton';
import useSetWindowItemSize from '../hooks/useSetWindowItemSize';
import Loading from '../components/Loading';

const FullCategoryPage = () => {
  const { category } = useParams();
  const { data, loading, error, dataFetcher } = useDataFetch();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { itemSize } = useSetWindowItemSize(550, 300);

  useEffect(() => {
    dataFetcher(`posts/search?category=${category}`);

    const handleResize = () => setWindowHeight(window.innerHeight); // Update the window height when the window is resized
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Remove the event listener when the component is unmounted
  }, [dataFetcher, category]);

  if (loading) return <Loading />;
  if (error) return <div className='full-category__error'>{error}</div>;

  // Row component for the react-window List
  const Row = ({ index, style }) => {
    const post = data.posts[index];

    return (
      <div style={style} className='full-category__item'>
        <div className='full-category__image'>
          <img src={post?.photo || placeholderImg} alt={post?.title} />
        </div>
        <Link
          to={`/blog/${post?.slug}/${post._id}`}
          className='full-category__link'>
          <h2 className='full-category__title'>{post?.title}</h2>
          <div className='full-category__meta'>
            <CiCalendarDate />
            <span>{formatDate(post?.date)}</span>
          </div>
          <p className='full-category__excerpt'>
            {truncateText(htmlToText(post?.body, { wordwrap: 100 }), 200)}
          </p>
        </Link>
      </div>
    );
  };

  return (
    <>
      <GoBackButton />
      <div className='full-category'>
        <h1 className='full-category__header'>{category} News</h1>
        {data?.posts?.length > 0 ? (
          <List
            height={windowHeight - 30}
            itemCount={data.posts.length}
            itemSize={itemSize}
            width='100%'>
            {Row}
          </List>
        ) : (
          <div className='full-category__no-posts'>
            No posts available for this category.
          </div>
        )}
      </div>
    </>
  );
};

export default FullCategoryPage;
