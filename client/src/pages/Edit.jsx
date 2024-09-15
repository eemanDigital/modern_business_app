import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDataFetch } from '../hooks/useDataFetch';

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
  'clean',
];

const Edit = () => {
  const { id } = useParams();
  const { loading, dataFetcher, error } = useDataFetch();
  const navigate = useNavigate();

  // Ensuring initial state values are not undefined
  const [formData, setFormData] = useState({
    title: '', // Initialize as empty strings
    body: '',
    author: '',
  });
  const [fetchError, setFetchError] = useState(null); // Error state for data fetching
  const { user } = useAuthContext();
  const role = user?.data?.user?.role;
  const isAdmin = role === 'admin';

  const baseUrl = import.meta.env.VITE_BASE_URL; // Base URL for API requests

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}posts/${id}`);
        const postData = response?.data?.data?.post;

        console.log(postData);
        setFormData({
          title: postData.title || '', // Fallback to an empty string if data is missing
          body: postData.body || '',
          author: postData.author || '',
        });
      } catch (error) {
        setFetchError('Error fetching data. Please try again later.');
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      console.error('You do not have the privilege to edit or delete');
      return;
    }

    if (!user) {
      console.error('User not authenticated');
      return;
    }

    const payload = {
      title: formData.title,
      body: formData.body,
      author: formData.author,
    };

    try {
      await dataFetcher(`posts/${id}`, 'put', payload);
      if (!error) {
        navigate(`/blog`);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const handleInputChangeForBody = (value) => {
    setFormData((prevData) => ({ ...prevData, body: value }));
  };

  return (
    <article>
      <h1>Edit Post</h1>

      {!isAdmin && (
        <div className='write-error'>
          <strong>You do not have the privilege to edit or delete</strong>
        </div>
      )}

      {fetchError && (
        <div className='fetch-error'>
          <strong>{fetchError}</strong>
        </div>
      )}

      <form className='write' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={formData.title || ''} // Ensuring value is always a string
          onChange={handleInputChange}
          required
        />
        <label htmlFor='author'>Author</label>
        <input
          type='text'
          name='author'
          value={formData.author || ''} // Ensuring value is always a string
          onChange={handleInputChange}
          required
        />
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            formats={formats}
            value={formData.body || ''} // Ensuring value is always a string
            onChange={handleInputChangeForBody}
          />
        </div>

        <button type='submit' disabled={loading || !isAdmin}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </article>
  );
};

export default Edit;
