import { Fragment, useEffect, useState } from 'react';
import './index.css';

type LandingSection = {
  id: string;
  src: string;
  alt: string;
  anchor?: 'storytelling' | 'offerstack';
};

const primarySections: LandingSection[] = [
  { id: 'hero', src: '/1_hero.png', alt: 'Secao principal da pagina' },
  { id: 'quebra', src: '/2_quebra.png', alt: 'Secao de quebra de padrao' },
  { id: 'inimigo', src: '/3_inimigo.png', alt: 'Secao sobre o inimigo invisivel' },
  { id: 'dor-emocional', src: '/4_doremocional.png', alt: 'Secao sobre dor emocional' },
  { id: 'storytelling', src: '/5_storytelling.png', alt: 'Secao de storytelling', anchor: 'storytelling' },
  { id: 'mecanismo', src: '/6_mecanismo.png', alt: 'Secao do mecanismo' },
  { id: 'como-funciona', src: '/7_como.png', alt: 'Secao explicando como funciona' },
];

const defaultProofSections: LandingSection[] = [
  { id: 'provas-01', src: '/8.1_provas.png', alt: 'Prova social 1' },
  { id: 'provas-02', src: '/8.2_provas.png', alt: 'Prova social 2' },
  { id: 'provas-03', src: '/8.3_provas.png', alt: 'Prova social 3' },
  { id: 'provas-04', src: '/8.4_provas.png', alt: 'Prova social 4' },
  { id: 'provas-05', src: '/8.5_provas.png', alt: 'Prova social 5' },
];

const offerSections: LandingSection[] = [
  { id: 'offerstack-01', src: '/9_preoffer.png', alt: 'Pre-oferta', anchor: 'offerstack' },
  { id: 'offerstack-02', src: '/10_offerstack.png', alt: 'Oferta principal' },
];

const routeContent = {
  '/privacidade': {
    title: 'Politica de Privacidade',
    paragraphs: [
      'A Caverna de Alexandria coleta apenas as informacoes necessarias para processar pagamentos, liberar o acesso ao produto e prestar suporte ao cliente.',
      'Os dados informados nao sao vendidos a terceiros. Eles podem ser compartilhados apenas com plataformas operacionais essenciais, como meios de pagamento, hospedagem e ferramentas de atendimento.',
      'Ao continuar navegando nesta pagina ou adquirir o produto, voce concorda com o uso dessas informacoes para comunicacao, entrega de conteudo e melhoria da experiencia.',
      'Se desejar solicitar atualizacao, correcao ou exclusao de dados, entre em contato pelos canais oficiais de suporte.',
    ],
  },
  '/termos': {
    title: 'Termos de Servico',
    paragraphs: [
      'O conteudo da Caverna de Alexandria e destinado exclusivamente a fins informativos e educacionais, sendo proibida a reproducao, distribuicao ou revenda sem autorizacao expressa.',
      'O acesso ao material e individual. O compartilhamento indevido de login, arquivos ou areas protegidas pode resultar em bloqueio do acesso sem reembolso.',
      'Os resultados variam de pessoa para pessoa e dependem da aplicacao pratica do conteudo. Nenhuma promessa deve ser interpretada como garantia absoluta de resultado.',
      'Ao adquirir e utilizar o produto, voce declara estar de acordo com estes termos e com a politica de privacidade vigente.',
    ],
  },
  '/suporte': {
    title: 'Suporte',
    paragraphs: [
      'Se voce precisar de ajuda com acesso, pagamento ou duvidas sobre o produto, entre em contato pelos canais abaixo.',
      'Email: cavernadealexandria@gmail.com',
      'WhatsApp: (11) 98695-5476',
      'Nosso atendimento responde por ordem de chegada, em horario comercial.',
    ],
  },
} as const;

const maleNames = [
  'Carlos',
  'Rafael',
  'Bruno',
  'Felipe',
  'Lucas',
  'Mateus',
  'Thiago',
  'Gabriel',
  'Andre',
  'Renato',
  'Vinicius',
  'Gustavo',
];

