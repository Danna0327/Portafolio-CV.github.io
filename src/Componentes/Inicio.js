import React from 'react';
import Perfil from '../Recursos/Perfil.jpg';

function Inicio() {
  const estilos = {
    seccion: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '140px 8% 80px',
      minHeight: '100vh',
      background: '#0d0d0d',
      gap: '40px',
    },
    contenido: {
      maxWidth: '52%',
    },
    etiqueta: {
      color: '#ff2d78',
      fontSize: '11px',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginBottom: '20px',
      fontWeight: '600',
    },
    titulo: {
      fontSize: '3.2rem',
      fontWeight: '800',
      lineHeight: 1.15,
      marginBottom: '16px',
      color: '#ffffff',
    },
    tituloRosa: {
      color: '#ff2d78',
      display: 'block',
    },
    subtitulo: {
      color: '#aaa',
      fontSize: '1.1rem',
      marginBottom: '20px',
      fontWeight: '400',
    },
    descripcion: {
      color: '#999',
      lineHeight: 1.8,
      fontSize: '0.95rem',
      marginBottom: '28px',
      maxWidth: '480px',
    },
    tags: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      marginBottom: '36px',
    },
    tag: {
      border: '1px solid #333',
      padding: '5px 14px',
      borderRadius: '20px',
      fontSize: '12px',
      color: '#bbb',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
    },
    tagDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#ff2d78',
    },
    botones: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
    },
    botonPrimario: {
      background: '#ff2d78',
      color: '#fff',
      padding: '13px 30px',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '0.9rem',
      border: 'none',
      cursor: 'pointer',
    },
    botonSecundario: {
      border: '1px solid #444',
      color: '#fff',
      padding: '13px 30px',
      borderRadius: '6px',
      fontSize: '0.9rem',
      background: 'transparent',
      cursor: 'pointer',
    },
    imagenWrapper: {
      width: '280px',
      height: '340px',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '2px solid #ff2d78',
      flexShrink: 0,
      position: 'relative',
    },
    imagen: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    codigoCard: {
      position: 'absolute',
      bottom: '-20px',
      left: '-30px',
      background: '#1a1a2e',
      border: '1px solid #2a2a4a',
      borderRadius: '8px',
      padding: '12px 16px',
      fontSize: '11px',
      fontFamily: 'monospace',
      color: '#7c7cff',
      lineHeight: 1.8,
    },
  };

  return (
    <section id="inicio" style={estilos.seccion}>
      <div style={estilos.contenido}>
        <p style={estilos.etiqueta}>Computer Engineering</p>
        <h1 style={estilos.titulo}>
          Danna Montece,
          <span style={estilos.tituloRosa}>
            Ingeniera en<br />Computación
          </span>
        </h1>
        <p style={estilos.subtitulo}>Estudiante de Ingeniería en Computación</p>
        <p style={estilos.descripcion}>
          Apasionada por la tecnología y el desarrollo de soluciones innovadoras.
          Especializada en la creación de software educativo y aplicaciones web modernas
          con React y JavaScript.
        </p>
        <div style={estilos.tags}>
          {['JavaScript & React', 'Git', 'SQL'].map(tag => (
            <span key={tag} style={estilos.tag}>
              <span style={estilos.tagDot}></span>
              {tag}
            </span>
          ))}
        </div>
        <div style={estilos.botones}>
          <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer">
            <button style={estilos.botonPrimario}>Ver GitHub</button>
          </a>
          <a href="#contacto">
            <button style={estilos.botonSecundario}>Contáctame</button>
          </a>
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={estilos.imagenWrapper}>
          <img src={Perfil} alt="Danna Montece" style={estilos.imagen} />
        </div>
        <div style={estilos.codigoCard}>
          <div><span style={{color:'#ff2d78'}}>const</span> engineer = {'{'}</div>
          <div>&nbsp;&nbsp;name: <span style={{color:'#a8ff78'}}>"Danna Montece"</span>,</div>
          <div>&nbsp;&nbsp;role: <span style={{color:'#a8ff78'}}>"Ing. Computación"</span></div>
          <div>{'}'}</div>
        </div>
      </div>
    </section>
  );
}

export default Inicio;