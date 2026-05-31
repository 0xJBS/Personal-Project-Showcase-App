import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <input
        type="text"
        placeholder="Filter project inventory entries..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', boxSizing: 'border-box', fontSize: '1rem' }}
      />
    </div>
  );
}

export default SearchBar;