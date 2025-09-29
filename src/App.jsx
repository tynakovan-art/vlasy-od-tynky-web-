// src/App.jsx
import React, { useState, useEffect } from "react";

/* ==== SVG ikonky (bez knihoven) ==== */
const IconInstagram = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163zM12 5.838a6.162 6.162 0 100 12.324A6.162 6.162 0 0012 5.838zm6.406-1.683a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0zM12 8.001a3.999 3.999 0 110 7.998 3.999 3.999 0 010-7.998z"/>
  </svg>
);
const IconFacebook = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.326v21.348C0 23.404.596 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.919.001c-1.505 0-1.797.716-1.797 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.404 24 24 23.404 24 22.674V1.326C24 .596 23.404 0 22.675 0z"/>
  </svg>
);
const IconPhone = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.48a1 1 0 01-1 1C10.85 21 3 13.15 3 3.99a1 1 0 011-1H7.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.21z"/>
  </svg>
);
const IconMapPin = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.74 6.54 11.89 7.01 12.31.28.25.69.25.97 0 .47-.42 7.02-6.57 7.02-12.31C19.5 5.36 16.14 2 12 2zm0 10.25a2.75 2.75 0 110-5.5 2.75 2.75 0 010 5.5z"/>
  </svg>
);
const IconClock = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1.75A10.25 10.25 0 1022.25 12 10.262 10.262 0 0012 1.75zm.75 10.06V6a.75.75 0 00-1.5 0v6.25c0 .2.08.39.22.53l3.75 3.75a.75.75 0 001.06-1.06L12.75 11.81z"/>
  </svg>
);
const IconScissors = (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 3a3 3 0 102.77 4.1l2.04 3.54-2.04 3.54A3 3 0 108 21a3 3 0 002.77-4.1l2.04-3.54 6.02 10.44h2.17L13.98 12 21 1.66h-2.17L10.77 12.1 8 7.1A3 3 0 008 3zM6 6a1 1 0 112 0 1 1 0 01-2 0zm2 12a1 1 0 11-2 0 1 1 0 012 0z"/>
  </svg>
);

/* === Obrázek s fallbackem (bez TS typů) === */
function SmartImage({ srcs, alt = "", className = "", fallback = null }) {
  const [i, setI] = useState(0);
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
  return fallback;
}

