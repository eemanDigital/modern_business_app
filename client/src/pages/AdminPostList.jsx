import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import '../styles/adminPostList.scss';
import { Link } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { toast } from 'react-toastify';
import { truncateText } from '../lib/truncateText';
import SearchAndFilterPosts from './SearchAndFilterPosts';
import Loading from '../components/Loading';

const AdminPostList = ({ posts, loading, error }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [deletingPostId, setDeletingPostId] = useState(null); // Track the deleting post
  const postsPerPage = 5;

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const {
    loading: isDeleting,
    error: deleteError,
    dataFetcher: deleteData,
  } = useDataFetch();

  const pageCount = Math.ceil(posts?.length / postsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

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

  useEffect(() => {
    if (deleteError) {
      toast.error(deleteError);
    }
  }, [deleteError]);

  return (
    <div className='admin-post-list-container'>
      <h1 className='blog-post-header'>Blog Posts</h1>
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
              {currentPosts.map((post) => (
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
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          />
        </>
      )}
    </div>
  );
};

AdminPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default AdminPostList;
