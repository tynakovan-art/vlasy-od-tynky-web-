import React, { useEffect, useState } from "react";

/* Obrázek s fallbackem mezi více zdroji */
function SmartImage({
  srcs, alt = "", className, width, height,
  loading = "lazy", fetchpriority, decoding = "async"
}) {
  const [i, setI] = useState(0);
  const src = srcs[i] ?? null;
  if (!src) return null;
  return (
    <img
      src={src} alt={alt} className={className}
      width={width} height={height}
      loading={loading} fetchpriority={fetchpriority} decoding={decoding}
      onError={() => setI(v => v + 1)}
    />
  );
}

/* Ikonky (SVG inline, nulový vliv na síť) */
const IconPhone = (p)=>(<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}><path strokeWidth="2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.16a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z"/></svg>);
const IconInstagram = (p)=>(<svg className="icon" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>);
const IconFacebook = (p)=>(<svg className="icon" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.5 9.95v-7.04H8.1V12h2.4V9.8c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.1.18 2.1.18V8.7h-1.18c-1.16 0-1.53.72-1.53 1.46V12h2.61l-.42 2.91h-2.19v7.04A10 10 0 0 0 22 12z"/></svg>);
const IconMapPin = (p)=>(<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}><path strokeWidth="2" d="M12 21s-7-5.33-7-12a7 7 0 0 1 14 0c0 6.67-7 12-7 12z"/><circle cx="12" cy="9" r="2" fill="currentColor"/></svg>);
const IconClock = (p)=>(<svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...p}><circle cx="12" cy="12" r="9" strokeWidth="2"/><path strokeWidth="2" d="M12 7v5l3 3"/></svg>);

