import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Presente from './components/Presente';
import Contagem from './components/Contagem';
import Separador from './components/Separador';

export default function App() {
  return (
    <div>
      <Contagem />
      <Separador />
      <Galeria />
      <Separador />
      <Localizacao />
      <Separador backgroundColor="#000000" />
      <Presente />
    </div>
  );
}
