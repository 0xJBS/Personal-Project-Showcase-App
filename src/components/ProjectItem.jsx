import React from 'react';

function ProjectItem({ project, onLike }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1.5rem', borderRadius: '8px', background: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{project.title}</h3>
        <p style={{ color: '#7f8c8d', fontSize: '0.95rem', minHeight: '50px', margin: '0 0 1rem 0' }}>{project.description}</p>
        <div style={{ fontSize: '0.85rem', color: '#34495e' }}>
          <strong>Stack:</strong> {project.technologies}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', borderTop: '1px solid #eee', paddingTop: '0.8rem' }}>
        <button 
          onClick={() => onLike(project.id, project.likes)} 
          style={{ padding: '0.4rem 1rem', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          👍 Like
        </button>
        <span style={{ fontWeight: 'bold', color: '#3498db' }}>{project.likes || 0} Likes</span>
      </div>
    </div>
  );
}

export default ProjectItem;