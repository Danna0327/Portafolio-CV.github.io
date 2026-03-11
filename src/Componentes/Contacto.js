import React, { useState } from 'react';

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }
    alert('¡Mensaje enviado! Danna te responderá pronto 💌');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  const inputStyle = {
    width: '100%', background: 'rgba(15,23,42,0.5)',
    border: '1px solid rgba(255,0,128,0.3)',
    borderRadius: '8px', padding: '12px 16px',
    color: '#ff0080', fontSize: '0.9rem', outline: 'none',
    fontFamily: 'Inter, sans-serif',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: '800',
    textTransform: 'uppercase', letterSpacing: '2px',
    color: '#64748b', marginBottom: '8px',
  };

  return (
    <footer id="contacto" style={{ background: '#101e22', borderTop: '1px solid #1e293b', padding: '80px 5%' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span className="material-symbols-outlined" style={{ color: '#ff0080', fontSize: '32px' }}>terminal</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: '900' }}>Ponte en contacto</h2>
            </div>
            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: '0.9rem', marginBottom: '28px' }}>
              ¿Interesado en contratar? Contáctame a través de cualquiera de estos canales.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:montecedanna024@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>
                <div style={{ width: '36px', height: '36px', background: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ff0080' }}>mail</span>
                </div>
                montecedanna024@gmail.com
              </a>
              <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }}>
                <div style={{ width: '36px', height: '36px', background: '#1e293b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ff0080' }}>code</span>
                </div>
                github.com/Danna0327
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div style={{ flex: 1, maxWidth: '560px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Nombre</label>
                <input style={inputStyle} type="text" name="nombre" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input style={inputStyle} type="email" name="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label style={labelStyle}>Mensaje</label>
                <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }} name="mensaje" placeholder="¿En qué puedo ayudarte?" value={form.mensaje} onChange={handleChange} />
              </div>
              <button onClick={handleSubmit} className="pulse-animation" style={{
                width: '100%', background: '#ff0080', color: '#101e22',
                border: 'none', padding: '14px', borderRadius: '8px',
                fontWeight: '800', fontSize: '0.9rem', cursor: 'pointer',
                fontFamily: 'Inter, sans-serif', letterSpacing: '2px', textTransform: 'uppercase',
              }}>
                Enviar Mensaje
              </button>
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid rgba(30,41,59,0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#475569', fontSize: '0.8rem', flexWrap: 'wrap', gap: '12px' }}>
          <p>© 2026 Portafolio de Danna Montece. Todos los derechos reservados.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button onClick={() => {}} style={{ color: '#475569', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => e.target.style.color = '#ff0080'}
              onMouseLeave={e => e.target.style.color = '#475569'}>Política de Privacidad</button>
            <button onClick={() => {}} style={{ color: '#475569', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.8rem', fontFamily: 'Inter, sans-serif' }}
              onMouseEnter={e => e.target.style.color = '#ff0080'}
              onMouseLeave={e => e.target.style.color = '#475569'}>Términos de Servicio</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contacto;