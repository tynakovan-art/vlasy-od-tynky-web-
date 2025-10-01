import React from "react";

/* jednoduché „ikonky“ jako inline SVG (fungují bez knihoven) */
const PhoneIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
  </svg>
);

export default function App() {
  const PHONE = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="" />
            <span>Vlasy od Týnky</span>
          </a>

          {/* jednoduché kotvy; pokud chceš menu na mobilu, doděláme hamburger */}
          <nav className="nav-links" style={{display:'none'}}>
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section-hero">
        <div className="container grid-hero">
          {/* levý sloupec */}
          <div>
            <div className="badge">🚪 Otevírám <strong>&nbsp;1.&nbsp;10.&nbsp;2025</strong></div>

            <h1 className="hero-title">
              Kadeřnictví<br />
              <span className="grad">Vlasy od Týnky</span><br />
              Mladá Boleslav
            </h1>

            <p className="hero-lead">
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="hero-actions">
              <a className="btn btn-grad" href={`tel:${PHONE}`}>
                <PhoneIcon /> Zavolat {PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost" href="#sluzby">
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* pravý sloupec – karta s logem a glowem kolem */}
          <div className="hero-card-wrap glow">
            <div className="hero-card">
              <img src="/logo-text.png" alt="" />
              <div style={{fontSize:'1.25rem', fontWeight:600}}>Vlasy od Týnky</div>
              <div style={{marginTop:4, color:'var(--muted)', fontSize:'.9rem'}}>kadeřnictví · Mladá Boleslav</div>
              <div style={{marginTop:12, color:'var(--muted)', fontSize:'.95rem'}}>
                Objednávky přes sociální sítě nebo telefon.
              </div>

              <div style={{display:'grid', gap:8, marginTop:16}}>
                <a className="btn btn-outline" href="https://www.instagram.com/vlasy_od_tynky_mb" target="_blank" rel="noreferrer">
                  Napsat na Instagramu
                </a>
                <a className="btn btn-outline" href="https://www.facebook.com/vlasyodtynky/" target="_blank" rel="noreferrer">
                  Napsat na Facebooku
                </a>
                <a className="btn btn-grad" href={`tel:${PHONE}`}>
                  <PhoneIcon /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}