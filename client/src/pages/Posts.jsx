import { useState, useEffect, useCallback } from 'react';
import { useDataFetch } from '../hooks/useDataFetch';
import Loading from '../components/Loading';
import SearchAndFilterPosts from './SearchAndFilterPosts';
import { useLocation } from 'react-router-dom';
import FeaturedPost from '../components/FeaturedPost';
import PostCard from '../components/PostCard';
import Title from '../components/Title';
import Pagination from '../components/Pagination'; // Use Pagination component here
import '../styles/posts.scss';
import PostsByCategory from './PostByCategory';
import PostCategoryNavbar from '../components/PostCategoryNavbar';

function Posts() {
  const [limit, setLimit] = useState(4); // Number of posts per page
  const [totalPosts, setTotalPosts] = useState(0); // Total number of posts
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [pageCount, setPageCount] = useState(0); // Total page count
  const { data, loading, error, dataFetcher } = useDataFetch(); // Custom hook to fetch data
  const location = useLocation(); // React Router hook to get the current location

  // Extract posts from the fetched data
  const posts = data?.posts || [];

  // Separate featured and regular posts
  const featuredPost = posts?.find((post) => post.featured);
  const regularPosts = posts?.filter((post) => !post.featured);

  // Fetch posts based on the current page and limit
  const fetchPosts = useCallback(
    async (currentPage, limit) => {
      const searchParams = new URLSearchParams(location.search);
      searchParams.set('page', currentPage); // Set current page in query params
      searchParams.set('limit', limit); // Set limit in query params

      try {
        const response = await dataFetcher(
          `posts/search?${searchParams.toString()}`
        );
        setTotalPosts(response?.total || 0); // Update total posts
        setPageCount(Math.ceil((response?.total || 0) / limit)); // Update total page count
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    },
    [location.search, dataFetcher]
  );

  // Fetch posts when the component mounts or when the search parameters, limit, or current page change
  useEffect(() => {
    fetchPosts(currentPage, limit);
  }, [location.search, limit, currentPage, fetchPosts]);

  // Handle page click
  const handlePageClick = (event) => {
    const selectedPage = event.selected + 1; // `react-paginate` uses 0-based index, so add 1
    setCurrentPage(selectedPage);
  };

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
  ]; // Example categories

  return (
    <>
      <PostCategoryNavbar categories={categories} />
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
                      {/* <div className='post-grid'>
                        {regularPosts?.map((post) => (
                          <PostCard key={post._id} post={post} />
                        ))}
                      </div> */}
                      <PostCard posts={regularPosts} />
                    </div>
                  </>
                )}
              </div>

              {/* Pagination Component */}
              {pageCount > 1 && (
                <Pagination
                  pageCount={pageCount}
                  handlePageClick={handlePageClick}
                  currentPage={currentPage}
                />
              )}
            </>
          )}
        </div>
        <Title text='News By Category' />
        <div className='post-cat-container'>
          {categories.map((category) => (
            <PostsByCategory key={category} category={category} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Posts;
