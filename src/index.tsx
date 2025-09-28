import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors, DoorOpen } from "lucide-react";

/* Obrázek s drobnými performance atributy */
function SmartImage({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt ?? ""}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
}

/* Původní helper pro akční ceny */
const PriceStrike = ({ oldLabel, newLabel }: { oldLabel: string; newLabel: string }) => (
  <div className="flex items-baseline gap-2">
    <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
    <span className="font-semibold text-red-600">{newLabel}</span>
  </div>
);

function Site() {
  /* Aktuální názvy souborů v /public */
  const LOGO_TEXT = "/logo-text.png";
  const LOGO_SILUETY = "/logo-siluety.png";

  /* Kontakty a adresa */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&hl=cs&output=embed`;

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <SmartImage src={LOGO_SILUETY} alt="Vlasy od Týnky — logo" className="h-9 w-auto object-contain" priority />
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
        <div className="relative mx-auto max-w-6xl px-6 pt-10 pb-14 md:pt-14 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            >
              <DoorOpen className="h-4 w-4" />
              <span>Otevírám 1.&nbsp;10.&nbsp;2025</span>
            </div>

            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="leading-tight">
              <span className="block text-3xl md:text-4xl font-semibold">Kadeřnictví</span>
              <span
                className="block text-4xl md:text-5xl font-semibold"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)", WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Vlasy od Týnky
              </span>
              <span className="block text-2xl md:text-3xl font-semibold mt-1">Mladá Boleslav</span>
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`tel:${PHONE_RAW}`} className="rounded-2xl px-5 py-3 text-white shadow-md text-sm font-medium"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="rounded-2xl px-5 py-3 text-sm font-medium bg-white/70 backdrop-blur hover:bg-white">
                Prohlédnout služby
              </a>
            </div>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* pravý sloupec – karta s logem a CTA */}
          <div className="md:justify-self-end relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }} />
            <div className="relative rounded-[2rem] bg-white/70 backdrop-blur p-8 shadow-xl text-center overflow-hidden">
              <SmartImage src={LOGO_TEXT} className="mx-auto mb-2 h-32 w-auto object-contain" alt="" priority />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-4 text-sm text-slate-600">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a href="https://www.instagram.com/vlasy_od_tynky_mb" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50">
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a href="https://www.facebook.com/vlasyodtynky/" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50">
                  <Facebook className="h-4 w-4" /> Napsat na Facebooku
                </a>
                <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                   style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner nad službami (gradientový rám + –20 % červeně) */}
      <section aria-label="Otevírací akce – banner" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative rounded-[1.2rem] p-[1px]" style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
            <div className="rounded-[1.15rem] bg-white/80 backdrop-blur px-5 py-4 md:px-6 md:py-5 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm md:text-lg font-semibold">
                    🎉 Otevírací akce říjen
                    <span className="text-red-600 font-bold">–20&nbsp;%</span>
                    <span className="text-slate-800 font-normal">na všechny služby pro všechny zákazníky</span>
                  </div>
                  <div className="text-xs md:text-sm text-slate-600">Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
                  <div className="mt-1 text-xs md:text-sm text-slate-600">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
                </div>
                <div className="flex gap-2">
                  <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                     style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                    <Phone className="h-4 w-4 mr-1" /> Zavolat {PHONE_DISPLAY}
                  </a>
                  <a href="#cenik" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50">
                    Mrknout na ceník
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white/70 p-6 shadow">
              <div className="text-lg font-medium">Střihy</div>
              <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 shadow">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 shadow">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 shadow">
              <div className="text-lg font-medium">Vlasová péče</div>
              <p className="mt-2 text-sm text-slate-600">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <div className="w-full text-white text-center py-4 rounded-xl shadow-md my-6"
               style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
            <p className="text-lg font-semibold">🎉 Otevírací sleva <span className="text-white">–20 %</span> celý říjen! 🎉</p>
            <p className="text-xs md:text-sm opacity-90">
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro všechny zákazníky po celý říjen 2025.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Ceník</h2>
            <span className="text-xs md:text-sm px-2 py-1 rounded-full bg-pink-100 text-red-600 border border-pink-200">
              –20 % říjen • všichni zákazníci
            </span>
          </div>
          <p className="text-xs text-neutral-500 mb-4">
            Akce –20 % platí do 31. 10. 2025. Přeškrtnuté částky jsou původní ceny, zvýrazněné částky jsou akční ceny po slevě.
          </p>

          <div className="relative mt-6 overflow-hidden rounded-2xl bg-white shadow">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
              style={{
                zIndex: 0,
                WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <SmartImage src={LOGO_SILUETY} className="max-w-[80%] md:max-w-[50%] h-auto scale-110 blur-[1.5px] select-none pointer-events-none" alt="" />
            </div>

            <div className="relative z-10">
              <div className="p-6 border-b border-slate-100">
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

              <div className="p-6 border-b border-slate-100">
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

              <div className="p-4 text-xs text-slate-500 border-t border-slate-100">
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
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
                  <div>Česko</div>
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
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">{PHONE_DISPLAY}</a>
                  <div className="text-xs text-slate-500">Volejte nebo napište zprávu.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm bg-white hover:bg-slate-50">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="md:justify-self-end w-full">
            <div className="relative max-w-md ml-auto">
              <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                   style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }} />
              <div className="relative rounded-[2rem] bg-white/70 backdrop-blur p-4 shadow-xl overflow-hidden">
                <div className="rounded-xl overflow-hidden">
                  <iframe
                    title="Mapa – Vlasy od Týnky"
                    src={MAP_EMBED}
                    className="w-full aspect-[4/3] md:aspect-[5/4] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ s jemnějším menším vodoznakem */}
      <section aria-label="Poděkování" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }} />
            <div className="relative rounded-[2rem] bg-white/70 backdrop-blur py-24 px-10 shadow-xl text-center overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15"
                style={{
                  WebkitMaskImage: "radial-gradient(68% 68% at 50% 50%, rgba(0,0,0,1) 52%, rgba(0,0,0,0) 100%)",
                  maskImage: "radial-gradient(68% 68% at 50% 50%, rgba(0,0,0,1) 52%, rgba(0,0,0,0) 100%)",
                }}
              >
                <SmartImage src={LOGO_TEXT} className="max-w-[70%] md:max-w-[55%] h-auto scale-110 blur-[1.1px] select-none pointer-events-none" alt="" />
              </div>

              <div className="relative z-10">
                <div className="text-lg font-semibold">Děkuji za návštěvu 💜</div>
                <div className="mt-2 text-sm text-slate-600">Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER bez loga, s odkazy */}
      <footer className="relative z-10">
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

export default Site;
