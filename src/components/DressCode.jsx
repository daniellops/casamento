export default function DressCode({ className }) {
  return (
    <section id="dress-code" className={className}>
      <h2>Dress Code</h2>

      <p><strong>Traje:</strong> Esporte Fino</p>

      <p>PEDIMOS QUE AS MULHERES EVITEM USAR VESTIDOS EM TONS DE VERDE MENTA (cor das madrinhas) E BRANCO.</p>

      {/* <div style={{ maxWidth: '600px', margin: '1rem auto', textAlign: 'left' }}>
        <p>Solicitamos gentilmente que:</p>
        <ul>
          <li>
            Evite trajes muito claros ou em tons próximos ao branco,
            como nude, off white, damasco, bege, tons pastel, entre outros.
          </li>
          <li>
            Evite vestidos brancos, pois é a cor reservada exclusivamente para a noiva.
          </li>
        </ul>
      </div> */}

      <p>Aguardamos você com muito carinho!</p>
    </section>
  );
}