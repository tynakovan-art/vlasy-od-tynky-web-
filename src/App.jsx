// src/App.jsx
import React from "react";

const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE = "725882820";
const PHONE_FMT = "725 882 820";

export default function App() {
  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="navbar">
        <div className="navbar-inner container">
          <a href="#hero" className="brand" aria-label="Vlasy od Týnky – domů">
            <img src="/logo-siluety.png" alt="" />
            <span className="name">Vlasy od Týnky</span>
          </a>

          <nav className="nav">
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section id="hero" className="hero section">
          <div className="hero-grid container">
            {/* Levý sloupec */}
            <div>
              <div className="hero-title">
                {/* přesně na 3 řádky */}
                <h1>
                  Kadeřnictví
                  <br />
                  <span className="grad">Vlasy od Týnky</span>
                  <br />
                  Mladá Boleslav
                </h1>
              </div>

              <p className="hero-lead">
                Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte
                se a dopřejte vlasům péči, kterou si zaslouží.
              </p>

              <div className="cta-row">
                <a className="btn btn-grad" href={`tel:${PHONE}`}>
                  {/* telefon svg */}
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.36c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1.5 1.5 0 0 1-.36 1.6L6.6 10.8z"
                      fill="currentColor"
                    />
                  </svg>
                  Zavolat {PHONE_FMT}
                </a>
                <a className="btn btn-ghost" href="#sluzby">
                  Prohlédnout služby
                </a>
              </div>
            </div>

            {/* Pravý sloupec – karta s GLOW (bílé pozadí) */}
            <aside className="card glow center">
              <img
                src="/logo-text.png"
                alt="Vlasy od Týnky – logo"
                style={{ width: "170px", marginInline: "auto" }}
              />
              <div style={{ fontWeight: 700, marginTop: ".5rem" }}>Vlasy od Týnky</div>
              <div className="muted" style={{ fontSize: ".95rem" }}>
                kadeřnictví · Mladá Boleslav
              </div>
              <p className="muted small-gap" style={{ fontSize: ".95rem" }}>
                Objednávky přes sociální sítě nebo telefon.
              </p>

              <div className="soc-list">
                <a className="soc" href={IG_URL} target="_blank" rel="noreferrer">
                  {/* IG svg */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-1.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="label">Napsat na Instagramu</span>
                </a>
                <a className="soc" href={FB_URL} target="_blank" rel="noreferrer">
                  {/* FB svg */}
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M13 22v-8h3l.5-3H13V8.5A1.5 1.5 0 0 1 14.5 7H17V4h-2.5A4.5 4.5 0 0 0 10 8.5V11H7v3h3v8h3z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="label">Napsat na Facebooku</span>
                </a>
                <a className="soc" href={`tel:${PHONE}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.36c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1.5 1.5 0 0 1-.36 1.6L6.6 10.8z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="label">Zavolat {PHONE_FMT}</span>
                </a>
              </div>
            </aside>
          </div>
        </section>

        {/* ===== SLUŽBY ===== */}
        <section id="sluzby" className="section container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="services-grid">
            <article className="service">
              <div className="title">Střihy</div>
              <p className="desc">
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem.
              </p>
            </article>
            <article className="service">
              <div className="title">Barvení a tónování</div>
              <p className="desc">
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </p>
            </article>
            <article className="service">
              <div className="title">Melír / mikromelír</div>
              <p className="desc">Prosvětlení účesu jemnými pramínky – přirozený, vzdušný výsledek.</p>
            </article>
            <article className="service">
              <div className="title">Vlasová péče</div>
              <p className="desc">Hloubkové čištění a rekonstrukce pro sílu a lesk vlasů.</p>
            </article>
          </div>
        </section>

        {/* ===== O MNĚ ===== */}
        <section id="o-mne" className="section container">
          <h2 className="h2">O mně</h2>
          <p className="muted" style={{ marginTop: ".5rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý
            zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Pracuji s italskou
            profesionální kosmetikou Echosline a vždy kladu důraz na individuální přístup a
            příjemnou atmosféru.
          </p>
        </section>

        {/* ===== CENÍK ===== */}
        <section id="cenik" className="section container">
          <h2 className="h2">Ceník</h2>

          <div className="price-wrap wm-host small-gap">
            {/* vodotisk necháš ve CSS ( .watermark ) */}
            <div className="watermark" aria-hidden="true">
              <img src="/logo-text.png" alt="" />
            </div>

            {/* Střih & styling */}
            <div className="price-block wm-content">
              <h3 className="price-title">✂️ Střih &amp; styling</h3>

              <div className="price-row">
                <div>
                  <strong>Dámský střih</strong>
                  <div className="muted">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                </div>
                <div>od 650 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Pánský střih</strong>
                  <div className="muted">Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                </div>
                <div>od 350 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Dětský střih (do 12 let)</strong>
                  <div className="muted">Rychlý střih přizpůsobený dětem.</div>
                </div>
                <div>od 250 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Foukaná / styling bez střihu</strong>
                </div>
                <div>od 400 Kč</div>
              </div>
            </div>

            {/* Barvení & melír */}
            <div className="price-block wm-content">
              <h3 className="price-title">🎨 Barvení &amp; melír</h3>

              <div className="price-row">
                <div>
                  <strong>Barvení / tónování</strong>
                  <div className="muted">
                    Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.
                  </div>
                </div>
                <div>od 1 350 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Melír klasický</strong>
                  <div className="muted">Melírování pramenů, střih, foukaná a styling.</div>
                </div>
                <div>od 1 850 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Mikromelír + tónování</strong>
                  <div className="muted">
                    Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.
                  </div>
                </div>
                <div>od 2 050 Kč</div>
              </div>
            </div>

            {/* Péče & regenerace */}
            <div className="price-block wm-content">
              <h3 className="price-title">🌸 Péče &amp; regenerace</h3>

              <div className="price-row">
                <div>
                  <strong>B.Pur hloubkové čištění</strong>
                  <div className="muted">
                    Detox vlasů a pokožky, ideální jako doplněk ke střihu.
                  </div>
                </div>
                <div>+ 230 Kč</div>
              </div>

              <div className="price-row">
                <div>
                  <strong>Ki-Power Veg rekonstrukce</strong>
                  <div className="muted">
                    Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.
                  </div>
                </div>
                <div>+ 260 Kč</div>
              </div>
            </div>

            <div className="note wm-content">
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě
              materiálu. Vše vždy předem domluvíme.
            </div>
          </div>
        </section>

        {/* ===== KONTAKT + MAPA ===== */}
        <section id="kontakt" className="section container">
          <div className="contact-grid">
            <div>
              <h2 className="h2">Kontakt</h2>

              <div className="row small-gap">
                <span className="dot">📍</span>
                <div>
                  <div style={{ fontWeight: 700 }}>Zalužanská 1272</div>
                  <div className="muted">293 01 Mladá Boleslav – Mladá Boleslav III</div>
                </div>
              </div>

              <div className="row small-gap">
                <span className="dot">⏰</span>
                <div>
                  <div style={{ fontWeight: 700 }}>Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div className="k-row">
                <a className="soc" href={IG_URL} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11z"
                      fill="currentColor"
                    />
                  </svg>
                  Instagram
                </a>
                <a className="soc" href={FB_URL} target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M13 22v-8h3l.5-3H13V8.5A1.5 1.5 0 0 1 14.5 7H17V4h-2.5A4.5 4.5 0 0 0 10 8.5V11H7v3h3v8h3z"
                      fill="currentColor"
                    />
                  </svg>
                  Facebook
                </a>
                <a className="soc" href={`tel:${PHONE}`}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.36c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1.5 1.5 0 0 1-.36 1.6L6.6 10.8z"
                      fill="currentColor"
                    />
                  </svg>
                  {PHONE_FMT}
                </a>
              </div>
            </div>

            {/* Mapa – karta s glow rámečkem */}
            <div className="map-wrap">
              <div className="map-card">
                <iframe
                  className="map-frame"
                  title="Mapa – Vlasy od Týnky"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    "Zalužanská 1272, 293 01 Mladá Boleslav"
                  )}&hl=cs&z=16&output=embed`}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== PODĚKOVÁNÍ ===== */}
        <section className="section container thanks">
          <div className="card wm-host center">
            <div className="watermark" aria-hidden="true">
              <img src="/logo-text.png" alt="" />
            </div>
            <div className="wm-content">
              <div className="title">Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".5rem" }}>
                Těším se na vás v salonu na Zalužanské 1272.
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-inner container">
          <a href={IG_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                fill="currentColor"
              />
            </svg>
            Instagram
          </a>
          <span className="sep">•</span>
          <a href={FB_URL} target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M13 22v-8h3l.5-3H13V8.5A1.5 1.5 0 0 1 14.5 7H17V4h-2.5A4.5 4.5 0 0 0 10 8.5V11H7v3h3v8h3z" />
            </svg>
            Facebook
          </a>
          <span className="sep">•</span>
          <a href={`tel:${PHONE}`}>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.7 3.9 5.1 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.6-.36c1.1.37 2.3.57 3.5.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 2a1 1 0 0 1 1-1h3.6a1 1 0 0 1 1 1c0 1.2.2 2.4.57 3.5a1.5 1.5 0 0 1-.36 1.6L6.6 10.8z" />
            </svg>
            {PHONE_FMT}
          </a>
          <span className="sep">•</span>
          <span className="muted">© {new Date().getFullYear()} Vlasy od Týnky</span>
        </div>
      </footer>
    </>
  );
}