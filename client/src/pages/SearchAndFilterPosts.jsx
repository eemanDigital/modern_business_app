// SearchAndFilterPosts.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/SearchAndFilterPosts.scss';

const SearchAndFilterPosts = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    category: '',
    tags: '',
    startDate: '',
    endDate: '',
    featured: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const newFilters = {};
    for (let [key, value] of searchParams.entries()) {
      if (key !== 'page' && key !== 'limit') {
        newFilters[key] = value;
      }
    }
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, [location]);

  // Remove empty filters
  const filteredFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value !== '')
  );

  // Input fields onchange handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filteredFilters, 'FLS');
    const queryString = new URLSearchParams(filteredFilters).toString();
    console.log(queryString, 'QS');

    navigate(`/search?${queryString}`);
  };

  return (
    <form className='search-filter-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <input
          type='text'
          name='searchTerm'
          value={filters.searchTerm}
          onChange={handleInputChange}
          placeholder='Search...'
          className='search-input'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='category'
          value={filters.category}
          onChange={handleInputChange}
          placeholder='Category'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='tags'
          value={filters.tags}
          onChange={handleInputChange}
          placeholder='Tags'
        />
      </div>
      <div className='form-group date-inputs'>
        <input
          type='date'
          name='startDate'
          value={filters.startDate}
          onChange={handleInputChange}
        />
        <input
          type='date'
          name='endDate'
          value={filters.endDate}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <select
          name='featured'
          value={filters.featured}
          onChange={handleInputChange}>
          <option value=''>All</option>
          <option value='true'>Featured</option>
          <option value='false'>Not Featured</option>
        </select>
      </div>
      <button type='submit' className='search-button'>
        Search
      </button>
    </form>
  );
};

export default SearchAndFilterPosts;
