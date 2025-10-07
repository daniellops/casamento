import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

export default function Contagem() {
  const targetDate = moment.tz("2025-11-29 18:00:00", "America/Fortaleza");

  const calculateTimeLeft = () => {
    const now = moment.tz("America/Fortaleza");
    const difference = targetDate.diff(now);

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // limpa o intervalo ao desmontar
  }, []);

  return (
    <section id="contagem" style={{ background: '#DABCA3'}}>
      <h2>Contagem Regressiva</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", fontFamily: "sans-serif" }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          style={{
            backgroundColor: "#a186c0",
            color: "#fff",
            padding: "20px",
            borderRadius: "10px",
            minWidth: "70px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>{String(value).padStart(2, "0")}</div>
          <div style={{ fontSize: "12px" }}>{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
    </section>
  );
}
