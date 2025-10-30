import React, { useEffect, useState } from 'react';

export default function UserProfile() {
  const [form, setForm] = useState({ name: '', age: '', health: '' });

  useEffect(() => {
    const raw = localStorage.getItem('prakriti_profile');
    if (raw) setForm(JSON.parse(raw));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const onSave = () => {
    if (!form.name.trim()) return alert('Please enter your name.');
    localStorage.setItem('prakriti_profile', JSON.stringify(form));
    alert('✅ Profile saved.');
  };

  return (
    <section>
      <h2>Your Profile</h2>
      <label>Name</label>
      <input name="name" value={form.name} onChange={onChange} placeholder="Your name" />
      <label>Age</label>
      <input name="age" value={form.age} onChange={onChange} placeholder="Age" />
      <label>Health Notes</label>
      <input name="health" value={form.health} onChange={onChange} placeholder="e.g., sleep, digestion" />
      <div style={{ marginTop:12 }}>
        <button className="btn" onClick={onSave}>Save</button>
      </div>
    </section>
  );
}
