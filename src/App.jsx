import React, { useEffect, useState } from "react";

/* --- Mini SVG ikonky --- */
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5ZM18 6.4a1.1 1.1 0 1 0 1.1 1.1A1.1 1.1 0 0 0 18 6.4Z"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M22 12.06A10 10 0 1 0 10.7 21.9v-6.98H8.1V12h2.6V9.8c0-2.56 1.52-3.97 3.84-3.97 1.11 0 2.27.2 2.27.2v2.5h-1.28c-1.26 0-1.65.79-1.65 1.6V12h2.81l-.45 2.92h-2.36v6.98A10 10 0 0 0 22 12.06Z"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
    <path d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.02-.25c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A16.5 16.5 0 0 1 3.5 5a1 1 0 0 1 1-1H8a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.02z"/>
  </svg>
);

/* --- Obrázek s fallbackem (cyklí přes srcs) --- */
function SmartImage({ srcs, className, style }) {
  const [i, setI] = useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt=""
        className={className}
        style={style}
        onError={() => setI((v) => v + 1)}
      />
    );
  }
  return null;
}

export default function App() {
  /* Cesty do /public */
  const LOGO_NAV = ["/logo-siluety.png"]; // Navbar
  const LOGO_WM = ["/logo-text.png"];     // Watermark uvnitř karet (hero, ceník, poděkování)

  /* Adresa a odkazy */
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

  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  const PriceStrike = ({ oldLabel, newLabel }) => (
    <div style={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
      <span style={{ fontSize: ".9rem", color: "var(--muted)", textDecoration: "line-through" }}>
        {oldLabel}
      </span>
      <span style={{ fontWeight: 700, color: "#dc2626" /* červená sleva */ }}>
        {newLabel}
      </span>
    </div>
  );

  return (
    <div>
      {/* NAVBAR – logo-siluety vlevo, žádný watermark globálně */}
      <header
        className="card"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderRadius: 0,
          padding: 0,
          margin: 0,
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBlock: "12px",
          }}
        >
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <SmartImage srcs={LOGO_NAV} className="" style={{ height: 36 }} />
            <span style={{ fontWeight: 600 }}>Vlasy od Týnky</span>
          </a>

          <nav className="hidden md:flex" style={{ display: "flex", gap: "20px", fontSize: ".95rem" }}>
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2" style={{ alignItems: "center", paddingTop: "1.25rem" }}>
          {/* Levý sloupec */}
          <div>
            {/* menší badge + menší mezery */}
            <div className="badge" style={{ marginBottom: "10px" }}>
              🚪 Otevírám <strong style={{ marginLeft: 6 }}>1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <h1 className="hero-title" style={{ margin: 0 }}>
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>
                Vlasy od Týnky
              </span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ marginTop: "12px", maxWidth: "60ch" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte
              vlasům péči, kterou si zaslouží.
            </p>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "14px" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* Pravý sloupec – karta UŽŠÍ + glow + watermark logo-text Uvnitř */}
          <div className="glow" style={{ justifySelf: "end" }}>
            <div
              className="card wm-host"
              style={{
                width: "min(440px, 100%)",
                textAlign: "center",
                padding: "28px 24px",
              }}
            >
              {/* watermark uvnitř karty */}
              <div className="watermark">
                <SmartImage srcs={LOGO_WM} className="small-watermark" />
              </div>

              <div className="wm-content">
                <SmartImage srcs={LOGO_WM} style={{ height: 90, margin: "0 auto 6px" }} />
                <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>Vlasy od Týnky</div>
                <div className="muted" style={{ fontSize: ".9rem", marginTop: 4 }}>
                  kadeřnictví · Mladá Boleslav
                </div>
                <div className="muted" style={{ fontSize: ".9rem", marginTop: 6 }}>
                  Objednávky přes sociální sítě nebo telefon.
                </div>

                <div className="stack-6" style={{ marginTop: 14 }}>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER nad SLUŽBAMI – bílá karta, glow okolo, žádný fullwidth bar */}
      <section aria-label="Akce" className="section">
        <div className="container glow">
          <div className="card" style={{ display: "grid", gap: "12px" }}>
            <div className="badge" style={{ width: "fit-content" }}>🎉 Otevírací akce říjen</div>
            <div style={{ fontWeight: 500 }}>
              Po celý říjen nabízím <span style={{ color: "#dc2626", fontWeight: 700 }}>20% slevu</span> na
              všechny služby pro všechny zákazníky.
            </div>
            <div className="muted">Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
            <div className="muted">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
            <div style={{ display: "flex", gap: "8px", marginTop: "6px", flexWrap: "wrap" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2" style={{ marginTop: "1.2rem" }}>
            <div className="card">
              <div style={{ fontWeight: 600 }}>Střihy</div>
              <p className="muted" style={{ marginTop: 8 }}>
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600 }}>Barvení a tónování</div>
              <p className="muted" style={{ marginTop: 8 }}>
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600 }}>Melír / mikromelír</div>
              <p className="muted" style={{ marginTop: 8 }}>
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
              </p>
            </div>
            <div className="card">
              <div style={{ fontWeight: 600 }}>Vlasová péče</div>
              <p className="muted" style={{ marginTop: 8 }}>
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ (beze změn) */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>O mně</h2>
          <p className="muted" style={{ marginTop: 12 }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: 8, fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK – banner (gradient), menší mezera k nadpisu, karta s watermarkem logo-text */}
      <section id="cenik" className="section">
        <div className="container">
          <div className="card glow" style={{ padding: "14px 18px", marginBottom: "12px" }}>
            <div className="badge">🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div className="muted" style={{ marginTop: 6 }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 className="hero-title" style={{ fontSize: "2rem", display: "flex", gap: "10px", alignItems: "center" }}>
            Ceník
            <span
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                padding: "6px 10px",
                borderRadius: "999px",
                fontSize: ".9rem",
                fontWeight: 700,
              }}
            >
              –20 % říjen
            </span>
          </h2>

          <div className="card wm-host" style={{ marginTop: "16px" }}>
            {/* vodoznak logo-text uvnitř ceníku – zvýrazněný */}
            <div className="watermark" style={{ opacity: 0.23 }}>
              <SmartImage srcs={LOGO_WM} className="small-watermark" />
            </div>

            <div className="wm-content">
              {/* Střih & styling */}
              <div className="hr"></div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>✂️ Střih &amp; styling</div>
              <ul className="stack-6">
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dámský střih</span>
                    <PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Konzultace, mytí vlasů, střih, foukaná a styling.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Pánský střih</span>
                    <PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Střih nůžkami i strojkem, suché i mokré vlasy.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dětský střih (do 12 let)</span>
                    <PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Rychlý střih přizpůsobený dětem.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Foukaná / styling bez střihu</span>
                    <PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                  </div>
                </li>
              </ul>

              {/* Barvení & melír */}
              <div className="hr"></div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>🎨 Barvení &amp; melír</div>
              <ul className="stack-6">
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Melír klasický</span>
                    <PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Melírování pramenů, střih, foukaná a styling.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Mikromelír + tónování</span>
                    <PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.
                  </div>
                </li>
              </ul>

              {/* Péče & regenerace */}
              <div className="hr"></div>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>🌸 Péče &amp; regenerace</div>
              <ul className="stack-6">
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>B.Pur hloubkové čištění</span>
                    <PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Detox vlasů a pokožky, ideální jako doplněk ke střihu.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Ki-Power Veg rekonstrukce</span>
                    <PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".85rem" }}>
                    Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.
                  </div>
                </li>
              </ul>

              <div className="muted" style={{ fontSize: ".8rem", marginTop: 12 }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA vpravo */}
      <section id="kontakt" className="section">
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <div>
            <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kontakt</h2>
            <div className="stack-6" style={{ marginTop: 12 }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div className="muted" style={{ marginTop: 3 }}>📍</div>
                <div>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                    {ADDRESS_LINE1}
                  </a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div className="muted" style={{ marginTop: 3 }}>🕒</div>
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted" style={{ fontSize: ".95rem" }}>
                    Po–St–Pá 9:00–16:00 • jiné časy po domluvě
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <IconPhone />
                <div>
                  <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>
                    {PHONE_DISPLAY}
                  </a>
                  <div className="muted" style={{ fontSize: ".85rem" }}>Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: 6 }}>
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

          {/* Mapa vpravo v kartě s glow */}
          <div className="glow" style={{ justifySelf: "end", width: "100%" }}>
            <div className="card" style={{ padding: "10px" }}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="340"
                loading="lazy"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – watermark logo-text, viditelnější */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="card wm-host karta-thanks" style={{ textAlign: "center", maxWidth: 520 }}>
            <div className="watermark" style={{ opacity: 0.24 }}>
              <SmartImage srcs={LOGO_WM} className="small-watermark" />
            </div>

            <div className="wm-content">
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: 6 }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – bez loga, s ikonami */}
      <footer style={{ padding: "28px 0", background: "rgba(255,255,255,.6)", backdropFilter: "blur(6px)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: "14px", alignItems: "center", color: "var(--muted)" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <IconInstagram /> Instagram
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <IconFacebook /> Facebook
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`} style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ fontSize: ".8rem", marginTop: 8 }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
