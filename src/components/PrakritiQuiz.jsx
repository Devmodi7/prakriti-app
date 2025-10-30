import React, { useMemo, useState } from 'react';
import questions from '../data/prakritiQuestions.js';

export default function PrakritiQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ vata: 0, pitta: 0, kapha: 0 });
  const [done, setDone] = useState(false);
  const q = questions[step];

  const dominant = useMemo(() => {
    const arr = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return arr[0]?.[0] || 'vata';
  }, [scores]);

  const onAnswer = (type) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (step + 1 < questions.length) setStep(s => s + 1);
    else setDone(true);
  };

  if (done) {
    return (
      <div>
        <h2>Your Result: {dominant.toUpperCase()}</h2>
        <p style={{ opacity:.8 }}>Basic tendencies based on your answers.</p>
        <pre style={{ background:'#0b1220', padding:12, borderRadius:8 }}>{JSON.stringify(scores, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      <h2>Prakriti Quiz</h2>
      <p style={{ opacity:.7 }}>Question {step + 1} / {questions.length}</p>
      <h3 style={{ marginTop:8 }}>{q.question}</h3>
      <div style={{ display:'grid', gap:10, gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', marginTop:12 }}>
        {q.options.map(opt => (
          <button key={opt.text} className="btn secondary" onClick={() => onAnswer(opt.type)}>{opt.text}</button>
        ))}
      </div>
    </div>
  );
}
