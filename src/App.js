import './App.css';
import BarraNavegacion from './Componentes/BarraNavegacion';
import Inicio from './Componentes/Inicio';
import SobreMi from './Componentes/SobreMi';
import Proyectos from './Componentes/Proyectos';
import Habilidades from './Componentes/Habilidades';
import Contacto from './Componentes/Contacto';

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden', background: '#101e22' }}>
      {/* Grid pattern background */}
      <div className="grid-pattern" style={{ position: 'fixed', inset: 0, opacity: 0.2, pointerEvents: 'none', zIndex: 0 }}></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <BarraNavegacion />
        <Inicio />
        <SobreMi />
        <Proyectos />
        <Habilidades />
        <Contacto />
      </div>
    </div>
  );
}

export default App;
