import React, { useEffect, useState } from "react";

/* --- SVG ikony --- */
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

/* --- Obrázek s fallbackem --- */
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
  /* LOGA v /public */
  const LOGO_NAV = ["/logo-siluety.png"];
  const LOGO_WM = ["/logo-text.png"];

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
      <span style={{ fontWeight: 700, color: "#dc2626" }}>{newLabel}</span>
    </div>
  );

  return (
    <div>
      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2" style={{ alignItems: "center" }}>
          {/* Levý sloupec */}
          <div>
            <div className="badge">🚪 Otevírám 1. 10. 2025</div>
            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span>Mladá Boleslav</span>
            </h1>
            <p className="muted" style={{ marginTop: "12px" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře.
            </p>
          </div>

          {/* Pravý sloupec – na mobilu na střed, glow okolo */}
          <div className="glow" style={{ justifySelf: "center", width: "100%", maxWidth: "420px" }}>
            <div className="card wm-host" style={{ textAlign: "center" }}>
              <div className="watermark" style={{ opacity: 0.25 }}>
                <SmartImage srcs={LOGO_WM} className="small-watermark" />
              </div>
              <div className="wm-content">
                <SmartImage srcs={LOGO_WM} style={{ height: 80, margin: "0 auto" }} />
              </div>
              <div className="stack-6" style={{ marginTop: "16px" }}>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconInstagram /> Napsat na Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconFacebook /> Napsat na Facebook
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                  <IconPhone /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER nad SLUŽBAMI – glow okolo */}
      <section className="section">
        <div className="container glow">
          <div className="card" style={{ textAlign: "center" }}>
            <div className="badge">🎉 Otevírací akce říjen</div>
            <p>Po celý říjen <span style={{ color: "#dc2626" }}>20% sleva</span> na všechny služby.</p>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="hero-title">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2 stack-6" style={{ marginTop: "1.5rem" }}>
            <div className="card"><div className="wm-content">✂️ Dámský střih<br/><span className="muted">Konzultace, mytí vlasů, střih, foukaná a styling.</span></div></div>
            <div className="card"><div className="wm-content">✂️ Pánský střih<br/><span className="muted">Střih nůžkami i strojkem, suché i mokré vlasy.</span></div></div>
            <div className="card"><div className="wm-content">✂️ Dětský střih (do 12 let)<br/><span className="muted">Rychlý střih přizpůsobený dětem.</span></div></div>
            <div className="card"><div className="wm-content">💨 Foukaná / styling<br/><span className="muted">Bez střihu, foukaná a úprava účesu.</span></div></div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title">O mně</h2>
          <p className="muted" style={{ marginTop: "12px" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section">
        <div className="container">
          {/* Banner nad ceníkem – střed */}
          <div className="card glow" style={{ textAlign: "center", marginBottom: "12px" }}>
            <div className="badge">🎉 Sleva –20 % celý říjen</div>
            <p className="muted">Platí pro všechny zákazníky.</p>
          </div>

          <h2 className="hero-title">Ceník</h2>

          <div className="card wm-host" style={{ marginTop: "16px", padding: "1.5rem" }}>
            <div className="watermark" style={{ opacity: 0.3 }}>
              <SmartImage srcs={LOGO_WM} className="small-watermark" />
            </div>
            <div className="wm-content stack-6">
              <div><span>Dámský střih</span><PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" /></div>
              <div><span>Pánský střih</span><PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" /></div>
              <div><span>Dětský střih</span><PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" /></div>
              <div><span>Foukaná / styling</span><PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" /></div>
              <div><span>Barvení / tónování</span><PriceStrike oldLabel="od 1350 Kč" newLabel="od 1080 Kč" /></div>
              <div><span>Melír klasický</span><PriceStrike oldLabel="od 1850 Kč" newLabel="od 1480 Kč" /></div>
              <div><span>Mikromelír + tónování</span><PriceStrike oldLabel="od 2050 Kč" newLabel="od 1640 Kč" /></div>
              <div><span>B.Pur hloubkové čištění</span><PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" /></div>
              <div><span>Ki-Power Veg rekonstrukce</span><PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container grid-2 stack-6">
          <div>
            <h2 className="hero-title">Kontakt</h2>
            <p>{ADDRESS_LINE1}, {ADDRESS_CITY} – {ADDRESS_DISTRICT}</p>
            <p>{ADDRESS_COUNTRY}</p>
            <div className="stack-6" style={{ marginTop: "12px" }}>
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
          <div className="glow">
            <div className="card">
              <iframe src={MAP_EMBED} width="100%" height="320" style={{ border: 0, borderRadius: "var(--radius-lg)" }} loading="lazy" title="Mapa – Vlasy od Týnky" />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ */}
      <section className="section">
        <div className="container">
          <div className="card wm-host" style={{ textAlign: "center", maxWidth: 480, margin: "0 auto" }}>
            <div className="watermark" style={{ opacity: 0.35 }}>
              <SmartImage srcs={LOGO_WM} className="small-watermark" />
            </div>
            <div className="wm-content">
              <h3>Děkuji za návštěvu 💜</h3>
              <p className="muted">Těším se na vás v salonu na {ADDRESS_LINE1}.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section" style={{ textAlign: "center" }}>
        <div className="stack-6">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer"><IconInstagram /> Instagram</a>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer"><IconFacebook /> Facebook</a>
          <a href={`tel:${PHONE_RAW}`}><IconPhone /> {PHONE_DISPLAY}</a>
          <p className="muted">© {new Date().getFullYear()} Vlasy od Týnky</p>
        </div>
      </footer>
    </div>
  );
}
