import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Konstanty */
const ADDRESS_LINE1 = "Zalužanská 1272";
const ADDRESS_CITY = "293 01 Mladá Boleslav";
const MAP_URL = `https://www.google.com/maps?q=${encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`)}`;
const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
const FB_URL = "https://www.facebook.com/vlasyodtynky/";
const PHONE_RAW = "725882820";
const PHONE_DISPLAY = "725 882 820";

/* Pomůcka: gradient text pro “Vlasy od Týnky” */
const GradientText: React.FC<{ className?: string; children: React.ReactNode }> = ({ className, children }) => (
  <span
    className={className}
    style={{
      background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    }}
  >
    {children}
  </span>
);

const App: React.FC = () => {
  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo-siluety.png" className="h-9 w-auto object-contain" alt="" />
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
        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Levý sloupec – přesně tři řádky H1, gradient jen prostřední */}
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
              <span className="block">Kadeřnictví</span>
              <GradientText className="block">Vlasy od Týnky</GradientText>
              <span className="block">Mladá Boleslav</span>
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={`tel:${PHONE_RAW}`} className="rounded-2xl px-5 py-3 text-white shadow-md text-sm font-medium"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a href="#sluzby" className="rounded-2xl px-5 py-3 border text-sm font-medium bg-white/70 backdrop-blur hover:bg-white">
                Prohlédnout služby
              </a>
            </div>

            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* Pravý sloupec – karta v původní velikosti s LOGO TEXTEM + CTA */}
          <div className="md:justify-self-end relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }} />
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center overflow-hidden max-w-md">
              <img src="/logo-text.png" className="mx-auto mb-2 h-32 w-auto object-contain" alt="" />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-4 text-sm text-slate-600">Objednávky přes sociální sítě nebo telefon.</div>
              <div className="mt-5 flex flex-col gap-2">
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
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

      {/* OTEVÍRACÍ AKCE – BANNER NAD SLUŽBAMI (pro všechny zákazníky) */}
      <section aria-label="Akce" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border bg-white/70 backdrop-blur p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
               style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.06)" }}>
            <div className="text-slate-800">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                   style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                🎉 Otevírací akce říjen
              </div>
              <div className="mt-3 text-sm md:text-base font-medium">
                Po celý říjen nabízím <span className="font-bold">20 % slevu</span> na všechny služby <strong>pro všechny zákazníky</strong>.
              </div>
              <div className="text-xs md:text-sm text-slate-600">
                Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨
              </div>
              <div className="mt-2 text-xs md:text-sm text-slate-600">
                📍 {ADDRESS_LINE1}, {ADDRESS_CITY}
              </div>
            </div>
            <div className="flex gap-2">
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
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
              <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
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
            a vždy kladu důraz na individuální přístup a příjemnou atmosféru. Pracuji s <strong>Echosline</strong> –
            profesionální italskou vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Banner nad ceníkem */}
          <div className="w-full bg-white border rounded-xl shadow-sm text-center py-4 my-6">
            <p className="text-lg font-semibold">
              🎉 Otevírací sleva <span className="text-red-600 font-bold">−20&nbsp;%</span> celý říjen! 🎉
            </p>
            <p className="text-xs md:text-sm text-slate-600">
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí <strong>pro všechny zákazníky</strong> po celý říjen 2025.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl font-bold">Ceník kadeřnictví Vlasy od Týnky Mladá Boleslav</h2>
          </div>
          <p className="text-xs text-neutral-500 mb-4">
            Přeškrtnuté částky jsou původní ceny, zvýrazněné částky jsou akční ceny po slevě −20 %.
          </p>

          {/* Karta ceníku s vodoznakem (logo siluet) */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border bg-white">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
              style={{
                WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
                maskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              }}
            >
              <img src="/logo-siluety.png" className="max-w-[80%] md:max-w-[50%] h-auto blur-[1.5px] select-none" alt="" />
            </div>

            <div className="relative z-10">
              {/* Střih & styling */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">✂️ Střih &amp; styling</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>Dámský střih</span>
                    <span><span className="text-slate-400 line-through mr-2">od 650 Kč</span><span className="font-semibold text-pink-600">od 520 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pánský střih</span>
                    <span><span className="text-slate-400 line-through mr-2">od 350 Kč</span><span className="font-semibold text-pink-600">od 280 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dětský střih (do 12 let)</span>
                    <span><span className="text-slate-400 line-through mr-2">od 250 Kč</span><span className="font-semibold text-pink-600">od 200 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Foukaná / styling bez střihu</span>
                    <span><span className="text-slate-400 line-through mr-2">od 400 Kč</span><span className="font-semibold text-pink-600">od 320 Kč</span></span>
                  </li>
                </ul>
              </div>

              {/* Barvení & melír */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>Barvení / tónování</span>
                    <span><span className="text-slate-400 line-through mr-2">od 1 350 Kč</span><span className="font-semibold text-pink-600">od 1 080 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Melír klasický</span>
                    <span><span className="text-slate-400 line-through mr-2">od 1 850 Kč</span><span className="font-semibold text-pink-600">od 1 480 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Mikromelír + tónování</span>
                    <span><span className="text-slate-400 line-through mr-2">od 2 050 Kč</span><span className="font-semibold text-pink-600">od 1 640 Kč</span></span>
                  </li>
                </ul>
              </div>

              {/* Péče */}
              <div className="p-6">
                <div className="font-medium text-lg">🌸 Péče &amp; regenerace</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li className="flex justify-between">
                    <span>B.Pur hloubkové čištění</span>
                    <span><span className="text-slate-400 line-through mr-2">+230 Kč</span><span className="font-semibold text-pink-600">+184 Kč</span></span>
                  </li>
                  <li className="flex justify-between">
                    <span>Ki-Power Veg rekonstrukce</span>
                    <span><span className="text-slate-400 line-through mr-2">+260 Kč</span><span className="font-semibold text-pink-600">+208 Kč</span></span>
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
                  <div>{ADDRESS_CITY} – Mladá Boleslav III</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>Česko</div>
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
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Pravý sloupec – Mapa (iframe) */}
          <div className="w-full md:justify-self-end">
            <div className="rounded-2xl overflow-hidden border shadow-sm">
              <iframe
                title="Mapa – Vlasy od Týnky"
                className="w-full h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${ADDRESS_LINE1}, ${ADDRESS_CITY}`)}&output=embed`}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* PODĚKOVÁNÍ – užší karta, menší a sytější vodoznak */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="relative max-w-lg mx-auto">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                 style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }} />
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur py-24 px-10 shadow-xl text-center overflow-hidden">
              {/* vodoznak – menší a sytější */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20"
                style={{
                  WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                  maskImage: "radial-gradient(70% 70% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                }}
              >
                <img src="/logo-text.png" className="max-w-[65%] md:max-w-[48%] h-auto blur-[1px] select-none" alt="" />
              </div>

              <div className="relative z-10">
                <div className="text-lg font-semibold">Děkuji za návštěvu 💜</div>
                <div className="mt-2 text-sm text-slate-600">Těším se na vás v salonu na {ADDRESS_LINE1}.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (bez loga) */}
      <footer className="relative z-10 border-t bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-10 text-slate-600">
          <div className="flex flex-col items-center gap-4 text-center">
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
};

/* Mount */
const root = createRoot(document.getElementById("root")!);
root.render(<App />);
