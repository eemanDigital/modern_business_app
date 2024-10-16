import { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { useDataFetch } from '../hooks/useDataFetch';
import Loading from '../components/Loading';
import '../styles/posts.scss';
import PostList from '../components/PostList';
import SearchAndFilterPosts from './SearchAndFilterPosts';
import { useLocation } from 'react-router-dom';

function Posts() {
  const [limit] = useState(5); // 1 featured + 4 regular posts
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);
  const { data, loading, error, dataFetcher } = useDataFetch();
  const location = useLocation();

  const posts = data?.data?.results?.result || data?.data?.posts;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.toString()) {
      // If there are search params, use the search endpoint
      dataFetcher(
        `posts/search?${searchParams.toString()}&page=${
          currentPage.current
        }&limit=${limit}`
      );
    } else {
      // Otherwise, use the regular posts endpoint
      getPaginatedPosts();
    }
  }, [location.search]);

  const handlePageClick = async (event) => {
    currentPage.current = event.selected + 1;
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.toString()) {
      searchParams.set('page', currentPage.current);
      dataFetcher(`posts/search?${searchParams.toString()}&limit=${limit}`);
    } else {
      getPaginatedPosts();
    }
  };

  async function getPaginatedPosts() {
    try {
      const { data } = await dataFetcher(
        `posts?page=${currentPage.current}&limit=${limit}`
      );
      setPageCount(data?.data?.results?.pageCount);
    } catch (err) {
      console.error('Error fetching paginated posts:', err);
    }
  }

  // toast error
  if (error) {
    return <div className='error-message'>Error: {error}</div>;
  }

  return (
    <div className='post-container'>
      <SearchAndFilterPosts hideInput={true} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='post-content'>
            {posts && posts.length > 0 && (
              <>
                {/* <PostList {...posts[0]} isFeatured={true} /> */}
                <div className='post-list'>
                  <PostList posts={posts} />
                </div>
              </>
            )}
          </div>
          <ReactPaginate
            breakLabel='...'
            nextLabel='Next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel='< Previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageClassName='pagination__item'
            pageLinkClassName='pagination__link'
            previousClassName='pagination__item'
            previousLinkClassName='pagination__link'
            nextClassName='pagination__item'
            nextLinkClassName='pagination__link'
            activeClassName='active'
            disabledClassName='disabled'
          />
        </>
      )}
    </div>
  );
}

export default Posts;
