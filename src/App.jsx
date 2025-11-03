import React from "react";

/* Jednoduché inline SVG ikonky (bez externích knihoven) */
const IconScissors = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path d="M8.6 13.2 3 21l1.5 1L11 14.3l2.2 2.2a3 3 0 1 0 1.1-.9l-2.8-2.8 2.8-2.8a3 3 0 1 0-1.1-.9L11 11.7 4.5 3 3 4l5.6 7.2Z" fill="currentColor"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1 .3 2 .5 3.1.5.6 0 1 .5 1 1v3.6c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4.4c0-.6.4-1 1-1H7.6c.6 0 1 .4 1 1 0 1 .2 2.1.5 3.1.1.4 0 .8-.3 1.1l-2.2 2.2Z" fill="currentColor"/>
  </svg>
);
const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5Z" fill="currentColor"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 10H7v-2h4V6h2v6Z" fill="currentColor"/>
  </svg>
);
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5-1.8a.8.8 0 1 1 0 1.6a.8.8 0 0 1 0-1.6Z" fill="currentColor"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M13 9V7c0-1.1.9-2 2-2h2V2h-3a4 4 0 0 0-4 4v3H7v3h3v9h3v-9h3l1-3h-4Z" fill="currentColor"/>
  </svg>
);

/* Pomocný obrázek s fallbackem */
function SmartImage({ srcs, className, alt = "" }) {
  const [i, setI] = React.useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt}
        className={className}
        onError={() => setI((v) => v + 1)}
      />
    );
  }
  return null;
}

