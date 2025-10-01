// src/App.jsx
import React from "react";
import "./styles.css";

/* ---------- malé inline SVG ikony ---------- */
const IconPhone = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
  </svg>
);
const IconInstagram = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z"/>
  </svg>
);
const IconFacebook = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M22 12a10 10 0 10-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.96 0 1.96.17 1.96.17v2.15h-1.11c-1.1 0-1.44.68-1.44 1.38V12h2.45l-.39 2.9h-2.06v7A10 10 0 0022 12z"/>
  </svg>
);
const IconMapPin = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/>
  </svg>
);
const IconClock = (p) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...p}>
    <path fill="currentColor" d="M12 2a10 10 0 1010 10A10.012 10.012 0 0012 2zm1 11h5v-2h-4V7h-2v6z"/>
  </svg>
);

/* ---------- konstanty ---------- */
const IG = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_TXT = "725 882 820";
const ADDR_LINE = "Zalužanská 1272";
const ADDR_CITY = "293 01 Mladá Boleslav";
const MAP_Q = encodeURIComponent(`${ADDR_LINE}, ${ADDR_CITY}`);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_Q}&hl=cs&z=16&output=embed`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_Q}`;

/* ---------- pomocné prvky ---------- */
const Price = ({ name, oldP, newP, note }) => (
  <li className="price-row">
    <div className="price-line">
      <span className="price-name">{name}</span>
      <span className="price-old">{oldP}</span>
      <span className="price-new">{newP}</span>
    </div>
    {note ? <div className="price-note">{note}</div> : null}
  </li>
);

