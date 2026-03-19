import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function Contagem({ className }) {
  const targetDate = moment.tz("2026-05-29 19:00:00", "America/Fortaleza");

  const calculateTimeLeft = () => {
    const now = moment.tz("America/Fortaleza");
    const difference = targetDate.diff(now);

    if (difference <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="contagem" className={`contagem-section ${className}`}>
      <h2>Contagem Regressiva</h2>
      <div className="contagem-container">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="contagem-box">
            <div className="contagem-value">{String(value).padStart(2, "0")}</div>
            <div className="contagem-label">{unit.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
