"use client";

import {
  Brain,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  FlaskConical,
  FileUp,
  Ghost,
  GraduationCap,
  MessageCircle,
  MessageSquarePlus,
  Mic,
  Paperclip,
  Pill,
  Search,
  SendHorizontal,
  ShieldCheck,
  TriangleAlert,
  X,
} from "lucide-react";
import { useRef } from "react";

import { Header } from "@/src/components/landing/header";
import { FaqAccordion } from "@/src/components/landing/faq-accordion";
import { JourneyCardTabs } from "@/src/components/landing/journey-card-tabs";
import { BrandWordmark } from "@/src/components/shared/brand-wordmark";
import { Button } from "@/src/components/shared/button";
import { Container } from "@/src/components/shared/container";
import { SectionHeading } from "@/src/components/shared/section-heading";
import { landingContent } from "@/src/content/landing-content";

const onCallUrgentQuestions = [
  "Dor torácica com supra: qual conduta agora?",
  "Essa cefaleia pode ser HSA?",
  "Já é sepse grave?",
  "Intubo agora ou ainda observo?",
  "Hipotensão refratária: próximo passo?",
  "Precisa de oxigênio de alto fluxo?",
  "Com esse peso, qual é a dose segura agora?",
  "Posso trombolisar nesse critério?",
  "Qual antibiótico empírico iniciar?",
  "Essa alteração no ECG muda conduta?",
  "Quando acionar neurocirurgia?",
  "Esse paciente vai piorar nos próximos minutos?",
];

