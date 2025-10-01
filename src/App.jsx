import React, { useEffect } from "react";

/* --- Jednoduché SVG ikonky (malé, konzistentní) --- */
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.11.37 2.31.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.4 22 2 13.6 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.27.2 2.47.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M13.5 22v-8h2.7l.4-3H13.5V8.5c0-.87.24-1.46 1.5-1.46h1.7V4.3c-.84-.12-1.7-.18-2.56-.18-2.54 0-4.14 1.55-4.14 4.39V11H7v3h3v8h3.5z" />
  </svg>
);

const IconPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/>
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 5h-1.5v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

/* --- Konstanty (adresy, odkazy) --- */
const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_DISPLAY = "725 882 820";

const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function App() {
  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  return (
    <div>
      {/* NAVBAR */}
      <header className="container section" style={{ paddingBlock: "1.25rem" }}>
        <nav className="nav">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="" style={{ height: 36, width: "auto" }} />
            <span className="brand-title">Vlasy od Týnky</span>
          </a>

          <div className="nav-links">
            <a href="#o-mne" className="nav-link">O mně</a>
            <a href="#sluzby" className="nav-link">Služby</a>
            <a href="#cenik" className="nav-link">Ceník</a>
            <a href="#kontakt" className="nav-link">Kontakt</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="container section">
        <div className="grid-2">
          {/* Levý sloupec */}
          <div className="stack-6">
            <div className="badge">🚪 Otevírám&nbsp;<strong>1.&nbsp;10.&nbsp;2025</strong></div>

            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad block">Vlasy od Týnky</span>
              <span className="block">Mladá Boleslav</span>
            </h1>

            <p className="muted">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte
              vlasům péči, kterou si zaslouží.
            </p>

            <div className="cta-row">
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone />Zavolat {PHONE_DISPLAY}</a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem + odkazy (užší, bílé pozadí, glow jen okolo) */}
          <aside className="hero-aside glow">
            <div className="card hero-card">
              <img src="/logo-text.png" alt="" style={{ height: 80, width: "auto", marginInline: "auto" }} />
              <div className="muted" style={{ textAlign: "center", marginTop: ".25rem", fontSize: ".95rem" }}>
                kadeřnictví · Mladá Boleslav
              </div>
              <div className="muted" style={{ textAlign: "center", marginTop: ".25rem", fontSize: ".95rem" }}>
                Objednávky přes sociální sítě nebo telefon.
              </div>

              <div className="stack-6" style={{ marginTop: "1rem" }}>
                <a className="btn btn-outline link-btn" href={IG_URL} target="_blank" rel="noreferrer">
                  <IconInstagram /> Napsat na Instagramu
                </a>
                <a className="btn btn-outline link-btn" href={FB_URL} target="_blank" rel="noreferrer">
                  <IconFacebook /> Napsat na Facebooku
                </a>
                <a className="btn btn-grad link-btn" href={`tel:${PHONE_RAW}`}>
                  <IconPhone /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Banner nad službami – bílé pozadí karty, glow okolo */}
      <section className="container section">
        <div className="glow">
          <div className="card">
            <div className="badge" style={{ marginBottom: ".5rem" }}>🎉 Otevírací akce říjen</div>
            <p className="muted" style={{ margin: 0 }}>
              Po celý říjen nabízím <strong style={{ color: "#e11d48" }}>20&nbsp;% slevu</strong> na všechny služby pro všechny zákazníky.
              Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek. 📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
            </p>
            <div className="cta-row" style={{ marginTop: "1rem" }}>
              <a className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              <a className="btn btn-outline" href="#cenik">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="container section">
        <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
        <div className="grid-2" style={{ marginTop: "1.25rem" }}>
          {[
            ["Střihy", "Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem."],
            ["Barvení a tónování", "Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů."],
            ["Melír / mikromelír", "Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek."],
            ["Vlasová péče", "Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů."],
          ].map(([title, text]) => (
            <div key={title} className="card">
              <div className="card-title">{title}</div>
              <p className="muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="container section">
        <h2 className="h2">O mně</h2>
        <p className="muted" style={{ maxWidth: "65ch", marginTop: ".75rem" }}>
          Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý
          zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské
          i dětské kadeřnické služby a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou.
        </p>
      </section>

      {/* Banner nad ceníkem (menší mezera k nadpisu + střed zarovnání) */}
      <section className="container section" style={{ paddingBottom: "0.75rem" }}>
        <div className="glow">
          <div className="card" style={{ textAlign: "center" }}>
            <div className="badge" style={{ marginInline: "auto", marginBottom: ".25rem" }}>
              🎉 Otevírací sleva –20 % celý říjen
            </div>
            <div className="muted" style={{ margin: 0 }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="container section">
        <h2 className="h2">Ceník</h2>

        <div className="card wm-host" style={{ marginTop: "1rem" }}>
          {/* vodoznak – zvýrazněný, ale ne přes text */}
          <div className="watermark" aria-hidden="true" style={{ opacity: .14 }}>
            <img src="/logo-text.png" alt="" className="small-watermark" />
          </div>

          {/* obsah pod vodoznakem */}
          <div className="wm-content">
            {/* Střih & styling */}
            <section className="price-block">
              <div className="block-title">✂️ Střih &amp; styling</div>
              <ul className="price-list">
                <li className="price-row">
                  <span className="label">
                    Dámský střih
                    <span className="note">Konzultace, mytí vlasů, střih, foukaná a styling.</span>
                  </span>
                  <span className="prices"><s>od 650 Kč</s><b className="new">od 520 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">Pánský střih</span>
                  <span className="prices"><s>od 350 Kč</s><b className="new">od 280 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">Dětský střih (do 12 let)</span>
                  <span className="prices"><s>od 250 Kč</s><b className="new">od 200 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">Foukaná / styling bez střihu</span>
                  <span className="prices"><s>od 400 Kč</s><b className="new">od 320 Kč</b></span>
                </li>
              </ul>
            </section>

            <div className="hr" />

            {/* Barvení & melír */}
            <section className="price-block">
              <div className="block-title">🎨 Barvení &amp; melír</div>
              <ul className="price-list">
                <li className="price-row">
                  <span className="label">
                    Barvení / tónování
                    <span className="note">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</span>
                  </span>
                  <span className="prices"><s>od 1 350 Kč</s><b className="new">od 1 080 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">
                    Melír klasický
                    <span className="note">Melírování pramenů, střih, foukaná a styling.</span>
                  </span>
                  <span className="prices"><s>od 1 850 Kč</s><b className="new">od 1 480 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">
                    Mikromelír + tónování
                    <span className="note">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</span>
                  </span>
                  <span className="prices"><s>od 2 050 Kč</s><b className="new">od 1 640 Kč</b></span>
                </li>
              </ul>
            </section>

            <div className="hr" />

            {/* Péče & regenerace */}
            <section className="price-block">
              <div className="block-title">🌸 Péče &amp; regenerace</div>
              <ul className="price-list">
                <li className="price-row">
                  <span className="label">
                    B.Pur hloubkové čištění
                    <span className="note">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</span>
                  </span>
                  <span className="prices"><s>+230 Kč</s><b className="new">+184 Kč</b></span>
                </li>
                <li className="price-row">
                  <span className="label">
                    Ki-Power Veg rekonstrukce
                    <span className="note">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</span>
                  </span>
                  <span className="prices"><s>+260 Kč</s><b className="new">+208 Kč</b></span>
                </li>
              </ul>
            </section>

            {/* Oddělená poznámka */}
            <p className="muted" style={{ marginTop: "1rem" }}>
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě
              materiálu. Vše vždy předem domluvíme.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA (na mobilu pod sebou, na desktopu vedle) */}
      <section id="kontakt" className="container section">
        <h2 className="h2">Kontakt</h2>
        <div className="contact-grid grid-2" style={{ marginTop: "1rem" }}>
          <div className="stack-6">
            <div className="row-icon">
              <IconPin />
              <div>
                <div className="bold">{ADDRESS_LINE1}</div>
                <div className="muted">{ADDRESS_CITY}</div>
                <a className="link" href={MAP_URL} target="_blank" rel="noreferrer">Zobrazit větší mapu</a>
              </div>
            </div>

            <div className="row-icon">
              <IconClock />
              <div>
                <div className="bold">Otevírací doba</div>
                <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
              </div>
            </div>

            <div className="cta-row">
              <a className="btn btn-outline link-btn" href={IG_URL} target="_blank" rel="noreferrer">
                <IconInstagram /> Instagram
              </a>
              <a className="btn btn-outline link-btn" href={FB_URL} target="_blank" rel="noreferrer">
                <IconFacebook /> Facebook
              </a>
              <a className="btn btn-grad link-btn" href={`tel:${PHONE_RAW}`}>
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="map-wrap glow">
            <div className="card map-card" style={{ padding: "0.75rem" }}>
              <iframe
                className="map-frame"
                src={MAP_EMBED}
                title="Mapa – Vlasy od Týnky"
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, borderRadius: "calc(var(--radius-xl) - .75rem)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – menší, ale zřetelný vodoznak */}
      <section className="container section">
        <div className="glow">
          <div className="card wm-host karta-thanks">
            <div className="watermark" aria-hidden="true" style={{ opacity: .16 }}>
              <img src="/logo-text.png" alt="" className="small-watermark" />
            </div>
            <div className="wm-content thanks-center">
              <div className="thanks-title">Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ textAlign: "center", marginTop: ".5rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="foot-line">
            <a className="foot-link" href={IG_URL} target="_blank" rel="noreferrer">
              <IconInstagram /> Instagram
            </a>
            <span className="sep">•</span>
            <a className="foot-link" href={FB_URL} target="_blank" rel="noreferrer">
              <IconFacebook /> Facebook
            </a>
            <span className="sep">•</span>
            <a className="foot-link" href={`tel:${PHONE_RAW}`}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ fontSize: ".85rem", marginTop: ".35rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
