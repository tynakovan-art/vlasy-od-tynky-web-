// src/App.jsx
import React, { useEffect, useState } from "react";

/* ------- Jednoduché SVG ikonky ------- */
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6M18.2 6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M13.5 9H16V6h-2.5C11.6 6 11 7.2 11 8.7V10H9v3h2v7h3v-7h2.2l.3-3H14v-1c0-.6.2-1 1-1z"/>
  </svg>
);
const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C11.1 21 3 12.9 3 3c0-.6.4-1 1-1h2.2c.6 0 1 .4 1 1 0 1.4.3 2.8.8 4.1.1.4 0 .9-.3 1.2l-2.1 2.5z"/>
  </svg>
);
const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/>
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2m1 11h5v-2h-4V7h-2v6z"/>
  </svg>
);

/* ------- Obrázek s fallbackem ------- */
function SmartImage({ srcs, className, alt }) {
  const [i, setI] = useState(0);
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
  // LOGA v /public
  const LOGO_SILUETY = ["/logo-siluety.png"]; // pro navbar + vodoznaky v ceníku
  const LOGO_TEXT = ["/logo-text.png"];       // pro hero pravou kartu + vodoznak v poděkování

  // Adresa a odkazy
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
    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
      <span style={{ fontSize: ".9rem", color: "var(--muted)", textDecoration: "line-through" }}>
        {oldLabel}
      </span>
      <span style={{ fontWeight: 700, color: "#dc2626" /* červená pro slevu */ }}>
        {newLabel}
      </span>
    </div>
  );

  return (
    <div>
      {/* NAVBAR */}
      <header className="section" style={{ paddingBlock: "1rem", borderBottom: "1px solid var(--border)", position: "sticky", top: 0, background: "rgba(255,255,255,.9)", backdropFilter: "blur(8px)", zIndex: 20 }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 600 }}>
            <SmartImage srcs={LOGO_SILUETY} className="" alt="logo" />
            <span>Vlasy od Týnky</span>
          </a>
          <nav style={{ display: "none" }} className="md-nav">
            {/* Pokud chceš, můžeš si sem vrátit viditelné menu na desktopu */}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div>
            {/* menší badge + menší mezery */}
            <div className="badge" style={{ marginBottom: "10px" }}>
              {/* dveře místo knížky */}
              🚪 Otevírám <strong style={{ marginLeft: 6 }}>1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <h1 className="hero-title" style={{ margin: "8px 0 10px" }}>
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ margin: "10px 0 16px", maxWidth: "60ch" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="stack-6" style={{ gridAutoFlow: "column", width: "fit-content" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* Pravý sloupec – UŽŠÍ karta s glow a logem uprostřed */}
          <div className="glow" style={{ justifySelf: "end" }}>
            <div
              className="card"
              style={{
                width: "min(360px, 100%)", /* užší než dřív */
                textAlign: "center",
                padding: "1.75rem"
              }}
            >
              <SmartImage
                srcs={LOGO_TEXT}
                className=""
                alt="text-logo"
              />
              <div className="muted" style={{ fontSize: ".95rem", marginTop: "8px" }}>
                kadeřnictví · Mladá Boleslav
              </div>

              <div className="stack-6" style={{ marginTop: "14px" }}>
                <a href="https://www.instagram.com/vlasy_od_tynky_mb" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconInstagram /> Napsat na Instagramu
                </a>
                <a href="https://www.facebook.com/vlasyodtynky/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconFacebook /> Napsat na Facebooku
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                  <IconPhone /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta s glow okolo */}
      <section aria-label="Akce" className="section">
        <div className="container glow">
          <div className="card" style={{ display: "grid", gap: "1rem" }}>
            <div className="badge" style={{ width: "fit-content" }}>🎉 Otevírací akce říjen</div>
            <div style={{ fontWeight: 500 }}>
              Po celý říjen nabízím <span style={{ color: "#dc2626", fontWeight: 700 }}>20% slevu</span> na všechny služby pro všechny zákazníky.
            </div>
            <div className="muted">
              Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
            </div>
            <div className="muted">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>

            <div className="stack-6" style={{ gridAutoFlow: "column", width: "fit-content" }}>
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

          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
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

      {/* O MNĚ (vráceno zpět) */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>O mně</h2>
          <p className="muted" style={{ marginTop: "1rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section">
        <div className="container">
          {/* Banner s gradientem – menší mezera pod ním */}
          <div style={{ background: "var(--grad)", color: "#fff", textAlign: "center", padding: "12px 16px", borderRadius: "1rem", boxShadow: "var(--shadow)", margin: "0 0 10px" }}>
            <div style={{ fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div style={{ opacity: .95, fontSize: ".9rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 className="hero-title" style={{ fontSize: "2rem", display: "flex", alignItems: "center", gap: "10px" }}>
            Ceník
            <span style={{ background: "#fee2e2", color: "#b91c1c", padding: "6px 10px", borderRadius: "999px", fontSize: ".95rem", fontWeight: 700 }}>
              –20 % říjen
            </span>
          </h2>

          {/* Karta ceníku s VÝRAZNĚJŠÍM vodoznakem */}
          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            {/* vodoznak: větší opacity, menší blur */}
            <div className="watermark" style={{ opacity: 0.28 }}>
              <SmartImage srcs={LOGO_SILUETY} className="small-watermark" alt="wm" />
            </div>

            <div className="wm-content">
              {/* Střih & styling */}
              <div className="hr" />
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>✂️ Střih &amp; styling</div>
              <ul style={{ marginTop: "10px", display: "grid", gap: "12px", fontSize: ".95rem" }}>
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
              <div className="hr" />
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🎨 Barvení &amp; melír</div>
              <ul style={{ marginTop: "10px", display: "grid", gap: "12px", fontSize: ".95rem" }}>
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
              <div className="hr" />
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🌸 Péče &amp; regenerace</div>
              <ul style={{ marginTop: "10px", display: "grid", gap: "12px", fontSize: ".95rem" }}>
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

              <div className="muted" style={{ fontSize: ".8rem", marginTop: "12px" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          <div>
            <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kontakt</h2>
            <div className="stack-6" style={{ marginTop: "1rem" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <IconMapPin />
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
                <IconClock />
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
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

              <div className="stack-6" style={{ gridAutoFlow: "column", width: "fit-content", marginTop: "8px" }}>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconInstagram /> Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <IconFacebook /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Mapa v kartě s glow */}
          <div className="glow" style={{ justifySelf: "end" }}>
            <div className="card" style={{ width: "min(420px, 100%)", padding: "12px" }}>
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

      {/* PODĚKOVÁNÍ – užší karta + výraznější vodoznak */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="glow" style={{ width: "100%", display: "grid", placeItems: "center" }}>
            <div className="card wm-host karta-thanks" style={{ width: "min(520px, 100%)", textAlign: "center" }}>
              <div className="watermark" style={{ opacity: 0.28 }}>
                <SmartImage srcs={LOGO_TEXT} className="small-watermark" alt="wm" />
              </div>

              <div className="wm-content">
                <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Děkuji za návštěvu 💜</div>
                <div className="muted" style={{ marginTop: "8px" }}>
                  Těším se na vás v salonu na {ADDRESS_LINE1}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – odkazy s ikonkami */}
      <footer className="section" style={{ paddingBlock: "2rem", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "14px", color: "var(--muted)", fontSize: ".95rem" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <IconInstagram /> Instagram
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <IconFacebook /> Facebook
            </a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ fontSize: ".8rem", marginTop: "8px" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
