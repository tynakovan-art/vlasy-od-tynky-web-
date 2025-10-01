import React from "react";

/* SVG ikonky (bez knihoven) */
const PhoneIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
  </svg>
);
const InstagramIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m5 5a5 5 0 100 10 5 5 0 000-10m6.5-1.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM12 9.5A2.5 2.5 0 119.5 12 2.5 2.5 0 0112 9.5z"/>
  </svg>
);
const FacebookIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M22 12.06A10 10 0 1010.25 22v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.16 1.8.16v2h-1c-1 0-1.3.62-1.3 1.26V12h2.3l-.37 3h-1.93v7A10 10 0 0022 12.06z"/>
  </svg>
);

/* Kontakty / odkazy */
const PHONE = "725882820";
const PHONE_DISPLAY = "725 882 820";
const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";

/* Adresa + mapy */
const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const ADDRESS_DISTRICT = "Mladá Boleslav III";
const ADDRESS_COUNTRY = "Česko";
const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container navbar-inner">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="" />
            <span>Vlasy od Týnky</span>
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
              <a className="btn btn-grad" href={`tel:${PHONE}`}><PhoneIcon/> Zavolat {PHONE_DISPLAY}</a>
              <a className="btn btn-ghost" href="#sluzby">Prohlédnout služby</a>
            </div>
          </div>

          {/* pravý sloupec – užší karta s glowem těsně okolo */}
          <div className="hero-card-wrap glow">
            <div className="hero-card">
              <img src="/logo-text.png" alt="" className="hero-logo" />
              <div className="hero-card-title">Vlasy od Týnky</div>
              <div className="hero-card-sub">kadeřnictví · Mladá Boleslav</div>
              <div className="hero-card-desc">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="hero-card-cta">
                <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noreferrer"><InstagramIcon/> Napsat na Instagramu</a>
                <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noreferrer"><FacebookIcon/> Napsat na Facebooku</a>
                <a className="btn btn-grad" href={`tel:${PHONE}`}><PhoneIcon/> Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta, glow okolo */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="glow">
            <div className="card">
              <div className="badge" style={{marginBottom:8}}>🎉 Otevírací akce říjen</div>
              <div className="banner-akce-text">
                Po celý říjen nabízím <span className="sale-red">20% slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted" style={{marginTop:4}}>Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
              <div className="muted" style={{marginTop:2}}>📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
              <div className="banner-akce-cta">
                <a className="btn btn-grad" href={`tel:${PHONE}`}><PhoneIcon/> Zavolat {PHONE_DISPLAY}</a>
                <a className="btn btn-outline" href="#cenik">Mrknout na ceník</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="cards-2">
            {[
              {t:'Střihy', d:'Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.'},
              {t:'Barvení a tónování', d:'Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.'},
              {t:'Melír / mikromelír', d:'Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.'},
              {t:'Vlasová péče', d:'Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.'},
            ].map((x,i)=>(
              <div className="card service" key={i}>
                <div className="service-title">{x.t}</div>
                <p className="muted">{x.d}</p>
              </div>
            ))}
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
          <p className="muted" style={{marginTop:8}}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* BANNER NAD CENÍKEM – plný gradient, text na střed, menší mezera pod ním */}
      <section className="section section-tight">
        <div className="container">
          <div className="banner-grad">
            <div className="banner-inner">
              <div className="banner-title">🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
              <div className="banner-desc">Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section">
        <div className="container">
          <h2 className="h2 cenik-title">
            Ceník
            <span className="chip">–20 % říjen</span>
          </h2>

          <div className="card wm-host price-card">
            {/* vodoznak — ZESÍLEN (viditelnější) */}
            <div className="watermark">
              <img src="/logo-text.png" alt="" className="wm-logo" />
            </div>

            {/* Střih & styling */}
            <div className="block">
              <div className="block-title">✂️ Střih &amp; styling</div>
              <ul className="plist">
                <li>
                  <div className="row">
                    <span>Dámský střih</span>
                    <span className="price"><span className="old">od 650 Kč</span><span className="new">od 520 Kč</span></span>
                  </div>
                  <div className="desc">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                </li>
                <li>
                  <div className="row">
                    <span>Pánský střih</span>
                    <span className="price"><span className="old">od 350 Kč</span><span className="new">od 280 Kč</span></span>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <span>Dětský střih (do 12 let)</span>
                    <span className="price"><span className="old">od 250 Kč</span><span className="new">od 200 Kč</span></span>
                  </div>
                  <div className="desc">Rychlý střih přizpůsobený dětem.</div>
                </li>
                <li>
                  <div className="row">
                    <span>Foukaná / styling bez střihu</span>
                    <span className="price"><span className="old">od 400 Kč</span><span className="new">od 320 Kč</span></span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Barvení & melír */}
            <div className="hr" />
            <div className="block">
              <div className="block-title">🎨 Barvení &amp; melír</div>
              <ul className="plist">
                <li>
                  <div className="row">
                    <span>Barvení / tónování</span>
                    <span className="price"><span className="old">od 1 350 Kč</span><span className="new">od 1 080 Kč</span></span>
                  </div>
                  <div className="desc">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
                </li>
                <li>
                  <div className="row">
                    <span>Melír klasický</span>
                    <span className="price"><span className="old">od 1 850 Kč</span><span className="new">od 1 480 Kč</span></span>
                  </div>
                  <div className="desc">Melírování pramenů, střih, foukaná a styling.</div>
                </li>
                <li>
                  <div className="row">
                    <span>Mikromelír + tónování</span>
                    <span className="price"><span className="old">od 2 050 Kč</span><span className="new">od 1 640 Kč</span></span>
                  </div>
                  <div className="desc">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                </li>
              </ul>
            </div>

            {/* Péče & regenerace */}
            <div className="hr" />
            <div className="block">
              <div className="block-title">🌸 Péče &amp; regenerace</div>
              <ul className="plist">
                <li>
                  <div className="row">
                    <span>B.Pur hloubkové čištění</span>
                    <span className="price"><span className="old">+230 Kč</span><span className="new">+184 Kč</span></span>
                  </div>
                  <div className="desc">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                </li>
                <li>
                  <div className="row">
                    <span>Ki-Power Veg rekonstrukce</span>
                    <span className="price"><span className="old">+260 Kč</span><span className="new">+208 Kč</span></span>
                  </div>
                  <div className="desc">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                </li>
              </ul>
            </div>

            <div className="price-note">
  <p>Uvedené ceny jsou orientační.</p>
  <p>Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.</p>
  <p>Vše vždy předem domluvíme na místě nebo ve zprávě.</p>
