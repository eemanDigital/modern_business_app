import { useEffect } from 'react';
import Users from '../components/Users';
import { useDataFetch } from '../hooks/useDataFetch';

import '../styles/admin_board.scss';

import AdminPostList from './AdminPostList';
import Title from '../components/Title';

const AdminBoard = () => {
  const { data, loading, error, dataFetcher } = useDataFetch();
  const {
    data: posts,
    loading: loadingPost,
    error: postError,
    dataFetcher: fetchPosts,
  } = useDataFetch();

  // fetch users
  useEffect(() => {
    dataFetcher('users');
  }, [dataFetcher]);

  // fetch posts
  useEffect(() => {
    fetchPosts('posts');
  }, [fetchPosts]);

  return (
    <div className='board'>
      <div className='board-header'>
        <h1>Admin Board</h1>
      </div>
      <Users users={data} loading={loading} error={error} />
      <AdminPostList
        posts={posts?.data?.results?.result}
        loading={loadingPost}
        error={postError}
      />
    </div>
  );
};

export default AdminBoard;
