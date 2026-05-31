import React from 'react';

function Header({ title }) {
  return (
    <header style={{ padding: '1.5rem', textAlign: 'center', background: '#ecf0f1', borderRadius: '8px', marginBottom: '1.5rem' }}>
      <h1 style={{ margin: 0, color: '#2c3e50' }}>{title}</h1>
    </header>
  );
}

export default Header;