// /src/App.jsx
import React from "react";

/* ---------- Inline SVG ikony ---------- */
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.51 5.51 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
  </svg>
);

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88v-7h-2.3V12h2.3V9.8c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42V12h2.5l-.4 2.88h-2.1v7A10 10 0 0 0 22 12z"/>
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-2.2 2.2z"/>
  </svg>
);

const IconMapPin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z"/>
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.75 5h-1.5v6l5.25 3.15.75-1.23-4.5-2.67Z"/>
  </svg>
);

/* ---------- Data (kontakty, mapy, loga) ---------- */
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

/* ---------- App ---------- */
export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container" style={{ paddingBlock: "0.9rem" }}>
          <div className="stack-4" style={{ gridTemplateColumns: "auto 1fr auto", alignItems: "center" }}>
            <a href="#hero" style={{ display: "inline-flex", alignItems: "center", gap: ".75rem" }}>
              <img src="/logo-siluety.png" alt="" style={{ height: 36, width: "auto" }} />
              <strong>Vlasy od Týnky</strong>
            </a>
            <div />
            <nav className="stack-4" style={{ gridAutoFlow: "column", justifyContent: "end", gap: "1.25rem" }}>
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
          <div className="hero-tight">
            <div className="badge">🚪 Otevírám <strong style={{ marginLeft: 6 }}>1.&nbsp;10.&nbsp;2025</strong></div>

            <h1 className="hero-title" style={{ marginTop: "0.75rem" }}>
              <span className="block">Kadeřnictví</span>
              <span className="block grad">Vlasy od Týnky</span>
              <span className="block">Mladá Boleslav</span>
            </h1>

            <p className="muted" style={{ marginTop: "1rem", maxWidth: 640 }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči,
              kterou si zaslouží.
            </p>

            <div className="stack-4" style={{ gridAutoFlow: "column", width: "fit-content", marginTop: "1rem", gap: "0.75rem" }}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad">
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem (užší na desktopu, centrovaná na mobilu) */}
          <div className="center-mobile">
            <div className="card glow" style={{ maxWidth: 420, marginLeft: "auto" }}>
              <img src="/logo-text.png" alt="" style={{ height: 96, width: "auto", margin: "0 auto 8px auto" }} />
              <div className="stack-4" style={{ textAlign: "center" }}>
                <div className="stack-4">
                  <div style={{ fontSize: "1.35rem", fontWeight: 700 }}>Vlasy od Týnky</div>
                  <div className="muted" style={{ fontSize: ".95rem" }}>kadeřnictví · Mladá Boleslav</div>
                </div>
                <div className="muted" style={{ fontSize: ".95rem" }}>
                  Objednávky přes sociální sítě nebo telefon.
                </div>
                <div className="stack-4">
                  <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent:"center" }}>
                    <IconInstagram /> Napsat na Instagramu
                  </a>
                  <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ justifyContent:"center" }}>
                    <IconFacebook /> Napsat na Facebooku
                  </a>
                  <a href={`tel:${PHONE_RAW}`} className="btn btn-grad" style={{ justifyContent:"center" }}>
                    <IconPhone /> Zavolat {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta, glow okolo */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="card glow" style={{ padding: "1.5rem" }}>
            <div className="stack-4" style={{ alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
              <div className="stack-4">
                <div className="badge" style={{ width: "fit-content" }}>🎉 Otevírací akce říjen</div>
                <div style={{ fontWeight: 600 }}>
                  Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20% slevu</span> na všechny služby pro všechny zákazníky.
                </div>
                <div className="muted" style={{ fontSize: ".95rem" }}>
                  Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
                </div>
                <div className="muted" style={{ fontSize: ".95rem" }}>
                  📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
                </div>
              </div>
              <div className="stack-4" style={{ gridAutoFlow: "column", gap: ".5rem" }}>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
                <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid-2" style={{ marginTop: "1.25rem" }}>
            {[
              ["Střihy", "Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby."],
              ["Barvení a tónování", "Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů."],
              ["Melír / mikromelír", "Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek."],
              ["Vlasová péče", "Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů."],
            ].map(([title, desc]) => (
              <div key={title} className="card">
                <div style={{ fontSize: "1.1rem", fontWeight: 600 }}>{title}</div>
                <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>O mně</h2>
          <p className="muted" style={{ marginTop: "1rem", lineHeight: 1.7 }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".5rem", fontSize: ".95rem" }}>
            Pracuji s <strong style={{ color: "inherit" }}>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section-lg">
        <div className="container">
          {/* Banner s gradientem – menší mezera pod bannerem */}
          <div className="banner" style={{ background: "var(--grad)", color: "#fff", textAlign: "center", padding: "0.85rem 1rem", borderRadius: "1rem", boxShadow: "var(--shadow)" }}>
            <div style={{ fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div style={{ opacity: .95, fontSize: ".9rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Ceník</h2>

          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            {/* vodoznak v ceníku – zvýrazněný */}
            <div className="watermark">
              <img src="/logo-text.png" alt="" />
            </div>

            <div className="wm-content">
              {/* Skupina: Střih & styling */}
              <div className="price-group">
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>✂️ Střih & styling</div>
                <div className="price-section" style={{ marginTop: ".75rem" }}>
                  <div>
                    <div className="c-item">
                      <div className="c-name">Dámský střih</div>
                      <div className="c-price">
                        <span className="c-old">od 650 Kč</span>
                        <span className="c-new">od 520 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Pánský střih</div>
                      <div className="c-price">
                        <span className="c-old">od 350 Kč</span>
                        <span className="c-new">od 280 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Dětský střih (do 12 let)</div>
                      <div className="c-price">
                        <span className="c-old">od 250 Kč</span>
                        <span className="c-new">od 200 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Rychlý střih přizpůsobený dětem.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Foukaná / styling bez střihu</div>
                      <div className="c-price">
                        <span className="c-old">od 400 Kč</span>
                        <span className="c-new">od 320 Kč</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skupina: Barvení & melír */}
              <div className="price-group">
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🎨 Barvení & melír</div>
                <div className="price-section" style={{ marginTop: ".75rem" }}>
                  <div>
                    <div className="c-item">
                      <div className="c-name">Barvení / tónování</div>
                      <div className="c-price">
                        <span className="c-old">od 1 350 Kč</span>
                        <span className="c-new">od 1 080 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Melír klasický</div>
                      <div className="c-price">
                        <span className="c-old">od 1 850 Kč</span>
                        <span className="c-new">od 1 480 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Melírování pramenů, střih, foukaná a styling.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Mikromelír + tónování</div>
                      <div className="c-price">
                        <span className="c-old">od 2 050 Kč</span>
                        <span className="c-new">od 1 640 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                  </div>
                </div>
              </div>

              {/* Skupina: Péče & regenerace */}
              <div className="price-group">
                <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>🌸 Péče & regenerace</div>
                <div className="price-section" style={{ marginTop: ".75rem" }}>
                  <div>
                    <div className="c-item">
                      <div className="c-name">B.Pur hloubkové čištění</div>
                      <div className="c-price">
                        <span className="c-old">+230 Kč</span>
                        <span className="c-new">+184 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                  </div>

                  <div>
                    <div className="c-item">
                      <div className="c-name">Ki-Power Veg rekonstrukce</div>
                      <div className="c-price">
                        <span className="c-old">+260 Kč</span>
                        <span className="c-new">+208 Kč</span>
                      </div>
                    </div>
                    <div className="c-desc">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                  </div>
                </div>
              </div>

              <div className="muted" style={{ fontSize: ".8rem", marginTop: ".5rem" }}>
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
          {/* Kontakty */}
          <div>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Kontakt</h2>
            <div className="stack-6" style={{ marginTop: "1rem" }}>
              <div style={{ display:"flex", gap:".75rem" }}>
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
              <div style={{ display:"flex", gap:".75rem" }}>
                <IconClock />
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>
              <div style={{ display:"flex", gap:".75rem" }}>
                <IconPhone />
                <div>
                  <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>{PHONE_DISPLAY}</a>
                  <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="stack-4" style={{ gridAutoFlow: "column", width:"fit-content", gap:".75rem" }}>
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

          {/* Mapa (glow okolo) */}
          <div className="center-mobile" style={{ width: "100%" }}>
            <div className="card glow map-card" style={{ maxWidth: 480, marginLeft: "auto" }}>
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

      {/* PODĚKOVÁNÍ – výraznější vodoznak, užší karta, vyšší na výšku */}
      <section className="section">
        <div className="container" style={{ display:"flex", justifyContent:"center" }}>
          <div className="card glow wm-host thanks-card" style={{ maxWidth: 520, textAlign:"center" }}>
            <div className="watermark small-watermark">
              <img src="/logo-text.png" alt="" />
            </div>
            <div className="wm-content">
              <div style={{ fontWeight: 700, fontSize: "1.15rem" }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".5rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section" style={{ paddingBlock: "2rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:"1rem", color: "var(--muted)" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:".5rem" }}>
              <IconInstagram /> Instagram
            </a>
            <span aria-hidden="true" style={{ opacity:.4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:".5rem" }}>
              <IconFacebook /> Facebook
            </a>
            <span aria-hidden="true" style={{ opacity:.4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`} style={{ display:"inline-flex", alignItems:"center", gap:".5rem" }}>
              <IconPhone /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="muted" style={{ marginTop: ".5rem", fontSize: ".8rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}