import React from 'react';
import Header from '../components/Header';

function Home() {
  return (
    <div>
      <Header title="Personal Project Showcase Platform" />
      <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h2>Central Deployment Command Core</h2>
        <p style={{ color: '#7f8c8d', maxWidth: '600px', margin: '1rem auto 0 auto', lineHeight: '1.6' }}>
          Welcome to your application portal. Use this workspace management panel to audit your projects, adjust metadata states, and track upvote engagement statistics via direct asynchronous pipeline connections.
        </p>
      </div>
    </div>
  );
}

export default Home;