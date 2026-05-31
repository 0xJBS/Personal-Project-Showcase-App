import React, { useState, useEffect } from 'react';
import ProjectForm from '../components/ProjectForm';

function AdminPanel() {
  const [projects, setProjects] = useState([]);

  const syncDatabase = () => {
    fetch('http://localhost:5001/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  };

  useEffect(() => {
    syncDatabase();
  }, []);

  const handleCreate = (newProject) => {
    const payload = { ...newProject, likes: 0 };

    fetch('http://localhost:5001/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then(() => syncDatabase());
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5001/projects/${id}`, {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.ok) syncDatabase();
      });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
      <ProjectForm onAddProject={handleCreate} />
      
      <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h3 style={{ margin: '0 0 1rem 0', color: '#2c3e50' }}>Registry Operations (Decommissioning)</h3>
        {projects.map((p) => (
          <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid #eee' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>{p.title}</div>
              <div style={{ fontSize: '0.8rem', color: '#7f8c8d' }}>{p.technologies}</div>
            </div>
            <button 
              onClick={() => handleDelete(p.id)} 
              style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;