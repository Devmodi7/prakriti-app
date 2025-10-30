import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UserProfile from '../components/UserProfile';
import PrakritiQuiz from '../components/PrakritiQuiz';
import DietChart from '../components/DietChart';
import DailySchedule from '../components/DailySchedule';
import FollowUps from '../components/FollowUps';
import AdminPanel from '../components/AdminPanel';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="profile">User Profile</Link> | 
      <Link to="quiz">Prakriti Quiz</Link> | 
      <Link to="diet">Diet Chart</Link> | 
      <Link to="schedule">Daily Schedule</Link> | 
      <Link to="followups">Follow Ups</Link> | 
      <Link to="admin">Admin Panel</Link>
    </nav>
    <Routes>
      <Route path="profile" element={<UserProfile />} />
      <Route path="quiz" element={<PrakritiQuiz />} />
      <Route path="diet" element={<DietChart />} />
      <Route path="schedule" element={<DailySchedule />} />
      <Route path="followups" element={<FollowUps />} />
      <Route path="admin" element={<AdminPanel />} />
    </Routes>
  </div>
);

export default Dashboard;
