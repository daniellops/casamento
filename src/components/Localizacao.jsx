export default function Localizacao() {
  return (
    <section id="localizacao">
      <h2>Recepção</h2>
      <p style={{ maxWidth: '700px', margin: '1rem auto', lineHeight: '1.6' }}>
        Com imensa alegria, os noivos convidam para a recepção em celebração à união do casal, 
        a realizar-se no <strong>dia 29 de novembro de 2025</strong>.
      </p>
      <p style={{ maxWidth: '700px', margin: '1rem auto', lineHeight: '1.6' }}>
        O encontro acontecerá no <strong>Salão de festas do condomínio Quintas do Lago</strong>, 
        no bairro <strong>Coaçu, no Eusébio</strong>, onde amigos e familiares serão recebidos 
        em um ambiente repleto de afeto, encanto e celebração.
      </p>
      <div style={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 8px #aaa'
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.775632433255!2d-38.46439362536643!3d-3.8582636438458215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75aed0582a46d%3A0xad748c9356b16e87!2sAv.%20Jos%C3%A9%20Moraes%20de%20Almeida%2C%20777%20-%20Coa%C3%A7u%2C%20Eus%C3%A9bio%20-%20CE%2C%2061760-907!5e0!3m2!1spt-BR!2sbr!4v1757021054777!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Local do Evento"
        />
      </div>
    </section>
  );
}