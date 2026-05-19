import './index.css';

const sections = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];

export default function App() {
  return (
    <div className="page-wrapper">
      {/* HEADER */}
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-container">
            <img
              src="/Insta.png"
              alt="Caverna de Alexandria"
              className="logo-img"
            />
            <span className="brand-name">Caverna de Alexandria</span>
          </div>
        </div>
      </header>

      <div className="header-spacer" />

      {/* SECTION IMAGES + CTA */}
      <main className="sections-wrapper">
        {sections.map(({ id }) => (
          <img
            key={id}
            src={`/placeholder-${id}.webp`}
            alt=""
            loading={id === 1 ? 'eager' : 'lazy'}
            className="section-img"
          />
        ))}

        {/* CTA BLOCK */}
        <section className="cta-block">
          <div className="cta-alert">
            <span className="alert-icon">⚠</span>
            <div className="alert-text-block">
              <p className="alert-title">ESSA NÃO É UMA OFERTA QUE VAI FICAR DISPONÍVEL PARA SEMPRE.</p>
              <p className="alert-sub">Poucas pessoas realmente entendem os sinais invisíveis. Não fique para trás.</p>
            </div>
          </div>

          <div className="cta-btn-wrapper">
            <button className="cta-btn" aria-label="Acessar o Código Anti-Rejeição agora">
              <div className="offer-cta-sheen" />
              <span className="btn-lock">🔒</span>
              <div className="btn-content">
                <p className="btn-text">QUERO ACESSAR O CÓDIGO ANTI-REJEIÇÃO™ AGORA</p>
                <p className="btn-sub">ACESSO IMEDIATO • 100% ONLINE • GARANTIA DE 7 DIAS</p>
              </div>
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <nav className="footer-nav">
          <a href="#privacy" className="footer-link">Política de Privacidade</a>
          <span className="footer-sep">·</span>
          <a href="#terms" className="footer-link">Termos de Serviço</a>
          <span className="footer-sep">·</span>
          <a href="#support" className="footer-link">Suporte</a>
        </nav>
        <div className="footer-disclaimer">
          Este produto é destinado a homens adultos que desejam melhorar sua presença digital. Os resultados variam individualmente. O sistema não garante resultados específicos em relacionamentos.
        </div>
      </footer>
    </div>
  );
}
