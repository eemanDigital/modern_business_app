import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDataFetch } from '../hooks/useDataFetch';
import '../styles/updateUser.scss';
import { toast } from 'react-toastify';

const baseUrl = import.meta.env.VITE_BASE_URL;

const UpdateUser = () => {
  const { id } = useParams(); // Extract user ID from URL

  const { loading, dataFetcher, error } = useDataFetch(); // Custom hook to handle API requests
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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

        console.log(response);
        const userData = response?.data?.user;

        setFormData({
          firstName: userData.firstName || '',
          lastName: userData.lastName || '',
          email: userData.email || '',
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      role: formData.role,
    };

    try {
      await dataFetcher(`users/${id}`, 'patch', payload);
      if (!error) {
        navigate(`/admin-board`); // Redirect to user list after successful edit
        toast.success('User updated successfully');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className='edit-user-container'>
      <h1>Edit User</h1>

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
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label htmlFor='role'>Role</label>
        <select
          name='role'
          value={formData.role}
          onChange={handleInputChange}
          required>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </select>

        <button type='submit' disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>

      {error && <p className='error-message'>{error}</p>}
    </div>
  );
};

export default UpdateUser;