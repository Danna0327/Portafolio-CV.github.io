import React from 'react';

function BarraNavegacion() {
  const estilos = {
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 8%',
      background: 'rgba(13,13,13,0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #1a1a1a',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      color: '#fff',
    },
    logoDot: {
      width: '10px',
      height: '10px',
      background: '#ff2d78',
      borderRadius: '2px',
    },
    enlaces: {
      display: 'flex',
      gap: '32px',
      listStyle: 'none',
    },
    enlace: {
      color: '#ccc',
      fontSize: '0.9rem',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    boton: {
      background: '#ff2d78',
      color: '#fff',
      border: 'none',
      padding: '10px 22px',
      borderRadius: '6px',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '0.85rem',
    },
  };

  return (
    <nav style={estilos.nav}>
      <div style={estilos.logo}>
        <div style={estilos.logoDot}></div>
        DevPortfolio
      </div>
      <ul style={estilos.enlaces}>
        <li><a href="#proyectos" style={estilos.enlace}>Proyectos</a></li>
        <li><a href="#habilidades" style={estilos.enlace}>Habilidades</a></li>
        <li><a href="#contacto" style={estilos.enlace}>Contacto</a></li>
      </ul>
      <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer">
        <button style={estilos.boton}>Ver GitHub</button>
      </a>
    </nav>
  );
}

export default BarraNavegacion;