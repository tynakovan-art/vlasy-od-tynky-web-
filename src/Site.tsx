// src/index.tsx
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Obrázek s postupným fallbackem */
function SmartImage({
  srcs,
  alt,
  className,
  fallback,
}: {
  srcs: string[];
  alt?: string;
  className?: string;
  fallback: JSX.Element;
}) {
  const [i, setI] = useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt ?? ""}
        className={className}
        onError={() => setI((v) => v + 1)}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return fallback;
}

function Site() {
  /** Cesty k assetům v /public */
  const LOGO_SILUETY = ["/logo-siluety.png"];
  const LOGO_TEXT = ["/logo-text.png"];

  /** Konstanta gradientu (všude stejný vzhled) */
  const GRAD = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

  /** Adresa + odkazy */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";

  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&z=16&output=embed`;

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  /** Přeškrtnutá cena + zvýrazněná akční */
  const PriceStrike = ({ oldLabel, newLabel }: { oldLabel: string; newLabel: string }) => (
    <div className="flex items-baseline gap-2">
      <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
      <span className="font-semibold text-pink-600">{newLabel}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAV */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200/50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <SmartImage
              srcs={LOGO_SILUETY}
              className="h-9 w-auto object-contain"
              fallback={
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center text-white"
                  style={{ background: GRAD }}
                >
                  <Scissors className="h-5 w-5" />
                </div>
              }
            />
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
      <section id="hero" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Levo */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: GRAD }}
            >
              🚪 Otevírám <strong className="font-semibold">1.&nbsp;10.&nbsp;2025</strong>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Kadeřnictví
              <span
                className="block"
                style={{ background: GRAD, WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Vlasy od Týnky
              </span>
              <span className="block">Mladá Boleslav</span>
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-2xl px-5 py-3 text-white text-sm font-medium shadow-md"
                style={{ background: GRAD }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl px-5 py-3 text-sm font-medium bg-white/70 backdrop-blur hover:bg-white"
              >
                Prohlédnout služby
              </a>
            </div>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* Pravo – karta s LOGO TEXT (původní velikost) */}
          <div className="relative md:justify-self-end">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: GRAD }}
            />
            <div className="relative rounded-[2rem] border border-slate-200/50 bg-white/70 backdrop-blur p-8 shadow-xl text-center overflow-hidden">
              <SmartImage
                srcs={LOGO_TEXT}
                className="mx-auto mb-3 h-28 w-auto object-contain"
                fallback={
                  <div
                    className="h-16 w-16 mx-auto mb-3 rounded-2xl flex items-center justify-center text-white"
                    style={{ background: GRAD }}
                  >
                    <Scissors className="h-8 w-8" />
                  </div>
                }
              />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-4 text-sm text-slate-600">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/50 bg-white hover:bg-slate-50"
                >
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/50 bg-white hover:bg-slate-50"
                >
                  <Facebook className="h-4 w-4" /> Napsat na Facebooku
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                  style={{ background: GRAD }}
                >
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Otevírací akce – „mini-hero“ karta nad službami */}
      <section aria-label="Akce" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: GRAD }} />
            <div className="relative rounded-[2rem] border border-slate-200/50 bg-white/70 backdrop-blur p-5 md:p-6 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-slate-800">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                  style={{ background: GRAD }}
                >
                  🎉 Otevírací akce říjen
                </div>
                <div className="mt-3 text-sm md:text-base font-medium">
                  Po celý říjen nabízím <span className="font-bold text-red-600">20% slevu</span> na všechny služby pro všechny zákazníky.
                </div>
                <div className="text-xs md:text-sm text-slate-600">
                  Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
                </div>
                <div className="mt-2 text-xs md:text-sm text-slate-600">
                  📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
                </div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                  style={{ background: GRAD }}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Zavolat {PHONE_DISPLAY}
                </a>
                <a
                  href="#cenik"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border border-slate-200/50 bg-white hover:bg-slate-50"
                >
                  Mrknout na ceník
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Kadeřnické služby v Mladé Boleslavi</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Střihy",
              text:
                "Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.",
            },
            {
              title: "Barvení a tónování",
              text:
                "Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.",
            },
            {
              title: "Melír / mikromelír",
              text:
                "Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.",
            },
            {
              title: "Vlasová péče",
              text:
                "Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200/50 bg-white/70 p-6">
              <div className="text-lg font-medium">{b.title}</div>
              <p className="mt-2 text-sm text-slate-600">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
          Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
          odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
          a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
        </p>
        <p className="mt-2 text-sm text-slate-500">
          Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
        </p>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="mx-auto max-w-6xl px-6 py-16">
        {/* Full-width gradient banner */}
        <div className="w-full text-white text-center py-4 rounded-xl shadow-md my-6" style={{ background: GRAD }}>
          <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
          <p className="text-xs md:text-sm opacity-95">
            Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
          </p>
        </div>

        {/* Nadpis + červený štítek */}
        <h2 className="text-2xl font-bold flex items-center gap-3">
          Ceník
          <span className="px-3 py-1 rounded-full text-sm font-semibold border border-pink-200 bg-pink-50 text-red-600">
            –20 % říjen • všichni
          </span>
        </h2>
        <p className="text-xs text-neutral-500 mt-1">
          Akce –20 % platí do 31. 10. 2025. Přeškrtnuté částky jsou původní ceny, zvýrazněné jsou po slevě.
        </p>

        {/* Karta ceníku s vodoznakem */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/50 bg-white">
          {/* vodoznak */}
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
            <SmartImage
              srcs={LOGO_SILUETY}
              className="max-w-[80%] md:max-w-[50%] h-auto scale-110 blur-[1.4px] select-none pointer-events-none"
              fallback={<div className="text-6xl font-bold text-slate-200">Vlasy od Týnky</div>}
            />
          </div>

          {/* obsah */}
          <div className="relative z-10">
            {/* Střih & styling */}
            <div className="p-6 border-b border-slate-200/50">
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
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Dětský střih (do 12 let)</span>
                    <PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </div>
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
            <div className="p-6 border-b border-slate-200/50">
              <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
              <ul className="mt-3 text-sm text-slate-700 space-y-4">
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Kompletní barvení nebo tónování vlasů, včetně střihu, foukané a stylingu.</div>
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

            {/* Péče */}
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
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>
          <div className="mt-4 flex flex-col gap-3 text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5" />
              <div>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                  {ADDRESS_LINE1}
                </a>
                <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                <div>Okres Mladá Boleslav</div>
                <div>{ADDRESS_COUNTRY}</div>
                <div className="mt-1 text-xs text-pink-600 font-medium">🚪 Otevírám 1.&nbsp;10.&nbsp;2025</div>
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

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/50 bg-white hover:bg-slate-50">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/50 bg-white hover:bg-slate-50">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white" style={{ background: GRAD }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Mapa vpravo */}
        <div className="w-full md:justify-self-end">
          <div className="relative max-w-md ml-auto w-full">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: GRAD }} />
            <div className="relative rounded-[2rem] border border-slate-200/50 bg-white/70 backdrop-blur p-2 shadow-xl overflow-hidden">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="340"
                loading="lazy"
                className="rounded-[1.5rem]"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – užší karta + menší vodoznak textového loga */}
      <section className="relative z-10">
        <div className="relative mx-auto max-w-md px-6 py-12">
          <div className="relative rounded-[2rem] border border-slate-200/50 bg-white/70 backdrop-blur py-24 px-10 shadow-xl text-center overflow-hidden">
            {/* vodoznak (menší a sytější) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25"
              style={{
                WebkitMaskImage:
                  "radial-gradient(68% 68% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(68% 68% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <SmartImage
                srcs={LOGO_TEXT}
                className="max-w-[55%] h-auto blur-[1px] select-none pointer-events-none"
                fallback={<div className="text-4xl font-bold text-slate-200">Vlasy od Týnky</div>}
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
      </section>

      {/* FOOTER – bez loga, jen odkazy */}
      <footer className="bg-white/60 backdrop-blur py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-75">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <span className="opacity-40">•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-75">
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <span className="opacity-40">•</span>
            <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 hover:opacity-75">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-3 text-xs text-slate-500">
            © {new Date().getFullYear()} Vlasy od Týnky
          </div>
        </div>
      </footer>
    </div>
  );
}

/* Mount */
const el = document.getElementById("root")!;
createRoot(el).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
