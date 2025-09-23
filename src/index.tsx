import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Obrázek s fallbackem (bez alt podle tvého přání) */
function SmartImage({
  srcs,
  className,
  fallback,
}: {
  srcs: string[];
  className?: string;
  fallback: JSX.Element;
}) {
  const [i, setI] = useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        className={className}
        onError={() => setI((v) => v + 1)}
      />
    );
  }
  return fallback;
}

export default function Site() {
  /* Loga v /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // Mladá Boleslav - logo
  const LOGO_TEXT = ["/logo-text.png"];       // Kadeřnictví - text

  /* Adresa */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";

  /* Kontakty */
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const MAP_QUERY = encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`);
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  /* Přeškrtnuté ceny */
  const PriceStrike = ({ oldLabel, newLabel }: { oldLabel: string; newLabel: string }) => (
    <div className="flex items-baseline gap-2">
      <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
      <span className="font-semibold text-pink-600">{newLabel}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <SmartImage
              srcs={LOGO_SILUETY}
              className="h-9 w-auto object-contain"
              fallback={
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
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
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Levý sloupec */}
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            >
              🚪 Otevírám 1.&nbsp;10.&nbsp;2025
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Kadeřnictví <br />
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
              <br /> Mladá Boleslav
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
                className="rounded-2xl px-5 py-3 border text-sm font-medium bg-white/70 hover:bg-white"
              >
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem + odkazy */}
          <div className="md:justify-self-end relative">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            />
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center">
              <SmartImage
                srcs={LOGO_TEXT}
                className="mx-auto mb-4 h-28 w-auto object-contain"
                fallback={
                  <div
                    className="h-16 w-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white"
                    style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                  >
                    <Scissors className="h-8 w-8" />
                  </div>
                }
              />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-4 text-sm text-slate-600">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a href={IG_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                  <Facebook className="h-4 w-4" /> Facebook
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

      {/* AKCE – pro všechny zákazníky */}
      <section aria-label="Akce" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="rounded-2xl border bg-white/70 backdrop-blur p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.06)" }}
          >
            <div className="text-slate-800">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              >
                🎉 Otevírací akce říjen
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                Po celý říjen nabízím <span className="font-bold">20% slevu</span> na všechny služby <u>pro všechny zákazníky</u>.
              </div>
              <div className="text-xs md:text-sm text-slate-600">Přijďte se nechat hýčkat ✨</div>
              <div className="mt-2 text-xs md:text-sm text-slate-600">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              >
                <Phone className="h-4 w-4 mr-1" /> Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#cenik" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                Mrknout na ceník
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">Kadeřnické služby v Mladé Boleslavi</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Střihy</div>
              <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny. Tónování doladí odstín a neutralizuje nežádoucí tóny.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">Prosvětlení a struktura účesu pomocí jemných pramínků.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Vlasová péče</div>
              <p className="mt-2 text-sm text-slate-600">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk.</p>
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
            odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské služby
            s důrazem na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Banner nad ceníkem */}
          <div className="w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-center py-4 rounded-xl shadow-md my-6">
            <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
            <p className="text-xs md:text-sm opacity-90">Sleva platí pro všechny zákazníky během října 2025.</p>
          </div>

          <h2 className="text-2xl font-bold mb-2">Ceník</h2>
          <p className="text-xs text-neutral-500 mb-4">
            Přeškrtnuté částky jsou původní ceny, zvýrazněné jsou akční ceny po slevě. Konečná cena záleží na délce/hustotě vlasů.
          </p>

          {/* Karta ceníku s vodoznakem (siluety) */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border bg-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.12]"
              style={{
                zIndex: 0,
                WebkitMaskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <SmartImage
                srcs={LOGO_SILUETY}
                className="max-w-[80%] md:max-w-[50%] h-auto scale-110 blur-[1.2px] select-none pointer-events-none"
                fallback={<div className="text-6xl font-bold text-slate-200">Vlasy od Týnky</div>}
              />
            </div>

            <div className="relative" style={{ zIndex: 1 }}>
              {/* Střih & styling */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">✂️ Střih &amp; styling</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Dámský střih</span>
                      <PriceStrike oldLabel="od 650 Kč" newLabel="od 520 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Konzultace, mytí, střih, foukaná a styling.</div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Pánský střih</span>
                      <PriceStrike oldLabel="od 350 Kč" newLabel="od 280 Kč" />
                    </div>
                    <div className="text-xs text-slate-500">Střih nůžkami i strojkem.</div>
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
              <div className="p-6 border-b">
                <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between font-medium">
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </li>
                  <li className="flex justify-between font-medium">
                    <span>Melír klasický</span>
                    <PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </li>
                  <li className="flex justify-between font-medium">
                    <span>Mikromelír + tónování</span>
                    <PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </li>
                </ul>
              </div>

              {/* Péče & regenerace */}
              <div className="p-6">
                <div className="font-medium text-lg">🌸 Péče &amp; regenerace</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between font-medium">
                    <span>B.Pur hloubkové čištění</span>
                    <PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </li>
                  <li className="flex justify-between font-medium">
                    <span>Ki-Power Veg rekonstrukce</span>
                    <PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </li>
                </ul>
              </div>

              <div className="p-4 text-xs text-slate-500 border-t">
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT + MAPA */}
      <section id="kontakt" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Levý sloupec – info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>
            <div className="mt-4 flex flex-col gap-3 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <a href={MAP_URL} target="_blank" rel="noopener" className="font-medium hover:underline">
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
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">{PHONE_DISPLAY}</a>
                  <div className="text-xs text-slate-500">Volejte nebo napište zprávu.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={IG_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Pravý sloupec – mapa */}
          <div className="md:justify-self-end w-full">
            <div className="relative max-w-md ml-auto w-full">
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              />
              <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur overflow-hidden shadow-xl">
                <iframe
                  title="Mapa kadeřnictví"
                  className="w-full h-[380px] rounded-[2rem]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    `${ADDRESS_LINE1}, ${ADDRESS_CITY}`
                  )}&output=embed`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – úzká karta pod kontakty, s vodoznakem textového loga */}
      <section aria-label="Poděkování" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="md:justify-self-end w-full">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              />
              <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur py-24 px-12 shadow-xl text-center overflow-hidden">
                {/* vodoznak – výraznější */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.16]"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <SmartImage
                    srcs={LOGO_TEXT}
                    className="max-w-[85%] md:max-w-[70%] h-auto scale-110 blur-[1.2px] select-none pointer-events-none"
                    fallback={<div className="text-4xl font-bold text-slate-200">Vlasy od Týnky</div>}
                  />
                </div>

                <div className="relative z-10">
                  <div className="text-lg font-semibold">Děkuji za návštěvu 💜</div>
                  <div className="mt-2 text-sm text-slate-600">Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER – bez loga */}
      <footer className="relative z-10 border-t bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-10 text-slate-600">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-4 text-sm">
              <a href={IG_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:opacity-70">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <span className="opacity-40">•</span>
              <a href={FB_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:opacity-70">
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
