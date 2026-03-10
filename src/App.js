import './App.css';
import BarraNavegacion from './Componentes/BarraNavegacion';
import Inicio from './Componentes/Inicio';
import SobreMi from './Componentes/SobreMi';
import Proyectos from './Componentes/Proyectos';
import Habilidades from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <div className="App">
      <BarraNavegacion />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Habilidades />
      <Contacto />
    </div>
  );
}

export default App;
