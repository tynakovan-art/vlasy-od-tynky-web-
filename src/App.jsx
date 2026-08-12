// App.jsx
import React, { useEffect, useState } from "react";
import { Clock, MapPin, Phone } from "lucide-react";
import ukazkaPrace01 from "./assets/ukazky-prace/ukazka-prace-01.jpg";
import ukazkaPrace02 from "./assets/ukazky-prace/ukazka-prace-02.jpg";
import ukazkaPrace03 from "./assets/ukazky-prace/ukazka-prace-03.jpg";
import ukazkaPrace04 from "./assets/ukazky-prace/ukazka-prace-04.jpg";
import ukazkaPrace05 from "./assets/ukazky-prace/ukazka-prace-05.jpg";
import ukazkaPrace07 from "./assets/ukazky-prace/ukazka-prace-07.jpg";

/** ===== KONSTANTY ===== */
const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_DISPLAY = "725 882 820";

const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const ADDRESS_DISTRICT = "Mladá Boleslav III";
const ADDRESS_COUNTRY = "Česko";

const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const gradText = {
  background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const galleryItems = [
  {
    image: ukazkaPrace01,
    alt: "Barevná proměna vlasů v salonu Vlasy od Týnky",
  },
  {
    image: ukazkaPrace02,
    alt: "Ukázka vlasové proměny – melír a tónování",
  },
  {
    image: ukazkaPrace03,
    alt: "Barevná proměna vlasů v salonu Vlasy od Týnky",
  },
  {
    image: ukazkaPrace04,
    alt: "Ukázka práce Vlasy od Týnky – balayage v přirozeném odstínu",
  },
  {
    image: ukazkaPrace05,
    alt: "Prosvětlené délky a tónování vlasů",
  },
  {
    image: ukazkaPrace07,
    alt: "Ukázka vlasové proměny – studenější tónování",
  },
];

/** ===== SVG IKONY ===== */
const IconPhone = (props) => <Phone aria-hidden="true" {...props} />;
const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm10 2H7a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3zm-5 3.8A5.2 5.2 0 1112 18.2 5.2 5.2 0 0112 7.8zm0 8.5A3.3 3.3 0 1015.3 13 3.3 3.3 0 0012 16.3zM18.4 6.9a1.1 1.1 0 111.1-1.1 1.1 1.1 0 01-1.1 1.1z"
    />
  </svg>
);
const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.6c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3H15c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 3H13.5v7A10 10 0 0022 12z"
    />
  </svg>
);
const IconClock = (props) => <Clock aria-hidden="true" {...props} />;
const IconMapPin = (props) => <MapPin aria-hidden="true" {...props} />;

/** ===== ŘÁDEK CEN ===== */
const PriceRow = ({ title, desc, price }) => (
  <div className="price-row">
    <div style={{ flex: 1, minWidth: 0 }}>
      <div className="price-title">{title}</div>
      {desc && <div className="muted" style={{ fontSize: ".95rem" }}>{desc}</div>}
    </div>
    <div className="price">{price}</div>
  </div>
);

