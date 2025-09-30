import React, { useEffect, useState } from "react";

/* Jednoduchý <img> s fallbackem */
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

/* Inline SVG ikonky (bez knihoven) */
const IconPhone = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.15a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconInstagram = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
  </svg>
);
const IconFacebook = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/>
  </svg>
);
const IconMapPin = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 22s8-4.5 8-12a8 8 0 1 0-16 0c0 7.5 8 12 8 12z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const IconClock = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

/* Cesty k obrázkům v /public */
const LOGO_NAV = ["/logo-siluety.png"];      // ← NAVBAR vlevo (to „druhé“ logo)
const LOGO_CARD = ["/logo-text.png"];        // ← HERO karta vpravo (textové logo uprostřed)
const LOGO_WM_CENIK = ["/logo-siluety.png"]; // ← vodoznak v ceníku (víc vidět)
const LOGO_WM_THANKS = ["/logo-text.png"];   // ← vodoznak v poděkování

/* Kontakty, odkazy */
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

/* Util */
const grad = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

export default function App() {
  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  const PriceStrike = ({ oldLabel, newLabel }) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
      <span style={{ fontSize: ".9rem", color: "#94a3b8", textDecoration: "line-through" }}>{oldLabel}</span>
      <span style={{ fontWeight: 600, color: "#dc2626" }}>{newLabel}</span>
    </div>
  );

  return (
    <>
      {/* NAVBAR */}
      <header className="card" style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(6px)", margin: 0, borderRadius: 0 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBlock: "12px" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* ← TADY JE LOGO V NAVBARU */}
            <SmartImage srcs={LOGO_NAV} alt="" className="" fallback={null} />
            <span style={{ fontWeight: 600 }}>Vlasy od Týnky</span>
          </a>
          <nav style={{ display: "none" }} className="md-nav">
            {/* pokud chceš menu na desktopu, můžeme doplnit CSS breakpointy */}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div>
            {/* menší badge + menší mezery */}
            <div className="badge" style={{ marginBottom: "12px" }}>
              🚪 Otevírám <strong style={{ fontWeight: 700, marginLeft: "6px" }}>1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <h1 className="hero-title" style={{ margin: 0 }}>
              Kadeřnictví
              <span className="grad" style={{ display: "block", marginTop: "6px" }}>
                Vlasy od Týnky
              </span>
              <span style={{ display: "block", marginTop: "6px" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ marginTop: "12px", maxWidth: "60ch" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "14px" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – užší karta, bílé pozadí, glow okolo, logo uprostřed */}
          <div className="card glow" style={{ maxWidth: 420, justifySelf: "end", textAlign: "center" }}>
            <SmartImage
              srcs={LOGO_CARD}
              alt=""
              className=""
              fallback={null}
            />
            <div style={{ fontSize: "1.25rem", fontWeight: 600, marginTop: "6px" }}>Vlasy od Týnky</div>
            <div className="muted" style={{ fontSize: ".9rem", marginTop: "4px" }}>kadeřnictví · Mladá Boleslav</div>
            <div className="muted" style={{ fontSize: ".95rem", marginTop: "10px" }}>
              Objednávky přes sociální sítě nebo telefon.
            </div>
            <div className="stack-6" style={{ marginTop: "12px" }}>
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
      </section>

      {/* BANNER NAD SLUŽBAMI – karta s glow a bílým podkladem */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="card glow" style={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div>
              <div className="badge">🎉 Otevírací akce říjen</div>
              <div style={{ marginTop: "8px", fontWeight: 500 }}>
                Po celý říjen nabízím <span style={{ color: "#dc2626", fontWeight: 700 }}>20% slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted" style={{ fontSize: ".95rem" }}>
                Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
              </div>
              <div className="muted" style={{ fontSize: ".9rem", marginTop: "4px" }}>
                📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2" style={{ marginTop: "1.25rem" }}>
            {[
              { t: "Střihy", d: "Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby." },
              { t: "Barvení a tónování", d: "Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů." },
              { t: "Melír / mikromelír", d: "Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek." },
              { t: "Vlasová péče", d: "Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů." },
            ].map((x) => (
              <div key={x.t} className="card">
                <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>{x.t}</div>
                <p className="muted" style={{ marginTop: "8px", fontSize: ".95rem" }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>O mně</h2>
          <p className="muted" style={{ marginTop: "12px", maxWidth: "70ch" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: "6px", fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK (banner nad ceníkem menší mezera, watermark viditelnější) */}
      <section id="cenik" className="section">
        <div className="container">
          <div style={{ background: grad, color: "#fff", textAlign: "center", padding: "12px 16px", borderRadius: "14px", boxShadow: "var(--shadow)", marginBottom: "12px" }}>
            <div style={{ fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div style={{ opacity: 0.96, fontSize: ".95rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 className="hero-title" style={{ fontSize: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
            Ceník
            <span style={{ background: "#ffe4e6", color: "#be123c", padding: "6px 10px", borderRadius: "999px", fontSize: ".95rem", fontWeight: 700 }}>
              –20 % říjen
            </span>
          </h2>

          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            {/* VODOZNAK CENÍK – zvýrazněný */}
            <div className="watermark" style={{ opacity: 0.30 }}>
              <SmartImage srcs={LOGO_WM_CENIK} alt="" className="small-watermark" fallback={null} />
            </div>

            <div className="wm-content">
              {/* Střih & styling */}
              <div className="hr" />
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>✂️ Střih & styling</div>
              <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dámský střih</span><PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Pánský střih</span><PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dětský střih (do 12 let)</span><PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Rychlý střih přizpůsobený dětem.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Foukaná / styling bez střihu</span><PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                  </div>
                </li>
              </ul>

              {/* Barvení & melír */}
              <div className="hr" />
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>🎨 Barvení & melír</div>
              <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Barvení / tónování</span><PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Melír klasický</span><PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Melírování pramenů, střih, foukaná a styling.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Mikromelír + tónování</span><PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                </li>
              </ul>

              {/* Péče & regenerace */}
              <div className="hr" />
              <div style={{ fontWeight: 600, marginBottom: "8px" }}>🌸 Péče & regenerace</div>
              <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>B.Pur hloubkové čištění</span><PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Ki-Power Veg rekonstrukce</span><PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </div>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          <div>
            <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kontakt</h2>
            <div className="stack-6" style={{ marginTop: "12px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
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
              <div style={{ display: "flex", gap: "10px" }}>
                <IconClock />
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted" style={{ fontSize: ".95rem" }}>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <IconPhone />
                <div>
                  <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>{PHONE_DISPLAY}</a>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "6px" }}>
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

          <div className="card glow" style={{ maxWidth: 420, justifySelf: "end", padding: "10px" }}>
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="340"
              loading="lazy"
              className=""
              style={{ border: 0, borderRadius: "var(--radius-lg)" }}
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa – Vlasy od Týnky"
            />
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – watermark viditelnější */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="card wm-host karta-thanks" style={{ textAlign: "center", maxWidth: 520 }}>
            <div className="watermark" style={{ opacity: 0.30 }}>
              <SmartImage srcs={LOGO_WM_THANKS} alt="" className="small-watermark" fallback={null} />
            </div>
            <div className="wm-content">
              <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: "6px" }}>Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(255,255,255,.6)", backdropFilter: "blur(6px)", padding: "24px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", color: "#475569", fontSize: ".95rem" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ boxShadow: "none" }}>
              <IconInstagram /> Instagram
            </a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ boxShadow: "none" }}>
              <IconFacebook /> Facebook
            </a>
            <a href={`tel:${PHONE_RAW}`} className="btn btn-outline" style={{ boxShadow: "none" }}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div style={{ marginTop: "10px", fontSize: ".8rem", color: "#94a3b8" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </>
  );
}