export default function App() {
  /* LOGA z /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // v NAV vlevo
  const LOGO_TEXT = ["/logo-text.png"];       // textové logo (hero karta, vodoznaky)

  /* Adresa & odkazy */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";

  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  return (
    <div>
      {/* NAV */}
      <header className="nav">
        <div className="container nav-row">
          <a href="#hero" className="brand">
            <SmartImage srcs={LOGO_SILUETY} className="brand-logo" alt="" />
            <span className="brand-name">Vlasy od Týnky</span>
          </a>
          <nav className="nav-links">
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container hero-layout">
          {/* Levý sloupec */}
          <div>
            <div className="badge">🚪 Otevírám <strong>1.&nbsp;10.&nbsp;2025</strong></div>
            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad block">Vlasy od Týnky</span>
              <span className="block">Mladá Boleslav</span>
            </h1>
            <p className="muted hero-lead">
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>
            <div className="cta-row">
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem a odkazy */}
          <aside className="hero-aside card glow">
            <SmartImage srcs={LOGO_TEXT} className="hero-logo" alt="" />
            <div className="hero-aside-title">Vlasy od Týnky</div>
            <div className="muted">kadeřnictví · Mladá Boleslav</div>
            <div className="muted small">Objednávky přes sociální sítě nebo telefon.</div>

            <div className="stack-6">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <IconInstagram /> Napsat na Instagramu
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <IconFacebook /> Napsat na Facebooku
              </a>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* (POZOR) Promo banner nad službami byl odstraněn, protože sleva skončila */}

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2">
            <div className="card">
              <div className="h3">Střihy</div>
              <p className="muted">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
            </div>
            <div className="card">
              <div className="h3">Barvení a tónování</div>
              <p className="muted">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="card">
              <div className="h3">Melír / mikromelír</div>
              <p className="muted">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
            </div>
            <div className="card">
              <div className="h3">Vlasová péče</div>
              <p className="muted">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="h2">O mně</h2>
          <p className="lead">
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted small">
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK (bez banneru a bez štítku –20 %) */}
      <section id="cenik" className="section">
        <div className="container">
          <h2 className="h2">Ceník</h2>

          <div className="card wm-host">
            {/* vodoznak */}
            <div className="watermark">
              <SmartImage srcs={LOGO_TEXT} className="small-watermark" alt="" />
            </div>

            {/* Střih & styling */}
            <div className="block">
              <div className="h3">✂️ Střih &amp; styling</div>
              <ul className="price-list">
                <li className="price-row">
                  <span>Dámský střih</span>
                  <span className="price">od 650 Kč</span>
                </li>
                <p className="muted small">Konzultace, mytí vlasů, střih, foukaná a styling.</p>

                <li className="price-row">
                  <span>Pánský střih</span>
                  <span className="price">od 350 Kč</span>
                </li>
                <p className="muted small">Střih nůžkami i strojkem, suché i mokré vlasy.</p>

                <li className="price-row">
                  <span>Dětský střih (do 12 let)</span>
                  <span className="price">od 250 Kč</span>
                </li>
                <p className="muted small">Rychlý střih přizpůsobený dětem.</p>

                <li className="price-row">
                  <span>Foukaná / styling bez střihu</span>
                  <span className="price">od 400 Kč</span>
                </li>
              </ul>
            </div>

            <div className="hr" />

            {/* Barvení & melír */}
            <div className="block">
              <div className="h3">🎨 Barvení &amp; melír</div>
              <ul className="price-list">
                <li className="price-row">
                  <span>Barvení / tónování</span>
                  <span className="price">od 1&nbsp;350 Kč</span>
                </li>
                <p className="muted small">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</p>

                <li className="price-row">
                  <span>Melír klasický</span>
                  <span className="price">od 1&nbsp;850 Kč</span>
                </li>
                <p className="muted small">Melírování pramenů, střih, foukaná a styling.</p>

                <li className="price-row">
                  <span>Mikromelír + tónování</span>
                  <span className="price">od 2&nbsp;050 Kč</span>
                </li>
                <p className="muted small">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</p>
              </ul>
            </div>

            <div className="hr" />

            {/* Péče & regenerace */}
            <div className="block">
              <div className="h3">🌸 Péče &amp; regenerace</div>
              <ul className="price-list">
                <li className="price-row">
                  <span>B.Pur hloubkové čištění</span>
                  <span className="price">+230 Kč</span>
                </li>
                <p className="muted small">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</p>

                <li className="price-row">
                  <span>Ki-Power Veg rekonstrukce</span>
                  <span className="price">+260 Kč</span>
                </li>
                <p className="muted small">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</p>
              </ul>
            </div>

            <p className="muted tiny note">
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme na místě nebo ve zprávě.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container contact-grid">
          {/* Kontakt */}
          <div>
            <h2 className="h2">Kontakt</h2>

            <div className="stack-6">
              <div className="row">
                <IconMapPin />
                <div>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="strong">{ADDRESS_LINE1}</a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div className="row">
                <IconClock />
                <div>
                  <div className="strong">Otevírací doba</div>
                  <div className="small">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div className="row">
                <IconPhone />
                <div>
                  <a href={`tel:${PHONE_RAW}`} className="strong">{PHONE_DISPLAY}</a>
                  <div className="small muted">Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="cta-row wrap">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconInstagram /> Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconFacebook /> Facebook
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                  <IconPhone /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <aside className="map-wrap card glow">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="340"
              loading="lazy"
              className="map-iframe"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Vlasy od Týnky"
            />
          </aside>
        </div>
      </section>

      {/* PODĚKOVÁNÍ */}
      <section className="section">
        <div className="container">
          <div className="card karta-thanks wm-host">
            <div className="watermark">
              <SmartImage srcs={LOGO_TEXT} className="small-watermark" alt="" />
            </div>
            <div className="wm-content center">
              <div className="h3">Děkuji za návštěvu 💜</div>
              <div className="muted">Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container foot">
          <div className="foot-row">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="foot-link">
              <IconInstagram /> Instagram
            </a>
            <span className="dot">•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="foot-link">
              <IconFacebook /> Facebook
            </a>
            <span className="dot">•</span>
            <a href={`tel:${PHONE_RAW}`} className="foot-link">
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="copy">© {new Date().getFullYear()} Vlasy od Týnky</div>
        </div>
      </footer>
    </div>
  );
}
