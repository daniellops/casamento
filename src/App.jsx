import Header from './components/Header';
import Localizacao from './components/Localizacao';
import Presente from './components/Presente';
import Contagem from './components/Contagem';
import Separador from './components/Separador';
import ConfirmarPresenca from './components/ConfirmarPresenca';
import Casal from './components/Casal';
import Capa from './components/Capa'

import './App.css';

export default function App() {
  const colors = [
    { name: 'Cor mais escura', hex: '#522F1A' },
    { name: 'Cor mais clara', hex: '#955937' },
    { name: 'Degradê (início)', hex: '#8D4E2B' },
    { name: 'Degradê (fim)', hex: '#DABCA3' },
    { name: 'Background claro', hex: '#E5DFD8' },
    { name: 'Planta (1)', hex: '#FAC57C' },
    { name: 'Planta (2)', hex: '#E58A3A' },
  ];

  return (
    <div>
      <Header />
      <main>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', fontFamily: 'Athelas' }}>
          {colors.map((color) => (
            <div
              key={color.hex}
              style={{
                backgroundColor: color.hex,
                width: '160px',
                height: '60px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                fontWeight: 'bold',
              }}
            >
              <span>{color.name}</span>
              <span>{color.hex}</span>
            </div>
          ))}
        </div>
        <Capa />
        <Separador className="bg-2" />
        <Contagem className="bg-1" />
        <Separador className="bg-1" />
        <Casal className="bg-2" />
        <Separador className="bg-2" />
        <Localizacao className="bg-1" />
        <Separador className="bg-1" />
        <Presente className="bg-2" />
        <Separador className="bg-2" />
        <ConfirmarPresenca className="bg-1" />
      </main>
    </div>
  );
}
