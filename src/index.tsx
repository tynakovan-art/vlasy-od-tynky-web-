import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Jednoduchý <img> s fallbackem */
function SmartImage({
  srcs,
  alt,
  className,
  fallback,
}: {
  srcs: string[];
  alt: string;
  className?: string;
  fallback: JSX.Element;
}) {
  const [i, setI] = useState(0);
  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt}
        className={className}
        onError={() => setI((v) => v + 1)}
      />
    );
  }
  return fallback;
}

export default function Site() {
  /* === JEDINÉ POUŽÍVANÉ SOUBORY LOG === */
  const LOGO_SILUETY = ["/logo-siluety.png"];
  const LOGO_TEXT = ["/logo-text.png"];

  /* Adresa & kontakty */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";
  const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${ADDRESS_LINE1}, ${ADDRESS_CITY}`
  )}`;

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  const PriceStrike = ({ oldLabel, newLabel }: { oldLabel: string; newLabel: string }) => (
    <div className="flex items-baseline gap-2">
      <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
      <span className="font-semibold text-pink-600">{newLabel}</span>
    </div>
  );

  const gradient = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <SmartImage
              srcs={LOGO_SILUETY}
              alt="Vlasy od Týnky – logo"
              className="h-9 w-auto object-contain"
              fallback={<Scissors className="h-6 w-6 text-pink-500" />}
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
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Levá část */}
          <div>
            {/* Badge s datem otevření – dveře */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: gradient }}
            >
              🚪 Otevírám 1.&nbsp;10.&nbsp;2025
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Kadeřnictví{" "}
              <span
                className="block"
                style={{ background: gradient, WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Vlasy od Týnky
              </span>
              Mladá Boleslav
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře.
              Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>
          </div>

          {/* Pravá část – karta s logem (původní velikost) */}
          <div className="md:justify-self-end relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: gradient }} />
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center">
              <SmartImage
                srcs={LOGO_TEXT}
                alt="Vlasy od Týnky – textové logo"
                className="mx-auto mb-4 h-24 w-auto object-contain"
                fallback={<Scissors className="h-10 w-10 text-pink-500 mx-auto" />}
              />
              <div className="text-lg font-medium">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                  style={{ background: gradient }}
                >
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANÉR – Otevírací akce NAD SLUŽBAMI */}
      <section aria-label="Akce" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="rounded-2xl border bg-white/70 backdrop-blur p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 shadow-md"
          >
            <div className="text-slate-800">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                style={{ background: gradient }}
              >
                🎉 Otevírací akce říjen
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                Po celý říjen nabízím <span className="font-bold">20% slevu</span> na všechny služby.
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: gradient }}
              >
                <Phone className="h-4 w-4 mr-1" /> Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#cenik"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
              >
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
              <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih, konzultace, foukaná a styling.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny, doladění odstínu a neutralizace tónů.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">Prosvětlení účesu jemnými pramínky pro přirozený výsledek.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Vlasová péče</div>
              <p className="mt-2 text-sm text-slate-600">Hloubkové čištění pokožky a regenerace vlasů po barvení.</p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý
            zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské
            kadeřnické služby s individuálním přístupem a příjemnou atmosférou.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Banner nad ceníkem */}
          <div className="w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-center py-4 rounded-xl shadow-md my-6">
            <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen!</p>
            <p className="text-xs md:text-sm opacity-90">
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro všechny klienty po celý říjen 2025.
            </p>
          </div>

          {/* Titulek ceníku */}
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Ceník</h2>
            <span className="text-red-500 font-semibold">–20 %</span>
          </div>

          {/* Karta ceníku */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border bg-white">
            {/* (volitelně se dá přidat vodoznak, teď bez něj) */}

            {/* Obsah */}
            <div className="relative z-10">
              {/* Střih & styling */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">✂️ Střih &amp; styling</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>Dámský střih</span>
                    <PriceStrike oldLabel="650 Kč" newLabel="520 Kč" />
                  </li>
                  <li className="flex justify-between">
                    <span>Pánský střih</span>
                    <PriceStrike oldLabel="350 Kč" newLabel="280 Kč" />
                  </li>
                  <li className="flex justify-between">
                    <span>Dětský střih (do 12 let)</span>
                    <PriceStrike oldLabel="250 Kč" newLabel="200 Kč" />
                  </li>
                  <li className="flex justify-between">
                    <span>Foukaná / styling bez střihu</span>
                    <PriceStrike oldLabel="400 Kč" newLabel="320 Kč" />
                  </li>
                </ul>
              </div>

              {/* Barvení & melír */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="1 350 Kč" newLabel="1 080 Kč" />
                  </li>
                  <li className="flex justify-between">
                    <span>Melír klasický</span>
                    <PriceStrike oldLabel="1 850 Kč" newLabel="1 480 Kč" />
                  </li>
                  <li className="flex justify-between">
                    <span>Mikromelír + tónování</span>
                    <PriceStrike oldLabel="2 050 Kč" newLabel="1 640 Kč" />
                  </li>
                </ul>
              </div>

              {/* Péče & regenerace */}
              <div className="p-6">
                <div className="font-medium text-lg">🌸 Péče &amp; regenerace</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>B.Pur hloubkové čištění</span>
                    <PriceStrike oldLabel="+230 Kč" newLabel="+184 Kč" />
                  </li>
                  <li className="flex justify-between">
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

      {/* KONTAKT + DĚKUJI KARTA (užší, vyšší, menší a sytější vodoznak) */}
      <section id="kontakt" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Levý sloupec */}
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
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Pravý sloupec – Děkuji karta */}
          <div className="md:justify-self-end w-full">
            <div className="relative max-w-sm ml-auto">
              <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: gradient }} />
              <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur py-20 px-10 shadow-xl text-center overflow-hidden">
                {/* Vodoznak – menší, o fous sytější */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                    maskImage:
                      "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <SmartImage
                    srcs={LOGO_TEXT}
                    alt="Vlasy od Týnky – vodoznak"
                    className="max-w-[65%] h-auto scale-105 blur-[1.2px] select-none pointer-events-none"
                    fallback={<></>}
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
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} Vlasy od Týnky •{" "}
          <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Instagram</a> •{" "}
          <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70">Facebook</a>
        </div>
      </footer>
    </div>
  );
}
