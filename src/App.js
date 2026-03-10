import Perfil from './Recursos/Perfil.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Portafolio</h1>
        <img src={Perfil} alt="Perfil" className='Perfil' />
      </header>
    </div>
  );
}

export default App;
