import { useState } from 'react';
// import useCookies from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import http from '../lib/http';
// import { toast } from 'react-toastify';

const Write = () => {
  const navigate = useNavigate();

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
  });
  const [file, setFile] = useState();
  const { user } = useAuthContext();
  const token = user?.token;

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      // setError(errMsg)
      return;
    }

    const payload = {
      title: formData.title,
      body: formData.body,
      author: formData.author,
      file: file,
    };

    try {
      await http.post('/posts', {
        data: payload,
        contentType: 'multipart/form-data',
        token,
      });
      navigate('/blog');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <article>
      <h1>Write New Post</h1>
      <form action='' className='write' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleInputChange}
        />

        <label htmlFor='author'>Author</label>
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleInputChange}
        />
        <label htmlFor='body'>Body</label>
        <textarea
          id=''
          cols='70'
          rows='10'
          name='body'
          value={formData.body}
          onChange={handleInputChange}></textarea>
        <div className='upload'>
          <label htmlFor='photo'>Upload Image</label>
          <input
            type='file'
            name='file' // Use 'file' to match Multer configuration
            id=''
            // value={file}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button type='submit'>Publish</button>
      </form>
    </article>
  );
};

export default Write;
