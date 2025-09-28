import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* ========== 1) Chytrý <Img> (lepší LCP/CLS) ========== */
function Img({
  src,
  alt,
  className = "",
  priority = false,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // true jen pro největší obrázek v hero
  width?: number;
  height?: number;
}) {
  const aspect = !width || !height ? "aspect-square" : "";
  return (
    <img
      src={src}
      alt={alt}
      className={`${aspect} ${className}`}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      width={width}
      height={height}
    />
  );
}

/* ========== 2) Mapa načtená až po kliknutí (lepší INP) ========== */
function LazyMap({ src }: { src: string }) {
  const [show, setShow] = React.useState(false);
  return (
    <div className="w-full">
      {!show ? (
        <button
          onClick={() => setShow(true)}
          className="w-full rounded-2xl bg-white/80 backdrop-blur py-4 px-4 text-sm hover:bg-white shadow"
          aria-label="Načíst mapu"
        >
          📍 Zobrazit mapu (načte se po kliknutí)
        </button>
      ) : (
        <iframe
          title="Mapa – Vlasy od Týnky"
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[320px] md:h-[380px] rounded-2xl bg-white shadow"
        />
      )}
    </div>
  );
}

/* Pomocná komponenta pro akční ceny v ceníku */
const PriceStrike = ({ oldLabel, newLabel }: { oldLabel: string; newLabel: string }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
    <span className="font-semibold text-pink-600">{newLabel}</span>
  </div>
);

/* Konstanty (kontakt, odkazy) */
const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const ADDRESS_DISTRICT = "Mladá Boleslav III";
const ADDRESS_COUNTRY = "Česko";
const MAP_EMBED =
  "https://www.google.com/maps?q=Zalužanská%201272%2C%20293%2001%20Mladá%20Boleslav&output=embed";

const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_DISPLAY = "725 882 820";

