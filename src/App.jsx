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
  return (
    <div>
      <Header />
      <main>
        <Capa />
        <Contagem />
        <Separador />
        <Casal />
        <Separador />
        <Localizacao />
        <Separador backgroundColor="#000000" />
        <Presente />
        <Separador />
        <ConfirmarPresenca />
      </main>
    </div>
  );
}
