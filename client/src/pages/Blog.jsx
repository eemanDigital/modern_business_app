import BlogContent from '../components/BlogContent';
import { useState, useEffect } from 'react';
// import { blogPosts } from '../constants/data';
import axios from 'axios';

const url = 'http://localhost:3300/posts';

function Blog() {
  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    try {
      axios({
        method: 'get',
        url,
      }).then((response) => setBlogPosts(response.data.data.posts));
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!blogPosts) return null;

  // console.log(blogPosts);

  return (
    <article>
      <div className='blog'>
        <div className='blog-hero-text'>
          <h1>Eeman Business News</h1>
          <p>Blog about business and startups</p>
        </div>
      </div>
      <div className='blog-content-wrapper'>
        {' '}
        {blogPosts.map((post) => {
          return (
            <div key={post.id}>
              <BlogContent {...post} />
            </div>
          );
        })}
      </div>
    </article>
  );
}

export default Blog;
