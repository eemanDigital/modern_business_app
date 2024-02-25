import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import http from '../lib/http';
import { useAuthContext } from '../hooks/useAuthContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
  const { id: postId } = useParams();
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
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';

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

    if (!isAdmin) {
      return;
    }
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
      await http.put(`/posts/${postId}`, {
        data: payload,
        contentType: 'multipart/form-data',
        token,
      });
      navigate(`/blog/${postId}`);
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
        <div className='editorContainer'>
          <ReactQuill
            className='editor'
            theme='snow'
            formats={formats}
            value={formData.body}
            onChange={handleInputChangeForBody}
          />
        </div>
        <div className='upload'>
          <label htmlFor='photo'>Upload Image</label>
          <input
            type='file'
            name='file' // Use 'file' to match Multer configuration
            id=''
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button type='submit'>Save</button>
      </form>
    </article>
  );
};

export default Edit;
