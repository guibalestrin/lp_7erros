import './index.css';

const sections = [
  { id: 1, src: '/1_hero.png', alt: 'SeÃ§Ã£o principal da landing page' },
  { id: 2, src: '/2_bigpromise.png', alt: 'SeÃ§Ã£o com a grande promessa' },
  { id: 3, src: '/3_quebra.png', alt: 'SeÃ§Ã£o de quebra de padrÃ£o' },
  { id: 4, src: '/4_causaoculta.png', alt: 'SeÃ§Ã£o sobre a causa oculta' },
  { id: 5, src: '/5_inimigo.png', alt: 'SeÃ§Ã£o sobre o inimigo invisÃ­vel' },
  { id: 6, src: '/6_doremocional.png', alt: 'SeÃ§Ã£o sobre dor emocional' },
  { id: 7, src: '/7_storytelling.png', alt: 'SeÃ§Ã£o de storytelling' },
  { id: 8, src: '/8_mecanismo.png', alt: 'SeÃ§Ã£o do mecanismo' },
  { id: 9, src: '/9_como.png', alt: 'SeÃ§Ã£o explicando como funciona' },
  { id: 10, src: '/10_provas.png', alt: 'SeÃ§Ã£o com provas' },
  { id: 11, src: '/10_1_provas.png', alt: 'SeÃ§Ã£o complementar com provas' },
  { id: 12, src: '/11_offerstack.png', alt: 'SeÃ§Ã£o da oferta principal' },
];

const routeContent = {
  '/privacidade': {
    title: 'Política de Privacidade',
    paragraphs: [
      'A Caverna de Alexandria coleta apenas as informações necessárias para processar pagamentos, liberar o acesso ao produto e prestar suporte ao cliente.',
      'Os dados informados não são vendidos a terceiros. Eles podem ser compartilhados apenas com plataformas operacionais essenciais, como meios de pagamento, hospedagem e ferramentas de atendimento.',
      'Ao continuar navegando nesta página ou adquirir o produto, você concorda com o uso dessas informações para comunicação, entrega de conteúdo e melhoria da experiência.',
      'Se desejar solicitar atualização, correção ou exclusão de dados, entre em contato pelos canais oficiais de suporte.',
    ],
  },
  '/termos': {
    title: 'Termos de Serviço',
    paragraphs: [
      'O conteúdo da Caverna de Alexandria é destinado exclusivamente a fins informativos e educacionais, sendo proibida a reprodução, distribuição ou revenda sem autorização expressa.',
      'O acesso ao material é individual. O compartilhamento indevido de login, arquivos ou áreas protegidas pode resultar em bloqueio do acesso sem reembolso.',
      'Os resultados variam de pessoa para pessoa e dependem da aplicação prática do conteúdo. Nenhuma promessa deve ser interpretada como garantia absoluta de resultado.',
      'Ao adquirir e utilizar o produto, você declara estar de acordo com estes termos e com a política de privacidade vigente.',
    ],
  },
  '/suporte': {
    title: 'Suporte',
    paragraphs: [
      'Se você precisar de ajuda com acesso, pagamento ou dúvidas sobre o produto, entre em contato pelos canais abaixo.',
      'Email: cavernadealexandria@gmail.com',
      'WhatsApp: (11)986955476',
      'Nosso atendimento responde por ordem de chegada em horário comercial.',
    ],
  },
} as const;

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacidade" className="footer-link">Política de Privacidade</a>
        <span className="footer-sep">·</span>
        <a href="/termos" className="footer-link">Termos de Serviço</a>
        <span className="footer-sep">·</span>
        <a href="/suporte" className="footer-link">Suporte</a>
      </nav>
      <div className="footer-disclaimer">
        Este produto é destinado a homens adultos que desejam melhorar sua presença digital.
        Os resultados variam individualmente. O sistema não garante resultados específicos em relacionamentos.
      </div>
    </footer>
  );
}

function LegalPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="page-wrapper">
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo-container logo-link">
            <img
              src="/Insta.png"
              alt="Caverna de Alexandria"
              className="logo-img"
            />
            <span className="brand-name">Caverna de Alexandria</span>
          </a>
        </div>
      </header>

      <div className="header-spacer" />

      <main className="legal-wrapper">
        <section className="legal-card">
          <p className="legal-kicker">Informações Legais</p>
          <h1 className="legal-title">{title}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="legal-paragraph">{paragraph}</p>
          ))}
          <a href="/" className="legal-back">Voltar para a página principal</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="page-wrapper">
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

      <main className="sections-wrapper">
        {sections.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            alt={alt}
            loading={id === 1 ? 'eager' : 'lazy'}
            className="section-img"
          />
        ))}

        <section className="cta-block">
          <div className="cta-alert">
            <span className="alert-icon">⚠</span>
            <div className="alert-text-block">
              <p className="alert-title">O JOGO MUDA QUANDO VOCÊ COMEÇA A SER PERCEBIDO DIFERENTE.</p>
              <p className="alert-sub">Você está a um passo de parar de aceitar qualquer match só por carência… e começar a se envolver com mulheres que hoje parecem inalcançáveis.</p>
            </div>
          </div>

          <div className="cta-btn-wrapper">
            <a
              className="cta-btn"
              href="https://pay.kiwify.com.br/kTyieX6"
              aria-label="Acessar o Código Anti-Rejeição agora"
              target="_blank"
              rel="noreferrer"
            >
              <div className="offer-cta-sheen" />
              <span className="btn-lock">🔒</span>
              <div className="btn-content">
                <p className="btn-text">QUERO ACESSAR O CÓDIGO ANTI-REJEIÇÃO™ AGORA</p>
                <p className="btn-sub">ACESSO IMEDIATO • 100% ONLINE • GARANTIA DE 7 DIAS</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.toLowerCase();
  const page = routeContent[path as keyof typeof routeContent];

  if (page) {
    return <LegalPage title={page.title} paragraphs={page.paragraphs} />;
  }

  return <LandingPage />;
}
