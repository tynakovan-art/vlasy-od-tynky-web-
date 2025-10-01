import React, { useEffect } from "react";

/* SVG ikonky */
const IconPhone = (p)=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.31 1.78.57 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.14a2 2 0 0 1 2.11-.45c.85.26 1.73.45 2.63.57A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconIG = (p)=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);
const IconFB = (p)=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 4.99 3.65 9.13 8.43 9.93v-7.02H7.99v-2.9h2.32V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.03.18 2.03.18v2.23h-1.15c-1.14 0-1.5.71-1.5 1.44v1.73h2.56l-.41 2.9h-2.15v7.02c4.78-.8 8.43-4.94 8.43-9.93z"/>
  </svg>
);
const IconPin = (p)=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <path d="M12 21s-7-5.33-7-11a7 7 0 1 1 14 0c0 5.67-7 11-7 11z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="10" r="2.5" fill="currentColor"/>
  </svg>
);
const IconClock = (p)=>(
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function App(){
  const LOGO_NAV  = "/logo-siluety.png";  // v navbaru vlevo
  const LOGO_TEXT = "/logo-text.png";     // textové logo (hero karta, vodoznaky)

  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY  = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISP = "725 882 820";

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
  const MAP_URL   = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

  useEffect(()=>{ document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav"; },[]);

  const Price = ({oldV, newV}) => (
    <div className="price"><span className="old">{oldV}</span><span className="new">{newV}</span></div>
  );

  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container wrap flex items-center justify-between">
          <a href="#hero" className="flex items-center" style={{gap:12}}>
            <img src={LOGO_NAV} alt="" style={{height:36}} />
            <span className="font-semibold">Vlasy od Týnky</span>
          </a>
          <nav className="items-center" style={{gap:24, display:"none"}} />
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid grid-2">
          {/* levý sloupec */}
          <div>
            <div className="badge">🚪 Otevírám <strong>&nbsp;1.&nbsp;10.&nbsp;2025</strong></div>

            <h1 className="h1 hero-title mt-4">
              <span className="line">Kadeřnictví</span>
              <span className="line grad">Vlasy od Týnky</span>
              <span className="line">Mladá Boleslav</span>
            </h1>

            <p className="mt-4 text-lg muted" style={{maxWidth:560}}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte
              vlasům péči, kterou si zaslouží.
            </p>

            <div className="mt-6 flex" style={{gap:12}}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone/>Zavolat {PHONE_DISP}</a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* pravý sloupec – KARTA s logem, užší + glow jen okolo (solid = čistě bílé pozadí) */}
          <div className="hero-card glow card solid">
            <img src={LOGO_TEXT} alt="" style={{height:110, margin:"0 auto 10px"}} />
            <div className="text-lg font-semibold" style={{textAlign:"center"}}>Vlasy od Týnky</div>
            <div className="text-sm muted" style={{textAlign:"center"}}>kadeřnictví · Mladá Boleslav</div>
            <div className="text-sm muted mt-3" style={{textAlign:"center"}}>Objednávky přes sítě nebo telefon.</div>

            <div className="mt-5" style={{display:"grid", gap:8}}>
              <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-outline"><IconIG/>Napsat na Instagramu</a>
              <a href={FB_URL} target="_blank" rel="noopener" className="btn btn-outline"><IconFB/>Napsat na Facebooku</a>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone/>Zavolat {PHONE_DISP}</a>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI – karta s glow okolo, uvnitř bílá (solid) */}
      <section className="section">
        <div className="container">
          <div className="glow card solid">
            <div className="badge">🎉 Otevírací akce říjen</div>
            <div className="mt-3 text-lg">
              Po celý říjen nabízím <strong className="new">20% slevu</strong> na všechny služby pro všechny zákazníky.
            </div>
            <div className="text-sm muted">Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
            <div className="text-sm muted mt-2">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
            <div className="mt-4 flex" style={{gap:12}}>
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone/>Zavolat {PHONE_DISP}</a>
              <a href="#cenik" className="btn btn-outline">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="grid grid-2 mt-6">
            <div className="card">
              <div className="text-lg font-semibold">Střihy</div>
              <p className="mt-2 text-sm muted">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Barvení a tónování</div>
              <p className="mt-2 text-sm muted">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Melír / mikromelír</div>
              <p className="mt-2 text-sm muted">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
            </div>
            <div className="card">
              <div className="text-lg font-semibold">Vlasová péče</div>
              <p className="mt-2 text-sm muted">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="h2">O mně</h2>
          <p className="mt-4" style={{color:"var(--muted)", lineHeight:1.75}}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="mt-2 text-sm muted">
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK – jemnější na mobilu */}
      <section id="cenik" className="section-lg">
        <div className="container">
          {/* banner */}
          <div className="card" style={{background:"var(--grad)", color:"#fff", textAlign:"center", padding:"1rem"}}>
            <div className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div className="text-sm" style={{opacity:.95, marginTop:4}}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <div className="mt-3 flex items-center" style={{gap:12}}>
            <h2 className="h2">Ceník</h2>
            <span className="chip">–20 % říjen</span>
          </div>

          <div className="card wm-host pricelist mt-6">
            {/* vodoznak – trochu silnější, ale decentní */}
            <div className="watermark watermark--strong" aria-hidden="true">
              <img src={LOGO_NAV} alt="" />
            </div>

            {/* Střih & styling */}
            <div className="group-title">✂️ Střih &amp; styling</div>
            <div className="hr"></div>
            <ul style={{listStyle:"none", padding:0, margin:0, display:"grid", gap:"1rem"}}>
              <li>
                <div className="row">
                  <span className="font-semibold">Dámský střih</span>
                  <Price oldV="od 650 Kč" newV="od 520 Kč" />
                </div>
                <div className="desc">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Pánský střih</span>
                  <Price oldV="od 350 Kč" newV="od 280 Kč" />
                </div>
                <div className="desc">Střih nůžkami i strojkem, suché i mokré vlasy.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Dětský střih (do 12 let)</span>
                  <Price oldV="od 250 Kč" newV="od 200 Kč" />
                </div>
                <div className="desc">Rychlý střih přizpůsobený dětem.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Foukaná / styling bez střihu</span>
                  <Price oldV="od 400 Kč" newV="od 320 Kč" />
                </div>
              </li>
            </ul>

            {/* Barvení & melír */}
            <div className="group-title mt-6">🎨 Barvení &amp; melír</div>
            <div className="hr"></div>
            <ul style={{listStyle:"none", padding:0, margin:0, display:"grid", gap:"1rem"}}>
              <li>
                <div className="row">
                  <span className="font-semibold">Barvení / tónování</span>
                  <Price oldV="od 1 350 Kč" newV="od 1 080 Kč" />
                </div>
                <div className="desc">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Melír klasický</span>
                  <Price oldV="od 1 850 Kč" newV="od 1 480 Kč" />
                </div>
                <div className="desc">Melírování pramenů, střih, foukaná a styling.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Mikromelír + tónování</span>
                  <Price oldV="od 2 050 Kč" newV="od 1 640 Kč" />
                </div>
                <div className="desc">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
              </li>
            </ul>

            {/* Péče */}
            <div className="group-title mt-6">🌸 Péče &amp; regenerace</div>
            <div className="hr"></div>
            <ul style={{listStyle:"none", padding:0, margin:0, display:"grid", gap:"1rem"}}>
              <li>
                <div className="row">
                  <span className="font-semibold">B.Pur hloubkové čištění</span>
                  <Price oldV="+230 Kč" newV="+184 Kč" />
                </div>
                <div className="desc">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
              </li>
              <li>
                <div className="row">
                  <span className="font-semibold">Ki-Power Veg rekonstrukce</span>
                  <Price oldV="+260 Kč" newV="+208 Kč" />
                </div>
                <div className="desc">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
              </li>
            </ul>

            <div className="mt-4 text-sm muted">
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme na místě nebo ve zprávě.
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA (doplněny ikonky) */}
      <section id="kontakt" className="section">
        <div className="container grid grid-2">
          <div>
            <h2 className="h2">Kontakt</h2>
            <div className="mt-4" style={{display:"grid", gap:".75rem"}}>
              <div className="flex items-center" style={{gap:8}}><IconPin/> <strong>Adresa</strong></div>
              <div>{ADDRESS_LINE1}, {ADDRESS_CITY}<br/>Okres {ADDRESS_DISTRICT}</div>

              <div className="flex items-center mt-3" style={{gap:8}}><IconClock/> <strong>Otevírací doba</strong></div>
              <div>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>

              <div className="flex items-center mt-3" style={{gap:8}}><IconPhone/> <strong>Telefon</strong></div>
              <div><a href={`tel:${PHONE_RAW}`}>{PHONE_DISP}</a></div>

              <div className="mt-3 flex" style={{gap:12}}>
                <a href={IG_URL} target="_blank" rel="noopener" className="btn btn-outline"><IconIG/>Instagram</a>
                <a href={FB_URL} target="_blank" rel="noopener" className="btn btn-outline"><IconFB/>Facebook</a>
                <a href={`tel:${PHONE_RAW}`} className="btn btn-grad"><IconPhone/>Zavolat</a>
              </div>
            </div>
          </div>

          <div className="glow card solid card-tight">
            <iframe title="Mapa – Vlasy od Týnky" className="map-iframe" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="mt-3" style={{textAlign:"center"}}><a href={MAP_URL} target="_blank" rel="noopener" className="btn btn-outline">Otevřít v Mapách</a></div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – výraznější vodoznak, užší karta */}
      <section className="section">
        <div className="container" style={{maxWidth:560}}>
          <div className="glow card solid wm-host" style={{padding:"6rem 2.5rem", textAlign:"center"}}>
            <div className="watermark watermark--strong" aria-hidden="true">
              <img src={LOGO_TEXT} alt=""/>
            </div>
            <div className="h2" style={{position:"relative", zIndex:1}}>Děkuji za návštěvu 💜</div>
            <div className="mt-2 text-sm muted" style={{position:"relative", zIndex:1}}>Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="links">
            <a href={IG_URL} target="_blank" rel="noopener"><IconIG/> Instagram</a>
            <span className="sep">•</span>
            <a href={FB_URL} target="_blank" rel="noopener"><IconFB/> Facebook</a>
            <span className="sep">•</span>
            <a href={`tel:${PHONE_RAW}`}><IconPhone/> {PHONE_DISP}</a>
          </div>
          <div className="mt-3 text-sm muted">© {new Date().getFullYear()} Vlasy od Týnky</div>
        </div>
      </footer>
    </>
  );
}