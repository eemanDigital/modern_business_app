import { useState } from 'react';
import '../styles/users.scss';
import { useDataFetch } from '../hooks/useDataFetch';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Users = ({ loading, error, users }) => {
  const [deletingUserId, setDeletingUserId] = useState(null); // Track which user is being deleted
  const { dataFetcher } = useDataFetch();
  const {
    loading: isDeleting,
    error: deleteError,
    dataFetcher: deleteData,
  } = useDataFetch();

  const deleteUser = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this user?'
    );
    if (confirmed) {
      setDeletingUserId(id); // Set the current user being deleted
      await deleteData(`users/${id}`, 'delete'); // Replace with your API endpoint
      if (!deleteError) {
        // Handle successful deletion (e.g., refetch users or update UI)
        dataFetcher('users', 'get'); // Refetch users
        toast.success('User deleted successfully');
      }
      setDeletingUserId(null); // Reset the deleting state
    }
  };

  return (
    <div className='users-container'>
      {/* <Title text='Users'  /> */}
      <h1 className='user-list-header'>Users List</h1>
      <button className='add-user-btn'>
        <Link to='/addUser'>Add User</Link>{' '}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && (
        <table className='users-table'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.data?.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className='edit-btn'>
                    <Link to={`/users/${user._id}/edit`}>Edit</Link>
                  </button>
                  <button
                    className='delete-btn'
                    onClick={() => deleteUser(user._id)}
                    disabled={isDeleting && deletingUserId === user._id}>
                    {isDeleting && deletingUserId === user._id
                      ? 'Deleting...'
                      : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {deleteError && <p className='error-message'>{deleteError}</p>}
    </div>
  );
};

export default Users;