export default function App() {
  // Základní data
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";
  const LOGO_TEXT = ["/logo-text.png"];

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  // Pomocná komponenta pro „původní/novou“ cenu
  const PriceRow = ({ name, oldPrice, newPrice, note }) => (
    <li>
      <div className="stack-6" style={{ gap: ".25rem" }}>
        <div className="stack-6" style={{ gap: ".25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
            <span>{name}</span>
            <span>
              <span style={{ color: "#94a3b8", textDecoration: "line-through", marginRight: ".5rem" }}>
                {oldPrice}
              </span>
              <span style={{ color: "#db2777", fontWeight: 700 }}>{newPrice}</span>
            </span>
          </div>
          {note && <div className="muted" style={{ fontSize: ".85rem" }}>{note}</div>}
        </div>
      </div>
    </li>
  );

  return (
    <div>
      {/* NAV – jednoduchý topbar */}
      <header className="section" style={{ paddingBlock: "1.25rem" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ display: "inline-flex", alignItems: "center", gap: ".6rem", fontWeight: 700 }}>
            {IconScissors}
            <span>Vlasy od Týnky</span>
          </a>
          <nav className="muted" style={{ display: "none" }}>
            {/* (schválně skryto – necháváme čisté) */}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levá strana – text */}
          <div className="stack-6">
            <div className="badge">🚪 Otevírám 1.&nbsp;10.&nbsp;2025</div>
            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>
            <p className="muted" style={{ fontSize: "1.05rem" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>
            <div className="stack-6" style={{ gridAutoFlow: "column", gridAutoColumns: "max-content" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">{IconPhone} Zavolat {PHONE_DISPLAY}</a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravá strana – karta s logem + odkazy */}
          <div className="card glow">
            <div className="stack-6" style={{ alignItems: "center", textAlign: "center" }}>
              <SmartImage
                srcs={LOGO_TEXT}
                alt="Vlasy od Týnky – logo"
                className="small-watermark" /* pěkná velikost nahoře */
                fallback={<div className="badge">{IconScissors} Vlasy od Týnky</div>}
              />
              <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>Vlasy od Týnky</div>
              <div className="muted" style={{ fontSize: ".95rem" }}>kadeřnictví · Mladá Boleslav</div>
              <div className="muted" style={{ fontSize: ".95rem" }}>Objednávky přes sociální sítě nebo telefon.</div>

              <div className="stack-6" style={{ width: "100%" }}>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: "100%" }}>
                  {IconInstagram} Napsat na Instagramu
                </a>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ width: "100%" }}>
                  {IconFacebook} Napsat na Facebooku
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad" style={{ width: "100%" }}>
                  {IconPhone} Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER – nad službami (bílá karta, „glow“ okolo, uvnitř gradient badge + CTA) */}
      <section className="section">
        <div className="container">
          <div className="card glow" style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div className="stack-6">
              <div className="badge">🎉 Otevírací akce říjen</div>
              <div style={{ fontWeight: 600 }}>
                Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20&nbsp;% slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted" style={{ fontSize: ".95rem" }}>
                Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨ &nbsp; • &nbsp; {ADDRESS_LINE1}, {ADDRESS_CITY}
              </div>
            </div>
            <div className="stack-6" style={{ gridAutoFlow: "column", gridAutoColumns: "max-content" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">{IconPhone} Zavolat</a>
              <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container stack-10">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2">
            <div className="card">
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Střihy</div>
              <p className="muted" style={{ marginTop: ".5rem" }}>
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Barvení a tónování</div>
              <p className="muted" style={{ marginTop: ".5rem" }}>
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Melír / mikromelír</div>
              <p className="muted" style={{ marginTop: ".5rem" }}>
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Vlasová péče</div>
              <p className="muted" style={{ marginTop: ".5rem" }}>
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container stack-6">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>O mně</h2>
          <p className="muted" style={{ fontSize: "1.05rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* BANNER nad ceníkem – plný pruh s gradientem */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="btn btn-grad" style={{ width: "100%", justifyContent: "center", borderRadius: "1rem", padding: "1rem 1.25rem" }}>
            🎉 Otevírací sleva –20 % celý říjen! 🎉
          </div>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section">
        <div className="container stack-6">
          <h2 style={{ display: "flex", alignItems: "center", gap: ".6rem", fontSize: "1.8rem", fontWeight: 800 }}>
            Ceník
            <span style={{ background: "#ffe4ef", color: "#be185d", padding: ".25rem .6rem", borderRadius: "999px", fontSize: ".9rem", fontWeight: 700 }}>
              –20 % říjen
            </span>
          </h2>

          <div className="card wm-host">
            {/* vodoznak silnější a o trochu větší */}
            <div className="watermark">
              <SmartImage srcs={LOGO_TEXT} alt="" className="small-watermark" fallback={null} />
            </div>

            <div className="wm-content">
              {/* Střih & styling */}
              <div className="stack-6">
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>✂️ Střih &amp; styling</div>
                <ul className="stack-6" style={{ gap: "1rem" }}>
                  <PriceRow name="Dámský střih" oldPrice="od 650 Kč" newPrice="od 520 Kč" note="Konzultace, mytí vlasů, střih, foukaná a styling." />
                  <PriceRow name="Pánský střih" oldPrice="od 350 Kč" newPrice="od 280 Kč" note="Rychlý, čistý střih s úpravou kontur." />
                  <PriceRow name="Dětský střih (do 12 let)" oldPrice="od 250 Kč" newPrice="od 200 Kč" note="Citlivý přístup a pohodová atmosféra." />
                  <PriceRow name="Foukaná / styling bez střihu" oldPrice="od 400 Kč" newPrice="od 320 Kč" note="Lehké vlny, objem nebo hladký styling." />
                </ul>
              </div>

              <div className="hr" />

              {/* Barvení & melír */}
              <div className="stack-6">
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>🎨 Barvení &amp; melír</div>
                <ul className="stack-6" style={{ gap: "1rem" }}>
                  <PriceRow name="Barvení / tónování" oldPrice="od 1 350 Kč" newPrice="od 1 080 Kč" note="Kompletní barvení nebo tónování, včetně střihu a foukané." />
                  <PriceRow name="Melír klasický" oldPrice="od 1 850 Kč" newPrice="od 1 480 Kč" note="Prosvětlení pramenů, střih, foukaná a styling." />
                  <PriceRow name="Mikromelír + tónování" oldPrice="od 2 050 Kč" newPrice="od 1 640 Kč" note="Jemné prosvětlení s doladěním odstínu." />
                </ul>
              </div>

              <div className="hr" />

              {/* Péče & regenerace */}
              <div className="stack-6">
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>🌸 Péče &amp; regenerace</div>
                <ul className="stack-6" style={{ gap: "1rem" }}>
                  <PriceRow name="B.Pur hloubkové čištění" oldPrice="+230 Kč" newPrice="+184 Kč" note="Detox vlasů a pokožky – ideální doplněk ke střihu." />
                  <PriceRow name="Ki-Power Veg rekonstrukce" oldPrice="+260 Kč" newPrice="+208 Kč" note="Intenzivní výživa po barvení a melíru – obnova síly a lesku." />
                </ul>
              </div>

              <p className="muted" style={{ fontSize: ".9rem", marginTop: "1rem" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše dopředu domluvíme na místě nebo ve zprávě.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA (vpravo) */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          {/* Kontakty vlevo */}
          <div className="stack-6">
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700 }}>Kontakt</h2>

            <div className="stack-6">
              <div style={{ display: "flex", gap: ".6rem", alignItems: "flex-start" }}>
                {IconMapPin}
                <div>
                  <a href={MAP_URL} target="_blank" rel="noreferrer" style={{ fontWeight: 700, textDecoration: "underline" }}>
                    {ADDRESS_LINE1}
                  </a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
                {IconClock}
                <div>
                  <div style={{ fontWeight: 700 }}>Otevírací doba</div>
                  <div className="muted" style={{ fontSize: ".95rem" }}>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: ".6rem", alignItems: "center" }}>
                {IconPhone}
                <div>
                  <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 700 }}>{PHONE_DISPLAY}</a>
                  <div className="muted" style={{ fontSize: ".85rem" }}>Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="stack-6" style={{ gridAutoFlow: "column", gridAutoColumns: "max-content" }}>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                  {IconInstagram} Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                  {IconFacebook} Facebook
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                  {IconPhone} Zavolat
                </a>
              </div>
            </div>
          </div>

          {/* Mapa vpravo v kartě s glow */}
          <div className="card glow">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="340"
              loading="lazy"
              style={{ border: 0, borderRadius: "1.25rem" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Vlasy od Týnky"
            />
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – vyšší karta + sytější vodoznak */}
      <section className="section">
        <div className="container" style={{ maxWidth: "40rem" }}>
          <div className="card wm-host karta-thanks" style={{ textAlign: "center" }}>
            <div className="watermark" style={{ opacity: .22 }}>
              <SmartImage srcs={LOGO_TEXT} alt="" className="small-watermark" fallback={null} />
            </div>
            <div className="wm-content stack-6">
              <div style={{ fontSize: "1.2rem", fontWeight: 700 }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ fontSize: ".95rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – s ikonkami */}
      <footer className="section" style={{ paddingTop: "1.5rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="stack-6" style={{ gridAutoFlow: "column", gridAutoColumns: "max-content", justifyContent: "center" }}>
            <a href={IG_URL} target="_blank" rel="noreferrer" className="muted" style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
              {IconInstagram} Instagram
            </a>
            <span className="muted">•</span>
            <a href={FB_URL} target="_blank" rel="noreferrer" className="muted" style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
              {IconFacebook} Facebook
            </a>
            <span className="muted">•</span>
            <a href={`tel:${PHONE_RAW}`} className="muted" style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>
              {IconPhone} {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ fontSize: ".8rem", marginTop: ".6rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
