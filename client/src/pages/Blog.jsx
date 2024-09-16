import BlogContent from '../components/BlogContent';
import { useState, useEffect, useRef } from 'react';
import Loading from '../components/Loading';
import ReactPaginate from 'react-paginate';
import { useDataFetch } from '../hooks/useDataFetch';

import '../styles/blog.scss';

function Blog() {
  // const [blogPosts, setBlogPosts] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  const { data, loading, error, dataFetcher } = useDataFetch();

  const posts = data?.data?.results?.result;

  useEffect(() => {
    currentPage.current = 1;
    // fetchData();
    getPaginatedPosts();
    // }
  }, []);

  // Invoke when user click to request another page.
  const handlePageClick = async (event) => {
    currentPage.current = event.selected + 1;
    getPaginatedPosts();
    // setItemOffset(newOffset);
  };

  // Fetch paginated posts
  async function getPaginatedPosts() {
    try {
      const { data } = await dataFetcher(
        `posts?page=${currentPage.current}&limit=${limit}`
      );

      setPageCount(data?.data?.results?.pageCount);
      // setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  // error toast message
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='blog-container'>
      <div className='blog'>
        <div className='blog-hero-text'>
          <h1>Business News</h1>
          <p>Blog about business and startups</p>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className='blog-content-wrapper'>
          {posts?.map((post) => {
            return (
              <div key={post.id}>
                <BlogContent {...post} />
              </div>
            );
          })}
        </div>
      )}

      <div>
        {' '}
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='pagination justify-content-center'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          activeClassName='active'
        />
      </div>
    </div>
  );
}

export default Blog;