/** ===== APP ===== */
export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = () => setLightboxIndex(null);
  const showPreviousImage = () => {
    setLightboxIndex((current) => (current === null ? null : (current + galleryItems.length - 1) % galleryItems.length));
  };
  const showNextImage = () => {
    setLightboxIndex((current) => (current === null ? null : (current + 1) % galleryItems.length));
  };

  useEffect(() => {
    const sectionIds = ["o-mne", "sluzby", "ukazky-prace", "cenik", "kontakt"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.12, 0.28, 0.45] }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  return (
    <div>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-inner container">
          <a href="#hero" className="brand">
            <img src="/logo-siluety.png" alt="Vlasy od Týnky" />
            <span className="name">Vlasy od Týnky</span>
          </a>
          <nav className="nav">
            <a className={activeSection === "o-mne" ? "active" : ""} href="#o-mne">O mně</a>
            <a className={activeSection === "sluzby" ? "active" : ""} href="#sluzby">Služby</a>
            <a className={activeSection === "ukazky-prace" ? "active" : ""} href="#ukazky-prace">Ukázky</a>
            <a className={activeSection === "cenik" ? "active" : ""} href="#cenik">Ceník</a>
            <a className={activeSection === "kontakt" ? "active" : ""} href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="hero section">
        <div className="container hero-grid">
          {/* Levá část */}
          <div>
            <div className="hero-title">
              <h1>
                <span>Kadeřnictví</span>
                <span style={gradText}>Vlasy od Týnky</span>
                <span>v Mladé Boleslavi</span>
              </h1>
            </div>

            <p className="hero-lead">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a
              dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="cta-row">
              <a href={`tel:${PHONE_RAW}`} className="btn btn-grad" aria-label={`Zavolat ${PHONE_DISPLAY}`}>
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="btn btn-ghost">Prohlédnout služby</a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem + odkazy (glow + bílý podklad) */}
<aside className="card glow hero-card" style={{ textAlign: "center" }}>
  <img src="/logo-text.png" alt="Logo Vlasy od Týnky" className="hero-logo" />
  <div className="muted" style={{ marginTop: ".25rem" }}>
    kadeřnictví · Mladá Boleslav
  </div>
  <div className="muted" style={{ fontSize: ".95rem", marginTop: ".25rem" }}>
    Objednávky přes sociální sítě nebo telefon.
  </div>

  <div className="soc-list" style={{ justifyContent: "center" }}>
    <a className="soc" href={IG_URL} target="_blank" rel="noopener noreferrer">
      <IconInstagram /> <span className="label">Napsat na Instagramu</span>
    </a>
    <a className="soc" href={FB_URL} target="_blank" rel="noopener noreferrer">
      <IconFacebook /> <span className="label">Napsat na Facebooku</span>
    </a>
    <a className="btn btn-grad" href={`tel:${PHONE_RAW}`} aria-label={`Zavolat ${PHONE_DISPLAY}`}>
      <IconPhone /> Zavolat {PHONE_DISPLAY}
    </a>
  </div>
</aside>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section section-tint section-tint-blue">
        <div className="container">
          <h2 className="h2">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="services-grid">
            <div className="service">
              <div className="title">Střihy</div>
              <div className="desc">
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
              </div>
            </div>
            <div className="service">
              <div className="title">Barvení a tónování</div>
              <div className="desc">
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.
              </div>
            </div>
            <div className="service">
              <div className="title">Melír / mikromelír</div>
              <div className="desc">
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
              </div>
            </div>
            <div className="service">
              <div className="title">Vlasová péče</div>
              <div className="desc">
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="section">
        <div className="container">
          <h2 className="h2">O mně</h2>
          <p className="muted" style={{ marginTop: ".5rem" }}>
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="muted" style={{ marginTop: ".35rem" }}>
            Nejraději tvořím přirozené odstíny, jemné melíry a účesy, které se dobře nosí i doma.
          </p>
          <p className="muted" style={{ marginTop: ".35rem" }}>
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* UKÁZKY PRÁCE */}
      <section id="ukazky-prace" className="section section-tint section-tint-pink">
        <div className="container">
          <h2 className="h2">Ukázky práce</h2>
          <p className="muted gallery-intro">
            Výběr ukázek barev, melírů, balayage a vlasových proměn ze salonu.
          </p>

          <div className="gallery-grid" aria-label="Fotogalerie ukázek prací">
            {galleryItems.map((item, index) => (
              <figure className="gallery-card" key={item.image}>
                <button
                  className="gallery-button"
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Zvětšit fotografii: ${item.alt}`}
                >
                  <img src={item.image} alt={item.alt} loading={index < 2 ? "eager" : "lazy"} />
                </button>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CENÍK – 3 sekce, uvnitř pouze řádky */}
      <section id="cenik" className="section">
        <div className="container">
          <h2 className="h2">Ceník</h2>

          <div className="price-wrap wm-host" style={{ marginTop: "1rem" }}>
            {/* jemný vodoznak */}
            <div className="watermark">
              <img src="/logo-text.png" alt="" aria-hidden="true" />
            </div>

            {/* Sekce 1 */}
            <div className="price-block" style={{ borderTop: 0 }}>
              <div className="price-title">✂️ Střih &amp; styling</div>
            </div>
            <div style={{ padding: "0 1rem 1rem" }}>
              <PriceRow title="Dámský střih" desc="Konzultace, mytí vlasů, střih, foukaná a styling." price="od 650 Kč" />
              <PriceRow title="Pánský střih" desc="Střih nůžkami i strojkem, suché i mokré vlasy." price="od 350 Kč" />
              <PriceRow title="Dětský střih (do 12 let)" desc="Rychlý střih přizpůsobený dětem." price="od 250 Kč" />
              <PriceRow title="Foukaná / styling bez střihu" desc="" price="od 400 Kč" />
            </div>

            {/* Sekce 2 */}
            <div className="price-block">
              <div className="price-title">🎨 Barvení &amp; melír</div>
            </div>
            <div style={{ padding: "0 1rem 1rem" }}>
              <PriceRow
                title="Barvení / tónování"
                desc="Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu."
                price="od 1 350 Kč"
              />
              <PriceRow title="Melír klasický" desc="Melírování pramenů, střih, foukaná a styling." price="od 1 850 Kč" />
              <PriceRow
                title="Mikromelír + tónování"
                desc="Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling."
                price="od 2 050 Kč"
              />
            </div>

            {/* Sekce 3 */}
            <div className="price-block">
              <div className="price-title">🌸 Péče &amp; regenerace</div>
            </div>
            <div style={{ padding: "0 1rem 1rem" }}>
              <PriceRow title="B.Pur hloubkové čištění" desc="Detox vlasů a pokožky, ideální jako doplněk ke střihu." price="+230 Kč" />
              <PriceRow
                title="Ki-Power Veg rekonstrukce"
                desc="Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů."
                price="+260 Kč"
              />
            </div>

            <div className="note">
              <span className="note-mark" aria-hidden="true">i</span>
              Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              Vše vždy předem domluvíme na místě nebo ve zprávě.
            </div>
          </div>
        </div>
      </section>

      {/* JAK SE OBJEDNAT */}
      <section id="objednani" className="section booking-section">
        <div className="container">
          <div className="booking-card glow">
            <div>
              <h2 className="h2">Jak se objednat</h2>
              <p className="muted booking-copy">
                Objednat se můžete telefonicky, přes Instagram nebo Facebook. U barvení, melíru nebo větší změny mi klidně pošlete aktuální fotku vlasů a představu výsledku – domluvíme spolu vhodný postup i orientační cenu.
              </p>
            </div>

            <div className="booking-actions">
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`} aria-label={`Zavolat ${PHONE_DISPLAY}`}>
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a className="soc" href={IG_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram /> Napsat na Instagramu
              </a>
              <a className="soc" href={FB_URL} target="_blank" rel="noopener noreferrer">
                <IconFacebook /> Napsat na Facebooku
              </a>
              <a className="soc" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                <IconMapPin /> Najít na Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="section">
        <div className="container contact-grid grid-2">
          <div>
            <h2 className="h2">Kontakt</h2>

            <div className="row small-gap">
              <IconMapPin />
              <div>
                <a className="link" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                  {ADDRESS_LINE1}
                </a>
                <div className="muted">
                  {ADDRESS_CITY} – {ADDRESS_DISTRICT}
                </div>
                <div className="muted">Okres Mladá Boleslav</div>
                <div className="muted">{ADDRESS_COUNTRY}</div>
              </div>
            </div>

            <div className="row small-gap">
              <IconClock />
              <div>
                <div className="bold">Otevírací doba</div>
                <div className="muted">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
              </div>
            </div>

            <div className="row small-gap">
              <IconPhone />
              <div>
                <a className="bold" href={`tel:${PHONE_RAW}`}>{PHONE_DISPLAY}</a>
                <div className="muted" style={{ fontSize: ".9rem" }}>Volejte nebo napište zprávu.</div>
              </div>
            </div>

            {/* výrazné call tlačítko i tady – vždy viditelné */}
            <div className="k-row" style={{ marginTop: ".5rem" }}>
              <a className="btn btn-grad" href={`tel:${PHONE_RAW}`} aria-label={`Zavolat ${PHONE_DISPLAY}`}>
                <IconPhone /> Zavolat {PHONE_DISPLAY}
              </a>
              <a className="soc" href={IG_URL} target="_blank" rel="noopener noreferrer">
                <IconInstagram /> Instagram
              </a>
              <a className="soc" href={FB_URL} target="_blank" rel="noopener noreferrer">
                <IconFacebook /> Facebook
              </a>
              <a className="soc" href={MAP_URL} target="_blank" rel="noopener noreferrer">
                <IconMapPin /> Google Maps
              </a>
            </div>
          </div>

          {/* Mapa (glow + bílý podklad) */}
          <div className="map-wrap glow">
            <div className="map-card">
              <iframe
                className="map-frame"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – menší vodoznak loga */}
      <section className="section">
        <div className="container thanks">
          <div className="card center wm-host">
            <div className="watermark">
              {/* zmenšeno, aby text krásně vyniknul */}
              <img src="/logo-text.png" alt="" aria-hidden="true" style={{ maxWidth: "40%", filter: "blur(1px)", opacity: 0.14 }} />
            </div>
            <div className="thanks-center">
              <div className="thanks-title">Děkuji za návštěvu 💜</div>
              <div className="muted" style={{ marginTop: ".35rem" }}>
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <a href={IG_URL} target="_blank" rel="noopener noreferrer">
            <IconInstagram /> Instagram
          </a>
          <span className="sep">•</span>
          <a href={FB_URL} target="_blank" rel="noopener noreferrer">
            <IconFacebook /> Facebook
          </a>
          <span className="sep">•</span>
          <a href={`tel:${PHONE_RAW}`}>
            <IconPhone /> {PHONE_DISPLAY}
          </a>
          <span className="sep">•</span>
          <span className="muted">© {new Date().getFullYear()} Vlasy od Týnky</span>
        </div>
      </footer>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Zvětšená fotografie z galerie" onClick={closeLightbox}>
          <button className="lightbox-close" type="button" onClick={closeLightbox} aria-label="Zavřít fotografii">
            ×
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            aria-label="Předchozí fotografie"
          >
            ‹
          </button>
          <img
            className="lightbox-image"
            src={galleryItems[lightboxIndex].image}
            alt={galleryItems[lightboxIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            aria-label="Další fotografie"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
