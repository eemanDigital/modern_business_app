import React from 'react';
import '../styles/pagination.scss';

const CustomPagination = ({ currentPage, pageCount, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div className='pagination'>
      <button
        className='pagination__item'
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination__item ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
      <button
        className='pagination__item'
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pageCount}>
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
