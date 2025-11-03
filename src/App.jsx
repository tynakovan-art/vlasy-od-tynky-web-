// App.jsx
import React from "react";

/** ===== KONSTANTY ===== */
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

const gradStyle = {
  background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

/** ===== SVG IKONY (inline) ===== */
const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25c1.1.36 2.3.56 3.6.56a1 1 0 011 1V20a1 1 0 01-1 1C12.3 21 3 11.7 3 1a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.2 2.5.56 3.6a1 1 0 01-.25 1L6.6 10.8z" />
  </svg>
);
const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 2 .2 2.7.5.7.3 1.3.6 1.9 1.2.6.6.9 1.2 1.2 1.9.3.7.4 1.5.5 2.7.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.2 2-.5 2.7-.3.7-.6 1.3-1.2 1.9-.6.6-1.2.9-1.9 1.2-.7.3-1.5.4-2.7.5-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.1-.1-1.7-.2-2.1-.4-.5-.2-.8-.4-1.1-.8-.3-.3-.6-.6-1.1-.8-.4-.2-1-.3-2.1-.4-1.1-.1-1.4-.1-4.4-.1zm0 5.1a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm6.4-1.3a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" />
  </svg>
);
const IconFacebook = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
  </svg>
);
const IconMapPin = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
  </svg>
);
const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M12 2a10 10 0 1010 10A10.01 10.01 0 0012 2zm.8 5h-1.6v5l4.3 2.6.8-1.3-3.5-2.1z" />
  </svg>
);

