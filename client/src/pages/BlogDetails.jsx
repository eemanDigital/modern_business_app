import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import formatDate from '../lib/formattedDate';
import placeholderImg from '../assets/placeholderImg.jpg';
import { useDataFetch } from '../hooks/useDataFetch';

const baseUrl = import.meta.env.VITE_BASE_URL;

const BlogDetails = () => {
  const params = useParams();
  const { data, loading, error, dataFetcher } = useDataFetch();

  //  Fetch blog post data
  useEffect(() => {
    async function fetchData() {
      try {
        await dataFetcher(`posts/${params.id}`);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [params.id, dataFetcher]);

  //  Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='blog-detail'>
      <div className='blog-detail-content'>
        {data?.data?.post?.photo ? (
          <img
            className='blog-detail-img'
            src={`${baseUrl}images/${data?.data?.post?.photo}`}
            alt={data?.data?.post?.title}
          />
        ) : (
          <img
            className='blog-detail-img'
            src={placeholderImg}
            alt={data?.data?.post?.title}
          />
        )}

        <h1>{data?.data.title}</h1>
        <div className='blog-content-author-date'>
          <span>{formatDate(data?.data?.post?.date)}</span>
          <span>By: {data?.data?.post?.author}</span>
        </div>
        <p dangerouslySetInnerHTML={{ __html: data?.data?.post?.body }}></p>
        <Link to='/blog' style={{ textDecoration: 'none' }}>
          &#8592; Go back
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
