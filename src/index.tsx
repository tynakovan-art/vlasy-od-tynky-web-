import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/** Jednostránkový web – Vlasy od Týnky
 * - Navbar (logo vlevo, odkazy vpravo)
 * - Hero (bez vodoznaku)
 * - Akce • Služby • O mně (Echosline) • Ceník (vodoznak UVNITŘ karty) • Kontakt (pravá karta větší + vodoznak textového loga) • Footer
 * - Ošetřeno proti React #130: do JSX nepředáváme objekty jako děti
 */

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
  // Konst
  const LOGO_MAIN = ["/logo-siluety.png"]; // siluety (PNG v /public)
  const LOGO_TEXT = ["/logo-text.png"];    // textové logo (PNG v /public)
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=Zalužánská+1272,+Mladá+Boleslav";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          {/* Logo + název */}
          <a href="#hero" className="flex items-center gap-3">
            <SmartImage
              srcs={LOGO_MAIN}
              alt="Vlasy od Týnky – logo se siluetami"
              className="h-9 w-auto object-contain"
              fallback={
                <div
                  className="h-9 w-9 rounded-xl flex items-center justify-center text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                  }}
                >
                  <Scissors className="h-5 w-5" />
                </div>
              }
            />
            <span className="font-semibold">Vlasy od Týnky</span>
          </a>

          {/* Menu */}
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
          {/* Levý sloupec */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-semibold leading-tight"
            >
              Krásné vlasy,
              <span
                className="block"
                style={{
                  background:
                    "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                které si zamilujete
              </span>
            </motion.h1>
            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte
              se a dopřejte vlasům péči, kterou si zaslouží.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-2xl px-5 py-3 text-white shadow-md text-sm font-medium"
                style={{
                  background:
                    "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl px-5 py-3 border text-sm font-medium bg-white/70 backdrop-blur hover:bg-white"
              >
                Prohlédnout služby
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
              <span>🌟</span>
              <span>Individuální přístup • Příjemné prostředí</span>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem a tlačítky */}
          <div className="md:justify-self-end relative">
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center">
              <SmartImage
                srcs={LOGO_MAIN}
                alt="Vlasy od Týnky – logo se siluetami"
                className="mx-auto mb-4 h-32 w-auto object-contain"
                fallback={
                  <div
                    className="h-16 w-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white"
                    style={{
                      background:
                        "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                    }}
                  >
                    <Scissors className="h-8 w-8" />
                  </div>
                }
              />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">
                kadeřnictví · Mladá Boleslav
              </div>
              <div className="mt-4 text-sm text-slate-600">
                Objednávky přes sociální sítě nebo telefon.
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                >
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                >
                  <Facebook className="h-4 w-4" /> Napsat na Facebooku
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                  }}
                >
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AKCE */}
      <section aria-label="Akce" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="rounded-2xl border bg-white/70 backdrop-blur p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
            style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.06)" }}
          >
            <div className="text-slate-800">
              <span className="text-sm md:text-base font-medium">
                Říjnové akce ✨
              </span>
              <div className="text-xs md:text-sm text-slate-600">
                V říjnu připravuji slevy na vybrané služby. Sledujte
                Instagram/Facebook, detaily brzy zveřejním.
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="#cenik"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
              >
                Mrknout na ceník
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                }}
              >
                Sledovat novinky
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-semibold">S čím vám pomohu</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Střihy</div>
              <p className="mt-2 text-sm text-slate-600">
                Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou
                a stylingem podle potřeby.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Barvení a tónování</div>
              <p className="mt-2 text-sm text-slate-600">
                Jemné i výrazné změny. Tónování slouží k doladění odstínu a
                neutralizaci nežádoucích tónů.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Melír / Mikromelír</div>
              <p className="mt-2 text-sm text-slate-600">
                Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený,
                vzdušný výsledek.
              </p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-6">
              <div className="text-lg font-medium">Vlasová péče</div>
              <p className="mt-2 text-sm text-slate-600">
                Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk
                vlasů.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O MNĚ */}
      <section id="o-mne" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
        <p className="mt-4 text-slate-700 leading-relaxed">
            Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým
            cílem je, aby každý zákazník odcházel spokojený a s účesem, který mu
            opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a
            vždy kladu důraz na individuální přístup a příjemnou atmosféru.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Pracuji s <strong>Echosline</strong> – profesionální italskou
            vlasovou kosmetikou zaměřenou na šetrné složení a skvělé výsledky.
          </p>
        </div>
      </section>

      {/* CENÍK – vodoznak uvnitř karty */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Ceník</h2>

          {/* Karta ceníku je RELATIVE a uvnitř má ABSOLUTNÍ vodoznak */}
          <div className="relative mt-6 overflow-hidden rounded-2xl border bg-white">
            {/* Vodoznak uvnitř karty */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
              style={{ zIndex: 0 }}
            >
              <SmartImage
                srcs={LOGO_MAIN}
                alt="Vlasy od Týnky – vodoznak v kartě ceníku"
                className="max-w-[80%] md:max-w-[50%] h-auto"
                fallback={
                  <div className="text-6xl font-bold text-slate-200">
                    Vlasy od Týnky
                  </div>
                }
              />
            </div>

            {/* Obsah ceníku nad vodoznakem */}
            <div className="relative" style={{ zIndex: 1 }}>
              {/* Střih & styling */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">✂️ Střih &amp; styling</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Dámský střih</span>
                      <span className="font-semibold">od 650 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Konzultace, mytí vlasů, střih, foukaná a styling.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Pánský střih</span>
                      <span className="font-semibold">od 350 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Střih nůžkami i strojkem, suché i mokré vlasy.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Dětský střih (do 12 let)</span>
                      <span className="font-semibold">od 250 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Rychlý střih přizpůsobený dětem.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Foukaná / styling bez střihu</span>
                      <span className="font-semibold">od 400 Kč</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Barvení & melír */}
              <div className="p-6 border-b">
                <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Barvení / tónování</span>
                      <span className="font-semibold">od 1 350 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Kompletní barvení nebo tónování vlasů, včetně střihu,
                      foukané a stylingu.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Melír klasický</span>
                      <span className="font-semibold">od 1 850 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Melírování pramenů, střih, foukaná a styling.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Mikromelír + tónování</span>
                      <span className="font-semibold">od 2 050 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Jemné prosvětlení s doladěním odstínu, střih, foukaná a
                      styling.
                    </div>
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
                      <span className="font-semibold">+230 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Detox vlasů a pokožky, ideální jako doplněk ke střihu.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between font-medium">
                      <span>Ki-Power Veg rekonstrukce</span>
                      <span className="font-semibold">+260 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Intenzivní výživa po barvení a melíru, obnovuje strukturu a
                      sílu vlasů.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 text-xs text-slate-500 border-t">
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a
                hustotě vlasů a spotřebě materiálu. Vše vždy předem domluvíme na
                místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT – dvousloupcově, pravá karta VĚTŠÍ s vodoznakem TEXTOVÉHO loga */}
      <section id="kontakt" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
          {/* Levý sloupec */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>
            <div className="mt-4 flex flex-col gap-3 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    Zalužánská 1272
                  </a>
                  <div>Mladá Boleslav</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <div className="font-medium">Otevírací doba</div>
                  <div className="text-sm">
                    Po–St–Pá 9:00–16:00 • jiné časy po domluvě
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="text-xs text-slate-500">
                    Volejte nebo napište zprávu.
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                style={{
                  background:
                    "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                }}
              >
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Pravý sloupec – VĚTŠÍ karta s vodoznakem textového loga */}
          <div className="md:justify-self-end w-full">
            <div className="relative max-w-md ml-auto">
              <div
                className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                }}
              />
              <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur py-20 px-12 shadow-xl text-center overflow-hidden">
                {/* Vodoznak textového loga */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
                >
                  <SmartImage
                    srcs={LOGO_TEXT}
                    alt="Vlasy od Týnky – vodoznak textového loga"
                    className="max-w-[85%] md:max-w-[70%] h-auto"
                    fallback={
                      <div className="text-4xl font-bold text-slate-200">
                        Vlasy od Týnky
                      </div>
                    }
                  />
                </div>

                <div className="relative z-10">
                  <div className="text-lg font-semibold">
                    Děkuji za návštěvu 💜
                  </div>
                  <div className="mt-2 text-sm text-slate-600">
                    Těším se na vás v salonu na Zalužánské.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <SmartImage
              srcs={LOGO_TEXT}
              alt="Vlasy od Týnky – textové logo"
              className="h-5 w-auto object-contain"
              fallback={
                <div
                  className="h-6 w-28 rounded-xl flex items-center justify-center font-semibold"
                  style={{
                    background:
                      "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                    color: "white",
                  }}
                >
                  Vlasy od Týnky
                </div>
              }
            />
            <span>© {new Date().getFullYear()} Vlasy od Týnky</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 hover:opacity-70"
            >
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
