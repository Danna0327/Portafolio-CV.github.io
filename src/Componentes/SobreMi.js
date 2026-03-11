import React from 'react';

function SobreMi() {
  const valores = [
    { icono: 'school', nombre: 'Aprendizaje Continuo', desc: 'Explorando constantemente nuevas tecnologías y mejores prácticas en ingeniería.' },
    { icono: 'build', nombre: 'Resolución de Problemas', desc: 'Enfoque analítico para descomponer retos complejos en soluciones elegantes.' },
    { icono: 'groups', nombre: 'Trabajo en Equipo', desc: 'Colaboración efectiva en entornos ágiles para alcanzar metas compartidas.' },
  ];

  return (
    <>
      {/* ── Sobre mí ── */}
      <section id="sobre-mi" style={{ padding: '80px 5%', background: 'rgba(15,23,42,0.5)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>

          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '900', marginBottom: '24px', letterSpacing: '-0.5px' }}>Sobre mí</h2>
            {[
              <>¡Hola! Soy Danna Montece, una apasionada de la <span style={{ color: '#ff0080', fontWeight: '600' }}>Ingeniería en Computación</span> que encuentra belleza en la lógica y la resolución de problemas complejos.</>,
              <>Me sumergí profundamente en el ecosistema de <span style={{ color: '#ff0080', fontWeight: '600' }}>React</span>, descubriendo en el desarrollo frontend una forma poderosa de materializar ideas y crear experiencias impactantes.</>,
              <>Mi enfoque no se limita a escribir código: se trata de crear tecnología que resuelva problemas reales. Me motiva el impacto social que la ingeniería puede tener y busco constantemente oportunidades para innovar en el ámbito educativo y tecnológico.</>,
            ].map((p, i) => (
              <p key={i} style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '0.92rem', marginBottom: '16px' }}>{p}</p>
            ))}
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <span style={{ color: '#ff0080', fontSize: '1.3rem' }}>★</span>
              <span style={{ fontWeight: '700', fontSize: '1.05rem' }}>Valores Fundamentales</span>
            </div>
            {valores.map((v, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '28px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(255,0,128,0.1)', border: '1px solid rgba(255,0,128,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#ff0080', fontSize: '20px' }}>{v.icono}</span>
                </div>
                <div>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', marginBottom: '6px' }}>{v.nombre}</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Educación y Experiencia ── */}
      <section style={{ padding: '80px 5%', background: '#101e22' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>

          {/* Educación */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '32px', borderLeft: '3px solid #ff0080', paddingLeft: '14px' }}>Educación</h3>
            <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #1e293b' }}>
              <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff0080' }}></div>
              <div style={{ color: '#ff0080', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '700' }}>2023 - Presente</div>
              <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>Ingeniería en Computación</div>
              <div style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '10px' }}>Universidad Politécnica Salesiana</div>
              <div style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.7 }}>
                Formación integral en fundamentos de computación, estructuras de datos, algoritmos y desarrollo de software. Especial interés en sistemas distribuidos y tecnologías web modernas.
              </div>
            </div>
          </div>

          {/* Experiencia */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '32px', borderLeft: '3px solid #ff0080', paddingLeft: '14px' }}>Experiencia</h3>
            <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '2px solid #1e293b' }}>
              <div style={{ position: 'absolute', left: '-5px', top: '6px', width: '8px', height: '8px', borderRadius: '50%', background: '#ff0080' }}></div>
              <div style={{ color: '#ff0080', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px', fontWeight: '700' }}>2026 - 2026</div>
              <div style={{ fontWeight: '700', fontSize: '1rem', marginBottom: '4px' }}>Asistente de Investigación Académica</div>
              <div style={{ color: '#475569', fontSize: '0.85rem', marginBottom: '10px' }}>Proyecto de Innovación TIC</div>
              <div style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.7 }}>
                Desarrollo de prototipos para herramientas educativas interactivas y análisis de datos estadísticos sobre el uso de tecnologías en el aula.
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default SobreMi;