</div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container contact-grid">
          <div>
            <h2 className="h2">Kontakt</h2>
            <div className="stack-6">
              <div className="row-icon">
                <span className="dot">📍</span>
                <div>
                  <a href={MAP_URL} target="_blank" rel="noreferrer" className="link">{ADDRESS_LINE1}</a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div className="row-icon">
                <span className="dot">⏰</span>
                <div>
                  <div className="bold">Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div className="row-icon">
                <span className="dot">📞</span>
                <div>
                  <a href={`tel:${PHONE}`} className="bold">{PHONE_DISPLAY}</a>
                  <div className="muted">Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="cta-row">
                <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noreferrer"><InstagramIcon/> Instagram</a>
                <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noreferrer"><FacebookIcon/> Facebook</a>
                <a className="btn btn-grad" href={`tel:${PHONE}`}><PhoneIcon/> Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          <div className="map-wrap glow">
            <div className="card map-card">
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

      {/* PODĚKOVÁNÍ – uprostřed, vodoznak ZESÍLEN */}
      <section className="section">
        <div className="container thanks-center">
          <div className="card wm-host karta-thanks">
            <div className="watermark">
              <img src="/logo-text.png" alt="" className="wm-logo-strong" />
            </div>
            <div className="wm-content" style={{textAlign:'center'}}>
              <div className="thanks-title">Děkuji za návštěvu 💜</div>
              <div className="muted" style={{marginTop:6}}>Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – bez loga, s ikonami */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href={IG_URL} target="_blank" rel="noreferrer" className="foot-link"><InstagramIcon/> Instagram</a>
          <span className="sep">•</span>
          <a href={FB_URL} target="_blank" rel="noreferrer" className="foot-link"><FacebookIcon/> Facebook</a>
          <span className="sep">•</span>
          <a href={`tel:${PHONE}`} className="foot-link"><PhoneIcon/> {PHONE_DISPLAY}</a>
        </div>
        <div className="container" style={{textAlign:'center', marginTop:8}}>
          <div className="muted" style={{fontSize:'.8rem'}}>© {new Date().getFullYear()} Vlasy od Týnky</div>
        </div>
      </footer>
    </>
  );
}