/* ========= HLAVNÍ STRÁNKA ========= */
export default function Site() {
  React.useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div
              className="h-9 w-9 rounded-xl flex items-center justify-center text-white"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              aria-hidden
            >
              <Scissors className="h-5 w-5" />
            </div>
            <span className="font-semibold">Vlasy od Týnky</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-mne" className="hover:opacity-70">O mně</a>
            <a href="#sluzby" className="hover:opacity-70">Služby</a>
            <a href="#cenik" className="hover:opacity-70">Ceník</a>
            <a href="#kontakt" className="hover:opacity-70">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="hero" className="relative">
        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Levo: nadpis + CTA */}
          <div>
            {/* Badge „Otevírám“ – dveře */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            >
              🚪 Otevírám 1.&nbsp;10.&nbsp;2025
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              <span className="block">Kadeřnictví</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Vlasy od Týnky
              </span>
              <span className="block">Mladá Boleslav</span>
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-2xl px-5 py-3 text-white shadow-md text-sm font-medium"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl px-5 py-3 text-sm font-medium bg-white/80 backdrop-blur hover:bg-white shadow"
              >
                Prohlédnout služby
              </a>
            </div>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* Vpravo: karta s logem (LCP, priority) */}
          <div className="md:justify-self-end relative">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            />
            <div className="relative rounded-[2rem] bg-white/80 backdrop-blur p-8 shadow-xl text-center overflow-hidden">
              <Img
                src="/logo-siluety.png"
                alt="Vlasy od Týnky – logo"
                className="mx-auto mb-2 h-32 w-auto object-contain"
                priority={true}
              />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-4 text-sm text-slate-600">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50 shadow">
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50 shadow">
                  <Facebook className="h-4 w-4" /> Napsat na Facebooku
                </a>
                <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white" style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER nad SLUŽBAMI – gradientový podklad + CTA (pro všechny zákazníky) */}
      <section aria-label="Otevírací akce – říjen" className="relative">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="rounded-2xl p-5 md:p-6 shadow"
            style={{
              background:
                "linear-gradient(135deg, rgba(106,162,255,0.15), rgba(181,123,255,0.15), rgba(255,122,214,0.15))",
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                >
                  🎉 Otevírací akce – říjen
                </div>
                <div className="mt-3 text-sm md:text-base font-medium">
                  Po celý říjen nabízím <span className="font-bold text-red-600">20&nbsp;% slevu</span> na všechny služby pro všechny zákazníky.
                </div>
                <div className="text-xs md:text-sm text-slate-600">
                  Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
                </div>
                <div className="mt-2 text-xs md:text-sm text-slate-600">
                  📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white shadow"
                  style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                >
                  <Phone className="h-4 w-4 mr-1" /> Zavolat {PHONE_DISPLAY}
                </a>
                <a
                  href="#cenik"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50 shadow"
                >
                  Mrknout na ceník
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/80 p-6 shadow">
              <div className="text-lg font-medium">Střihy</div>
              <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-6 shadow">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny. Tónování pro doladění odstínu a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-6 shadow">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
            </div>
            <div className="rounded-2xl bg-white/80 p-6 shadow">
              <div className="text-lg font-medium">Vlasová péče</div>
              <p className="mt-2 text-sm text-slate-600">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník odcházel
            spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a vždy kladu
            důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="relative">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Banner nad ceníkem */}
          <div className="w-full text-white text-center py-4 rounded-xl shadow-md my-6"
               style={{ background: "linear-gradient(90deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
            <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
            <p className="text-xs md:text-sm opacity-90">
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro všechny zákazníky po celý říjen 2025.
            </p>
          </div>

          {/* Nadpis + červený štítek */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Ceník</h2>
            <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-pink-100 border border-pink-200 text-red-600 font-medium">
              –20&nbsp;% říjen • všichni
            </span>
          </div>
          <p className="text-xs text-neutral-500 mb-4">
            Akce –20 % platí do 31. 10. 2025. Přeškrtnuté částky jsou původní ceny, zvýrazněné částky jsou akční ceny po slevě.
          </p>

          {/* Karta ceníku s vodoznakem */}
          <div className="relative mt-6 overflow-hidden rounded-2xl bg-white shadow">
            {/* Vodoznak */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
              style={{
                WebkitMaskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <Img
                src="/logo-siluety.png"
                alt=""
                className="max-w-[80%] md:max-w-[50%] h-auto scale-110 blur-[1.5px] select-none pointer-events-none"
              />
            </div>

            {/* Obsah ceníku */}
            <div className="relative" style={{ zIndex: 1 }}>
              {/* Střih & styling */}
              <div className="p-6">
                <div className="font-medium text-lg">✂️ Střih &amp; styling</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Dámský střih</span>
                      <PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Konzultace, mytí vlasů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Pánský střih</span>
                      <PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Střih nůžkami i strojkem, suché i mokré vlasy.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Dětský střih (do 12 let)</span>
                      <PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Rychlý střih přizpůsobený dětem.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Foukaná / styling bez střihu</span>
                      <PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                    </div>
                  </li>
                </ul>
              </div>

              {/* Barvení & melír */}
              <div className="p-6">
                <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Barvení / tónování</span>
                      <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Kompletní barvení nebo tónování, včetně střihu, foukané a stylingu.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Melír klasický</span>
                      <PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Melírování pramenů, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Mikromelír + tónování</span>
                      <PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Jemné prosvětlení s doladěním odstínu, střih, foukaná a styling.</div>
                  </li>
                </ul>
              </div>

              {/* Péče & regenerace */}
              <div className="p-6">
                <div className="font-medium text-lg">🌸 Péče &amp; regenerace</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>B.Pur hloubkové čištění</span>
                      <PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Detox vlasů a pokožky, ideální jako doplněk ke střihu.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Ki-Power Veg rekonstrukce</span>
                      <PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.</div>
                  </li>
                </ul>
              </div>

              <div className="p-4 text-xs text-slate-500">
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT – vlevo informace, vpravo „klikni pro mapu“ */}
      <section id="kontakt" className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Levý sloupec */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>
            <div className="mt-4 flex flex-col gap-3 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">{ADDRESS_LINE1}</div>
                  <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>{ADDRESS_COUNTRY}</div>
                  <div className="mt-1 text-xs text-pink-600 font-medium">🚪 Otevírám od 1.&nbsp;10.&nbsp;2025</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Otevírací doba</div>
                  <div className="text-sm">Po–St–Pá 9:00–16:00 • jiné časy po domluvě</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="text-xs text-slate-500">Volejte nebo napište zprávu.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50 shadow">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50 shadow">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white" style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Pravý sloupec – odložená mapa */}
          <div className="md:justify-self-end w-full">
            <LazyMap src={MAP_EMBED} />
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – užší karta s jemným vodoznakem */}
      <section aria-label="Poděkování" className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="relative max-w-xl mx-auto">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            />
            <div className="relative rounded-[2rem] bg-white/80 backdrop-blur py-24 px-10 shadow-xl text-center overflow-hidden">
              {/* Vodoznak (menší a sytější než dřív) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
                  maskImage:
                    "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
                }}
              >
                <Img
                  src="/logo-text.png"
                  alt=""
                  className="max-w-[65%] md:max-w-[55%] h-auto blur-[1px] select-none"
                />
              </div>

              <div className="relative z-10">
                <div className="text-lg font-semibold">Děkuji za návštěvu 💜</div>
                <div className="mt-2 text-sm text-slate-600">
                  Těším se na vás v salonu na {ADDRESS_LINE1}.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – bez loga, s odkazy + telefonem */}
      <footer className="relative bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-10 text-slate-600">
          <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-4 text-sm">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-70">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <span className="opacity-40">•</span>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-70">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <span className="opacity-40">•</span>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 hover:opacity-70">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} Vlasy od Týnky</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
