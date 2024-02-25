import { useEffect, useState } from 'react';
// import useCookies from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import http from '../lib/http';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import { toast } from 'react-toastify';

const Write = () => {
  const navigate = useNavigate();
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

  // Local state to manage form fields
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    author: '',
  });
  // const [showError, setShowError] = useState(' ');
  const [file, setFile] = useState();
  const { user } = useAuthContext();
  // console.log(user);
  const token = user?.token;
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';
  // console.log(role);

  // Handle form field changes
  const handleInputChange = (e) => {
    // const { name, value } = e.target;
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChangeForBody = (value) => {
    setFormData((prevData) => ({ ...prevData, body: value }));
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
    console.log(payload);
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

        <label htmlFor='author'>Author</label>
        <input
          type='text'
          name='author'
          value={formData.author}
          onChange={handleInputChange}
        />

        <div className='editorContainer'>
          {/* <div dangerouslySetInnerHTML={{ __html: formData.body }} /> */}
          {/* <label htmlFor='body'>Body</label> */}
          <ReactQuill
            className='editor'
            theme='snow'
            formats={formats}
            value={formData.body}
            dangerouslySetInnerHTML={{ __html: formData.body }}
            onChange={handleInputChangeForBody}
          />
        </div>

        {/* <label htmlFor='body'>Body</label>
        <textarea
          id=''
          cols='70'
          rows='10'
          name='body'
          value={formData.body}
          onChange={handleInputChange}></textarea> */}
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
