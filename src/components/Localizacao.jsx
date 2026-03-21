export default function Localizacao({ className }) {
  return (
    <section id="localizacao" className={className}>
      <h2>Recepção</h2>

      <p>Nossa cerimônia será realizada no mesmo local da festa e começará <strong>pontualmente às 19H</strong>. O local que escolhemos foi a Casa Celebre (R. Benjamim Brasil, 2100), e estamos super felizes em ter vocês com a gente nesse dia tão especial! 💚</p>
      <p>Ao chegar, é só informar o seu nome completo na recepção e dizer que está vindo para o casamento de Marília e Suellen.</p>
      <p>Contamos com vocês para deixar essa noite ainda mais incrível!</p>

      <div style={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 2px 8px #aaa'
      }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.006693519202!2d-38.56073252502581!3d-3.8086325961652134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74e6e240bf389%3A0x7027bacc1f42f4b0!2sR.%20Benjamim%20Brasil%2C%202100%20-%20Mondubim%2C%20Fortaleza%20-%20CE%2C%2060761-795!5e0!3m2!1spt-BR!2sbr!4v1773694593977!5m2!1spt-BR!2sbr" 
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