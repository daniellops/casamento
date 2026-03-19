export default function Localizacao({ className }) {
  return (
    <section id="localizacao" className={className}>
      <h2>Recepção</h2>

      <p>A nossa recepção vai acontecer no salão de festas do condomínio, e estamos superfelizes em ter vocês com a gente nesse dia tão especial! 💛</p>
      <p>Ao chegar na portaria, é só avisar que está vindo para o casamento de Talita e Lucas, no salão de festas.</p>
      <p>Ah, e um lembrete importante: não esqueça de levar um documento de identificação com foto, tá? Sem ele, a entrada no condomínio não é permitida.</p>
      <p>Contamos com vocês pra deixar essa noite ainda mais incrível!</p>

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