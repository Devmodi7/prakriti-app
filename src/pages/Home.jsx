import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>Discover your body–mind balance</h1>
      <p>Take the Prakriti quiz and get a quick Vata/Pitta/Kapha summary, then save your profile.</p>
      <div style={{ display:'flex', gap:12, marginTop:12 }}>
        <Link to="/quiz"><button className="btn secondary">Start Quiz</button></Link>
        <Link to="/profile"><button className="btn">Edit Profile</button></Link>
      </div>
    </section>
  );
}
