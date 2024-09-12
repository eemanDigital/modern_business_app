import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import http from '../lib/http';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/postImageUpload.scss';

Modal.setAppElement('#root'); // Set the app element for accessibility

const PostImageUpload = ({ postId }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } = useAuthContext();
  const token = user?.token;
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      return;
    }
    if (!user) {
      // setError(errMsg)
      return;
    }
    const payload = {
      file: file,
    };

    try {
      await http.put(`/posts/${postId}`, {
        data: payload,
        contentType: 'multipart/form-data',
        token,
      });
      navigate(`/blog/${postId}`);
      setModalIsOpen(false); // Close the modal on successful submission
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Upload Post Image</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel='Upload Post Image'>
        <h1>Upload Post Image</h1>

        {!isAdmin && (
          <div className='write-error'>
            <strong>You do not have the privilege to edit or delete</strong>
          </div>
        )}
        <form action='' className='write' onSubmit={handleSubmit}>
          <div className='upload'>
            <label htmlFor='photo'>Upload Image</label>
            <input
              type='file'
              name='photo' // Use 'file' to match Multer configuration
              id=''
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button type='submit'>Save</button>
          <button type='button' onClick={() => setModalIsOpen(false)}>
            Cancel
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default PostImageUpload;
