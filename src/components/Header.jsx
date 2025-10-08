import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">T&L</div>

        {/* Menu desktop */}
        <nav className="nav-links">
          <a href="#contagem">HOME</a>
          <a href="#casal">O CASAL</a>
          <a href="#localizacao">RECEPÇÃO</a>
          <a href="#presente">LISTA DE PRESENTES</a>
          <a href="#confirmar-presenca">CONFIRME SUA PRESENÇA</a>
        </nav>

        {/* Botão hamburguer mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu lateral mobile */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeMenu}>×</button>
        <a href="#contagem" onClick={closeMenu}>HOME</a>
        <a href="#casal" onClick={closeMenu}>O CASAL</a>
        <a href="#localizacao" onClick={closeMenu}>RECEPÇÃO</a>
        <a href="#presente" onClick={closeMenu}>LISTA DE PRESENTES</a>
        <a href="#confirmar-presenca" onClick={closeMenu}>CONFIRME SUA PRESENÇA</a>
      </div>

      {/* Sombra por trás do menu */}
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </header>
  );
}
