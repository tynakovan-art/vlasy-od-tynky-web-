import React, { useMemo } from "react";

/* Konstanty – adresa, odkazy, grad */
const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const ADDRESS_DISTRICT = "Mladá Boleslav III";
const ADDRESS_COUNTRY = "Česko";

const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_DISPLAY = "725 882 820";

const LOGO_TEXT = "/logo-text.png"; // používáme všude tohle
const GRADIENT = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

export default function App() {
  const MAP_QUERY = useMemo(
    () => encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`),
    []
  );
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  return (
    <div>
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,.8)",
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ paddingBlock: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <a href="#hero" style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
              <img src={LOGO_TEXT} alt="" style={{ height: "36px", width: "auto" }} />
              <span style={{ fontWeight: 600 }}>Vlasy od Týnky</span>
            </a>
            <nav className="hide-sm" style={{ display: "flex", gap: "1.5rem", fontSize: ".95rem" }}>
              <a href="#o-mne">O mně</a>
              <a href="#sluzby">Služby</a>
              <a href="#cenik">Ceník</a>
              <a href="#kontakt">Kontakt</a>
            </nav>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div>
            {/* Badge s datem otevření (dveře) */}
            <div className="badge" style={{ marginBottom: "1rem" }}>
              🚪 Otevírám <strong style={{ fontWeight: 700, marginLeft: ".25rem" }}>1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad"> Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ marginTop: "1.25rem", fontSize: "1.05rem", maxWidth: "52ch" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem (textové logo) */}
          <div style={{ position: "relative" }}>
            <div className="card glow" style={{ textAlign: "center", overflow: "hidden" }}>
              <img
                src={LOGO_TEXT}
                alt=""
                style={{ height: "112px", width: "auto", marginInline: "auto", marginBottom: ".75rem" }}
              />
              <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>Vlasy od Týnky</div>
              <div className="muted" style={{ marginTop: ".25rem", fontSize: ".95rem" }}>
                kadeřnictví · Mladá Boleslav
              </div>
              <div className="muted" style={{ marginTop: ".75rem", fontSize: ".95rem" }}>
                Objednávky přes sociální sítě nebo telefon.
              </div>

              <div className="stack-6" style={{ marginTop: "1rem" }}>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="btn btn-outline">
                  Facebook
                </a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                  📞 Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – stejná „karta s glow“ jako v hero */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="card glow" style={{ display: "flex", gap: "1rem", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div>
              <div className="badge">🎉 Otevírací akce říjen</div>
              <div style={{ marginTop: ".6rem", fontWeight: 600 }}>
                Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20% slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted" style={{ fontSize: ".95rem" }}>
                Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
              </div>
              <div className="muted" style={{ fontSize: ".95rem", marginTop: ".35rem" }}>
                📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
              </div>
            </div>
            <div style={{ display: "flex", gap: ".5rem", flexShrink: 0 }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">📞 Zavolat {PHONE_DISPLAY}</a>
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
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Střihy</div>
              <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Barvení a tónování</div>
              <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Melír / mikromelír</div>
              <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
              </p>
            </div>
            <div className="card">
              <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>Vlasová péče</div>
              <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>O mně</h2>
          <p className="muted" style={{ marginTop: ".75rem", lineHeight: 1.7 }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".35rem", fontSize: ".95rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK – horní plný banner + karta s vodoznakem */}
      <section id="cenik" className="section-lg">
        <div className="container">
          {/* Plný banner (gradient pozadí) */}
          <div
            className="card"
            style={{
              background: GRADIENT,
              color: "#fff",
              borderColor: "transparent",
              textAlign: "center",
              paddingBlock: "1.25rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
              🎉 Otevírací sleva –20 % celý říjen! 🎉
            </div>
            <div style={{ opacity: 0.95, fontSize: ".95rem", marginTop: ".25rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          {/* Nadpis ceníku + badge –20% */}
          <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <h2 className="hero-title" style={{ fontSize: "2rem", margin: 0 }}>Ceník</h2>
            <span
              style={{
                background: "#ffe4e6",
                color: "#be123c",
                padding: ".25rem .6rem",
                borderRadius: "999px",
                fontSize: ".9rem",
                fontWeight: 700,
              }}
            >
              –20 % říjen
            </span>
          </div>

          {/* Karta ceníku s vodoznakem */}
          <div className="card wm-host" style={{ marginTop: "1rem", overflow: "hidden" }}>
            {/* vodoznak */}
            <div className="watermark">
              <img src={LOGO_TEXT} alt="" className="small-watermark" />
            </div>

            {/* obsah */}
            <div className="wm-content">
              {/* sekce 1 */}
              <div style={{ paddingBlock: ".5rem" }}>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>✂️ Střih &amp; styling</div>
                <div className="hr" />
                <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dámský střih</span>
                    <Strike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Pánský střih</span>
                    <Strike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dětský střih (do 12 let)</span>
                    <Strike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Foukaná / styling bez střihu</span>
                    <Strike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                  </li>
                </ul>
              </div>

              {/* sekce 2 */}
              <div style={{ paddingBlock: "1rem" }}>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🎨 Barvení &amp; melír</div>
                <div className="hr" />
                <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Barvení / tónování</span>
                    <Strike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Melír klasický</span>
                    <Strike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Mikromelír + tónování</span>
                    <Strike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </li>
                </ul>
              </div>

              {/* sekce 3 */}
              <div style={{ paddingBlock: "1rem" }}>
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🌸 Péče &amp; regenerace</div>
                <div className="hr" />
                <ul className="stack-6" style={{ fontSize: ".95rem" }}>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>B.Pur hloubkové čištění</span>
                    <Strike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </li>
                  <li style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Ki-Power Veg rekonstrukce</span>
                    <Strike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </li>
                </ul>
              </div>

              <div className="muted" style={{ fontSize: ".85rem", marginTop: ".75rem" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT – vlevo info, vpravo mapa v kartě s glow */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          {/* Info */}
          <div>
            <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kontakt</h2>

            <div className="stack-6" style={{ marginTop: ".75rem" }}>
              <div style={{ display: "flex", gap: ".75rem" }}>
                <div style={{ lineHeight: 1.4 }}>
                  <a href={MAP_URL} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
                    {ADDRESS_LINE1}
                  </a>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                </div>
              </div>

              <div>
                <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                <div className="muted" style={{ fontSize: ".95rem" }}>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
              </div>

              <div>
                <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>
                  {PHONE_DISPLAY}
                </a>
                <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
              </div>

              <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: ".25rem" }}>
                <a href={IG_URL} target="_blank" rel="noreferrer" className="btn btn-outline">Instagram</a>
                <a href={FB_URL} target="_blank" rel="noreferrer" className="btn btn-outline">Facebook</a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">📞 Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div>
            <div className="card glow" style={{ padding: ".5rem" }}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="340"
                loading="lazy"
                className="wm-content"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – užší karta s vodoznakem (logo-text menší a sytější) */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="card wm-host karta-thanks" style={{ width: "100%", maxWidth: "36rem", textAlign: "center" }}>
            {/* vodoznak (o chlup sytější a menší) */}
            <div className="watermark" style={{ opacity: 0.2 }}>
              <img src={LOGO_TEXT} alt="" className="small-watermark" />
            </div>

            <div className="wm-content">
              <div style={{ fontSize: "1.15rem", fontWeight: 700 }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".35rem", fontSize: ".95rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – bez loga, jen rychlé kontakty */}
      <footer className="section" style={{ paddingBlock: "2rem", background: "rgba(255,255,255,.6)", backdropFilter: "blur(6px)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "1rem", color: "var(--muted)" }}>
            <a href={IG_URL} target="_blank" rel="noreferrer">Instagram</a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noreferrer">Facebook</a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
          </div>
          <div style={{ marginTop: ".5rem", fontSize: ".8rem", color: "var(--muted)" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Přeškrtnuté → zvýrazněné (–20 %) */
function Strike({ oldLabel, newLabel }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "baseline", gap: ".5rem" }}>
      <span style={{ color: "#94a3b8", textDecoration: "line-through", fontSize: ".9rem" }}>
        {oldLabel}
      </span>
      <span style={{ color: "#dc2626", fontWeight: 700 }}>{newLabel}</span>
    </span>
  );
}
