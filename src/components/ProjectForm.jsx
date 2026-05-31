import React, { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onAddProject({
      title: title.trim(),
      description: description.trim(),
      technologies: technologies.trim() || 'General Development'
    });

    setTitle('');
    setDescription('');
    setTechnologies('');
  };

  return (
    <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
      <h3 style={{ margin: '0 0 1rem 0', color: '#2c3e50' }}>Register New Project Build</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        <input type="text" placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <input type="text" placeholder="Technologies Used" value={technologies} onChange={(e) => setTechnologies(e.target.value)} style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }} />
        <textarea placeholder="Detailed Project Description" value={description} onChange={(e) => setDescription(e.target.value)} required rows="3" style={{ padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc', resize: 'none' }} />
        <button type="submit" style={{ padding: '0.7rem', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Publish Build</button>
      </form>
    </div>
  );
}

export default ProjectForm;