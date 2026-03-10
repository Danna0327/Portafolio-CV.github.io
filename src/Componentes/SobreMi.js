import React from 'react';

function SobreMi() {
  const estilos = {
    seccion: {
      padding: '80px 8%',
      background: '#111111',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'start',
    },
    titulo: {
      fontSize: '2rem',
      fontWeight: '800',
      marginBottom: '24px',
      color: '#ffffff',
    },
    parrafo: {
      color: '#999',
      lineHeight: 1.9,
      fontSize: '0.92rem',
      marginBottom: '16px',
    },
    enlaceRosa: {
      color: '#ff2d78',
      fontWeight: '600',
    },
    valoresTitulo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '1.1rem',
      fontWeight: '700',
      marginBottom: '28px',
      color: '#ffffff',
    },
    estrella: {
      color: '#ff2d78',
      fontSize: '1.2rem',
    },
    valorItem: {
      display: 'flex',
      gap: '16px',
      marginBottom: '28px',
      alignItems: 'flex-start',
    },
    valorIcono: {
      width: '36px',
      height: '36px',
      borderRadius: '8px',
      background: '#1e1e1e',
      border: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '16px',
    },
    valorNombre: {
      fontWeight: '700',
      fontSize: '0.95rem',
      marginBottom: '6px',
      color: '#ffffff',
    },
    valorDesc: {
      color: '#888',
      fontSize: '0.85rem',
      lineHeight: 1.7,
    },
    educacionExperiencia: {
      padding: '80px 8%',
      background: '#0d0d0d',
    },
    gridDoble: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
    },
    secTitulo: {
      fontSize: '1.5rem',
      fontWeight: '800',
      marginBottom: '32px',
      color: '#ffffff',
      borderLeft: '3px solid #ff2d78',
      paddingLeft: '14px',
    },
    timelineItem: {
      position: 'relative',
      paddingLeft: '20px',
      marginBottom: '36px',
      borderLeft: '2px solid #222',
    },
    dot: {
      position: 'absolute',
      left: '-5px',
      top: '6px',
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      background: '#ff2d78',
    },
    fecha: {
      color: '#ff2d78',
      fontSize: '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '6px',
      fontWeight: '600',
    },
    itemTitulo: {
      fontWeight: '700',
      fontSize: '1rem',
      marginBottom: '4px',
      color: '#ffffff',
    },
    itemSubtitulo: {
      color: '#666',
      fontSize: '0.85rem',
      marginBottom: '10px',
    },
    itemDesc: {
      color: '#888',
      fontSize: '0.83rem',
      lineHeight: 1.7,
    },
  };

  const valores = [
    { icono: '📚', nombre: 'Aprendizaje Continuo', desc: 'Explorando constantemente nuevas tecnologías y mejores prácticas en ingeniería.' },
    { icono: '🔧', nombre: 'Resolución de Problemas', desc: 'Enfoque analítico para descomponer retos complejos en soluciones elegantes.' },
    { icono: '🤝', nombre: 'Trabajo en Equipo', desc: 'Colaboración efectiva en entornos ágiles para alcanzar metas compartidas.' },
  ];

  return (
    <>
      <section id="sobre-mi" style={estilos.seccion}>
        <div style={estilos.grid}>
          <div>
            <h2 style={estilos.titulo}>Sobre mí</h2>
            <p style={estilos.parrafo}>
              ¡Hola! Soy Danna Montece, una apasionada de la{' '}
              <span style={estilos.enlaceRosa}>Ingeniería en Computación</span>{' '}
              que encuentra belleza en la lógica y la resolución de problemas complejos.
            </p>
            <p style={estilos.parrafo}>
              Me sumergí profundamente en el ecosistema de{' '}
              <span style={estilos.enlaceRosa}>React</span>, descubriendo en el desarrollo
              frontend una forma poderosa de materializar ideas y crear experiencias impactantes.
            </p>
            <p style={estilos.parrafo}>
              Mi enfoque no se limita a escribir código: se trata de crear tecnología que
              resuelva problemas reales. Me motiva el impacto social que la ingeniería
              puede tener y busco constantemente oportunidades para innovar en el
              ámbito educativo y tecnológico.
            </p>
          </div>
          <div>
            <div style={estilos.valoresTitulo}>
              <span style={estilos.estrella}>★</span> Valores Fundamentales
            </div>
            {valores.map((v, i) => (
              <div key={i} style={estilos.valorItem}>
                <div style={estilos.valorIcono}>{v.icono}</div>
                <div>
                  <div style={estilos.valorNombre}>{v.nombre}</div>
                  <div style={estilos.valorDesc}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={estilos.educacionExperiencia}>
        <div style={estilos.gridDoble}>
          <div>
            <h3 style={estilos.secTitulo}>Educación</h3>
            <div style={estilos.timelineItem}>
              <div style={estilos.dot}></div>
              <div style={estilos.fecha}>2022 - Presente</div>
              <div style={estilos.itemTitulo}>Ingeniería en Computación</div>
              <div style={estilos.itemSubtitulo}>[Nombre de tu Universidad]</div>
              <div style={estilos.itemDesc}>
                Formación integral en fundamentos de computación, estructuras de datos,
                algoritmos y desarrollo de software. Especial interés en sistemas distribuidos
                y tecnologías web modernas.
              </div>
            </div>
          </div>
            <div style={estilos.timelineItem}>
              <div style={estilos.dot}></div>
              <div style={estilos.fecha}>2025 - 2026</div>
              <div style={estilos.itemTitulo}>Asistente de Investigación Académica</div>
              <div style={estilos.itemSubtitulo}>Proyecto de Innovación TIC</div>
              <div style={estilos.itemDesc}>
                Desarrollo de prototipos para herramientas educativas interactivas y análisis
                de datos estadísticos sobre el uso de tecnologías en el aula.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreMi;