import { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { toast } from 'react-toastify';
import { truncateText } from '../lib/truncateText';
import SearchAndFilterPosts from './SearchAndFilterPosts';
import Loading from '../components/Loading';
import Pagination from '../components/Pagination'; // Import the Pagination component
import '../styles/adminPostList.scss';
import Paginate from '../components/Paginate';

const AdminPostList = () => {
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalPosts, setTotalPosts] = useState(0); // Total number of posts
  const [pageCount, setPageCount] = useState(0); // Total page count
  const [posts, setPosts] = useState([]); // Posts data
  const [deletingPostId, setDeletingPostId] = useState(null); // Track the deleting post
  const postsPerPage = 5; // Number of posts per page
  const { loading, error, dataFetcher } = useDataFetch();
  const {
    loading: isDeleting,
    error: deleteError,
    dataFetcher: deleteData,
  } = useDataFetch();
  // Fetch posts based on the current page and limit
  const fetchPosts = useCallback(
    async (currentPage, limit) => {
      const searchParams = new URLSearchParams();
      searchParams.set('page', currentPage); // Set current page in query params
      searchParams.set('limit', limit); // Set limit in query params

      try {
        const response = await dataFetcher(
          `posts/search?${searchParams.toString()}`
        );
        setPosts(response?.posts || []); // Update posts
        setTotalPosts(response?.total || 0); // Update total posts
        setPageCount(Math.ceil((response?.total || 0) / limit)); // Update total page count
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    },
    [dataFetcher]
  );

  // Fetch posts when the component mounts or when the current page changes
  useEffect(() => {
    fetchPosts(currentPage, postsPerPage);
  }, [currentPage, fetchPosts]);

  // Handle page click
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // Handle post deletion
  const deletePost = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this post?'
    );
    if (confirmed) {
      setDeletingPostId(id);
      await deleteData(`posts/${id}`, 'delete');
      if (!deleteError) {
        // reload to refresh data
        window.location.reload();
      }
      setDeletingPostId(null);
    }
  };

  //  Display loading message while fetching data
  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError);
    }
  }, [deleteError]);

  return (
    <div className='admin-post-list-container'>
      <h1 className='blog-post-header'>
        Blog Posts <span id='post-number'>({totalPosts}) Posts</span>
      </h1>

      <button className='create-post-btn'>
        <Link to='/blog/create'>Create Post</Link>{' '}
      </button>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {posts && (
        <>
          <SearchAndFilterPosts />

          <table className='admin-post-list-table'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post?._id}>
                  <td>
                    <Link to={`/blog/${post?.slug}/${post._id}`}>
                      {truncateText(post?.title, 30)}
                    </Link>
                  </td>
                  <td>{`${post?.author?.firstName} ${post?.author?.lastName}`}</td>
                  <td>{new Date(post.date).toLocaleDateString()}</td>
                  <td>
                    <button className='edit-btn'>
                      <Link to={`/blog/${post?._id}/edit`}>Edit</Link>
                    </button>

                    <button className='upload-btn'>
                      <Link to={`/blog/${post?._id}/upload`}>
                        {post?.photo ? 'Change Photo' : 'Upload Image'}{' '}
                      </Link>
                    </button>

                    <button
                      onClick={() => deletePost(post?._id)}
                      className='delete-btn'
                      disabled={isDeleting && deletingPostId === post?._id}>
                      {isDeleting && deletingPostId === post?._id
                        ? 'Deleting...'
                        : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

AdminPostList.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default AdminPostList;
