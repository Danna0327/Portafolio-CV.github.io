import React from 'react';

function Habilidades() {
  const habilidades = [
    { nombre: 'HTML / CSS', nivel: 90 },
    { nombre: 'JavaScript', nivel: 80 },
    { nombre: 'React', nivel: 75 },
    { nombre: 'SQL', nivel: 65 },
  ];

  const herramientas = ['Git', 'Node.js', 'Firebase', 'Figma'];

  const metodologias = [
    'Metodologías Ágiles (Scrum)',
    'Control de Versiones',
    'Diseño UI/UX',
    'Desarrollo Colaborativo',
  ];

  const estilos = {
    seccion: {
      padding: '80px 8%',
      background: '#0d0d0d',
      textAlign: 'center',
    },
    titulo: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '12px',
      color: '#ffffff',
    },
    subtitulo: {
      color: '#888',
      marginBottom: '60px',
      fontSize: '0.95rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
      textAlign: 'left',
    },
    card: {
      background: '#141414',
      border: '1px solid #222',
      borderRadius: '12px',
      padding: '28px',
    },
    cardIcono: {
      fontSize: '1.5rem',
      marginBottom: '16px',
    },
    cardTitulo: {
      fontWeight: '700',
      fontSize: '1rem',
      marginBottom: '24px',
      color: '#ffffff',
    },
    habilidadFila: {
      marginBottom: '16px',
    },
    habilidadNombre: {
      marginBottom: '6px',
      fontSize: '0.85rem',
      color: '#ccc',
    },
    barraFondo: {
      height: '4px',
      background: '#222',
      borderRadius: '4px',
      overflow: 'hidden',
    },
    herramientasFila: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    },
    herramientaTag: {
      background: '#1e1e1e',
      border: '1px solid #333',
      padding: '6px 14px',
      borderRadius: '6px',
      fontSize: '0.85rem',
      color: '#ccc',
    },
    metodoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '14px',
      color: '#ccc',
      fontSize: '0.88rem',
    },
    metodoDot: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: '#ff2d78',
      flexShrink: 0,
    },
  };

  return (
    <section id="habilidades" style={estilos.seccion}>
      <h2 style={estilos.titulo}>Habilidades Técnicas</h2>
      <p style={estilos.subtitulo}>Dominio y competencia en el stack de ingeniería</p>
      <div style={estilos.grid}>

        <div style={estilos.card}>
          <div style={estilos.cardIcono}>⚙️</div>
          <div style={estilos.cardTitulo}>Desarrollo Web</div>
          {habilidades.map(h => (
            <div key={h.nombre} style={estilos.habilidadFila}>
              <div style={estilos.habilidadNombre}>{h.nombre}</div>
              <div style={estilos.barraFondo}>
                <div style={{ height: '100%', width: `${h.nivel}%`, background: '#ff2d78', borderRadius: '4px' }}></div>
              </div>
            </div>
          ))}
        </div>

        <div style={estilos.card}>
          <div style={estilos.cardIcono}>✳️</div>
          <div style={estilos.cardTitulo}>Otras Herramientas</div>
          <div style={estilos.herramientasFila}>
            {herramientas.map(h => (
              <span key={h} style={estilos.herramientaTag}>{h}</span>
            ))}
          </div>
        </div>

        <div style={estilos.card}>
          <div style={estilos.cardIcono}>⚡</div>
          <div style={estilos.cardTitulo}>Metodologías</div>
          {metodologias.map(m => (
            <div key={m} style={estilos.metodoItem}>
              <div style={estilos.metodoDot}></div>
              {m}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Habilidades;