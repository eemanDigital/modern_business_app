import { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { useDataFetch } from '../hooks/useDataFetch';
import Loading from '../components/Loading';
import SearchAndFilterPosts from './SearchAndFilterPosts';
import { useLocation } from 'react-router-dom';
import FeaturedPost from '../components/FeaturedPost';
import { GrTechnology } from 'react-icons/gr';
import PostCard from '../components/PostCard';

import '../styles/posts.scss';
import PostsByCategory from './PostByCategory';
import PostCategoryNavbar from '../components/CategoryNavbar';

function Posts() {
  const [limit] = useState(5); // 1 featured + 4 regular posts
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);
  const { data, loading, error, dataFetcher } = useDataFetch();
  const location = useLocation();

  // Extract posts from the fetched data
  const posts = data?.data?.results?.result || data?.data?.posts;

  // Separate featured and regular posts
  const featuredPost = posts?.find((post) => post.featured);
  const regularPosts = posts?.filter((post) => !post.featured);

  // Fetch posts when the component mounts or when the search parameters change
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

  // Handle page click for pagination
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

  // Fetch paginated posts
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

  // Display error message if there is an error
  if (error) {
    return <div className='error-message'>Error: {error}</div>;
  }

  const categories = [
    'Technology',
    'Business',
    'Sport',
    'Politics',
    'Entertainment',
  ];

  return (
    <>
      <PostCategoryNavbar categories={categories} />
      {/* <h1 className='blog-main-header'>
        <GrTechnology />
        Eeman Blog
      </h1> */}

      <div className='post-container'>
        <div>
          <SearchAndFilterPosts hideInput={true} />
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className='post-content'>
                {posts && posts.length > 0 && (
                  <>
                    <div className='blog-container'>
                      {featuredPost && <FeaturedPost post={featuredPost} />}
                      <div className='post-list'>
                        {regularPosts?.map((post) => (
                          <PostCard key={post._id} post={post} />
                        ))}
                      </div>
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

        <div className='post-cat-wrapper'>
          {/* <h1>News By Category</h1> */}
          <PostsByCategory category='Technology' />
          <PostsByCategory category='Business' />
          <PostsByCategory category='Sport' />
          <PostsByCategory category='Politics' />
          <PostsByCategory category='Entertainment' />
        </div>
      </div>
    </>
  );
}

export default Posts;
