import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../lib/http';

const Edit = () => {
  const { id: postId } = useParams();
  const navigate = useNavigate();

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
  });
  const [file, setFile] = useState();

  // Fetch blog post data on component mount- this populate the form field- upon mounting
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await http.get(`/posts/${postId}`);
        // Set local state with data from the database
        setFormData(data.data.post);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [postId]);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      body: formData.body,
      author: formData.author,
      file: file,
    };

    try {
      await http.put(`/posts/${postId}`, { data: payload });
      navigate(`/blog/${postId}`);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <article>
      <h1>Edit Post</h1>
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
        <button type='submit'>Save</button>
      </form>
    </article>
  );
};

export default Edit;
