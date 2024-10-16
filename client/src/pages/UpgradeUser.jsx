import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDataFetch } from '../hooks/useDataFetch';
import '../styles/updateUser.scss';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASE_URL;

const UpgradeUser = () => {
  const { id } = useParams();

  const { loading, dataFetcher, error, data } = useDataFetch(); // Custom hook to handle API requests
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: '',
  });
  const [fetchError, setFetchError] = useState(null);

  // Fetch user data for editing
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${baseUrl}users/${id}`, {
          withCredentials: true,
        });

        const userData = response?.data?.user;

        setFormData({
          role: userData.role || '',
        });
      } catch (error) {
        setFetchError('Error fetching user data. Please try again later.');
      }
    };
    fetchUserData();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission to edit user
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      role: formData.role,
    };

    try {
      const { data } = await dataFetcher(
        `users/${id}/upgrade`,
        'patch',
        payload
      );
      console.log(data, 'DATATA');
      if (data) {
        navigate(`/admin-board`); // Redirect to user list after successful edit
        toast.success('User updated successfully');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='edit-user-container'>
      <h1>Upgrade User</h1>

      {/* {!isAdmin && (
        <div className='error-message'>
          <strong>You do not have the privilege to edit users</strong>
        </div>
      )} */}

      {fetchError && (
        <div className='error-message'>
          <strong>{fetchError}</strong>
        </div>
      )}

      <form className='edit-user-form' onSubmit={handleSubmit}>
        <label htmlFor='role'>Role</label>
        <select
          name='role'
          value={formData.role}
          onChange={handleInputChange}
          required>
          <option value='author'>Author</option>
          <option value='admin'>Admin</option>
          <option value='reader'>Reader</option>
        </select>

        <button type='submit' disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>

      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default UpgradeUser;
