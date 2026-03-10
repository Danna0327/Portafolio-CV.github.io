import React, { useState } from 'react';

function TarjetaProyecto({ proyecto }) {
  const [hover, setHover] = useState(false);

  const estilos = {
    tarjeta: {
      background: hover ? '#1a1a1a' : '#141414',
      border: `1px solid ${hover ? '#ff2d78' : '#222'}`,
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
    },
    imagenBox: {
      width: '100%',
      height: '160px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
    },
    placeholder: {
      fontSize: '2.5rem',
    },
    cuerpo: {
      padding: '20px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    tags: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px',
      flexWrap: 'wrap',
    },
    tag: {
      background: '#1e1e1e',
      border: '1px solid #333',
      padding: '3px 10px',
      borderRadius: '4px',
      fontSize: '10px',
      color: '#ff2d78',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '600',
    },
    titulo: {
      fontWeight: '700',
      fontSize: '1rem',
      marginBottom: '10px',
      color: '#ffffff',
    },
    descripcion: {
      color: '#888',
      fontSize: '0.83rem',
      lineHeight: 1.7,
      marginBottom: '20px',
      flex: 1,
    },
    botones: {
      display: 'flex',
      gap: '10px',
    },
    botonGithub: {
      flex: 1,
      padding: '9px',
      background: '#1e1e1e',
      border: '1px solid #333',
      borderRadius: '6px',
      color: '#ccc',
      fontSize: '0.8rem',
      cursor: 'pointer',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'block',
    },
    botonDemo: {
      flex: 1,
      padding: '9px',
      background: 'transparent',
      border: '1px solid #444',
      borderRadius: '6px',
      color: '#ccc',
      fontSize: '0.8rem',
      cursor: 'pointer',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'block',
    },
  };

  return (
    <div
      style={estilos.tarjeta}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div style={estilos.imagenBox}>
        {proyecto.imagen
          ? <img src={proyecto.imagen} alt={proyecto.titulo} style={estilos.imagen} />
          : <span style={estilos.placeholder}>🖥️</span>
        }
      </div>

      <div style={estilos.cuerpo}>
        <div style={estilos.tags}>
          {proyecto.tags.map(tag => (
            <span key={tag} style={estilos.tag}>{tag}</span>
          ))}
        </div>
        <div style={estilos.titulo}>{proyecto.titulo}</div>
        <div style={estilos.descripcion}>{proyecto.descripcion}</div>
        <div style={estilos.botones}>
          <a href={proyecto.github} target="_blank" rel="noreferrer" style={estilos.botonGithub}>
            &lt;/&gt; GitHub
          </a>
          <a href={proyecto.demo} style={estilos.botonDemo}>Detalles</a>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProyecto;