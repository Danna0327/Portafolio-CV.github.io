import React, { useState, useEffect } from 'react';
import TarjetaProyecto from './TarjetaProyecto';

function Proyectos() {
  // 1. Estados: repos = lista de repos, cargando = si está esperando, error = si falló
  const [repos, setRepos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 2. useEffect: se ejecuta una sola vez cuando el componente carga
  useEffect(() => {
    // 3. fetch llama a la API de GitHub con tu usuario
    fetch('https://api.github.com/users/Danna0327/repos?sort=updated&per_page=6')
      .then(respuesta => {
        // 4. Verificar que la respuesta fue exitosa
        if (!respuesta.ok) {
          throw new Error('No se pudo conectar con GitHub');
        }
        // 5. Convertir la respuesta a JSON
        return respuesta.json();
      })
      .then(datos => {
        // 6. Guardar los repos en el estado
        setRepos(datos);
        setCargando(false);
      })
      .catch(err => {
        // 7. Si algo falla, guardar el error
        setError(err.message);
        setCargando(false);
      });
  }, []); // El [] significa que solo se ejecuta una vez

  const estilos = {
    seccion: {
      padding: '80px 8%',
      background: '#111111',
    },
    encabezado: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '40px',
    },
    titulo: {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#ffffff',
      borderLeft: '3px solid #ff2d78',
      paddingLeft: '14px',
    },
    enlaceGithub: {
      color: '#ff2d78',
      fontSize: '0.8rem',
      border: '1px solid #ff2d78',
      padding: '6px 14px',
      borderRadius: '4px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textDecoration: 'none',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    // Estado: cargando
    cargandoBox: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '60px',
      color: '#666',
    },
    spinner: {
      width: '40px',
      height: '40px',
      border: '3px solid #222',
      borderTop: '3px solid #ff2d78',
      borderRadius: '50%',
      margin: '0 auto 16px',
      animation: 'girar 0.8s linear infinite',
    },
    // Estado: error
    errorBox: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '40px',
      color: '#ff2d78',
      background: '#1a0a0e',
      borderRadius: '12px',
      border: '1px solid #ff2d7833',
    },
  };

  return (
    <section id="proyectos" style={estilos.seccion}>
      {/* Animación del spinner */}
      <style>{`
        @keyframes girar {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div style={estilos.encabezado}>
        <h2 style={estilos.titulo}>Proyectos Seleccionados</h2>
        <a
          href="https://github.com/Danna0327"
          target="_blank"
          rel="noreferrer"
          style={estilos.enlaceGithub}
        >
          Ver todos los repos →
        </a>
      </div>

      <div style={estilos.grid}>
        {/* Si está cargando, muestra spinner */}
        {cargando && (
          <div style={estilos.cargandoBox}>
            <div style={estilos.spinner}></div>
            <p>Cargando proyectos desde GitHub...</p>
          </div>
        )}

        {/* Si hubo error, muestra mensaje */}
        {error && (
          <div style={estilos.errorBox}>
            <p>⚠️ {error}</p>
            <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '8px' }}>
              Verifica tu conexión o intenta más tarde.
            </p>
          </div>
        )}

        {/* Si cargó bien, muestra los repos */}
        {!cargando && !error && repos.map(repo => (
          <TarjetaProyecto key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;