export default function App() {
  /* LOGA v /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // navbar + vodoznak ceník
  const LOGO_TEXT    = ["/logo-text.png"];    // karta vpravo v hero + vodoznak poděkování

  /* Adresa + kontakty */
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

  useEffect(() => { document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav"; }, []);

  return (
    <div>
      {/* NAVBAR — menší logo + pravé menu */}
      <header className="section" style={{ paddingBlock: "0.75rem" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
            <SmartImage
              srcs={LOGO_SILUETY}
              width={120} height={30} /* menší než dřív */
              fetchpriority="high" loading="eager" decoding="async"
            />
            <strong>Vlasy od Týnky</strong>
          </a>

          {/* Pravé menu – kotvy (lehoučké, výkonu nevadí) */}
          <nav className="top-nav" aria-label="Hlavní">
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO — karta zpět vpravo, vpravo není prázdno */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div className="stack-6">
            <div className="badge">🚪 Otevírám <strong style={{ marginLeft: 6 }}>1.&nbsp;10.&nbsp;2025</strong></div>

            {/* přesně 3 řádky */}
            <h1 className="hero-title">
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p className="muted">
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="cta-row">
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – UŽŠÍ karta s logem + glow jen okolo */}
          <div style={{ justifySelf: "end" }}>
            <div className="card glow" style={{ width: "min(92%, 360px)", textAlign: "center" }}>
              <SmartImage srcs={LOGO_TEXT} width={340} height={95} className="center" />
              <div style={{ fontWeight: 600, fontSize: "1.1rem", marginTop: ".25rem" }}>Vlasy od Týnky</div>
              <div className="muted" style={{ fontSize: ".92rem" }}>kadeřnictví · Mladá Boleslav</div>
              <div className="muted" style={{ fontSize: ".92rem", marginTop: ".35rem" }}>Objednávky přes sociální sítě nebo telefon.</div>

              <div className="stack-6" style={{ marginTop: ".9rem" }}>
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
      </section>

      {/* BANNER NAD SLUŽBAMI – bílá karta, glow okolo */}
      <section aria-label="Akce" className="section">
        <div className="container">
          <div className="card glow" style={{ display: "grid", gap: "1rem", alignItems: "center" }}>
            <div>
              <div className="badge">🎉 Otevírací akce říjen</div>
              <div style={{ marginTop: ".5rem", fontWeight: 600 }}>
                Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20% slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted">Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
              <div className="muted" style={{ marginTop: ".25rem" }}>📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
            </div>
            <div className="cta-row">
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
          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            <div className="card"><div className="title">Střihy</div><p className="muted">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p></div>
            <div className="card"><div className="title">Barvení a tónování</div><p className="muted">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p></div>
            <div className="card"><div className="title">Melír / mikromelír</div><p className="muted">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p></div>
            <div className="card"><div className="title">Vlasová péče</div><p className="muted">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p></div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="hero-title" style={{ fontSize: "2rem" }}>O mně</h2>
          <p className="muted" style={{ marginTop: ".75rem" }}>
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
          {/* Banner nad ceníkem – text na střed */}
          <div className="card glow" style={{ padding: "1rem", marginBottom: ".6rem", textAlign: "center" }}>
            <div className="badge">🎉 Otevírací sleva –20 % celý říjen!</div>
            <div className="muted" style={{ marginTop: ".25rem", fontSize: ".9rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <h2 className="hero-title" style={{ fontSize: "2rem", marginTop: 0 }}>
            Ceník <span style={{ background: "var(--grad)", color: "#fff", padding: ".2rem .6rem", borderRadius: "999px", fontSize: "1rem", marginLeft: ".5rem" }}>–20 % říjen</span>
          </h2>

          {/* Karta s vodoznakem (jemnější) */}
          <div className="card wm-host" style={{ marginTop: "1rem" }}>
            <div className="watermark" style={{ opacity: .10 }}>
              <SmartImage srcs={LOGO_SILUETY} width={520} height={200} className="small-watermark" />
            </div>

            <div className="wm-content">
              {/* Střih & styling */}
              <div className="stack-6">
                <div className="title">✂️ Střih & styling</div>
                <ul className="stack-6">
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Dámský střih</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 650 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 520 Kč</span></span>
                    </div>
                    <div className="muted desc">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Pánský střih</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 350 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 280 Kč</span></span>
                    </div>
                    <div className="muted desc">Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Dětský střih (do 12 let)</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 250 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 200 Kč</span></span>
                    </div>
                    <div className="muted desc">Rychlý střih přizpůsobený dětem.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Foukaná / styling bez střihu</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 400 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 320 Kč</span></span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="hr" />

              {/* Barvení & melír */}
              <div className="stack-6">
                <div className="title">🎨 Barvení & melír</div>
                <ul className="stack-6">
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Barvení / tónování</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 1 350 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 080 Kč</span></span>
                    </div>
                    <div className="muted desc">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Melír klasický</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 1 850 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 480 Kč</span></span>
                    </div>
                    <div className="muted desc">Melírování pramenů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Mikromelír + tónování</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>od 2 050 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>od 1 640 Kč</span></span>
                    </div>
                    <div className="muted desc">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                  </li>
                </ul>
              </div>

              <div className="hr" />

              {/* Péče & regenerace */}
              <div className="stack-6">
                <div className="title">🌸 Péče & regenerace</div>
                <ul className="stack-6">
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>B.Pur hloubkové čištění</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>+230 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>+184 Kč</span></span>
                    </div>
                    <div className="muted desc">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                  </li>
                  <li>
                    <div className="price-row" style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "baseline", gap: "1rem" }}>
                      <span>Ki-Power Veg rekonstrukce</span>
                      <span><span style={{ textDecoration: "line-through", color: "#94a3b8", marginRight: ".5rem" }}>+260 Kč</span><span style={{ color: "#dc2626", fontWeight: 700 }}>+208 Kč</span></span>
                    </div>
                    <div className="muted desc">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                  </li>
                </ul>
              </div>

              <div className="hr" />

              <div className="muted" style={{ fontSize: ".85rem" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA (vedle sebe na desktopu, mapa větší; na mobilu pod sebou, mapa na střed) */}
      <section id="kontakt" className="section">
        <div className="container grid-2">
          <div className="stack-6">
            <h2 className="hero-title" style={{ fontSize: "2rem" }}>Kontakt</h2>

            <div className="stack-6">
              <div style={{ display: "flex", gap: ".75rem", alignItems: "flex-start" }}>
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

              <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                <IconClock />
                <div>
                  <div style={{ fontWeight: 600 }}>Otevírací doba</div>
                  <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
                <IconPhone />
                <div>
                  <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>{PHONE_DISPLAY}</a>
                  <div className="muted" style={{ fontSize: ".85rem" }}>Volejte nebo napište zprávu.</div>
                </div>
              </div>

              <div className="cta-row">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><IconInstagram /> Instagram</a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><IconFacebook /> Facebook</a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone /> Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>

          {/* mapa vpravo (větší), se glow okolo, na mobilu na střed */}
          <div className="map-wrap">
            <div className="map-card card glow" style={{ maxWidth: 520 }}>
              <iframe
                src={MAP_EMBED}
                width="100%" height="380"
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ — menší, tišší vodoznak */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="card wm-host karta-thanks" style={{ width: "min(92%, 560px)", textAlign: "center" }}>
            <div className="watermark" style={{ opacity: .12 }}>
              <SmartImage srcs={LOGO_TEXT} width={500} height={150} className="small-watermark" />
            </div>
            <div className="wm-content">
              <div style={{ fontWeight: 600, fontSize: "1.125rem" }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".25rem" }}>Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section" style={{ paddingBlock: "2rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="cta-row" style={{ justifyContent: "center" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><IconInstagram /> Instagram</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><IconFacebook /> Facebook</a>
            <a href={`tel:${PHONE_RAW}`} className="btn btn-ghost"><IconPhone /> {PHONE_DISPLAY}</a>
          </div>
          <div className="muted" style={{ marginTop: ".75rem", fontSize: ".8rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
