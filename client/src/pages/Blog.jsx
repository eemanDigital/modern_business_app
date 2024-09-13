import BlogContent from '../components/BlogContent';
import { useState, useEffect, useRef } from 'react';
import Loading from '../components/Loading';
import ReactPaginate from 'react-paginate';
import http from '../lib/http';
// import { useAuthContext } from '../hooks/useAuthContext';

// const url = 'http://localhost:3300/posts';

function Blog() {
  const [blogPosts, setBlogPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

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

  async function getPaginatedPosts() {
    try {
      const { data } = await http.get(
        `/posts?page=${currentPage.current}&limit=${limit}`
      );

      setBlogPosts(data?.data?.results?.result);
      setPageCount(data?.data?.results?.pageCount);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(blogPosts);

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
          {' '}
          {blogPosts?.map((post) => {
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
