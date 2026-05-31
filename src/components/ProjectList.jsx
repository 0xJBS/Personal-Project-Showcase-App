import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects, onLike }) {
  if (projects.length === 0) {
    return <p style={{ textAlign: 'center', color: '#7f8c8d', width: '100%' }}>No projects match your current filters.</p>;
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }}>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onLike={onLike} />
      ))}
    </div>
  );
}

export default ProjectList;