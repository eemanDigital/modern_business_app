// import { blogPosts } from '../../constants/data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import formatDate from '../../lib/formattedDate';
import http from '../../lib/http';

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [blogPosts, setBlogPosts] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await http.get(`/posts/${params.id}`);
        setBlogPosts(data.data.post);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [params.id]);

  if (!blogPosts) return null;

  const deletePost = async () => {
    await http.delete(`/posts/${params.id}`);
    // deleteAlert(true);

    navigate('/blog');
  };

  return (
    <div>
      {/* <div>{deleteAlert && <h1>Do you want to delete this post</h1>}</div> */}
      <div className='btn'>
        <button>
          <Link to={`/blog/${params.id}/edit`}>Edit</Link>
        </button>
        <button onClick={() => deletePost()}>Delete</button>
      </div>
      <h1>{blogPosts.title}</h1>
      <span>{formatDate(blogPosts.date)}</span>
      <span>{blogPosts.author}</span>
      <p>{blogPosts.body.split('/n').join(' ')}</p>
      <Link to='/blog' style={{ textDecoration: 'none' }}>
        &#8592; Go back
      </Link>
    </div>
  );
};

export default BlogDetails;
