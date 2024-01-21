import BlogContent from '../components/BlogContent';
import { useState, useEffect } from 'react';
// import { blogPosts } from '../constants/data';
// import axios from 'axios';
import http from '../lib/http';

// const url = 'http://localhost:3300/posts';

function Blog() {
  const [blogPosts, setBlogPosts] = useState(null);
  // const [image, setImage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await http.get('/posts');
        setBlogPosts(data.data.posts);

        // setImage(data.data.posts[0].photo);
        // console.log(data.data.posts);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (!blogPosts) return null;
  // console.log(image);
  // image.map((img) => console.log(img));

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
