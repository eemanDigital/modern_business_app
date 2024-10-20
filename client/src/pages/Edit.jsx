import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDataFetch } from '../hooks/useDataFetch';
import Title from '../components/Title';

import '../styles/addPostForm.scss';

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
    title: '',
    body: '',
    category: '',
    tags: '',
    featured: false,
  });
  const [fetchError, setFetchError] = useState(null); // Error state for data fetching
  const [errors, setErrors] = useState({});

  const { user } = useAuthContext();
  const role = user?.data?.user?.role;
  const isAdmin = role === 'admin' || role === 'author';

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
          category: postData.category || '',
          tags: postData.tags.join(', ') || '',
          featured: postData.featured || false,
        });
      } catch (error) {
        setFetchError('Error fetching data. Please try again later.');
      }
    };
    fetchData();
  }, [id, baseUrl]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChangeForBody = (value) => {
    setFormData((prevData) => ({ ...prevData, body: value }));
  };

  const handleCheckboxChange = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.body) newErrors.body = 'Body is required';
    if (!formData.category) newErrors.category = 'Category is required';
    return newErrors;
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

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: formData.title,
      body: formData.body,
      category: formData.category,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
      featured: formData.featured,
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

  return (
    <article>
      <Title text='Edit Post' />

      {!isAdmin && (
        <div className='write-error'>
          <strong>You do not have the privilege to write here</strong>
        </div>
      )}
      <form action='' className='write' onSubmit={handleSubmit}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={handleInputChange}
        />
        {errors.title && <p className='error'>{errors.title}</p>}

        <label htmlFor='category'>Category</label>
        <select
          name='category'
          value={formData.category}
          onChange={handleInputChange}>
          <option value=''>Select Category</option>
          <option value='Technology'>Technology</option>
          <option value='Politics'>Politics</option>
          <option value='Business'>Business</option>
          <option value='Sports'>Sports</option>
          <option value='Entertainment'>Entertainment</option>
        </select>
        {errors.category && <p className='error'>{errors.category}</p>}

        <label htmlFor='tags'>Tags (comma-separated)</label>
        <input
          type='text'
          name='tags'
          value={formData.tags}
          onChange={handleInputChange}
        />

        <label htmlFor='featured'>Featured</label>
        <input
          type='checkbox'
          name='featured'
          checked={formData.featured}
          onChange={handleCheckboxChange}
        />

        <div className='editorContainer'>
          <label htmlFor='body'>Body</label>
          <ReactQuill
            className='editor'
            theme='snow'
            formats={formats}
            value={formData.body}
            onChange={handleInputChangeForBody}
          />
        </div>
        {errors.body && <p className='error'>{errors.body}</p>}

        <button type='submit' disabled={loading}>
          {loading ? 'Publishing...' : 'Publish'}
        </button>
      </form>
    </article>
  );
};

export default Edit;
