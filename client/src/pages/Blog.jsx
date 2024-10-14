import { useState, useEffect, useRef } from 'react';
import ReactPaginate from 'react-paginate';
import { useDataFetch } from '../hooks/useDataFetch';
import Loading from '../components/Loading';

import '../styles/blog.scss';
import BlogPost from '../components/BlogPost';

function Blog() {
  const [limit] = useState(5); // 1 featured + 4 regular posts
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef(1);
  const { data, loading, error, dataFetcher } = useDataFetch();

  const posts = data?.data?.results?.result;

  console.log(posts, 'POST');

  useEffect(() => {
    getPaginatedPosts();
  }, []);

  const handlePageClick = async (event) => {
    currentPage.current = event.selected + 1;
    getPaginatedPosts();
  };

  async function getPaginatedPosts() {
    try {
      const { data } = await dataFetcher(
        `posts?page=${currentPage.current}&limit=${limit}`
      );
      setPageCount(data?.data?.results?.pageCount);
    } catch (err) {
      console.error('Error fetching paginated posts:', err);
    }
  }

  // toast error
  if (error) {
    return <div className='error-message'>Error: {error}</div>;
  }

  return (
    <div className='blog-container'>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className='blog-content'>
            {posts && posts.length > 0 && (
              <>
                <BlogPost {...posts[0]} isFeatured={true} />
                <div className='blog-list'>
                  {posts.slice(1).map((post) => (
                    <BlogPost key={post._id} {...post} />
                  ))}
                </div>
              </>
            )}
          </div>
          <ReactPaginate
            breakLabel='...'
            nextLabel='Next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel='< Previous'
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageClassName='pagination__item'
            pageLinkClassName='pagination__link'
            previousClassName='pagination__item'
            previousLinkClassName='pagination__link'
            nextClassName='pagination__item'
            nextLinkClassName='pagination__link'
            activeClassName='active'
            disabledClassName='disabled'
          />
        </>
      )}
    </div>
  );
}

export default Blog;
