import React, { useEffect, useState } from "react";

/* Obrázek s fallbackem – bez TS přísnosti a bez externích ikon */
function SmartImage({
  srcs,
  alt,
  className,
  fallback,
}: {
  srcs: string[];
  alt?: string;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const safeFallback =
    fallback ?? (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background:
            "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: 28,
        }}
      >
        ✂️
      </div>
    );

  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt ?? ""}
        className={className}
        onError={() => setI((v) => v + 1)}
        loading="lazy"
      />
    );
  }
  return <>{safeFallback}</>;
}

export default function Site() {
  /* LOGA v /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // Mladá Boleslav – logo
  const LOGO_TEXT = ["/logo-text.png"]; // Textové logo „Vlasy od Týnky“

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

  const grad = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  const PriceStrike = ({
    oldLabel,
    newLabel,
  }: {
    oldLabel: string;
    newLabel: string;
  }) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
      <span style={{ color: "#64748b", textDecoration: "line-through", fontSize: 13 }}>
        {oldLabel}
      </span>
      <span style={{ fontWeight: 600, color: "#db2777" }}>{newLabel}</span>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fff", color: "#0f172a" }}>
      {/* NAVBAR */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(255,255,255,.8)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <a href="#hero" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SmartImage srcs={LOGO_SILUETY} className="h-9 w-auto object-contain" />
            <span style={{ fontWeight: 600 }}>Vlasy od Týnky</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-mne">O mně</a>
            <a href="#sluzby">Služby</a>
            <a href="#cenik">Ceník</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero">
        <div
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "48px 24px 64px",
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1fr",
          }}
        >
          {/* Levý sloupec */}
          <div>
            {/* Badge – bublina */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                borderRadius: 16,
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 600,
                color: "white",
                background: grad,
                marginBottom: 12,
              }}
            >
              🚪 Otevírám <strong style={{ fontWeight: 700, marginLeft: 4 }}>1. 10. 2025</strong>
            </div>

            <h1
              style={{
                fontSize: 40,
                fontWeight: 600,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Kadeřnictví
              <span
                style={{
                  display: "block",
                  background: grad,
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Vlasy od Týnky
              </span>
              <span style={{ display: "block" }}>Mladá Boleslav</span>
            </h1>

            <p style={{ marginTop: 20, color: "#475569", fontSize: 18, maxWidth: 640 }}>
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a
              dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={`tel:${PHONE_RAW}`}
                style={{
                  borderRadius: 16,
                  padding: "12px 20px",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  background: grad,
                  textDecoration: "none",
                }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#sluzby"
                style={{
                  borderRadius: 16,
                  padding: "12px 20px",
                  fontSize: 14,
                  fontWeight: 600,
                  background: "rgba(255,255,255,.7)",
                  backdropFilter: "blur(6px)",
                  textDecoration: "none",
                  color: "#0f172a",
                }}
              >
                Prohlédnout služby
              </a>
            </div>

            <div style={{ marginTop: 12, color: "#94a3b8", fontSize: 12, display: "flex", gap: 8 }}>
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* Pravý sloupec – akční karta, tlačítka pod sebou */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: 32,
                filter: "blur(24px)",
                opacity: 0.2,
                background: grad,
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                background: "rgba(255,255,255,.7)",
                backdropFilter: "blur(6px)",
                padding: 32,
                textAlign: "center",
                boxShadow: "0 20px 40px rgba(2,8,23,.08)",
                overflow: "hidden",
              }}
            >
              <SmartImage
                srcs={LOGO_TEXT}
                className="mx-auto mb-4 h-28 w-auto object-contain"
              />
              <div style={{ fontSize: 22, fontWeight: 700 }}>Vlasy od Týnky</div>
              <div style={{ marginTop: 4, fontSize: 13, color: "#64748b" }}>
                kadeřnictví · Mladá Boleslav
              </div>
              <div style={{ marginTop: 12, fontSize: 14, color: "#475569" }}>
                Objednávky přes sociální sítě nebo telefon.
              </div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    gap: 8,
                    borderRadius: 12,
                    padding: "10px 16px",
                    fontSize: 14,
                    background: "#fff",
                    textDecoration: "none",
                    color: "#0f172a",
                  }}
                >
                  📷 Napsat na Instagramu
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    gap: 8,
                    borderRadius: 12,
                    padding: "10px 16px",
                    fontSize: 14,
                    background: "#fff",
                    textDecoration: "none",
                    color: "#0f172a",
                  }}
                >
                  👍 Napsat na Facebooku
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    gap: 8,
                    borderRadius: 12,
                    padding: "10px 16px",
                    fontSize: 14,
                    color: "#fff",
                    background: grad,
                    textDecoration: "none",
                  }}
                >
                  ☎️ Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER NAD SLUŽBAMI */}
      <section aria-label="Akce">
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: 32,
                filter: "blur(24px)",
                opacity: 0.2,
                background: grad,
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                background: "rgba(255,255,255,.7)",
                backdropFilter: "blur(6px)",
                padding: 24,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 20px 40px rgba(2,8,23,.08)",
              }}
            >
              <div style={{ color: "#0f172a" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    borderRadius: 16,
                    padding: "8px 16px",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                    background: grad,
                  }}
                >
                  🎉 Otevírací akce říjen
                </div>
                <div style={{ marginTop: 8, fontSize: 15, fontWeight: 600 }}>
                  Po celý říjen nabízím <span style={{ color: "#dc2626" }}>20% slevu</span> na
                  všechny služby pro všechny zákazníky.
                </div>
                <div style={{ fontSize: 13, color: "#475569" }}>
                  Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
                </div>
                <div style={{ marginTop: 6, fontSize: 13, color: "#475569" }}>
                  📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                <a
                  href={`tel:${PHONE_RAW}`}
                  style={{
                    borderRadius: 12,
                    padding: "10px 16px",
                    fontSize: 14,
                    color: "#fff",
                    background: grad,
                    textDecoration: "none",
                  }}
                >
                  ☎️ Zavolat {PHONE_DISPLAY}
                </a>
                <a
                  href="#cenik"
                  style={{
                    borderRadius: 12,
                    padding: "10px 16px",
                    fontSize: 14,
                    background: "#fff",
                    textDecoration: "none",
                    color: "#0f172a",
                  }}
                >
                  Mrknout na ceník
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
          Kadeřnické služby v Mladé Boleslavi
        </h2>
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "1fr",
          }}
        >
          {[
            {
              t: "Střihy",
              d: "Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.",
            },
            {
              t: "Barvení a tónování",
              d: "Jemné i výrazné změny. Tónování doladí odstín a zneutralizuje nežádoucí tóny.",
            },
            {
              t: "Melír / mikromelír",
              d: "Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.",
            },
            {
              t: "Vlasová péče",
              d: "Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.",
            },
          ].map((x) => (
            <div
              key={x.t}
              style={{
                borderRadius: 16,
                background: "rgba(255,255,255,.7)",
                padding: 24,
                boxShadow: "0 10px 24px rgba(2,8,23,.06)",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: 600 }}>{x.t}</div>
              <p style={{ marginTop: 8, fontSize: 14, color: "#475569" }}>{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O MNĚ – větší text + řádky */}
      <section id="o-mne" style={{ maxWidth: 1152, margin: "0 auto", padding: "48px 24px 64px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>O mně</h2>
        <p style={{ marginTop: 16, color: "#334155", fontSize: 18, lineHeight: 1.9 }}>
          Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý
          zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i
          dětské kadeřnické služby a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
        </p>
        <p style={{ marginTop: 12, color: "#475569", fontSize: 16, lineHeight: 1.9 }}>
          Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou
          zaměřenou na šetrné složení a skvělé výsledky.
        </p>
      </section>

      {/* CENÍK */}
      <section id="cenik" style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <div
          style={{
            width: "100%",
            color: "#fff",
            textAlign: "center",
            padding: "24px 16px",
            borderRadius: 12,
            background: grad,
            boxShadow: "0 10px 24px rgba(2,8,23,.1)",
            marginBottom: 24,
          }}
        >
          <p style={{ fontSize: 18, fontWeight: 700 }}>🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
          <p style={{ fontSize: 13, opacity: 0.95 }}>
            Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> celý říjen 2025.
          </p>
        </div>

        <h2 style={{ fontSize: 28, fontWeight: 800, display: "flex", alignItems: "center", gap: 12 }}>
          Ceník
          <span
            style={{
              padding: "6px 12px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 700,
              background: "rgba(255,0,0,.08)",
              color: "#b10029",
              boxShadow: "inset 0 0 0 2px rgba(255,0,80,.15)",
            }}
          >
            –20 % říjen
          </span>
        </h2>

        <div
          style={{
            position: "relative",
            marginTop: 16,
            overflow: "hidden",
            borderRadius: 20,
            background: "#fff",
            boxShadow: "0 14px 32px rgba(2,8,23,.08)",
          }}
        >
          {/* vodoznak */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.15,
              WebkitMaskImage:
                "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            }}
          >
            <SmartImage
              srcs={LOGO_SILUETY}
              className="max-w-[80%] md:max-w-[50%] h-auto"
            />
          </div>

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Střih & styling */}
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>✂️ Střih & styling</div>
              <ul style={{ marginTop: 12, display: "grid", gap: 16, fontSize: 14, color: "#334155" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dámský střih</span>
                    <PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Konzultace, mytí vlasů, střih, foukaná a styling.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Pánský střih</span>
                    <PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Střih nůžkami i strojkem, suché i mokré vlasy.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Dětský střih (do 12 let)</span>
                    <PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Rychlý a šetrný střih přizpůsobený dětem.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Foukaná / styling bez střihu</span>
                    <PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Vyfoukání a úprava účesu podle přání.
                  </div>
                </li>
              </ul>
            </div>

            {/* Barvení & melír */}
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>🎨 Barvení & melír</div>
              <ul style={{ marginTop: 12, display: "grid", gap: 16, fontSize: 14, color: "#334155" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Kompletní barvení nebo tónování vlasů včetně střihu, foukané a stylingu.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Melír klasický</span>
                    <PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Melírování pramenů, střih, foukaná a styling.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Mikromelír + tónování</span>
                    <PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.
                  </div>
                </li>
              </ul>
            </div>

            {/* Péče & regenerace */}
            <div style={{ padding: 24 }}>
              <div style={{ fontSize: 18, fontWeight: 600 }}>🌸 Péče & regenerace</div>
              <ul style={{ marginTop: 12, display: "grid", gap: 16, fontSize: 14, color: "#334155" }}>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>B.Pur hloubkové čištění</span>
                    <PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Detox vlasů a pokožky, ideální jako doplněk ke střihu.
                  </div>
                </li>
                <li>
                  <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                    <span>Ki-Power Veg rekonstrukce</span>
                    <PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </div>
                  <div style={{ fontSize: 12, color: "#64748b" }}>
                    Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.
                  </div>
                </li>
              </ul>
            </div>

            <div style={{ padding: 16, fontSize: 12, color: "#64748b" }}>
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě
              materiálu. Vše vždy předem domluvíme na místě nebo ve zprávě.
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT – vše pod sebou */}
      <section id="kontakt" style={{ maxWidth: 1152, margin: "0 auto", padding: "64px 24px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>Kontakt</h2>

        <div style={{ marginTop: 16, display: "grid", gap: 12, color: "#334155" }}>
          <div style={{ display: "flex", gap: 12 }}>
            <div>📍</div>
            <div>
              <a href={MAP_URL} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                {ADDRESS_LINE1}
              </a>
              <div>
                {ADDRESS_CITY} – {ADDRESS_DISTRICT}
              </div>
              <div>Okres Mladá Boleslav</div>
              <div>{ADDRESS_COUNTRY}</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <div>⏰</div>
            <div>
              <div style={{ fontWeight: 600 }}>Otevírací doba</div>
              <div style={{ fontSize: 14 }}>Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            <div>☎️</div>
            <div>
              <a href={`tel:${PHONE_RAW}`} style={{ fontWeight: 600 }}>
                {PHONE_DISPLAY}
              </a>
              <div style={{ fontSize: 12, color: "#64748b" }}>Volejte nebo napište zprávu.</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              gap: 8,
              borderRadius: 12,
              padding: "10px 16px",
              fontSize: 14,
              background: "#fff",
              textDecoration: "none",
              color: "#0f172a",
            }}
          >
            📷 Instagram
          </a>
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              gap: 8,
              borderRadius: 12,
              padding: "10px 16px",
              fontSize: 14,
              background: "#fff",
              textDecoration: "none",
              color: "#0f172a",
            }}
          >
            👍 Facebook
          </a>
          <a
            href={`tel:${PHONE_RAW}`}
            style={{
              display: "inline-flex",
              gap: 8,
              borderRadius: 12,
              padding: "10px 16px",
              fontSize: 14,
              color: "#fff",
              background: grad,
              textDecoration: "none",
            }}
          >
            ☎️ Zavolat {PHONE_DISPLAY}
          </a>
        </div>

        {/* Mapa pod kontakty */}
        <div style={{ marginTop: 24 }}>
          <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
            <div
              style={{
                position: "absolute",
                inset: -24,
                borderRadius: 32,
                filter: "blur(24px)",
                opacity: 0.2,
                background: grad,
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                background: "rgba(255,255,255,.7)",
                backdropFilter: "blur(6px)",
                padding: 8,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(2,8,23,.08)",
              }}
            >
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="360"
                loading="lazy"
                style={{ border: 0, borderRadius: 24 }}
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – větší karta */}
      <section>
        <div style={{ position: "relative", maxWidth: 720, margin: "0 auto", padding: "56px 24px" }}>
          <div
            style={{
              position: "relative",
              borderRadius: 32,
              background: "rgba(255,255,255,.7)",
              backdropFilter: "blur(6px)",
              padding: "64px 48px",
              textAlign: "center",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(2,8,23,.08)",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: 0.18,
                WebkitMaskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <SmartImage srcs={LOGO_TEXT} />
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Děkuji za návštěvu 💜</div>
              <div style={{ marginTop: 8, fontSize: 14, color: "#475569" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "rgba(255,255,255,.6)", backdropFilter: "blur(6px)", padding: "24px 0" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, fontSize: 14, color: "#475569" }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              📷 Instagram
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              👍 Facebook
            </a>
            <span style={{ opacity: 0.4 }}>•</span>
            <a href={`tel:${PHONE_RAW}`} style={{ textDecoration: "none", color: "inherit" }}>
              ☎️ {PHONE_DISPLAY}
            </a>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#94a3b8" }}>
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}
