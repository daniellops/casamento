import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Presentes() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'presentes'), {
        nome,
        valor,
        data: new Date()
      });

      alert('Obrigado pelo presente!');
      setNome('');
      setValor('');
    } catch (error) {
      console.error("Erro ao salvar presente:", error);
      alert("Erro ao enviar presente.");
    }
  };

  return (
    <section id="presentes">
      <h2>Presentes</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Valor do presente"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <button type="submit">Enviar Presente</button>
      </form>
    </section>
  );
}
