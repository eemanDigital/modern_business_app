import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiCalendarDate } from 'react-icons/ci';
import { htmlToText } from 'html-to-text';
import { truncateText } from '../lib/truncateText';
import formatDate from '../lib/formattedDate';
import { useDataFetch } from '../hooks/useDataFetch';

import '../styles/postByCategory.scss';
import Loading from '../components/Loading';

const PostsByCategory = ({ category }) => {
  const { data, error, dataFetcher } = useDataFetch();

  // Fetch posts based on the category
  useEffect(() => {
    dataFetcher(`posts/search?category=${category}&limit=2`);
  }, [dataFetcher, category]);

  //  Display loading message while fetching data
  if (error) return <div className='posts-category__error'>{error}</div>;

  return (
    <aside className='posts-category'>
      <h3 className='posts-category__header'>
        <span>{category} News</span>
      </h3>
      <ul className='posts-category__list'>
        {data?.posts?.length > 0 ? (
          data.posts.map((post) => (
            <li key={post._id} className='posts-category__item'>
              <Link
                to={`/blog/${post?.slug}/${post._id}`}
                className='posts-category__link'>
                <h4 className='posts-category__title'>{post?.title}</h4>
                <div className='posts-category__meta'>
                  <CiCalendarDate />
                  <span>{formatDate(post?.date)}</span>
                </div>
                <p className='posts-category__excerpt'>
                  {truncateText(htmlToText(post?.body, { wordwrap: 100 }), 100)}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <li className='posts-category__no-posts'>
            No posts available for this category.
          </li>
        )}
        <Link
          to={`category/${category}`}
          className='posts-category__more-button'>
          More {category} News...
        </Link>
      </ul>
    </aside>
  );
};

export default PostsByCategory;