/* ---------- stránka ---------- */
export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="nav">
        <div className="container nav-inner">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="" className="brand-logo" />
            <span className="brand-name">Vlasy od Týnky</span>
          </a>
          <nav className="nav-links">
            <a href="#o-mne">O&nbsp;mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* levý sloupec */}
          <div className="stack-6">
            <div className="badge">🚪 Otevírám&nbsp;1.&nbsp;10.&nbsp;2025</div>

            {/* titulek přesně na 3 řádky */}
            <h1 className="hero-title">
              <span className="block">Kadeřnictví</span>
              <span className="block grad">Vlasy od Týnky</span>
              <span className="block">Mladá Boleslav</span>
            </h1>

            <p className="muted">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se
              a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            {/* tlačítka – vždy v 1–2 řádcích na mobilu */}
            <div className="btn-row hero-actions">
              <a className="btn btn-outline btn-fit" href={IG} target="_blank" rel="noreferrer">
                <IconInstagram /> Instagram
              </a>
              <a className="btn btn-outline btn-fit" href={FB} target="_blank" rel="noreferrer">
                <IconFacebook /> Facebook
              </a>
              <a className="btn btn-grad btn-fit" href={`tel:${PHONE_RAW}`}>
                <IconPhone /> Zavolat {PHONE_TXT}
              </a>
            </div>
          </div>

          {/* pravý sloupec – karta s logem (užší, glow jen okolo) */}
          <div className="hero-card-wrap">
            <div className="card glow hero-card">
              <img
                src="/logo-text.png"
                alt=""
                className="hero-logo"
              />
              <div className="hero-card-title">Vlasy od Týnky</div>
              <div className="muted">kadeřnictví · Mladá Boleslav</div>
              <div className="hr" />
              <div className="muted" style={{ textAlign: "center" }}>
                Objednávky přes sociální sítě nebo telefon.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta + glow okolo */}
      <section className="section">
        <div className="container">
          <div className="card glow">
            <div className="stack-6">
              <div className="badge">🎉 Otevírací akce říjen</div>
              <p>
                Po celý říjen nabízím <strong className="txt-red">20&nbsp;% slevu</strong> na všechny
                služby pro všechny zákazníky. Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek.
                <br /> 📍 {ADDR_LINE}, {ADDR_CITY}
              </p>
              <div className="btn-row banner-actions">
                <a className="btn btn-grad btn-fit" href={`tel:${PHONE_RAW}`}>
                  <IconPhone /> Zavolat {PHONE_TXT}
                </a>
                <a className="btn btn-outline btn-fit" href="#cenik">
                  Mrknout na ceník
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2>Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            <div className="card">
              <div className="card-title">Střihy</div>
              <p className="muted">Dámský, pánský i dětský střih. Vždy s konzultací,
                 mytím, foukanou a stylingem podle potřeby.</p>
            </div>
            <div className="card">
              <div className="card-title">Barvení a tónování</div>
              <p className="muted">Jemné i výrazné změny. Tónování slouží k doladění odstínu
                 a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="card">
              <div className="card-title">Melír / mikromelír</div>
              <p className="muted">Prosvětlení účesu pomocí jemných pramínků pro přirozený, vzdušný výsledek.</p>
            </div>
            <div className="card">
              <div className="card-title">Vlasová péče</div>
              <p className="muted">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2>O mně</h2>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu sedí. Nabízím dámské, pánské i dětské služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".5rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou kosmetikou se šetrným složením.
          </p>
        </div>
      </section>

      {/* BANNER NAD CENÍKEM – menší mezera k nadpisu ceník */}
      <section className="section" style={{ paddingBottom: "1.25rem" }}>
        <div className="container">
          <div className="card glow" style={{ textAlign: "center" }}>
            <div className="badge" style={{ marginInline: "auto" }}>🎉 –20 % říjen</div>
            <p className="muted" style={{ marginTop: ".5rem" }}>
              Původní ceny jsou přeškrtnuté. Zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </p>
          </div>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <h2>Ceník</h2>

          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            {/* vodoznak – výraznější */}
            <div className="watermark">
              <img src="/logo-text.png" alt="" className="small-watermark" />
            </div>

            {/* STŘIH & STYLING */}
            <div className="wm-content">
              <div className="card-title">✂️ Střih & styling</div>
              <ul className="price-list">
                <Price
                  name="Dámský střih"
                  oldP="od 650 Kč"
                  newP="od 520 Kč"
                  note="Konzultace, mytí vlasů, střih, foukaná a styling."
                />
                <Price name="Pánský střih" oldP="od 350 Kč" newP="od 280 Kč"
                  note="Střih nůžkami i strojkem, suché i mokré vlasy." />
                <Price name="Dětský střih (do 12 let)" oldP="od 250 Kč" newP="od 200 Kč"
                  note="Rychlý střih přizpůsobený dětem." />
                <Price name="Foukaná / styling bez střihu" oldP="od 400 Kč" newP="od 320 Kč" />
              </ul>
            </div>

            <div className="hr" />

            {/* BARVENÍ & MELÍR */}
            <div className="wm-content">
              <div className="card-title">🎨 Barvení & melír</div>
              <ul className="price-list">
                <Price
                  name="Barvení / tónování"
                  oldP="od 1 350 Kč"
                  newP="od 1 080 Kč"
                  note="Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu."
                />
                <Price
                  name="Melír klasický"
                  oldP="od 1 850 Kč"
                  newP="od 1 480 Kč"
                  note="Melírování pramenů, střih, foukaná a styling."
                />
                <Price
                  name="Mikromelír + tónování"
                  oldP="od 2 050 Kč"
                  newP="od 1 640 Kč"
                  note="Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling."
                />
              </ul>
            </div>

            <div className="hr" />

            {/* PÉČE */}
            <div className="wm-content">
              <div className="card-title">🌸 Péče & regenerace</div>
              <ul className="price-list">
                <Price
                  name="B.Pur hloubkové čištění"
                  oldP="+230 Kč"
                  newP="+184 Kč"
                  note="Detox vlasů a pokožky, ideální jako doplněk ke střihu."
                />
                <Price
                  name="Ki-Power Veg rekonstrukce"
                  oldP="+260 Kč"
                  newP="+208 Kč"
                  note="Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů."
                />
              </ul>
            </div>

            <p className="muted" style={{ marginTop: "1rem", fontSize: ".9rem" }}>
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme.
            </p>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          <div className="stack-6">
            <h2>Kontakt</h2>

            <div className="stack-6">
              <div className="contact-row">
                <IconMapPin />{" "}
                <div>
                  <a href={MAP_URL} target="_blank" rel="noreferrer" className="contact-link">
                    {ADDR_LINE}
                  </a>
                  <div className="muted">{ADDR_CITY}</div>
                </div>
              </div>

              <div className="contact-row">
                <IconClock />{" "}
                <div>
                  <div className="contact-ttl">Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div className="contact-row">
                <IconPhone />{" "}
                <div>
                  <a href={`tel:${PHONE_RAW}`} className="contact-link">{PHONE_TXT}</a>
                  <div className="muted">Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="btn-row">
                <a className="btn btn-outline btn-fit" href={IG} target="_blank" rel="noreferrer">
                  <IconInstagram /> Instagram
                </a>
                <a className="btn btn-outline btn-fit" href={FB} target="_blank" rel="noreferrer">
                  <IconFacebook /> Facebook
                </a>
                <a className="btn btn-grad btn-fit" href={`tel:${PHONE_RAW}`}>
                  <IconPhone /> Zavolat {PHONE_TXT}
                </a>
              </div>
            </div>
          </div>

          {/* mapa – karta doprostřed, glow okolo */}
          <div className="map-side">
            <div className="card glow map-card">
              <iframe
                src={MAP_EMBED}
                loading="lazy"
                title="Mapa – Vlasy od Týnky"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – větší karta, výraznější vodoznak */}
      <section className="section">
        <div className="container small-center">
          <div className="card karta-thanks wm-host">
            <div className="watermark">
              <img src="/logo-text.png" alt="" className="small-watermark" />
            </div>
            <div className="wm-content" style={{ textAlign: "center" }}>
              <h3>Děkuji za návštěvu 💜</h3>
              <p className="muted">Těším se na vás v salonu na {ADDR_LINE}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-link" href={IG} target="_blank" rel="noreferrer">
            <IconInstagram /> Instagram
          </a>
          <span className="dot">•</span>
          <a className="footer-link" href={FB} target="_blank" rel="noreferrer">
            <IconFacebook /> Facebook
          </a>
          <span className="dot">•</span>
          <a className="footer-link" href={`tel:${PHONE_RAW}`}>
            <IconPhone /> {PHONE_TXT}
          </a>
        </div>
        <div className="container footer-copy">© {new Date().getFullYear()} Vlasy od Týnky</div>
      </footer>
    </div>
  );
}