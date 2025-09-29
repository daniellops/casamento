// Header.jsx
export default function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="#contagem">HOME</a>
        <a href="#casal">O CASAL</a>
        <a href="#localizacao">RECEPÇÃO</a>
        <a href="#presente">LISTA DE PRESENTES</a>
        <a href="#confirmar-presenca">CONFIRME SUA PRESENÇA</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "fixed", // fixa no topo
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff", // cor de fundo
    zIndex: 1000, // fica acima do conteúdo
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // sombra leve
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "32px",
    padding: "16px 0",
  },
};
