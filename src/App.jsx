import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Showcase from './pages/Showcase';
import AdminPanel from './pages/AdminPanel';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar" style={{ display: 'flex', justifyContent: 'center', gap: '3rem', backgroundColor: '#2c3e50', padding: '1.2rem' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>HOME</Link>
          <Link to="/showcase" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>PROJECT SHOWCASE</Link>
          <Link to="/admin" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>ADMIN PANEL</Link>
        </nav>

        <main className="page-content" style={{ maxWidth: '1100px', margin: '2rem auto', padding: '0 1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}