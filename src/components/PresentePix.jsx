export default function PresentePix({ className }) {
  return (
    <section id="presente" className={className}>
      <h2>Lista de Presentes</h2>

      <p>Todos sabem que somos um casal viajante e já escolhemos o destino da nossa lua de mel: Chile!</p>
      <p>Optamos por não fazer lista de presentes.</p>
      <p>Se quiserem nos presentear, uma ajudinha via Pix para essa aventura geladinha e inesquecível será recebida com muito amor!</p>

      <p><strong>Por favor, confira todos os dados antes de confirmar a transferência.</strong></p>
      <p><strong>Pix: </strong>53624661-eead-40e1-a85d-d9a2d8eb3ae7</p>
      <p><strong>Nome: </strong>Suellen Barbosa Machado <strong>Banco: </strong>Pic Pay</p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <div
          style={{
            padding: "20px",
            borderRadius: "16px",
            background: "#f5f5f5",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="/qr.jpg"
            alt="QR Code PIX"
            style={{
              width: "200px",
              height: "200px",
              objectFit: "contain",
            }}
          />
        </div>

        <span style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
          Escaneie com o app do seu banco
        </span>
      </div>
    </section>
  );
}