function SocialProofPopup() {
  const [buyerName, setBuyerName] = useState(() => maleNames[Math.floor(Math.random() * maleNames.length)]);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storytellingSection = document.getElementById('storytelling');

    if (!storytellingSection) {
      return undefined;
    }

    const updateVisibility = () => {
      const sectionTop = storytellingSection.getBoundingClientRect().top;
      setIsVisible(sectionTop <= 80);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setMessageIndex((currentIndex) => {
        let nextIndex = currentIndex;

        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * 3);
        }

        if (nextIndex === 2) {
          setBuyerName((currentName) => {
            let nextName = currentName;

            while (nextName === currentName && maleNames.length > 1) {
              nextName = maleNames[Math.floor(Math.random() * maleNames.length)];
            }

            return nextName;
          });
        }

        return nextIndex;
      });
    }, 10000);

    return () => window.clearInterval(intervalId);
  }, [isVisible]);

  const messages = [
    '27 pessoas adquiriram este método nas últimas horas.',
    '10 pessoas estão comprando agora.',
    `${buyerName} acabou de comprar o Código Anti-Rejeição.`,
  ];

  return (
    <aside
      className={`social-proof-popup${isVisible ? ' is-visible' : ''}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="social-proof-dot" aria-hidden="true" />
      <p key={messages[messageIndex]} className="social-proof-message">
        {messages[messageIndex]}
      </p>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav">
        <a href="/privacidade" className="footer-link">Politica de Privacidade</a>
        <span className="footer-sep">|</span>
        <a href="/termos" className="footer-link">Termos de Serviço</a>
        <span className="footer-sep">|</span>
        <a href="/suporte" className="footer-link">Suporte</a>
      </nav>
      <div className="footer-disclaimer">
        Este produto é destinado a homens adultos que desejam melhorar sua presença digital.
        Os resultados variam de forma individual. O sistema não garante resultados específicos em relacionamentos.
      </div>
    </footer>
  );
}

function LegalPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
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
          <p className="legal-kicker">Informacoes Legais</p>
          <h1 className="legal-title">{title}</h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="legal-paragraph">{paragraph}</p>
          ))}
          <a href="/" className="legal-back">Voltar para a pagina principal</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function LandingSectionImage({
  section,
  isFirst,
}: {
  section: LandingSection;
  isFirst: boolean;
}) {
  return (
    <img
      id={section.anchor}
      src={section.src}
      alt={section.alt}
      loading={isFirst ? 'eager' : 'lazy'}
      className="section-img"
    />
  );
}

function LandingPage({ proofSections }: { proofSections: LandingSection[] }) {
  const landingSections = [...primarySections, ...proofSections, ...offerSections];

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
        {landingSections.map((section, index) => (
          <Fragment key={section.id}>
            <LandingSectionImage section={section} isFirst={index === 0} />

            {section.id === 'hero' ? (
              <section className="jump-cta-section">
                <a
                  className="jump-cta-button"
                  href="#storytelling"
                  aria-label="Ver o sistema completo e ir para a secao de storytelling"
                >
                  <span className="jump-cta-label">VER O SISTEMA COMPLETO</span>
                  <span className="jump-cta-arrow" aria-hidden="true">{'>'}</span>
                </a>
              </section>
            ) : null}

            {section.id === 'como-funciona' ? (
              <section className="offer-jump-section">
                <a
                  className="offer-jump-card"
                  href="#offerstack"
                  aria-label="Aplicar o sistema completo e ir para a secao da oferta principal"
                >
                  <div className="offer-jump-icon" aria-hidden="true">
                    <img src="/Insta.png" alt="" className="offer-jump-icon-img" />
                  </div>

                  <div className="offer-jump-copy">
                    <p className="offer-jump-eyebrow">PERCEPÇÃO GERA ATRAÇÃO.</p>
                    <p className="offer-jump-title"></p>
                  </div>

                  <span className="offer-jump-button">
                    APLICAR O SISTEMA COMPLETO
                    <span className="offer-jump-arrow" aria-hidden="true">{'->'}</span>
                  </span>
                </a>
              </section>
            ) : null}
          </Fragment>
        ))}

        <section className="cta-block">
          <div className="cta-alert">
            <span className="alert-icon">!</span>
            <div className="alert-text-block">
              <p className="alert-title">O JOGO MUDA QUANDO VOCÊ COMEÇA A SER PERCEBIDO DIFERENTE.</p>
              <p className="alert-sub">
                Você está a um passo de parar de aceitar qualquer match apenas por falta de opção
                e começar a se envolver com mulheres que hoje parecem inalcançáveis.
              </p>
            </div>
          </div>

          <div className="cta-btn-wrapper">
            <a
              className="cta-btn"
              href="https://pay.kiwify.com.br/kTyieX6"
              aria-label="Acessar o Codigo Anti-Rejeicao agora"
              target="_blank"
              rel="noreferrer"
            >
              <div className="offer-cta-sheen" />

              <div className="btn-content">
                <p className="btn-text">QUERO ACESSAR O CÓDIGO ANTI-REJEIÇÃO AGORA</p>
                <p className="btn-sub">ACESSO IMEDIATO | 100% ONLINE | GARANTIA DE 7 DIAS</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <SocialProofPopup />
    </div>
  );
}

export default function App() {
  const pathname = window.location.pathname.toLowerCase();
  const routeData = routeContent[pathname as keyof typeof routeContent];

  if (routeData) {
    return <LegalPage title={routeData.title} paragraphs={routeData.paragraphs} />;
  }

  return <LandingPage proofSections={defaultProofSections} />;
}
