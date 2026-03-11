import React from 'react';

function Habilidades() {
  const habilidades = [
    { nombre: 'HTML / CSS', nivel: 95 },
    { nombre: 'JavaScript', nivel: 85 },
    { nombre: 'React', nivel: 80 },
    { nombre: 'SQL', nivel: 75 },
  ];

  const herramientas = ['Git', 'Node.js', 'SQL', 'Postgres', 'React.js', 'Figma'];

  const metodologias = [
    'Metodologías Ágiles (Scrum)',
    'Control de Versiones',
    'Diseño UI/UX',
    'Desarrollo Colaborativo',
  ];

  const cards = [
    {
      icono: 'data_object',
      titulo: 'Desarrollo Web',
      contenido: (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {habilidades.map(h => (
            <li key={h.nombre} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{h.nombre}</span>
              <div style={{ width: '96px', height: '8px', background: '#1e293b', borderRadius: '999px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${h.nivel}%`, background: '#ff0080', borderRadius: '999px' }}></div>
              </div>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icono: 'hub',
      titulo: 'Otras Herramientas',
      contenido: (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {herramientas.map(h => (
            <span key={h} style={{
              padding: '5px 14px', background: '#1e293b',
              border: '1px solid #334155', borderRadius: '999px',
              fontSize: '12px', fontWeight: '500', color: '#cbd5e1',
            }}>{h}</span>
          ))}
        </div>
      ),
    },
    {
      icono: 'handyman',
      titulo: 'Metodologías',
      contenido: (
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {metodologias.map(m => (
            <li key={m} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', fontSize: '0.88rem' }}>
              <span className="material-symbols-outlined" style={{ color: '#ff0080', fontSize: '18px' }}>check_circle</span>
              {m}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section id="habilidades" style={{ padding: '80px 5%', background: 'rgba(15,23,42,0.5)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '12px', letterSpacing: '-0.5px' }}>Habilidades Técnicas</h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Dominio y competencia en el stack de ingeniería</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          {cards.map(card => (
            <div key={card.titulo} style={{
              padding: '32px',
              background: 'rgba(30,41,59,0.2)',
              border: '1px solid #1e293b',
              borderRadius: '16px',
            }}>
              <div style={{
                width: '48px', height: '48px',
                background: 'rgba(255,0,128,0.1)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <span className="material-symbols-outlined" style={{ color: '#ff0080' }}>{card.icono}</span>
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '24px' }}>{card.titulo}</h3>
              {card.contenido}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Habilidades;