import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/**
 * Vlasy od Týnky – jednostránkový web (TSX)
 * - Hero se sloganem (bez duplicitního představení)
 * - Karta vpravo (logo + IG/FB/Zavolat)
 * - Promo banner (říjnové akce)
 * - Sekce O mně (jediné místo s představením)
 * - Ceník (otevřený), doplňkové služby se symboly "+"
 * - Kontakt (klikací tel, mapa, IG/FB)
 * - SEO: title + meta description + JSON‑LD (HairSalon)
 * - Chytrý loader pro loga (řeší různé názvy/mezery)
 * - "Smoke" testy v konzoli (pomáhají odhalit chyby po deploy)
 */

// Chytrý obrázkový loader – zkouší více cest a při chybě spadne na fallback
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
  // === Konst. ===
  const LOGO_MAIN = [
    "/logo-siluety.png",
    "/logo-siluety .png",
    "/logo%20siluety.png",
    "/logo%20siluety .png",
    "/logo siluety.png", // varianta s obyč. mezerou
  ];
  const LOGO_TEXT = [
    "/logo-text.png",
    "/logo text .png",
    "/logo%20text%20.png",
    "/logo%20text.png",
    "/logo text.png", // varianta s obyč. mezerou
  ];
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=Zalužánská+1272,+Mladá+Boleslav";
  const PHONE_RAW = "725882820"; // pro href: tel: bez mezer a bez +420 – nejspolehlivější
  const PHONE_DISPLAY = "725 882 820";

  // === SEO ===
  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
    const desc =
      "Vlasy od Týnky – kadeřnictví v Mladé Boleslavi. Dámské, pánské i dětské střihy, barvení, melír a individuální přístup v příjemném prostředí.";
    let meta = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = desc;
  }, []);

  // === Smoke testy ("pseudo test cases") ===
  useEffect(() => {
    const tests = [
      { name: "root wrapper exists", pass: !!document.querySelector(".min-h-screen") },
      { name: "hero section", pass: !!document.getElementById("hero") },
      { name: "o-mne section", pass: !!document.getElementById("o-mne") },
      { name: "cenik section", pass: !!document.getElementById("cenik") },
      { name: "kontakt section", pass: !!document.getElementById("kontakt") },
      { name: "tel link present", pass: !!document.querySelector('a[href^="tel:"]') },
      { name: "IG link present", pass: !!document.querySelector(`a[href='${IG_URL}']`) },
      { name: "FB link present", pass: !!document.querySelector(`a[href='${FB_URL}']`) },
      { name: "hero call btn", pass: !!document.querySelector('#hero a[href^="tel:"]') },
    ];
    tests.forEach((t) => console.assert(t.pass, `Test fail: ${t.name}`));
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        {/* Background accents */}
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
          <div
            className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl opacity-25"
            style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-20"
            style={{ background: "linear-gradient(135deg,#ff9bd1,#8aa8ff)" }}
          />
        </div>

        {/* Header */}
        <header className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <SmartImage
                srcs={LOGO_MAIN}
                alt="Vlasy od Týnky – logo se siluetami"
                className="h-12 w-auto object-contain"
                fallback={
                  <div
                    className="h-12 w-12 rounded-2xl flex items-center justify-center text-white"
                    style={{
                      background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                    }}
                  >
                    <Scissors className="h-7 w-7" />
                  </div>
                }
              />
              <div className="leading-tight">
                <div className="text-xl font-semibold tracking-wide">Vlasy od Týnky</div>
                <div className="text-xs opacity-70">kadeřnictví · Mladá Boleslav</div>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#cenik" className="hover:opacity-70">Ceník</a>
              <a href="#kontakt" className="hover:opacity-70">Kontakt</a>
              <a href="#o-mne" className="hover:opacity-70">O&nbsp;mně</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
            {/* Levý sloupec – slogan + CTA */}
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
                    background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  které si zamilujete
                </span>
              </motion.h1>
              <p className="mt-5 text-slate-600 md:text-lg max-w-prose">
                Precizní střihy, barvení i melír v příjemné atmosféře. Objednejte se a dopřejte vlasům péči, kterou si zaslouží.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#kontakt"
                  className="rounded-2xl px-5 py-3 text-white shadow-md text-sm font-medium"
                  style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                >
                  📞 Kontakt
                </a>
                <a
                  href="#cenik"
                  className="rounded-2xl px-5 py-3 border text-sm font-medium bg-white/70 backdrop-blur hover:bg-white"
                >
                  Prohlédnout ceník
                </a>
              </div>
            </div>

            {/* Pravý sloupec – karta s logem a tlačítky (jako na screenu) */}
            <div className="md:justify-self-end">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-[2rem] opacity-25 blur-2xl"
                  style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                />
                <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center">
                  <SmartImage
                    srcs={LOGO_MAIN}
                    alt="Vlasy od Týnky – logo se siluetami"
                    className="mx-auto mb-4 h-16 w-auto object-contain"
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
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                      style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
                    >
                      <Facebook className="h-4 w-4" /> Napsat na Facebooku
                    </a>
                    <a
                      href={`tel:${PHONE_RAW}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                    >
                      <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promo – říjnové akce */}
        <section aria-label="Říjnové akce" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border bg-white/70 backdrop-blur p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3" style={{ boxShadow: "0 6px 24px rgba(0,0,0,0.06)" }}>
              <div className="text-slate-800">
                <span className="text-sm md:text-base font-medium">Říjnové akce ✨</span>
                <div className="text-xs md:text-sm text-slate-600">V říjnu připravuji slevy na vybrané služby. Sledujte Instagram/Facebook, detaily brzy zveřejním.</div>
              </div>
              <div className="flex gap-2">
                <a href="#cenik" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50">Mrknout na ceník</a>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white" style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}>Sledovat novinky</a>
              </div>
            </div>
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Jmenuji se <strong>Kristýna Hálová Vávrová</strong>. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
              </p>
            </div>
            <div className="md:justify-self-end text-center md:text-right">
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              >
                📞 Zavolat {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>

        {/* Ceník */}
        <section id="cenik" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold">Ceník</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border bg-white/70">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                {/* Střih & styling */}
                <div className="p-6">
                  <div className="font-medium">Střih & styling</div>
                  <ul className="mt-3 text-sm text-slate-700 space-y-4">
                    <li>
                      <div className="flex justify-between">
                        <span>Dámský střih</span>
                        <span>od 650 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Konzultace, mytí vlasů, střih, foukaná a styling.
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span>Pánský střih</span>
                        <span>od 350 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Střih nůžkami i strojkem, suché i mokré vlasy.
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span>Dětský střih (do 12 let)</span>
                        <span>od 250 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">Rychlý, přizpůsobený střih pro děti.</div>
                    </li>
                  </ul>
                </div>

                {/* Barvení & melír */}
                <div className="p-6">
                  <div className="font-medium">Barvení & melír</div>
                  <ul className="mt-3 text-sm text-slate-700 space-y-4">
                    <li>
                      <div className="flex justify-between">
                        <span>Barvení</span>
                        <span>od 1800 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Barvení vlasů, střih, foukaná a styling.
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span>Mikromelír</span>
                        <span>od 2000 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Melírování vlasů (jemné pramínky), střih, foukaná a styling.
                      </div>
                    </li>
                    <li>
                      <div className="flex justify-between">
                        <span>Tónování po melíru</span>
                        <span>+600 Kč</span>
                      </div>
                      <div className="text-xs text-slate-500">
                        Neutralizace nežádoucích tónů a doladění barvy.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Doplňkové služby */}
              <div className="p-6 border-t">
                <div className="font-medium">Doplňkové služby</div>
                <ul className="mt-3 text-sm text-slate-700 space-y-4">
                  <li>
                    <div className="flex justify-between">
                      <span>B.Pur hloubkové čištění</span>
                      <span>+230 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Detox vlasů a pokožky, ideální jako doplněk ke střihu.
                    </div>
                  </li>
                  <li>
                    <div className="flex justify-between">
                      <span>Ki-Power Veg rekonstrukce</span>
                      <span>+260 Kč</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      Intenzivní výživa po barvení a melíru, obnovuje strukturu a sílu vlasů.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-4 text-xs text-slate-500 border-t">
                Uvedené ceny jsou orientační. Konečná cena záleží na délce a hustotě vlasů a spotřebě materiálu.
                Vše vždy předem domluvíme na místě nebo ve zprávě.
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-16">
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
                  <div className="text-sm">Pondělí — 9:00–16:00</div>
                  <div className="text-sm">Středa — 9:00–16:00</div>
                  <div className="text-sm">Pátek — 9:00–16:00</div>
                  <div className="text-sm">Ostatní dny a pozdější časy po domluvě</div>
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
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" /> Zavolat
              </a>
            </div>
          </div>
        </section>

        {/* Footer + JSON-LD */}
        <footer className="relative z-10 border-top bg-white/60 backdrop-blur">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <SmartImage
                srcs={LOGO_TEXT}
                alt="Vlasy od Týnky – textové logo"
                className="h-5 w-auto object-contain"
                fallback={
                  <div
                    className="h-6 w-28 rounded-xl flex items-center justify-center font-semibold"
                    style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)", color: "white" }}
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
            </div>
          </div>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "HairSalon",
                name: "Vlasy od Týnky",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Zalužánská 1272",
                  addressLocality: "Mladá Boleslav",
                  addressCountry: "CZ",
                },
                url: "https://vlasy-od-tynky.netlify.app",
                sameAs: [IG_URL, FB_URL],
                areaServed: "Mladá Boleslav",
                availableService: ["Střih", "Barvení", "Melír", "Styling"],
                priceRange: "CZK",
                telephone: "+420725882820",
                acceptsReservations: true,
              }),
            }}
          />
        </footer>
      </div>
    </>
  );
}
