import React, { useState } from 'react';

function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }
    alert('¡Mensaje enviado! Danna te responderá pronto 💌');
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  const estilos = {
    seccion: {
      padding: '80px 8%',
      background: '#111111',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '60px',
      alignItems: 'start',
    },
    iconoCorreo: {
      fontSize: '1.8rem',
      marginBottom: '16px',
    },
    titulo: {
      fontSize: '1.8rem',
      fontWeight: '800',
      marginBottom: '16px',
      color: '#ffffff',
    },
    descripcion: {
      color: '#888',
      lineHeight: 1.8,
      fontSize: '0.9rem',
      marginBottom: '32px',
    },
    canales: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    canalItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#ccc',
      fontSize: '0.9rem',
      textDecoration: 'none',
    },
    canalIcono: {
      width: '36px',
      height: '36px',
      background: '#1e1e1e',
      border: '1px solid #333',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
    },
    label: {
      display: 'block',
      color: '#aaa',
      fontSize: '0.8rem',
      marginBottom: '8px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    input: {
      width: '100%',
      background: '#1a1a1a',
      border: '1px solid #2a2a2a',
      borderRadius: '6px',
      padding: '12px 16px',
      color: '#fff',
      fontSize: '0.9rem',
      marginBottom: '20px',
      outline: 'none',
    },
    textarea: {
      width: '100%',
      background: '#1a1a1a',
      border: '1px solid #2a2a2a',
      borderRadius: '6px',
      padding: '12px 16px',
      color: '#fff',
      fontSize: '0.9rem',
      marginBottom: '20px',
      outline: 'none',
      resize: 'vertical',
      minHeight: '120px',
      fontFamily: 'inherit',
    },
    boton: {
      width: '100%',
      background: '#ff2d78',
      color: '#fff',
      border: 'none',
      padding: '14px',
      borderRadius: '6px',
      fontWeight: 'bold',
      fontSize: '0.95rem',
      cursor: 'pointer',
      letterSpacing: '1px',
    },
    footer: {
      textAlign: 'center',
      padding: '24px',
      borderTop: '1px solid #1a1a1a',
      color: '#555',
      fontSize: '0.8rem',
      background: '#0d0d0d',
    },
  };

  return (
    <>
      <section id="contacto" style={estilos.seccion}>
        <div style={estilos.grid}>
          <div>
            <div style={estilos.iconoCorreo}>📬</div>
            <h2 style={estilos.titulo}>Ponte en contacto</h2>
            <p style={estilos.descripcion}>
              ¿Interesado en contratar?<br />
              Contáctame a través de cualquiera de estos canales.
            </p>
            <div style={estilos.canales}>
              <a href="mailto:montecedanna024@gmail.com" style={estilos.canalItem}>
                <div style={estilos.canalIcono}>✉️</div>
                montecedanna024@gmail.com
              </a>
              <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer" style={estilos.canalItem}>
                <div style={estilos.canalIcono}>🐙</div>
                github.com/Danna0327
              </a>
            </div>
          </div>

          <div>
            <label style={estilos.label}>Nombre</label>
            <input
              style={estilos.input}
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
            />
            <label style={estilos.label}>Email</label>
            <input
              style={estilos.input}
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
            />
            <label style={estilos.label}>Mensaje</label>
            <textarea
              style={estilos.textarea}
              name="mensaje"
              placeholder="¿En qué puedo ayudarte?"
              value={form.mensaje}
              onChange={handleChange}
            />
            <button style={estilos.boton} onClick={handleSubmit}>
              ENVIAR MENSAJE
            </button>
          </div>
        </div>
      </section>

      <footer style={estilos.footer}>
        © 2026 Portafolio de Danna Montece · Todos los derechos reservados ·{' '}
        <a href="https://github.com/Danna0327" target="_blank" rel="noreferrer" style={{ color: '#ff2d78' }}>
          GitHub
        </a>
      </footer>
    </>
  );
}

export default Contacto;