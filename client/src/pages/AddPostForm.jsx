import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import ReactQuill from 'react-quill';
import { formats } from '../lib/quillFormat';
import { useAuthContext } from '../hooks/useAuthContext';
import Title from '../components/Title';
import '../styles/addPostForm.scss';

const AddPostForm = () => {
  const navigate = useNavigate();

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    category: '',
    tags: '',
    featured: false,
  });

  const [errors, setErrors] = useState({});
  const { user } = useAuthContext();
  const { dataFetcher, loading } = useDataFetch();
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin' || role === 'author';

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

    const payload = {
      title: formData.title,
      body: formData.body,
      category: formData.category,
      tags: formData.tags.split(',').map((tag) => tag.trim()),
      featured: formData.featured,
    };

    try {
      await dataFetcher('posts', 'post', payload);

      navigate('/blog');
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  return (
    <article>
      <Title text='Write New Post' />

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

        {/* <label htmlFor='author'>Author</label>
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleInputChange}
        />
        {errors.author && <p className='error'>{errors.author}</p>} */}

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

        {/* <label htmlFor='photo'>Photo URL</label>
        <input
          type='text'
          name='photo'
          value={formData.photo}
          onChange={handleInputChange}
        /> */}

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

export default AddPostForm;
