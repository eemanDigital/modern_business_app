// import { blogPosts } from '../../constants/data';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import formatDate from '../../lib/formattedDate';

const BlogDetails = () => {
  const params = useParams();

  const url = `http://localhost:3300/posts/${params.id}`;

  const [blogPosts, setBlogPosts] = useState(null);

  useEffect(() => {
    try {
      axios({
        method: 'get',
        url,
      }).then((response) => setBlogPosts(response.data.data.post));
    } catch (err) {
      console.log(err);
    }
  }, [url, params.id]);

  if (!blogPosts) return null;

  // console.log(blogPosts);

  return (
    <div>
      <h1>{blogPosts.title}</h1>
      <span>{formatDate(blogPosts.date)}</span>
      <span>{blogPosts.author}</span>
      <p>{blogPosts.body}</p>
    </div>
  );
};

export default BlogDetails;
