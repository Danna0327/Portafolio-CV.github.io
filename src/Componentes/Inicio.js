import React from 'react';
import Perfil from '../Recursos/Perfil.jpg';

function Inicio() {
  return (
    <section style={{ position: 'relative', padding: '80px 5% 120px', maxWidth: '1280px', margin: '0 auto' }}>

      {/* Glow blob */}
      <div style={{
        position: 'absolute', top: 0, right: 0, zIndex: -1,
        width: '500px', height: '500px',
        background: 'rgba(255,0,128,0.05)',
        filter: 'blur(120px)', borderRadius: '50%',
      }}></div>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>

        {/* Left content */}
        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', gap: '28px' }}>

          <div>
            <span style={{
              display: 'inline-block', padding: '4px 12px',
              fontSize: '11px', fontWeight: '800', letterSpacing: '3px',
              textTransform: 'uppercase', color: '#ff0080',
              background: 'rgba(255,0,128,0.1)', borderRadius: '6px',
              marginBottom: '20px',
            }}>Computer Engineering</span>

            <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: 1.1, letterSpacing: '-1px' }}>
              Danna Montece,
              <span className="neon-glow" style={{ color: '#ff0080', display: 'block' }}>
                Ingeniera en<br />Computación
              </span>
            </h1>
          </div>

          <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '480px' }}>
            Estudiante de Ingeniería en Computación enfocada en el desarrollo de soluciones tecnológicas innovadoras.
            Especializada en la creación de software educativo y aplicaciones web modernas.
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {['JavaScript & React', 'Git', 'SQL'].map(tag => (
              <span key={tag} style={{
                border: '1px solid #334155', padding: '5px 14px',
                borderRadius: '999px', fontSize: '12px', color: '#94a3b8',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ff0080', display: 'inline-block' }}></span>
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#proyectos">
              <button className="pulse-animation" style={{
                background: '#ff0080', color: '#101e22',
                border: 'none', padding: '13px 30px', borderRadius: '8px',
                fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
              }}>Ver Proyectos</button>
            </a>
            <a href="#contacto">
              <button style={{
                background: 'transparent', color: '#f1f5f9',
                border: '1px solid #334155', padding: '13px 30px', borderRadius: '8px',
                fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                fontWeight: '600',
              }}>Contact Me</button>
            </a>
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '300px', height: '360px', borderRadius: '16px',
            overflow: 'hidden', border: '2px solid #ff0080',
            boxShadow: '0 0 30px rgba(255,0,128,0.3)',
          }}>
            <img src={Perfil} alt="Danna Montece" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Code card */}
          <div style={{
            position: 'absolute', bottom: '-24px', left: '-40px',
            background: '#0f172a', border: '1px solid #1e293b',
            borderRadius: '10px', padding: '14px 18px',
            fontSize: '11px', fontFamily: 'monospace', lineHeight: 1.9,
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
          }}>
            <div><span style={{ color: '#ff0080' }}>const</span> <span style={{ color: '#7dd3fc' }}>engineer</span> = {'{'}</div>
            <div>&nbsp;&nbsp;name: <span style={{ color: '#86efac' }}>"Danna Montece"</span>,</div>
            <div>&nbsp;&nbsp;role: <span style={{ color: '#86efac' }}>"Ing. Computación"</span></div>
            <div>{'}'}</div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Inicio;