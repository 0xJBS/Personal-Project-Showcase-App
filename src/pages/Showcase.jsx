import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import SearchBar from '../components/SearchBar';
import ProjectList from '../components/ProjectList';

function Showcase() {
  const { data: projects, setData, loading, error } = useFetch('http://localhost:5001/projects');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLike = (id, currentLikes) => {
    fetch(`http://localhost:5001/projects/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: (currentLikes || 0) + 1 })
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        setData(projects.map((p) => (p.id === id ? updatedItem : p)));
      });
  };

  if (loading) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Polling active projects...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Connection Error: {error}</p>;

  const filtered = (projects || []).filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Active Project Showcase</h2>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={filtered} onLike={handleLike} />
    </div>
  );
}

export default Showcase;