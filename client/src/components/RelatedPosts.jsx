import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDataFetch } from '../hooks/useDataFetch';
import { htmlToText } from 'html-to-text';
import placeholderImg from '../assets/placeholderImg.jpg';
import { truncateText } from '../lib/truncateText';

const RelatedPosts = ({ postId }) => {
  const { data, loading, error, dataFetcher } = useDataFetch();

  // fetch data
  useEffect(() => {
    dataFetcher(`posts/${postId}/relatedPosts`);
  }, [dataFetcher, postId]);

  if (loading) return <div>Loading related posts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='related-posts'>
      <h3>Related Posts</h3>
      {data?.data?.relatedPosts.length > 0 ? (
        <ul>
          {data?.data?.relatedPosts.map((post) => (
            <div className='related-post-item' key={post._id}>
              <li>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
              </li>
              <p>
                {truncateText(
                  htmlToText(post?.body, {
                    wordwrap: 100,
                  }),
                  100 // Maximum length for the truncated text
                )}
              </p>
            </div>
          ))}
        </ul>
      ) : (
        <p>No related posts found</p>
      )}
    </div>
  );
};

export default RelatedPosts;