export function LandingPage() {
  const sourcesCarouselRef = useRef<HTMLDivElement>(null);
  const testimonialsCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarouselLoop = (carousel: HTMLDivElement | null, itemSelector: string, direction: "left" | "right") => {
    if (!carousel) {
      return;
    }

    const firstCard = carousel.querySelector<HTMLElement>(itemSelector);
    if (!firstCard) {
      return;
    }

    const styles = getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0");
    const distance = firstCard.getBoundingClientRect().width + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const tolerance = 8;

    if (direction === "right" && carousel.scrollLeft >= maxScroll - tolerance) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === "left" && carousel.scrollLeft <= tolerance) {
      carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
      return;
    }

    carousel.scrollBy({
      left: direction === "right" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const handleSourceScroll = (direction: "left" | "right") => {
    scrollCarouselLoop(sourcesCarouselRef.current, ".source-card", direction);
  };

  const handleTestimonialScroll = (direction: "left" | "right") => {
    scrollCarouselLoop(testimonialsCarouselRef.current, ".testimonial", direction);
  };

  return (
    <>
      <svg aria-hidden className="brand-gradient-defs" focusable="false">
        <defs>
          <linearGradient id="brand-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#2BFFBD" />
            <stop offset="100%" stopColor="#96FF84" />
          </linearGradient>
        </defs>
      </svg>

      <Header navItems={landingContent.navItems} />

      <main className="landing-page" id="top">
        <section className="hero" id="solucoes">
          <Container className="hero-grid">
            <div>
              <p className="chip">
                <ShieldCheck size={14} /> Inteligência médica baseada em evidências
              </p>
              <h1 className="hero-title">
                Tire dúvidas médicas em segundos com <span className="text-gradient">confiança clínica e fonte verificável</span>
              </h1>
              <p className="hero-description">
                O MedSeek é o assistente de IA treinado nos principais livros de medicina do mundo. Pergunte qualquer coisa
                clínica e receba resposta rastreável, com a página exata da fonte. Ideal para plantões, provas e residência.
              </p>
              <div className="hero-actions">
                <Button>Teste gratuitamente</Button>
                <a className="btn btn-secondary" href="#demo-interface">
                  Ver demonstração
                </a>
              </div>
              <ul className="hero-bullets">
                {landingContent.heroBullets.map((item) => (
                  <li className="hero-bullet" key={item.text}>
                    <Check className="brand-gradient-check" size={16} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        <section className="section section-light demo-section" id="demo">
          <Container>
            <div className="demo-shell" id="demo-interface" aria-label="Exemplo de interface MedSeek">
              <div className="demo-topbar">
                <div className="demo-mac-dots" aria-hidden>
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <p>https://medseek.app/chat</p>
              </div>

              <div className="demo-workspace">
                <aside className="demo-sidebar">
                  <div className="demo-brand">
                    <BrandWordmark />
                  </div>
                  <button className="demo-new-chat" type="button">
                    <MessageSquarePlus size={14} /> Novo Chat
                  </button>
                  <nav aria-label="Ferramentas acadêmicas" className="demo-tool-list">
                    <p className="demo-tool-title">Acadêmico</p>

                    <button className="demo-tool-item demo-tool-item-gerar-prova demo-tool-item-active" type="button">
                      <span className="demo-tool-left">
                        <GraduationCap size={14} />
                        <span>Gerar Prova</span>
                      </span>
                    </button>

                    <button className="demo-tool-item demo-tool-item-flashcards" type="button">
                      <span className="demo-tool-left">
                        <Brain size={14} />
                        <span>Flashcards</span>
                      </span>
                      <span className="demo-soon-tag">Em breve</span>
                    </button>

                    <button className="demo-tool-item demo-tool-item-copilot" type="button">
                      <span className="demo-tool-left">
                        <Pill size={14} />
                        <span>Copilot</span>
                      </span>
                      <span className="demo-soon-tag">Em breve</span>
                    </button>

                    <button className="demo-tool-item demo-tool-item-transcritor" type="button">
                      <span className="demo-tool-left">
                        <Mic size={14} />
                        <span>Transcritor</span>
                      </span>
                      <span className="demo-soon-tag">Em breve</span>
                    </button>
                  </nav>

                  <nav aria-label="Chats recentes" className="demo-thread-list">
                    <p className="demo-thread-title">Chats</p>
                    <button className="demo-thread-item demo-thread-item-active" type="button">
                      Trauma cranioencefálico
                    </button>
                    <button className="demo-thread-item" type="button">
                      Choque séptico pediátrico
                    </button>
                    <button className="demo-thread-item" type="button">
                      Anticoagulação no idoso
                    </button>
                    <button className="demo-thread-item" type="button">
                      Distúrbios ácido-base
                    </button>
                    <button className="demo-thread-item" type="button">
                      Cefaleia no pronto atendimento
                    </button>
                  </nav>
                </aside>

                <div className="demo-main">
                  <div className="demo-main-content">
                    <div className="demo-chat-column">
                      <article className="message message-user">
                        <p>Como é feito o manejo inicial de um paciente com TCE grave?</p>
                      </article>

                      <article className="message message-ai">
                        <div className="demo-response-scroll">
                          <h4>🚨 Manejo Inicial do Paciente com Traumatismo Cranioencefálico (TCE) Grave</h4>
                          <p>
                            O manejo inicial do paciente com TCE grave é uma emergência médica que requer abordagem
                            sistematizada e rápida para prevenir lesões cerebrais secundárias.
                          </p>
                          <h5>🩺 Avaliação Inicial e Suporte Básico</h5>
                          <ul>
                            <li>
                              <strong>A (Via aérea):</strong> garantir via aérea pérvia, imobilização cervical e intubação
                              orotraqueal precoce se ECG ≤ 8.
                            </li>
                            <li>
                              <strong>B (Respiração):</strong> manter SpO2 &gt; 90%, PaO2 &gt; 60 mmHg e PaCO2 entre 35-45 mmHg.
                            </li>
                            <li>
                              <strong>C (Circulação):</strong> evitar hipotensão (PAS &lt; 90 mmHg), monitorar PA e garantir
                              perfusão cerebral.
                            </li>
                            <li>
                              <strong>D (Déficit neurológico):</strong> avaliar ECG, déficits focais e sinais de herniação.
                            </li>
                            <li>
                              <strong>E (Exposição):</strong> avaliação global e controle térmico.
                            </li>
                          </ul>
                          <h5>🧠 Monitorização e Diagnóstico</h5>
                          <ul>
                            <li>Monitorização contínua cardíaca, pressão arterial, saturação e glicemia.</li>
                            <li>TC de crânio precoce após estabilização inicial.</li>
                            <li>Monitorização invasiva da PIC em pacientes com critérios clínicos e tomográficos.</li>
                          </ul>
                          <h5>⚙️ Controle da PIC e Lesão Secundária</h5>
                          <ul>
                            <li>Elevar cabeceira a 30º e manter alinhamento neutro da cabeça/pescoço.</li>
                            <li>Controle rigoroso ventilatório e hemodinâmico.</li>
                            <li>Controle glicêmico, profilaxia anticonvulsivante e manutenção de normotermia.</li>
                          </ul>
                          <h5>📋 Resumo do Manejo Inicial do TCE Grave</h5>
                          <div className="demo-mini-table">
                            <div>
                              <strong>Via aérea</strong>
                              <span>Intubação precoce e proteção cervical</span>
                            </div>
                            <div>
                              <strong>Ventilação</strong>
                              <span>SpO2 &gt; 90%, PaCO2 entre 35-45 mmHg</span>
                            </div>
                            <div>
                              <strong>Circulação</strong>
                              <span>Evitar hipotensão e garantir perfusão cerebral</span>
                            </div>
                            <div>
                              <strong>Neuroimagem</strong>
                              <span>TC de crânio após estabilização</span>
                            </div>
                          </div>
                          <p>
                            💡 <strong>Consideração final:</strong> a intervenção precoce e o controle de hipóxia, hipotensão e
                            PIC são pilares para reduzir morbimortalidade no TCE grave.
                          </p>
                        </div>
                      </article>

                      <section className="demo-suggestion-block" aria-label="Sugestões de aprofundamento">
                        <div className="demo-suggestion-header">
                          <p>
                            <Search size={16} /> Sugestões de aprofundamento
                          </p>
                          <span>Veja abaixo as sugestões clicáveis</span>
                        </div>
                        <div className="demo-suggestion-list">
                          <button type="button">
                            <span>Manejo avançado da pressão intracraniana no TCE</span>
                            <ChevronRight size={14} />
                          </button>
                          <button type="button">
                            <span>Abordagem neurocirúrgica no trauma cranioencefálico grave</span>
                            <ChevronRight size={14} />
                          </button>
                          <button type="button">
                            <span>Complicações sistêmicas do TCE grave e seu manejo na UTI</span>
                            <ChevronRight size={14} />
                          </button>
                          <button type="button">
                            <span>Tabela comparativa dos métodos de monitorização da pressão intracraniana</span>
                            <ChevronRight size={14} />
                          </button>
                        </div>
                      </section>

                      <section className="demo-source-block" aria-label="Livros consultados">
                        <p className="demo-source-meta">3 fontes • 5 páginas</p>
                        <div className="demo-source-list">
                          <button type="button">
                            <span>ABRAMEDE — Tratado de Medicina de Emergência (1ª Ed, 2024) — Páginas 317, 807, 852</span>
                            <ChevronDown size={14} />
                          </button>
                          <button type="button">
                            <span>HCFMUSP — Medicina de Emergência, Abordagem Prática (18ª Ed, 2024) — Página 1239</span>
                            <ChevronDown size={14} />
                          </button>
                          <button type="button">
                            <span>FMUSP — Clínica Cirúrgica [vol.1] (1ª Ed, 2008) — Página 1933</span>
                            <ChevronDown size={14} />
                          </button>
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="demo-composer">
                    <div aria-hidden className="demo-composer-placeholder">
                      Digite sua pergunta...
                    </div>
                    <div className="demo-composer-footer">
                      <div className="demo-modes">
                        <button type="button">
                          <FlaskConical size={12} /> MedThink
                        </button>
                        <button type="button">
                          <Search size={12} /> Artigos
                        </button>
                      </div>
                      <div className="demo-actions">
                        <button type="button">
                          <FileUp size={14} />
                        </button>
                        <button type="button">
                          <Paperclip size={14} />
                        </button>
                        <button className="demo-send" type="button">
                          <SendHorizontal size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-muted" id="problema">
          <Container className="problem-grid">
            <div>
              <SectionHeading
                className="problem-heading-balance"
                centered
                description="Você pesquisa no Google, acha 5 respostas diferentes. Vai no ChatGPT e ele inventa uma conduta com confiança. Abre o Harrison's físico e perde 20 minutos. Você não precisa de mais informação. Você precisa da resposta certa, da fonte certa, agora."
                title={
                  <>
                    No plantão da madrugada, uma <span className="text-error">decisão urgente</span> precisa ser tomada
                  </>
                }
              />
              <div className="problem-list">
                {onCallUrgentQuestions.map((question) => (
                  <article className="problem-item" key={question}>
                    <TriangleAlert size={14} />
                    <p>{question}</p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="section section-light" id="tecnologia">
          <Container>
            <SectionHeading
              centered
              className="heading-balance-books"
              description="Não é uma IA genérica. É uma IA que estudou o que você estuda."
              title="Treinado nos livros que você usa na faculdade"
            />
            <div className="sources-carousel-wrap">
              <button aria-label="Ver áreas anteriores" className="sources-carousel-arrow" onClick={() => handleSourceScroll("left")} type="button">
                <ChevronLeft size={20} />
              </button>
              <div className="sources-carousel" ref={sourcesCarouselRef}>
                {landingContent.library.map((book) => (
                  <article className="source-card" key={`${book.area}-${book.mainSource}`}>
                    <div className="source-cover-placeholder">
                      <span>
                        capa do
                        <br />
                        livro aqui
                      </span>
                    </div>
                    <div className="source-card-content">
                      <h3 className="source-main">{book.mainSource}</h3>
                      <p className="source-meta">
                        <span>
                          <strong>Edição:</strong> {book.edition}
                        </span>
                        <span>
                          <strong>Área:</strong> {book.area}
                        </span>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
              <button aria-label="Ver próximas áreas" className="sources-carousel-arrow" onClick={() => handleSourceScroll("right")} type="button">
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="library-legal-note">
              Direitos autorais e propriedade intelectual. O MedSeek AI não armazena, disponibiliza nem distribui obras
              integrais protegidas por direitos autorais. Utiliza apenas fragmentos breves, com referência à fonte e
              página, para fins informativos e educacionais (Art. 46, Lei 9.610/1998). Os conteúdos citados não substituem a
              obra original; recomenda-se consulta às obras referenciadas.
            </p>
          </Container>
        </section>

        <section className="section section-muted" id="casos">
          <Container>
            <SectionHeading
              centered
              className="journey-heading-balance"
              description="Da graduação ao plantão de emergência, com experiência orientada ao contexto da sua rotina."
              title="Feito para sua jornada"
            />
            <JourneyCardTabs options={landingContent.journeyOptions} />
          </Container>
        </section>

        <section className="section section-light">
          <Container className="comparison-wrap">
            <SectionHeading centered title="Por que o medseek é diferente?" />
            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead>
                  <tr>
                    <th scope="col">Recursos</th>
                    <th scope="col">IA genérica</th>
                    <th scope="col">Medseek</th>
                  </tr>
                </thead>
                <tbody>
                  {landingContent.comparisonRows.map((row, index) => (
                    <tr key={row.capability}>
                      <th className="comparison-feature" scope="row">
                        <div className="comparison-cell">{row.capability}</div>
                      </th>
                      <td className="comparison-generic">
                        <div className="comparison-cell">
                          {index === 0 ? <X className="comparison-icon-generic" size={16} /> : null}
                          {index === 1 ? <TriangleAlert className="comparison-icon-generic" size={16} /> : null}
                          {index === 2 ? <MessageCircle className="comparison-icon-generic" size={16} /> : null}
                          {index === 3 ? <Ghost className="comparison-icon-generic" size={16} /> : null}
                          <span>{row.genericAi}</span>
                        </div>
                      </td>
                      <td className="comparison-medseek">
                        <div className="comparison-cell">
                          <Check className="comparison-check-solid" size={14} />
                          <span>{row.medseek}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        <section className="section section-light">
          <Container className="social-stack">
            <SectionHeading
              centered
              className="heading-balance-social"
              description="Junte-se à maior comunidade de IA médica aplicada do Brasil."
              title="Milhares de estudantes e médicos confiam no medseek"
            />
            <div className="social-stats">
              <article>
                <strong>15k+</strong>
                <span>Usuários</span>
              </article>
              <article>
                <strong>500k+</strong>
                <span>Consultas</span>
              </article>
              <article>
                <strong>10M+</strong>
                <span>Análises</span>
              </article>
              <article>
                <strong>120+</strong>
                <span>Fontes</span>
              </article>
            </div>
            <div className="testimonials-carousel-wrap">
              <button aria-label="Ver testimonials anteriores" className="testimonials-carousel-arrow" onClick={() => handleTestimonialScroll("left")} type="button">
                <ChevronLeft size={18} />
              </button>
              <div className="testimonials-carousel" ref={testimonialsCarouselRef}>
                {landingContent.testimonials.map((item) => (
                  <article className="testimonial" key={item.author}>
                    <p className="testimonial-quote">{item.quote}</p>
                    <p className="testimonial-author">{item.author}</p>
                    <p className="testimonial-role">{item.role}</p>
                  </article>
                ))}
              </div>
              <button aria-label="Ver próximos testimonials" className="testimonials-carousel-arrow" onClick={() => handleTestimonialScroll("right")} type="button">
                <ChevronRight size={18} />
              </button>
            </div>
          </Container>
        </section>

        <section className="section section-light" id="precos">
          <Container>
            <SectionHeading
              centered
              className="pricing-heading-balance"
              description="Escolha o plano ideal para sua rotina."
              title="Investimento no seu futuro"
            />
            <div className="pricing-grid">
              {landingContent.pricingPlans.map((plan) => (
                <article
                  className={`price-card ${plan.featured ? "price-card-featured" : "price-card-neutral"} ${plan.name === "Pro" ? "price-card-pro" : ""}`}
                  key={plan.name}
                >
                  {plan.featured ? <p className="price-tag">Mais escolhido</p> : null}
                  <h3>{plan.name}</h3>
                  <p className="price-value">
                    <strong>{plan.price}</strong> {plan.cadence}
                  </p>
                  <div className="price-divider" />
                  {plan.subtitle ? <p className="price-subtitle">{plan.subtitle}</p> : null}
                  <ul>
                    {plan.highlights.map((item) => (
                      <li key={item}>
                        <Check className="price-check" size={14} />{" "}
                        <span
                          className={
                            item === "Interações ilimitadas" || item === "Todas as funcionalidades do Plus"
                              ? "price-emphasis"
                              : undefined
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.featured ? "primary" : "secondary"}>{plan.cta}</Button>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="section section-muted">
          <Container className="faq-wrap">
            <SectionHeading centered title="Perguntas frequentes" />
            <FaqAccordion items={landingContent.faqs} />
          </Container>
        </section>

        <section className="section final-cta">
          <Container className="final-cta-content">
            <h2>
              Sua primeira dúvida clínica respondida em <span className="text-gradient">30 segundos</span>
            </h2>
            <p className="final-cta-description">
              Não importa se você está no internato, no plantão ou estudando para a residência. O MedSeek está disponível agora,
              com a resposta baseada nas fontes que você confia.
            </p>
            <div className="final-cta-row">
              <Button className="final-cta-button">Criar conta grátis</Button>
              <p className="final-cta-side-benefit">
                <CreditCard size={16} /> Não precisa de cartão
              </p>
            </div>
            <div className="final-cta-points">
              <span>
                <Check className="brand-gradient-check" size={14} /> Configuração em 30 segundos
              </span>
              <span>
                <Check className="brand-gradient-check" size={14} /> Sem compromisso
              </span>
              <span>
                <Check className="brand-gradient-check" size={14} /> Cancele quando quiser
              </span>
            </div>
          </Container>
        </section>
      </main>

      <footer className="site-footer">
        <Container className="site-footer-inner">
          <strong className="brand-cluster">
            <BrandWordmark />
            <span className="brand-byline" aria-label="Powered by Liberty">
              <span aria-hidden className="brand-byline-divider" />
              <span className="brand-byline-text">by</span>
              <img alt="Liberty" className="brand-byline-logo" src="/logo-liberty.svg" />
            </span>
          </strong>
          <nav aria-label="Links de rodapé" className="footer-nav">
            <a href="#">Privacidade</a>
            <a href="#">Termos de uso</a>
            <a href="mailto:medseek@libertyti.com.br">Contato</a>
          </nav>
          <p>© 2026 MedSeek. Todos os direitos reservados.</p>
        </Container>
      </footer>
    </>
  );
}
