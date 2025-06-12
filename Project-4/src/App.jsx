import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const hrRef = useRef(null);
  const minRef = useRef(null);
  const secRef = useRef(null);

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();

      const hRotation = 30 * hh + mm / 2;
      const mRotation = 6 * mm;
      const sRotation = 6 * ss;

      hrRef.current.style.transform = `rotate(${hRotation}deg)`;
      minRef.current.style.transform = `rotate(${mRotation}deg)`;
      secRef.current.style.transform = `rotate(${sRotation}deg)`;
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Analog Clock</h1>
      <div className="clock">
        <div ref={hrRef} style={{ '--clr': '#ff0055', '--h': '70px' }} className="hand"><i></i></div>
        <div ref={minRef} style={{ '--clr': '#00eeff', '--h': '90px' }} className="hand"><i></i></div>
        <div ref={secRef} style={{ '--clr': '#ffffff', '--h': '110px' }} className="hand"><i></i></div>

        {Array.from({ length: 12 }, (_, i) => (
          <span style={{ '--i': i + 1 }} key={i}><b>{i + 1}</b></span>
        ))}
      </div>
    </div>
  );
};

export default App;
