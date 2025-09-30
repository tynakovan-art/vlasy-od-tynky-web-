// src/App.jsx
import React from "react";

/* Jednoduché inline SVG ikonky */
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM18 6.8a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2.001z"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.6V12h2.6V9.8c0-2.6 1.6-4 3.9-4 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
    <path fill="currentColor" d="M6.6 10.8a15.3 15.3 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.6 0 1 .4 1 .9V21c0 .6-.4 1-1 1A19 19 0 0 1 3 5c0-.6.4-1 1-1h3.3c.5 0 .9.4.9 1 0 1.4.3 2.8.8 4.1.2.4.1.8-.2 1.2l-2.2 2.5z"/>
  </svg>
);
const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20zm1 10.4 3.4 2a1 1 0 0 1-1 1.8l-4-2.3a1 1 0 0 1-.5-.9V7a1 1 0 1 1 2 0v5.4z"/>
  </svg>
);

/* Konstanta pro texty a odkazy */
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

const gradStyle = { background: "var(--grad)" };

function Hr() {
  return <div className="hr" />;
}

/** Vodoznak (silnější, viditelný i na mobilu) */
function Watermark({ src = "/logo-text.png", maxWidth = "55%", opacity = 0.22 }) {
  return (
    <div
      className="watermark"
      style={{ opacity, zIndex: 0 }}
      aria-hidden
    >
      <img
        src={src}
        alt=""
        style={{
          maxWidth,
          height: "auto",
          filter: "blur(1px)",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.85)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ paddingBlock: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
            <img src="/logo-siluety.png" alt="" style={{ height: "36px", width: "auto" }} />
            <span style={{ fontWeight: 600 }}>Vlasy od Týnky</span>
          </a>
          <nav style={{ display: "none" }} className="nav-desktop">
            {/* pokud chceš později rozbalovací menu, doplníme */}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div className="stack-6">
            {/* Badge – menší a s menšíma mezerama */}
            <div className="badge" style={{ width: "fit-content", marginBottom: ".25rem" }}>
              🚪 Otevírám <strong style={{ marginLeft: ".35rem" }}>1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <h1 className="hero-title" style={{ marginTop: ".25rem" }}>
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ marginTop: ".5rem" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="stack-6" style={{ gridAutoFlow: "column", justifyContent: "start" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">📞 Zavolat {PHONE_DISPLAY}</a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – užší karta s glow a logem uprostřed, na mobilu centrovat */}
          <div style={{ justifySelf: "end" }}>
            <div className="card glow" style={{ maxWidth: 420, marginInline: "auto", textAlign: "center" }}>
              <img src="/logo-text.png" alt="" style={{ height: "110px", width: "auto", marginInline: "auto", marginBottom: "10px" }} />
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>Vlasy od Týnky</div>
              <div className="muted" style={{ marginTop: "4px", fontSize: ".95rem" }}>kadeřnictví · Mladá Boleslav</div>
              <div className="muted" style={{ marginTop: "8px", fontSize: ".95rem" }}>Objednávky přes sociální sítě nebo telefon.</div>

              <div className="stack-6" style={{ marginTop: "14px" }}>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
                  <IconInstagram /> Napsat na Instagramu
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
                  <IconFacebook /> Napsat na Facebooku
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
                  <IconPhone /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta se glow (jako v hero) */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="card glow">
            <div className="badge" style={{ width: "fit-content" }}>🎉 Otevírací akce říjen</div>
            <div style={{ marginTop: "10px", fontWeight: 600 }}>
              Po celý říjen nabízím <span style={{ color: "#dc2626", fontWeight: 700 }}>20% slevu</span> na všechny služby pro všechny zákazníky.
            </div>
            <div className="muted" style={{ marginTop: "4px" }}>
              Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
            </div>
            <div className="muted" style={{ marginTop: "6px" }}>
              <IconMapPin style={{ verticalAlign: "-3px", marginRight: "6px" }} />
              {ADDRESS_LINE1}, {ADDRESS_CITY}
            </div>

            <div className="stack-6" style={{ gridAutoFlow: "column", justifyContent: "start", marginTop: "12px" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 600 }}>Kadeřnické služby v Mladé Boleslavi</h2>

          <div className="grid-2" style={{ marginTop: "1.25rem" }}>
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
        <div className="container">
          <h2 style={{ fontSize: "1.8rem", fontWeight: 600 }}>O mně</h2>
          <p className="muted" style={{ marginTop: ".75rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".4rem", fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section">
        <div className="container">
          {/* Banner s gradientem a menší mezerou pod ním */}
          <div className="card" style={{ padding: "1rem", ...gradStyle, color: "#fff", textAlign: "center", marginBottom: ".75rem" }}>
            <div style={{ fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div style={{ opacity: .95, fontSize: ".92rem", marginTop: ".25rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 style={{ display: "flex", alignItems: "center", gap: ".5rem", fontSize: "1.6rem", fontWeight: 700 }}>
            Ceník
            <span style={{ background: "#ffe4e6", color: "#be123c", padding: ".25rem .6rem", borderRadius: "999px", fontSize: ".9rem", fontWeight: 700 }}>
              –20 % říjen
            </span>
          </h2>

          {/* Karta ceníku s vodoznakem (silnější) */}
          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            <Watermark src="/logo-text.png" maxWidth="60%" opacity={0.24} />
            <div className="wm-content">
              {/* Střih & styling */}
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>✂️ Střih &amp; styling</div>
                <ul className="stack-6" style={{ marginTop: ".75rem" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Dámský střih</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 650 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 520 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Pánský střih</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 350 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 280 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Dětský střih (do 12 let)</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 250 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 200 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Rychlý střih přizpůsobený dětem.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Foukaná / styling bez střihu</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 400 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 320 Kč</span></div>
                    </div>
                  </li>
                </ul>
              </div>

              <Hr />

              {/* Barvení & melír */}
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🎨 Barvení &amp; melír</div>
                <ul className="stack-6" style={{ marginTop: ".75rem" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Barvení / tónování</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 1 350 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 080 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Melír klasický</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 1 850 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 480 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Melírování pramenů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Mikromelír + tónování</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>od 2 050 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 640 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                  </li>
                </ul>
              </div>

              <Hr />

              {/* Péče & regenerace */}
              <div>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🌸 Péče &amp; regenerace</div>
                <ul className="stack-6" style={{ marginTop: ".75rem" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>B.Pur hloubkové čištění</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>+230 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>+184 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                      <span>Ki-Power Veg rekonstrukce</span>
                      <div><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: "8px" }}>+260 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>+208 Kč</span></div>
                    </div>
                    <div className="muted" style={{ fontSize: ".9rem" }}>Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                  </li>
                </ul>
              </div>

              <div className="muted" style={{ fontSize: ".85rem", marginTop: "1rem" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA s glow */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          <div className="stack-6">
            <h2 style={{ fontSize: "1.8rem", fontWeight: 600 }}>Kontakt</h2>
            <div className="stack-6">
              <div style={{ display: "flex", gap: ".75rem" }}>
                <IconMapPin />
                <div>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, textDecoration: "underline" }}>
                    {ADDRESS_LINE1}
                  </a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: ".75rem" }}>
                <IconClock />
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted" style={{ fontSize: ".95rem" }}>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                <IconPhone />
                <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>{PHONE_DISPLAY}</a>
              </div>

              <div className="stack-6" style={{ gridAutoFlow: "column", justifyContent: "start" }}>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><IconInstagram /> Instagram</a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><IconFacebook /> Facebook</a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* Mapa s glow a bílým podkladem */}
          <div style={{ justifySelf: "end" }}>
            <div className="card glow" style={{ maxWidth: 420, marginInline: "auto", padding: "0.5rem" }}>
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

      {/* PODĚKOVÁNÍ – zvýrazněný vodoznak */}
      <section className="section">
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card wm-host karta-thanks" style={{ textAlign: "center" }}>
            <Watermark src="/logo-text.png" maxWidth="48%" opacity={0.24} />
            <div className="wm-content">
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: "6px" }}>Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER s ikonami */}
      <footer className="section" style={{ paddingBlock: "2rem", background: "rgba(255,255,255,.6)", backdropFilter: "blur(6px)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", color: "var(--muted)", fontSize: ".95rem" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
              <IconInstagram /> Instagram
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
              <IconFacebook /> Facebook
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`} style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ marginTop: "10px", fontSize: ".8rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
