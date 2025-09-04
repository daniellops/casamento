export default function Localizacao() {
  return (
    <section id="localizacao">
      <h2>Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}
