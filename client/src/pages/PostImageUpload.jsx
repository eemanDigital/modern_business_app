import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuthContext } from '../hooks/useAuthContext';

import '../styles/postImageUpload.scss'; // Ensure this path is correct
import { useDataFetch } from '../hooks/useDataFetch';

const PostImageUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const { loading, dataFetcher, error } = useDataFetch();
  const { user } = useAuthContext();

  const role = user?.data?.user?.role;
  const { id } = useParams();

  // checks admin role for writing
  const isAdmin = role === 'admin';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      toast.error('You do not have the privilege to edit or delete');
      return;
    }

    if (!user) {
      toast.error('User not authenticated');
      return;
    }

    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('photo', file); // Use 'photo' to match the backend model

    try {
      // Call the http utility with the token explicitly passed
      await dataFetcher(`posts/${id}/upload`, 'patch', formData, {
        'Content-Type': 'multipart/form-data',
      });
      if (!error) {
        navigate(`/blog`);
      }
    } catch (error) {
      toast.error('Error updating post. Please try again.');
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className='post-image-upload'>
      <h1>Upload Post Image</h1>
      {!isAdmin && (
        <div className='form-error'>
          <strong>You do not have the privilege to edit or delete</strong>
        </div>
      )}
      <form action='' className='form' onSubmit={handleSubmit}>
        <div className='upload'>
          <label htmlFor='photo'>Upload Image</label>
          <input
            type='file'
            name='photo' // Use 'photo' to match Multer configuration
            id='photo'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type='submit' disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
        <button type='button' onClick={() => navigate(-1)} disabled={loading}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PostImageUpload;
