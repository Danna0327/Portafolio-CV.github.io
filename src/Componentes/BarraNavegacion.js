import React from 'react';

function BarraNavegacion() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(16,30,34,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(51,65,85,0.5)',
      padding: '16px 5%',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="material-symbols-outlined" style={{ color: '#ff0080', fontSize: '28px' }}>terminal</span>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '800', letterSpacing: '-0.5px' }}>DevPortfolio</h2>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[['#proyectos', 'Proyectos'], ['#habilidades', 'Habilidades'], ['#contacto', 'Contacto']].map(([href, label]) => (
              <a key={href} href={href} style={{ color: '#94a3b8', fontSize: '0.875rem', fontWeight: '500', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#ff0080'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}>
                {label}
              </a>
            ))}
          </div>
          <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer">
            <button className="pulse-animation" style={{
              background: '#ff0080', color: '#101e22',
              border: 'none', padding: '10px 22px',
              borderRadius: '8px', fontWeight: '800',
              fontSize: '0.85rem', cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
            }}>
              Currículum
            </button>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default BarraNavegacion;