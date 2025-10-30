import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import PrakritiQuiz from './components/PrakritiQuiz.jsx';
import UserProfile from './components/UserProfile.jsx';
import DailySchedule from './components/DailySchedule.jsx';
import DietChart from './components/DietChart.jsx';
import FollowUps from './components/FollowUps.jsx';
import AdminPanel from './components/AdminPanel.jsx';

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  borderRadius: 8,
  background: isActive ? '#1e293b' : 'transparent'
});

export default function App() {
  return (
    <div className="container">
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }}>
        <h2>Prakriti App</h2>
        <nav style={{ display:'flex', gap:8 }}>
          <NavLink to="/" style={linkStyle}>Home</NavLink>
          <NavLink to="/quiz" style={linkStyle}>Quiz</NavLink>
          <NavLink to="/profile" style={linkStyle}>Profile</NavLink>
          <NavLink to="/schedule" style={linkStyle}>Schedule</NavLink>
          <NavLink to="/diet" style={linkStyle}>Diet</NavLink>
          <NavLink to="/followups" style={linkStyle}>Follow Ups</NavLink>
          <NavLink to="/admin" style={linkStyle}>Admin</NavLink>
        </nav>
      </header>

      <main className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<PrakritiQuiz />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/schedule" element={<DailySchedule />} />
          <Route path="/diet" element={<DietChart />} />
          <Route path="/followups" element={<FollowUps />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
    </div>
  );
}
