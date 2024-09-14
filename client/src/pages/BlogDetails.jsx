// import { blogPosts } from '../../              /data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import formatDate from '../lib/formattedDate';
import http from '../lib/http';
import { useAuthContext } from '../hooks/useAuthContext';
import placeholderImg from '../assets/placeholderImg.jpg';

const BlogDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [blogPosts, setBlogPosts] = useState(null);
  const [deleteAlert, setDeleteAlert] = useState(false);

  const { user } = useAuthContext();
  const token = user?.token;
  const role = user?.data?.user?.role;

  // checks admin role for writing
  const isAdmin = role === 'admin';
  // console.log(role);

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

  return (
    <div className='blog-detail'>
      <div className='blog-detail-content'>
        {blogPosts.photo ? (
          <img
            className='blog-detail-img'
            src={`http://localhost:3300/images/${blogPosts.photo}`}
            alt={blogPosts.title}
          />
        ) : (
          <img
            className='blog-detail-img'
            src={placeholderImg}
            alt={blogPosts.title}
          />
        )}

        <h1>{blogPosts.title}</h1>
        <div className='blog-content-author-date'>
          <span>{formatDate(blogPosts.date)}</span>
          <span>By: {blogPosts.author}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: blogPosts.body }}></p>
        <Link to='/blog' style={{ textDecoration: 'none' }}>
          &#8592; Go back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
