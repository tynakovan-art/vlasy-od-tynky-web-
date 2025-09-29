import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* ----------------------------- Pomocné prvky ----------------------------- */

/** Obrázek s postupným fallbackem (bez TS typů). */
function SmartImage(props) {
  const { srcs, alt, className, fallback } = props;
  const [i, setI] = useState(0);

  const safeFallback =
    fallback ?? (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 16,
          background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
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

/** Stará cena přeškrtnutá + nová zvýrazněná. */
function PriceStrike({ oldLabel, newLabel }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-sm text-slate-400 line-through">{oldLabel}</span>
      <span className="font-semibold text-pink-600">{newLabel}</span>
    </div>
  );
}

/* --------------------------------- Stránka -------------------------------- */

export default function Site() {
  /* LOGA z /public */
  const LOGO_SILUETY = ["/logo-siluety.png"]; // „Mladá Boleslav – logo“
  const LOGO_TEXT = ["/logo-text.png"]; // „Vlasy od Týnky“ (textové)

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

  /* Vizuální gradient používaný všude */
  const grad = "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)";

  /* Titulek stránky */
  useEffect(() => {
    document.title = "Kadeřnictví Vlasy od Týnky – Mladá Boleslav";
  }, []);

  /* Reusable btn bez podtržení (když by prohlížeč přidával) */
  const noUnderline = { textDecoration: "none" as const };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ------------------------------ NAVBAR ------------------------------ */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200/60">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3" style={noUnderline}>
            <SmartImage
              srcs={LOGO_SILUETY}
              className="h-9 w-auto object-contain"
              fallback={<Scissors className="h-5 w-5" />}
            />
            <span className="font-semibold">Vlasy od Týnky</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#o-mne" className="hover:opacity-70" style={noUnderline}>O mně</a>
            <a href="#sluzby" className="hover:opacity-70" style={noUnderline}>Služby</a>
            <a href="#cenik" className="hover:opacity-70" style={noUnderline}>Ceník</a>
            <a href="#kontakt" className="hover:opacity-70" style={noUnderline}>Kontakt</a>
          </nav>
        </div>
      </header>

      {/* ------------------------------- HERO -------------------------------- */}
      <section id="hero" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center">
          {/* Levý sloupec */}
          <div>
            {/* Bublina – datum otevření (dveře) */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: grad }}
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
                style={{ background: grad, WebkitBackgroundClip: "text", color: "transparent" }}
              >
                Vlasy od Týnky
              </span>
              <span className="block">Mladá Boleslav</span>
            </motion.h1>

            <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
              Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči,
              kterou si zaslouží.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-2xl px-5 py-3 text-white text-sm font-medium shadow-md"
                style={{ background: grad, ...noUnderline }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
              <a
                href="#sluzby"
                className="rounded-2xl px-5 py-3 text-sm font-medium bg-white/70 backdrop-blur hover:bg-white"
                style={noUnderline}
              >
                Prohlédnout služby
              </a>
            </div>
          </div>

          {/* Pravý sloupec – karta s logem a CTA v „bublinách“ pod sebou */}
          <div className="relative md:justify-self-end">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: grad }} />
            <div className="relative rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur p-8 shadow-xl text-center overflow-hidden">
              <SmartImage srcs={LOGO_TEXT} className="mx-auto mb-6 h-28 w-auto object-contain" />
              <div className="text-2xl font-semibold">Vlasy od Týnky</div>
              <div className="mt-1 text-sm text-slate-500">kadeřnictví · Mladá Boleslav</div>
              <div className="mt-5 grid gap-2">
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/60 bg-white hover:bg-slate-50"
                  style={noUnderline}
                >
                  <Instagram className="h-4 w-4" /> Napsat na Instagramu
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/60 bg-white hover:bg-slate-50"
                  style={noUnderline}
                >
                  <Facebook className="h-4 w-4" /> Napsat na Facebooku
                </a>
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                  style={{ background: grad, ...noUnderline }}
                >
                  <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Banner NAD SLUŽBAMI – karta s glow, ne fullwidth barva ------- */}
      <section aria-label="Otevírací akce říjen" className="relative z-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: grad }} />
            <div className="relative rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur p-5 md:p-6 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm md:text-lg font-semibold text-white"
                  style={{ background: grad }}
                >
                  🎉 Otevírací akce říjen
                </div>
                <div className="mt-3 text-sm md:text-base font-medium">
                  Po celý říjen nabízím <span className="font-bold text-red-600">20 % slevu</span> na všechny služby pro všechny zákazníky.
                </div>
                <div className="text-xs md:text-sm text-slate-600">Přijďte se nechat hýčkat a dopřejte svým vlasům nový začátek ✨</div>
                <div className="mt-2 text-xs md:text-sm text-slate-600">📍 {ADDRESS_LINE1}, {ADDRESS_CITY}</div>
              </div>
              <div className="flex gap-2 shrink-0">
                <a
                  href={`tel:${PHONE_RAW}`}
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                  style={{ background: grad, ...noUnderline }}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Zavolat {PHONE_DISPLAY}
                </a>
                <a
                  href="#cenik"
                  className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border border-slate-200/60 bg-white hover:bg-slate-50"
                  style={noUnderline}
                >
                  Mrknout na ceník
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------- SLUŽBY ------------------------------- */}
      <section id="sluzby" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold">Kadeřnické služby v Mladé Boleslavi</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6">
            <div className="text-lg font-medium">Střihy</div>
            <p className="mt-2 text-sm text-slate-600">
              Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6">
            <div className="text-lg font-medium">Barvení a tónování</div>
            <p className="mt-2 text-sm text-slate-600">
              Jemné i výrazné změny. Tónování doladí odstín a zneutralizuje nežádoucí tóny.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6">
            <div className="text-lg font-medium">Melír / mikromelír</div>
            <p className="mt-2 text-sm text-slate-600">
              Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/60 bg-white/70 p-6">
            <div className="text-lg font-medium">Vlasová péče</div>
            <p className="mt-2 text-sm text-slate-600">
              Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------- O MNĚ -------------------------------- */}
      <section id="o-mne" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
        <p className="mt-4 text-slate-700 leading-relaxed text-base md:text-lg">
          Jmenuji se Kristýna Hálová Vávrová. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník odcházel
          spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a vždy kladu
          důraz na individuální přístup a příjemnou atmosféru.
        </p>
        <p className="mt-3 text-sm md:text-base text-slate-500">
          Pracuji s <strong>Echosline</strong> – profesionální italskou vlasovou kosmetikou se šetrným složením a
          krásnými výsledky.
        </p>
      </section>

      {/* --------------------------- CENÍK + banner nahoře --------------------------- */}
      <section id="cenik" className="mx-auto max-w-6xl px-6 py-16">
        {/* banner nad ceníkem (gradient) */}
        <div className="w-full text-white text-center py-4 rounded-xl shadow-md my-6" style={{ background: grad }}>
          <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
          <p className="text-xs md:text-sm opacity-95">
            Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro <strong>všechny zákazníky</strong> po celý říjen 2025.
          </p>
        </div>

        {/* Nadpis + červený chip –20 % říjen */}
        <h2 className="text-2xl font-bold flex items-center gap-3">
          Ceník
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-semibold">–20 % říjen</span>
        </h2>

        {/* karta ceníku + vodoznak */}
        <div className="relative mt-6 overflow-hidden rounded-2xl border border-slate-200/60 bg-white">
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
              className="max-w-[80%] md:max-w-[50%] h-auto scale-110 blur-[1.5px] select-none pointer-events-none"
            />
          </div>

          <div className="relative" style={{ zIndex: 1 }}>
            {/* Střih & styling */}
            <div className="p-6 border-b border-slate-200/60">
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
                  <div className="text-xs text-slate-500">Střih, úprava kontur, základní styling.</div>
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Dětský střih (do 12 let)</span>
                    <PriceStrike oldLabel="od 250 Kč" newLabel="od 200 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Citlivý přístup a rychlá úprava účesu.</div>
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Foukaná / styling bez střihu</span>
                    <PriceStrike oldLabel="od 400 Kč" newLabel="od 320 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Vyfoukání, vlny/žehlení, finální úprava.</div>
                </li>
              </ul>
            </div>

            {/* Barvení & melír */}
            <div className="p-6 border-b border-slate-200/60">
              <div className="font-medium text-lg">🎨 Barvení &amp; melír</div>
              <ul className="mt-3 text-sm text-slate-700 space-y-4">
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Barvení / tónování</span>
                    <PriceStrike oldLabel="od 1 350 Kč" newLabel="od 1 080 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Kompletní barvení nebo tónování, včetně střihu a foukané.</div>
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Melír klasický</span>
                    <PriceStrike oldLabel="od 1 850 Kč" newLabel="od 1 480 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Prosvětlení pramenů, střih, foukaná a styling.</div>
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Mikromelír + tónování</span>
                    <PriceStrike oldLabel="od 2 050 Kč" newLabel="od 1 640 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Jemné prosvětlení s doladěním odstínu, střih a styling.</div>
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
                  <div className="text-xs text-slate-500">Detox vlasů a pokožky, ideální doplněk ke střihu.</div>
                </li>
                <li>
                  <div className="flex justify-between font-medium">
                    <span>Ki-Power Veg rekonstrukce</span>
                    <PriceStrike oldLabel="+260 Kč" newLabel="+208 Kč" />
                  </div>
                  <div className="text-xs text-slate-500">Intenzivní výživa po barvení/melíru, obnova struktury.</div>
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

      {/* ------------------------------- KONTAKT ------------------------------- */}
      <section id="kontakt" className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10 items-start">
        {/* Vše pod sebe (vlevo) */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Kontakt</h2>

          <div className="mt-4 grid gap-4 text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5" />
              <div>
                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline" style={noUnderline}>
                  {ADDRESS_LINE1}
                </a>
                <div>{ADDRESS_CITY} – {ADDRESS_DISTRICT}</div>
                <div>Okres Mladá Boleslav</div>
                <div>{ADDRESS_COUNTRY}</div>
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
                <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium" style={noUnderline}>
                  {PHONE_DISPLAY}
                </a>
                <div className="text-xs text-slate-500">Volejte nebo napište zprávu.</div>
              </div>
            </div>

            <div className="mt-2 flex flex-col sm:flex-row gap-3">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/60 bg-white hover:bg-slate-50" style={noUnderline}>
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border border-slate-200/60 bg-white hover:bg-slate-50" style={noUnderline}>
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white" style={{ background: grad, ...noUnderline }}>
                <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        {/* Mapa vpravo */}
        <div className="w-full md:justify-self-end">
          <div className="relative max-w-md ml-auto w-full">
            <div className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl" style={{ background: grad }} />
            <div className="relative rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur p-2 shadow-xl overflow-hidden">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="360"
                loading="lazy"
                className="rounded-[1.5rem]"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa – Vlasy od Týnky"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ PODĚKOVÁNÍ ----------------------------- */}
      <section className="relative z-10">
        <div className="relative mx-auto max-w-lg px-6 py-16">
          <div className="relative rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur py-28 px-10 shadow-xl text-center overflow-hidden">
            {/* Vodoznak – logo-text, o něco větší a jemně rozostřené */}
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
                className="max-w-[65%] md:max-w-[55%] h-auto blur-[1.2px] select-none pointer-events-none"
              />
            </div>

            <div className="relative z-10">
              <div className="text-xl md:text-2xl font-semibold">Děkuji za návštěvu 💜</div>
              <div className="mt-2 text-sm text-slate-600">
                Těším se na vás v salonu na {ADDRESS_LINE1}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------- FOOTER -------------------------------- */}
      <footer className="bg-white/60 backdrop-blur py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600">
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-75" style={noUnderline}>
              <Instagram className="h-4 w-4" /> Instagram
            </a>
            <span className="opacity-40">•</span>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:opacity-75" style={noUnderline}>
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <span className="opacity-40">•</span>
            <a href={`tel:${PHONE_RAW}`} className="inline-flex items-center gap-2 hover:opacity-75" style={noUnderline}>
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="mt-3 text-xs text-slate-500">© {new Date().getFullYear()} Vlasy od Týnky</div>
        </div>
      </footer>
    </div>
  );
}
