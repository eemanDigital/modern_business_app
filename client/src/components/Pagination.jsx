import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/pagination.scss';

const Pagination = ({ pageCount, handlePageClick, currentPage }) => {
  return (
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
      forcePage={currentPage - 1} // Set the current page correctly (0-based index)
    />
  );
};

export default Pagination;
