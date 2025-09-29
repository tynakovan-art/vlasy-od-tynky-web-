import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Image s fallbackem (bez TS typů) */
function SmartImage({ srcs = [], alt = "", className = "", fallback = null }) {
  const [i, setI] = useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt}
        className={className}
        onError={() => setI((v) => v + 1)}
        loading="lazy"
      />
    );
  }
  return (
    fallback ?? (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "var(--grad)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 28
        }}
      >
        ✂️
      </div>
    )
  );
}

/* Stará cena + nová cena */
function PriceStrike({ oldLabel, newLabel }) {
  return (
    <div style={{ display: "flex", gap: ".5rem", alignItems: "baseline" }}>
      <span style={{ color: "#94a3b8", textDecoration: "line-through", fontSize: ".9rem" }}>
        {oldLabel}
      </span>
      <span style={{ color: "#db2777", fontWeight: 700 }}>{newLabel}</span>
    </div>
  );
}

export default function App() {
  /* LOGA z /public */
  const LOGO_SILUETY = ["/logo-siluety.png"];
  const LOGO_TEXT = ["/logo-text.png"];

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

  /* ---------------------------- UI ---------------------------- */

  return (
    <div>
      {/* NAV */}
      <header style={{ position: "sticky", top: 0, zIndex: 20, background: "rgba(255,255,255,.85)", backdropFilter: "blur(8px)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ paddingBlock: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="#hero" style={{ display: "flex", gap: ".75rem", alignItems: "center" }}>
            <SmartImage srcs={LOGO_SILUETY} className="" fallback={<Scissors size={20} />} />
            <strong>Vlasy od Týnky</strong>
          </a>
          <nav className="hide-sm" style={{ display: "none" }} />
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="section">
        <div className="container grid-2">
          {/* Levý sloupec */}
          <div>
            <div className="badge">🚪 Otevírám <strong style={{ marginLeft: 6 }}>1.&nbsp;10.&nbsp;2025</strong></div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              className="hero-title"
              style={{ marginTop: "1rem" }}
            >
              Kadeřnictví
              <span className="grad" style={{ display: "block" }}>Vlasy od Týnky</span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </motion.h1>

            <p className="muted" style={{ marginTop: "1rem", fontSize: "1.05rem", maxWidth: "60ch" }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="stack-6" style={{ marginTop: "1rem" }}>
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}>📞 Zavolat {PHONE_DISPLAY}</a>
              <a className="btn btn-ghost" href="#sluzby">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem a bublinami pod sebou */}
          <div style={{ position: "relative" }}>
            <div className="card glow">
              <SmartImage srcs={LOGO_TEXT} className="" />
              <div style={{ textAlign: "center", marginTop: "1rem", fontWeight: 700, fontSize: "1.4rem" }}>Vlasy od Týnky</div>
              <div className="muted" style={{ textAlign: "center", marginTop: ".25rem", fontSize: ".9rem" }}>kadeřnictví · Mladá Boleslav</div>

              <div className="stack-6" style={{ marginTop: "1rem" }}>
                <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Napsat na Instagramu</a>
                <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noopener noreferrer"><Facebook size={16}/> Napsat na Facebooku</a>
                <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}><Phone size={16}/> Zavolat {PHONE_DISPLAY}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner nad službami – karta s glow */}
      <section className="section">
        <div className="container">
          <div className="card glow" style={{ display: "grid", gap: "1rem" }}>
            <div>
              <span className="badge">🎉 Otevírací akce říjen</span>
              <div style={{ marginTop: ".75rem", fontWeight: 600 }}>
                Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20 % slevu</span> na všechny služby pro všechny zákazníky.
              </div>
              <div className="muted" style={{ fontSize: ".95rem" }}>Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
              <div className="muted" style={{ fontSize: ".95rem", marginTop: ".25rem" }}>📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
            </div>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}><Phone size={16}/> Zavolat {PHONE_DISPLAY}</a>
              <a className="btn btn-outline" href="#cenik">Mrknout na ceník</a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section">
        <div className="container">
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700 }}>Kadeřnické služby v Mladé Boleslavi</h2>

          <div className="grid-2" style={{ marginTop: "1.5rem" }}>
            <div className="card"><div style={{ fontWeight: 600 }}>Střihy</div><p className="muted" style={{ marginTop: ".5rem" }}>Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem.</p></div>
            <div className="card"><div style={{ fontWeight: 600 }}>Barvení a tónování</div><p className="muted" style={{ marginTop: ".5rem" }}>Jemné i výrazné změny. Tónování doladí odstín a zneutralizuje nežádoucí tóny.</p></div>
            <div className="card"><div style={{ fontWeight: 600 }}>Melír / mikromelír</div><p className="muted" style={{ marginTop: ".5rem" }}>Prosvětlení a struktura účesu pomocí jemných pramínků.</p></div>
            <div className="card"><div style={{ fontWeight: 600 }}>Vlasová péče</div><p className="muted" style={{ marginTop: ".5rem" }}>Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p></div>
          </div>
        </div>
      </section>

      {/* O Mně (větší písmo a řádky) */}
      <section id="o-mne" className="section-lg">
        <div className="container">
          <h2 style={{ fontSize: "1.9rem", fontWeight: 700 }}>O mně</h2>
          <p style={{ marginTop: "1rem", lineHeight: 1.8, fontSize: "1.05rem", color: "var(--text)", maxWidth: "70ch" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník odcházel
            spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a vždy kladu
            důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".5rem", maxWidth: "70ch" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou se šetrným složením a krásnými výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="section-lg">
        <div className="container">
          {/* Banner nad ceníkem */}
          <div className="card" style={{ background: "var(--grad)", color: "#fff" }}>
            <div style={{ textAlign: "center", fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</div>
            <div style={{ textAlign: "center", opacity: .95, marginTop: ".25rem", fontSize: ".95rem" }}>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginTop: "1rem" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 800, margin: 0 }}>Ceník</h2>
            <span className="badge" style={{ background: "rgba(244,114,182,.2)", color: "#be185d" }}>–20 % říjen</span>
          </div>

          <div className="card" style={{ marginTop: "1rem", overflow: "hidden" }}>
            {/* vodoznak */}
            <div className="watermark">
              <SmartImage srcs={LOGO_SILUETY} />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Střih & styling */}
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>✂️ Střih &amp; styling</div>
                <div className="hr"></div>
                <ul style={{ display: "grid", gap: "1rem", color: "var(--muted)" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Dámský střih</span><PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Pánský střih</span><PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Střih, úprava kontur, základní styling.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Dětský střih (do 12 let)</span><PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Citlivý přístup a rychlá úprava účesu.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Foukaná / styling bez střihu</span><PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Vyfoukání, vlny/žehlení, finální úprava.</div>
                  </li>
                </ul>
              </div>

              {/* Barvení & melír */}
              <div style={{ marginTop: "1.25rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>🎨 Barvení &amp; melír</div>
                <div className="hr"></div>
                <ul style={{ display: "grid", gap: "1rem", color: "var(--muted)" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Barvení / tónování</span><PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Kompletní barvení nebo tónování, včetně střihu a foukané.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Melír klasický</span><PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Prosvětlení pramenů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Mikromelír + tónování</span><PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Jemné prosvětlení s doladěním odstínu, střih a styling.</div>
                  </li>
                </ul>
              </div>

              {/* Péče */}
              <div style={{ marginTop: "1.25rem" }}>
                <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>🌸 Péče &amp; regenerace</div>
                <div className="hr"></div>
                <ul style={{ display: "grid", gap: "1rem", color: "var(--muted)" }}>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>B.Pur hloubkové čištění</span><PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Detox vlasů a pokožky, ideální doplněk ke střihu.</div>
                  </li>
                  <li>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, color: "var(--text)" }}>
                      <span>Ki-Power Veg rekonstrukce</span><PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                    </div>
                    <div style={{ fontSize: ".85rem" }}>Intenzivní výživa po barvení/melíru, obnova struktury.</div>
                  </li>
                </ul>
              </div>

              <div className="muted" style={{ marginTop: "1rem", fontSize: ".85rem" }}>
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + mapa vpravo */}
      <section id="kontakt" className="section-lg">
        <div className="container grid-2">
          <div className="stack-6">
            <h2 style={{ fontSize: "1.9rem", fontWeight: 700 }}>Kontakt</h2>
            <div style={{ display: "flex", gap: ".75rem" }}>
              <MapPin size={20} style={{ marginTop: 2 }} />
              <div>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>
                  {ADDRESS_LINE1}
                </a>
                <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                <div>Okres Mladá Boleslav</div>
                <div>{ADDRESS_COUNTRY}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: ".75rem" }}>
              <Clock size={20} style={{ marginTop: 2 }} />
              <div>
                <div style={{ fontWeight: 700 }}>Otevírací doba</div>
                <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: ".75rem" }}>
              <Phone size={20} style={{ marginTop: 2 }} />
              <div>
                <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 700 }}>{PHONE_DISPLAY}</a>
                <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
              </div>
            </div>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-outline" href={IG_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Instagram</a>
              <a className="btn btn-outline" href={FB_URL} target="_blank" rel="noopener noreferrer"><Facebook size={16}/> Facebook</a>
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`}><Phone size={16}/> Zavolat {PHONE_DISPLAY}</a>
            </div>
          </div>

          <div>
            <div className="card glow" style={{ padding: ".5rem" }}>
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="360"
                loading="lazy"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – větší a s vodoznakem */}
      <section className="section">
        <div className="container" style={{ display: "grid", placeItems: "center" }}>
          <div className="card karta-thanks" style={{ width: "min(44rem, 100%)" }}>
            <div className="watermark">
              <SmartImage srcs={LOGO_TEXT} />
            </div>
            <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
              <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".25rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(255,255,255,.6)", backdropFilter: "blur(8px)", padding: "2rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{ display: "inline-flex", gap: "1rem", alignItems: "center", color: "var(--muted)" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Instagram</a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer"><Facebook size={16}/> Facebook</a>
            <span style={{ opacity: .4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`}><Phone size={16}/> {PHONE_DISPLAY}</a>
          </div>
          <div className="muted" style={{ fontSize: ".8rem", marginTop: ".5rem" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
