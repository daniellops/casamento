import React, { useState } from 'react';

// Lista de valores dos presentes
const giftValues = Array.from({ length: 18 }, (_, i) => 150 + i * 50);

const gifts = giftValues.map((value, idx) => ({
  id: idx,
  name: `Presente ${value} reais`,
  price: value,
  img: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Square_200x200.png',
}));

export default function Presente() {
  const [selectedGift, setSelectedGift] = useState(null);

  function handlePresent(gift) {
    setSelectedGift(gift);
  }

  function closeModal() {
    setSelectedGift(null);
  }

  return (
    <section id="presente">
      <h2>Lista de Presentes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center'  }}>
        {gifts.map(gift => (
          <div key={gift.id} style={{
            width: 220,
            border: '1px solid #EEE',
            borderRadius: 16,
            padding: 16,
            textAlign: 'center',
            marginBottom: 16,
          }}>
            <img src={gift.img} alt={gift.name} style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8 }} />
            <h4 style={{ margin: '12px 0 6px' }}>{gift.name}</h4>
            <div style={{ fontWeight: 'bold', color: '#555', marginBottom: 12 }}>R$ {gift.price.toFixed(2)}</div>
            <button
              style={{
                background: '#9575cd',
                color: '#fff',
                border: 'none',
                borderRadius: 24,
                padding: '8px 24px',
                cursor: 'pointer'
              }}
              onClick={() => handlePresent(gift)}
            >
              Presentear
            </button>
          </div>
        ))}

        {selectedGift && (
          <PaymentModal gift={selectedGift} onClose={closeModal} />
        )}
      </div>
    </section>

  );
}

const handlePayment = async (name, gift) => {
  try {
    const response = await fetch('http://localhost:3001/api/create_payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        giftName: gift.name,
        price: gift.price,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.init_point;
    } else {
      alert(data.error || 'Erro ao criar pagamento');
    }
  } catch (err) {
    alert('Falha na requisição');
  }
};

// Modal de Pagamento (simulação Mercado Pago)
function PaymentModal({ gift, onClose }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  // Chama passando os dados do input + presente
  const onPay = async () => {
    setLoading(true);
    await handlePayment(name, gift);
    setLoading(false);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#FFF',
        borderRadius: 16,
        padding: 32,
        minWidth: 350,
        textAlign: 'center',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            color: 'black',
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 20,
            cursor: 'pointer'
          }}
          title="Fechar"
        >×</button>
        
        <h3>Pagamento Presente</h3>
        <img src={gift.img} alt={gift.name} style={{ width: 80, height: 80, borderRadius: 8, margin: '16px 0' }} />
        <div style={{ fontWeight: 'bold', fontSize: 20 }}>R$ {gift.price.toFixed(2)}</div>

        <div style={{ fontWeight: 'bold', fontSize: 20 }}>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid #CCC",
              fontSize: 16,
            }}
          />
        </div>
        
        <button
          onClick={onPay}
          disabled={!name.trim() || loading}
          style={{
            background: '#00a650',
            color: '#fff',
            border: 'none',
            borderRadius: 24,
            padding: '10px 32px',
            fontSize: 16,
            marginTop: 18,
            cursor: 'pointer'
          }}
        >
          {loading ? "Processando..." : "Pagar com Mercado Pago"}
        </button>
      </div>
    </div>
  );
}


