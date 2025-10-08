import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a href="#contagem">HOME</a>
        <a href="#casal">O CASAL</a>
        <a href="#localizacao">RECEPÇÃO</a>
        <a href="#presente">LISTA DE PRESENTES</a>
        <a href="#confirmar-presenca">CONFIRME SUA PRESENÇA</a>
      </nav>
    </header>
  );
}
