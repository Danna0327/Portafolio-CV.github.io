import React, { useState } from 'react';
import portafolio from '../Recursos/Imagenes-Proyectos/Portafolio.png';
import mathspin from '../Recursos/Imagenes-Proyectos/mathspin.png';
import proyectoWeb from '../Recursos/Imagenes-Proyectos/proyecto-web.png';

// ── Datos ──────────────────────────────────────────────
const proyectos = [
  {
    id: 1,
    titulo: 'MathSpin',
    descripcion: 'Software educativo diseñado para facilitar el aprendizaje de las matemáticas de forma interactiva y dinámica.',
    imagen: mathspin,
    tags: ['JavaScript', 'Educación'],
    github: 'https://github.com/Danna0327/mathspin',
    demo: '#',
  },
  {
    id: 2,
    titulo: 'AbastoGest',
    descripcion: 'Sistema de gestión web diseñado para el negocio familiar de abarrotes.',
    imagen: proyectoWeb,
    tags: ['React', 'TIC'],
    github: 'https://github.com/Danna0327/abastosgest',
    demo: '#',
  },
  {
    id: 3,
    titulo: 'Portafolio React',
    descripcion: 'Sitio web personal desarrollado con React para mostrar mi trayectoria, habilidades y proyectos en el campo de la computación.',
    imagen: portafolio,
    tags: ['React', 'CSS'],
    github: 'https://github.com/Danna0327/Portafolio-CV.github.io',
    demo: '#',
  },
];

// ── Tarjeta individual ─────────────────────────────────
function TarjetaProyecto({ proyecto }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? '#1a1a1a' : '#141414',
        border: `1px solid ${hover ? '#ff2d78' : '#222'}`,
        borderRadius: '12px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Imagen del proyecto */}
      <div style={{
        width: '100%',
        height: '160px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {proyecto.imagen
          ? <img
              src={proyecto.imagen}
              alt={proyecto.titulo}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hover ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            />
          : <span style={{ fontSize: '2.5rem' }}>🖥️</span>
        }
      </div>

      {/* Contenido */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
          {proyecto.tags.map(tag => (
            <span key={tag} style={{
              background: '#1e1e1e',
              border: '1px solid #333',
              padding: '3px 10px',
              borderRadius: '4px',
              fontSize: '10px',
              color: '#ff2d78',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: '600',
            }}>{tag}</span>
          ))}
        </div>

        {/* Título */}
        <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '10px', color: '#fff' }}>
          {proyecto.titulo}
        </div>

        {/* Descripción */}
        <div style={{ color: '#888', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
          {proyecto.descripcion}
        </div>

        {/* Botones */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={proyecto.github} target="_blank" rel="noreferrer" style={{
            flex: 1, padding: '9px', background: '#1e1e1e', border: '1px solid #333',
            borderRadius: '6px', color: '#ccc', fontSize: '0.8rem', textAlign: 'center', textDecoration: 'none',
          }}>
            &lt;/&gt; GitHub
          </a>
          <a href={proyecto.demo} style={{
            flex: 1, padding: '9px', background: 'transparent', border: '1px solid #444',
            borderRadius: '6px', color: '#ccc', fontSize: '0.8rem', textAlign: 'center', textDecoration: 'none',
          }}>
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Sección principal ──────────────────────────────────
function Proyectos() {
  return (
    <section id="proyectos" style={{ padding: '80px 8%', background: '#111111' }}>

      {/* Encabezado */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', borderLeft: '3px solid #ff2d78', paddingLeft: '14px' }}>
          Proyectos Seleccionados
        </h2>
        <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer" style={{
          color: '#ff2d78', fontSize: '0.8rem', border: '1px solid #ff2d78',
          padding: '6px 14px', borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px',
        }}>
          Ver todos los repos →
        </a>
      </div>

      {/* Grid de tarjetas */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
        {proyectos.map(proyecto => (
          <TarjetaProyecto key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>

    </section>
  );
}

export default Proyectos;
