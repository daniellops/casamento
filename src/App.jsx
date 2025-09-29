import Header from './components/Header';
import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Presente from './components/Presente';
import Contagem from './components/Contagem';
import Separador from './components/Separador';
import ConfirmarPresenca from './components/ConfirmarPresenca';

export default function App() {
  return (
    <div>
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <Contagem />
        <Separador />
        <Galeria />
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
