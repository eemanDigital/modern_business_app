import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';

import ReactQuill from 'react-quill';

import { formats } from '../lib/quillFormat';
import { useAuthContext } from '../hooks/useAuthContext';

const Write = () => {
  const navigate = useNavigate();

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
  });

  // const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { user } = useAuthContext();
  const { dataFetcher, loading } = useDataFetch();
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';

  // Handle form field changes
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChangeForBody = (value) => {
    setFormData((prevData) => ({ ...prevData, body: value }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.body) newErrors.body = 'Body is required';
    if (!formData.author) newErrors.author = 'Author is required';
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAdmin) {
      return;
    }

    if (!user) {
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // setLoading(true);

    const payload = {
      title: formData.title,
      body: formData.body,
      author: formData.author,
    };

    try {
      const data = await dataFetcher('posts', 'post', payload);

      console.log(data, 'data');

      navigate('/blog');
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <article>
      <h1>Write New Post</h1>
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

        <label htmlFor='author'>Author</label>
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleInputChange}
        />
        {errors.author && <p className='error'>{errors.author}</p>}

        <div className='editorContainer'>
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

export default Write;