/** ===== KOMPAKTNÍ CENÍK ===== */
const PriceListSection = ({ title, items }) => (
  <div className="price-block" style={{ borderTop: 0 }}>
    <h3 className="price-title" style={{ marginBottom: ".35rem" }}>{title}</h3>
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((it, i) => (
        <li key={i} style={{ padding: ".55rem 0", borderTop: i ? "1px solid rgba(15,23,42,.16)" : "0" }}>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ flex: 1 }}>
              <div className="price-title" style={{ fontWeight: 700, fontSize: "1rem", margin: 0 }}>{it.title}</div>
              {it.desc && <div className="muted" style={{ fontSize: ".92rem" }}>{it.desc}</div>}
            </div>
            <div className="price" style={{ whiteSpace: "nowrap", fontWeight: 800 }}>{it.price}</div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

/** ===== APP ===== */
export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner container">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="Vlasy od Týnky logo" />
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

      {/* HERO */}
      <section id="hero" className="hero section">
        <div className="container hero-grid">
          {/* levá část */}
          <div>
            <div className="hero-title">
              <h1>Kadeřnictví</h1>
              <h1 style={gradStyle}>Vlasy od Týnky</h1>
              <h1>Mladá Boleslav</h1>
            </div>

            <p className="hero-lead">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a
              dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="cta-row">
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* pravá karta (glow okolo, bílé uvnitř) */}
          <aside className="card center glow hero-card">
            <img
              src="/logo-text.png"
              alt="Vlasy od Týnky (textové logo)"
              className="hero-logo"
              style={{ maxWidth: "210px" }} // o kousek větší logo
            />
            <div className="muted" style={{ marginTop: ".25rem" }}>
              kadeřnictví · Mladá Boleslav
            </div>
            <div className="muted" style={{ fontSize: ".95rem", marginTop: ".25rem" }}>
              Objednávky přes sociální sítě nebo telefon.
            </div>

            <div className="soc-list">
              <a className="soc" href={IG_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram /> <span className="label">Napsat na Instagramu</span>
              </a>
              <a className="soc" href={FB_URL} target="_blank" rel="noopener noreferrer">
                <IconFacebook /> <span className="label">Napsat na Facebooku</span>
              </a>
              <a className="soc btn-grad" href={`tel:${PHONE_RAW}`}>
                <IconPhone /> <span className="label">Zavolat {PHONE_DISPLAY}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="services-grid">
            <div className="service">
              <div className="title">Střihy</div>
              <div className="desc">
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
              </div>
            </div>
            <div className="service">
              <div className="title">Barvení a tónování</div>
              <div className="desc">
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </div>
            </div>
            <div className="service">
              <div className="title">Melír / mikromelír</div>
              <div className="desc">
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
              </div>
            </div>
            <div className="service">
              <div className="title">Vlasová péče</div>
              <div className="desc">
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="h2">O mně</h2>
          <p className="muted" style={{ marginTop: ".5rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".35rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou.
          </p>
        </div>
      </section>

      {/* CENÍK (kompaktní 3 sekce) */}
      <section id="cenik" className="section">
        <div className="container">
          <h2 className="h2">Ceník</h2>

          <div className="price-wrap wm-host" style={{ marginTop: "1rem" }}>
            <div className="watermark" aria-hidden="true">
              <img src="/logo-text.png" alt="" />
            </div>

            <PriceListSection
              title="✂️ Střih &amp; styling"
              items={[
                { title: "Dámský střih", desc: "Konzultace, mytí, střih, foukaná a styling.", price: "od 650 Kč" },
                { title: "Pánský střih", desc: "Střih nůžkami i strojkem, suché i mokré vlasy.", price: "od 350 Kč" },
                { title: "Dětský střih (do 12 let)", desc: "Rychlý střih přizpůsobený dětem.", price: "od 250 Kč" },
                { title: "Foukaná / styling bez střihu", desc: "", price: "od 400 Kč" },
              ]}
            />

            <PriceListSection
              title="🎨 Barvení &amp; melír"
              items={[
                { title: "Barvení / tónování", desc: "Kompletní barvení nebo tónování, včetně střihu a foukané.", price: "od 1 350 Kč" },
                { title: "Melír klasický", desc: "Melírování pramenů, střih, foukaná a styling.", price: "od 1 850 Kč" },
                { title: "Mikromelír + tónování", desc: "Jemné prosvětlení s doladěním odstínu.", price: "od 2 050 Kč" },
              ]}
            />

            <PriceListSection
              title="🌸 Péče &amp; regenerace"
              items={[
                { title: "B.Pur hloubkové čištění", desc: "Detox vlasů a pokožky, ideální ke střihu.", price: "+230 Kč" },
                { title: "Ki-Power Veg rekonstrukce", desc: "Intenzivní výživa po barvení a melíru.", price: "+260 Kč" },
              ]}
            />

            <div className="note wm-content">
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme na místě nebo ve zprávě.
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container contact-grid grid-2">
          <div>
            <h2 className="h2">Kontakt</h2>

            <div className="row small-gap">
              <IconMapPin />
              <div>
                <a className="link" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                  {ADDRESS_LINE1}
                </a>
                <div className="muted">
                  {ADDRESS_CITY} – {ADDRESS_DISTRICT}
                </div>
                <div className="muted">Okres Mladá Boleslav</div>
                <div className="muted">{ADDRESS_COUNTRY}</div>
              </div>
            </div>

            <div className="row small-gap">
              <IconClock />
              <div>
                <div className="bold">Otevírací doba</div>
                <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
              </div>
            </div>

            <div className="row small-gap">
              <IconPhone />
              <div>
                <a className="bold" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
                <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
              </div>
            </div>

            <div className="k-row">
              <a className="soc" href={IG_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram /> Instagram
              </a>
              <a className="soc" href={FB_URL} target="_blank" rel="noopener noreferrer">
                <IconFacebook /> Facebook
              </a>
              <a className="soc btn-grad" href={`tel:${PHONE_RAW}`}>
                <IconPhone /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="map-wrap glow">
            <div className="map-card">
              <iframe
                className="map-frame"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ */}
      <section className="section">
        <div className="container thanks">
          <div className="card center wm-host">
            <div className="watermark" aria-hidden="true">
              <img src="/logo-text.png" alt="" />
            </div>
            <div className="thanks-center">
              <div className="thanks-title">Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".35rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">
            <IconInstagram /> Instagram
          </a>
          <span className="sep">•</span>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer">
            <IconFacebook /> Facebook
          </a>
          <span className="sep">•</span>
          <a href={`tel:${PHONE_RAW}`}>
            <IconPhone /> {PHONE_DISPLAY}
          </a>
          <span className="sep">•</span>
          <span className="muted">© {new Date().getFullYear()} Vlasy od Týnky</span>
        </div>
      </footer>
    </div>
  );
}