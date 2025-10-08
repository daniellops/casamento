import React, { useState, useEffect } from "react";

export default function Casal() {
  // Defina seus paths de imagem aqui
  const images = [
    "/foto01.jpeg",
    "/foto02.jpeg",
    "/foto03.jpeg",
    "/foto04.jpeg",
    "/foto05.jpeg",
    "/foto06.jpeg",
    "/foto07.jpeg",
    "/foto08.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Autoplay: troca a imagem a cada X segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 3000ms = 3 segundos

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const goToIndex = (idx) => setCurrent(idx);

  return (
    <section id="casal" style={{ background: '#DABCA3', color:'#fff'}}>
      <h2>O Casal</h2>

      <p>Aqui, vamos compartilhar com vocês os capítulos mais especiais da nossa história de amor. Cada riso, cada abraço e cada sonho – e agora, a contagem regressiva para o dia mais importante e sonhado de nossas vidas começou! Cada detalhe deste site carrega um pedacinho do nosso coração.</p>

      <p>O coração já bate mais forte, o frio na barriga aumenta, a emoção transborda e a ansiedade pelo dia tão esperado só cresce. Tudo faz sentido porque estamos juntos vivendo esse momento. Em breve, diante de quem mais amamos, daremos um passo que selará para sempre nossa união – um amor que nos completa, nos fortalece e nos faz sonhar.</p>

      <p>Esse não será apenas o dia do nosso casamento civil, mas o dia em que celebraremos nossa história e iniciaremos um novo capítulo, rodeados por pessoas queridas que fazem parte da nossa caminhada.</p>

      <p>Que alegria ter cada um de vocês ao nosso lado nesse grande dia! Vamos juntos brindar o começo dessa nova etapa. Mal podemos esperar para viver esse momento mágico com vocês!</p>

      <p>Então já deixa reservado aí: 29/11/2025!</p>
      <div className="carousel-container">
        <div className="carousel-image-area">
          {/* <button className="carousel-btn left" onClick={goToPrev}>&lt;</button> */}
          <img
            className="carousel-image"
            src={images[current]}
            alt={`foto ${current + 1}`}
          />
          {/* <button className="carousel-btn right" onClick={goToNext}>&gt;</button> */}
        </div>
        <div className="carousel-thumbnails">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`miniatura ${idx + 1}`}
              className={`carousel-thumb ${idx === current ? "active" : ""}`}
              onClick={() => goToIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}