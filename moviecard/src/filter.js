// Filter.js
import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleFilterChange, onRatingFilterChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={onTitleFilterChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        step="0.1"
        value={ratingFilter}
        onChange={onRatingFilterChange}
      />
    </div>
  );
};

export default Filter;

