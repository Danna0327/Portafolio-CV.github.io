import React, { useState } from 'react';
import portafolio from '../Recursos/Imagenes-Proyectos/Portafolio.png';
import mathspin from '../Recursos/Imagenes-Proyectos/mathspin.png';
import proyectoWeb from '../Recursos/Imagenes-Proyectos/proyecto-web.png';

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
    tags: ['React', 'Tailwind'],
    github: 'https://github.com/Danna0327/Portafolio-CV.github.io',
    demo: '#',
  },
];

function TarjetaProyecto({ proyecto }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: '#101e22',
        border: `1px solid ${hover ? '#ff0080' : '#1e293b'}`,
        borderRadius: '12px', overflow: 'hidden',
        transition: 'all 0.3s ease',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        boxShadow: hover ? '0 0 25px rgba(255,0,128,0.3)' : 'none',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#0f172a' }}>
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(to top, #101e22, transparent)',
        }}></div>
        {proyecto.imagen
          ? <img src={proyecto.imagen} alt={proyecto.titulo} style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: hover ? 'scale(1.1)' : 'scale(1)',
              transition: 'transform 0.5s ease',
            }} />
          : <div style={{ width: '100%', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#1e293b' }}>computer</span>
            </div>
        }
      </div>

      {/* Content */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {proyecto.tags.map(tag => (
            <span key={tag} style={{
              background: '#1e293b', padding: '3px 10px', borderRadius: '4px',
              fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px', color: '#94a3b8',
            }}>{tag}</span>
          ))}
        </div>

        <h3 style={{
          fontWeight: '800', fontSize: '1.1rem', marginBottom: '10px',
          color: hover ? '#ff0080' : '#f1f5f9', transition: 'color 0.2s',
        }}>{proyecto.titulo}</h3>

        <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.7, marginBottom: '20px', flex: 1 }}>
          {proyecto.descripcion}
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <a href={proyecto.github} target="_blank" rel="noreferrer" style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
            height: '40px', background: '#1e293b', borderRadius: '6px',
            color: '#f1f5f9', fontSize: '0.78rem', fontWeight: '700', textDecoration: 'none',
            transition: 'background 0.2s',
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span> GitHub
          </a>
          <a href={proyecto.demo} style={{
            flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '40px', border: '1px solid #334155', borderRadius: '6px',
            color: '#f1f5f9', fontSize: '0.78rem', fontWeight: '700', textDecoration: 'none',
          }}>
            Detalles
          </a>
        </div>
      </div>
    </div>
  );
}

function Proyectos() {
  return (
    <section id="proyectos" style={{ padding: '80px 5%' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', letterSpacing: '-0.5px', marginBottom: '8px' }}>Proyectos Seleccionados</h2>
            <div style={{ height: '4px', width: '80px', background: '#ff0080', borderRadius: '2px' }}></div>
          </div>
          <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer" className="pulse-animation" style={{
            color: '#ff0080', fontSize: '0.8rem', fontWeight: '700',
            display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none',
          }}>
            VER TODOS LOS REPOS EN GITHUB
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {proyectos.map(p => <TarjetaProyecto key={p.id} proyecto={p} />)}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;