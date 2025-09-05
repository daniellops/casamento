import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Presente from './components/Presente';
import Contagem from './components/Contagem';
import DressCode from './components/DressCode';

export default function App() {
  return (
    <div>
      <Contagem />
      <Galeria />
      <Localizacao />
      <DressCode />
      <Presente />
    </div>
  );
  // return (
  //   <div>
  //     <h1>Site do Casamento</h1>
  //   </div>
  // );
}
