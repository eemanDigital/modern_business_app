// import { blogPosts } from '../../              /data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import formatDate from '../lib/formattedDate';
import http from '../lib/http';
import { useAuthContext } from '../hooks/useAuthContext';

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

  const deletePost = async () => {
    if (!isAdmin) return;

    if (!user) {
      return;
    }
    await http.delete(`/posts/${params.id}`, { token });
    navigate('/blog');
  };

  return (
    <div className='blog-detail'>
      <div className='blog-detail-content'>
        {blogPosts && (
          <img
            className='blog-detail-img'
            src={`http://localhost:3300/images/${blogPosts.photo}`}
            alt={blogPosts.title}
          />
        )}
        {/* show this only to admin */}
        {isAdmin && (
          <div className='edit-delete'>
            {user && (
              <div className='edit-delete-btn'>
                <div className='btns'>
                  <button className='edit'>
                    <Link to={`/blog/${params.id}/edit`}>Edit</Link>
                  </button>
                  <button
                    className='delete'
                    onClick={() => setDeleteAlert(!deleteAlert)}>
                    Delete
                  </button>
                </div>
                {deleteAlert ? (
                  <div>
                    <p>
                      Are you sure you want to delete this post? if yes, click
                      on <strong>Yes</strong> to proceed or <strong>No</strong>{' '}
                      to cancel
                    </p>
                    <button onClick={() => deletePost()}>YES</button>
                    <button onClick={() => setDeleteAlert(!deleteAlert)}>
                      NO
                    </button>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )}
          </div>
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
