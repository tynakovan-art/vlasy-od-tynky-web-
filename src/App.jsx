import React from "react";

/* --- malé inline SVG ikonky (bez knihoven) --- */
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm11.25 1.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.9h2.3L14.7 15h-2v7A10 10 0 0 0 22 12z"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.2.4 2.5.7 3.8.7.6 0 1 .4 1 .9V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.7c0-.5.4-.9 1-.9h3.4c.5 0 .9.4.9 1 0 1.3.2 2.6.7 3.8.1.4 0 .8-.3 1.1l-2.1 2.1z"/>
  </svg>
);
const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 1.9A10.1 10.1 0 1 0 22.1 12 10.1 10.1 0 0 0 12 1.9zm0 18.2A8.1 8.1 0 1 1 20.1 12 8.1 8.1 0 0 1 12 20.1zm.5-13.2h-1.9v6l5.1 3 .9-1.6-4.1-2.4z"/>
  </svg>
);

/* jednoduchý helper na obrázek s fallbackem */
function SmartImage({ srcs, className, alt }) {
  const [i, setI] = React.useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt || ""}
        className={className}
        onError={() => setI((v) => v + 1)}
      />
    );
  }
  return null;
}

export default function App() {
  /* LOGA v /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // do navbaru, vodoznak ceníku
  const LOGO_TEXT = ["/logo-text.png"];       // vodoznaky hero-karta + poděkování

  /* Kontakty & adresa */
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  /* ---- NAVBAR ---- */
  const Navbar = () => (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#hero" className="brand">
          <SmartImage srcs={LOGO_SILUETY} className="brand-logo" alt="" />
          <span className="brand-title">Vlasy od Týnky</span>
        </a>
        <nav className="nav-links">
          <a href="#o-mne">O mně</a>
          <a href="#sluzby">Služby</a>
          <a href="#cenik">Ceník</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );

  /* ---- HERO ---- */
  const Hero = () => (
    <section id="hero" className="section">
      <div className="container grid-2 hero-grid">
        {/* Levý sloupec */}
        <div className="stack-6">
          <div className="badge">🚪 Otevírám <strong>&nbsp;1.&nbsp;10.&nbsp;2025</strong></div>

          <h1 className="hero-title">
            <span>Kadeřnictví</span>
            <span className="grad">Vlasy od Týnky</span>
            <span>Mladá Boleslav</span>
          </h1>

          <p className="muted">
            Precizní střihy, barvení i melír v příjemné atmosféře.
            Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
          </p>

          <div className="btn-row">
            <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}><IconPhone/>Zavolat {PHONE_DISPLAY}</a>
            <a className="btn btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>

        {/* Pravý sloupec – karta s logem (bílé pozadí, glow kolem) */}
        <div className="hero-card-wrap">
          <div className="card glow hero-card">
            <SmartImage srcs={LOGO_TEXT} className="hero-logo" alt="" />
            <div className="hero-card-title">Vlasy od Týnky</div>
            <div className="muted small">kadeřnictví · Mladá Boleslav</div>
            <div className="muted small">Objednávky přes sítě nebo telefon.</div>

            <div className="stack-6 hero-cta">
              <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noopener">
                <IconInstagram/> Napsat na Instagramu
              </a>
              <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noopener">
                <IconFacebook/> Napsat na Facebooku
              </a>
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}>
                <IconPhone/> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  /* ---- SLUŽBY ----  (beze změn) */
  const Services = () => (
    <section id="sluzby" className="section">
      <div className="container">
        <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
        <div className="grid-2 service-grid">
          <div className="card">
            <div className="item-title">Střihy</div>
            <p className="muted small">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
          </div>
          <div className="card">
            <div className="item-title">Barvení a tónování</div>
            <p className="muted small">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
          </div>
          <div className="card">
            <div className="item-title">Melír / mikromelír</div>
            <p className="muted small">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
          </div>
          <div className="card">
            <div className="item-title">Vlasová péče</div>
            <p className="muted small">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
          </div>
        </div>
      </div>
    </section>
  );

  /* ---- O MNĚ ---- */
  const About = () => (
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
  );

  /* ---- CENÍK (bez banneru a bez slev) ---- */
  const PriceRow = ({ name, price, note }) => (
    <li className="price-row">
      <div className="price-line">
        <span className="price-name">{name}</span>
        <span className="price-now">{price}</span>
      </div>
      {note && <div className="muted xsmall">{note}</div>}
    </li>
  );

  const PriceList = () => (
    <section id="cenik" className="section">
      <div className="container">
        <h2 className="h2">Ceník</h2>

        <div className="card wm-host price-card">
          {/* vodoznak logo-siluety (výraznější, ale ne přes text) */}
          <div className="watermark">
            <SmartImage srcs={LOGO_SILUETY} className="wm-logo" alt="" />
          </div>

          <div className="wm-content">
            {/* Střih & styling */}
            <div className="price-block">
              <div className="block-title">✂️ Střih &amp; styling</div>
              <ul className="price-list">
                <PriceRow name="Dámský střih" price="od 650 Kč" note="Konzultace, mytí vlasů, střih, foukaná a styling." />
                <PriceRow name="Pánský střih" price="od 350 Kč" note="Střih nůžkami i strojkem, suché i mokré vlasy." />
                <PriceRow name="Dětský střih (do 12 let)" price="od 250 Kč" note="Rychlý střih přizpůsobený dětem." />
                <PriceRow name="Foukaná / styling bez střihu" price="od 400 Kč" />
              </ul>
            </div>

            {/* Barvení & melír */}
            <div className="price-block">
              <div className="block-title">🎨 Barvení &amp; melír</div>
              <ul className="price-list">
                <PriceRow name="Barvení / tónování" price="od 1 350 Kč" note="Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu." />
                <PriceRow name="Melír klasický" price="od 1 850 Kč" note="Melírování pramenů, střih, foukaná a styling." />
                <PriceRow name="Mikromelír + tónování" price="od 2 050 Kč" note="Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling." />
              </ul>
            </div>

            {/* Péče & regenerace */}
            <div className="price-block">
              <div className="block-title">🌸 Péče &amp; regenerace</div>
              <ul className="price-list">
                <PriceRow name="B.Pur hloubkové čištění" price="+230 Kč" note="Detox vlasů a pokožky, ideální jako doplněk ke střihu." />
                <PriceRow name="Ki-Power Veg rekonstrukce" price="+260 Kč" note="Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů." />
              </ul>
            </div>

            <div className="hr"></div>
            <div className="muted xsmall">
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme na místě nebo ve zprávě.
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  /* ---- KONTAKT + MAPA (vpravo), karta bíla, glow okolo ---- */
  const Contact = () => (
    <section id="kontakt" className="section">
      <div className="container grid-2 contact-grid">
        <div className="stack-6">
          <h2 className="h2">Kontakt</h2>

          <div className="contact-item">
            <IconMapPin/><div>
              <a className="contact-link" href={MAP_URL} target="_blank" rel="noopener">{ADDRESS_LINE1}</a>
              <div className="muted xsmall">{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
              <div className="muted xsmall">Okres Mladá Boleslav</div>
              <div className="muted xsmall">{ADDRESS_COUNTRY}</div>
            </div>
          </div>

          <div className="contact-item">
            <IconClock/><div>
              <div className="contact-ttl">Otevírací doba</div>
              <div className="muted xsmall">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
            </div>
          </div>

          <div className="contact-item">
            <IconPhone/><div>
              <a className="contact-link" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
              <div className="muted xsmall">Volejte nebo napište zprávu.</div>
            </div>
          </div>

          <div className="btn-row wrap">
            <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noopener"><IconInstagram/> Instagram</a>
            <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noopener"><IconFacebook/> Facebook</a>
            <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}><IconPhone/> Zavolat {PHONE_DISPLAY}</a>
          </div>
        </div>

        {/* Mapa – karta s glow okolo */}
        <div className="map-wrap">
          <div className="card glow map-card">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="340"
              loading="lazy"
              className="map-frame"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Vlasy od Týnky"
            />
          </div>
        </div>
      </div>
    </section>
  );

  /* ---- PODĚKOVÁNÍ (vodoznak logo-text) ---- */
  const Thanks = () => (
    <section className="section">
      <div className="container thanks-wrap">
        <div className="card wm-host karta-thanks">
          <div className="watermark">
            <SmartImage srcs={LOGO_TEXT} className="wm-logo small-watermark" alt="" />
          </div>
          <div className="wm-content center">
            <div className="thanks-title">Děkuji za návštěvu 💜</div>
            <div className="muted small">Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
          </div>
        </div>
      </div>
    </section>
  );

  /* ---- FOOTER ---- */
  const Footer = () => (
    <footer className="footer">
      <div className="container center">
        <div className="footer-row">
          <a className="foot-link" href={IG_URL} target="_blank" rel="noopener"><IconInstagram/> Instagram</a>
          <span className="dot">•</span>
          <a className="foot-link" href={FB_URL} target="_blank" rel="noopener"><IconFacebook/> Facebook</a>
          <span className="dot">•</span>
          <a className="foot-link" href={`tel:${PHONE_RAW}`}><IconPhone/> {PHONE_DISPLAY}</a>
        </div>
        <div className="muted xsmall">© {new Date().getFullYear()} Vlasy od Týnky</div>
      </div>
    </footer>
  );

  return (
    <>
      <Navbar/>
      <Hero/>
      {/* (zrušeno) banner nad službami */}
      <Services/>
      <About/>
      {/* (zrušeno) banner nad ceníkem */}
      <PriceList/>
      <Contact/>
      <Thanks/>
      <Footer/>
    </>
  );
}