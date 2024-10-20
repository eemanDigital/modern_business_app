import { useState, useEffect, useCallback } from 'react';
import CustomPagination from '../components/CustomPagination';
import { useDataFetch } from '../hooks/useDataFetch';
import Loading from '../components/Loading';
import PostCard from '../components/PostCard';
import '../styles/posts.scss';

function AllPosts() {
  const [limit] = useState(4); // Number of posts per page
  const [pageCount, setPageCount] = useState(1); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const { data, loading, error, dataFetcher } = useDataFetch(); // Custom hook to fetch data

  // Extract posts from the fetched data
  const posts = data?.posts || [];

  // Fetch posts based on the current page and limit
  const fetchPosts = useCallback(
    async (page, limit) => {
      try {
        const response = await dataFetcher(
          `posts/search?page=${page}&limit=${limit}`
        );
        setPageCount(response?.totalPages || 1);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    },
    [dataFetcher]
  );

  // Fetch posts when the component mounts or when the current page changes
  useEffect(() => {
    fetchPosts(currentPage, limit);
  }, [currentPage, limit, fetchPosts]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    // No navigation here, just update the current page
  };

  // Display error message if there is an error
  if (error) {
    return <div className='error-message'>Error: {error}</div>;
  }

  return (
    <div className='post-container'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='post-content'>
            {posts && posts.length > 0 ? (
              <div className='post-list'>
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <p>No posts found.</p>
            )}
          </div>
          <CustomPagination
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default AllPosts;
