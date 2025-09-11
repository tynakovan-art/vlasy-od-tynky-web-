import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

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
  const LOGO_MAIN = [
    "/logo-siluety.png",
    "/logo-siluety .png",
    "/logo%20siluety.png",
    "/logo%20siluety .png",
    "/logo siluety.png",
  ];
  const LOGO_TEXT = [
    "/logo-text.png",
    "/logo text .png",
    "/logo%20text%20.png",
    "/logo%20text.png",
    "/logo text.png",
  ];
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=Zalužánská+1272,+Mladá+Boleslav";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

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
              <a href="#sluzby" className="hover:opacity-70">Služby</a>
              <a href="#cenik" className="hover:opacity-70">Ceník</a>
              <a href="#kontakt" className="hover:opacity-70">Kontakt</a>
              <a href="#o-mne" className="hover:opacity-70">O&nbsp;mně</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section id="hero" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-16 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
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
                  href="#sluzby"
                  className="rounded-2xl px-5 py-3 border text-sm font-medium bg-white/70 backdrop-blur hover:bg-white"
                >
                  Prohlédnout služby
                </a>
              </div>
              <div className="mt-3 text-xs text-slate-500 flex items-center gap-2">
                <span>🌟</span><span>Individuální přístup • Příjemné prostředí</span>
              </div>
            </div>

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
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
                    >
                      <Facebook className="h-4 w-4" /> Napsat na Facebooku
                    </a>
                    <a
                      href={`tel:${PHONE_RAW}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
                      style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
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

        {/* Sekce Služby */}
        <section id="sluzby" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-2xl md:text-3xl font-semibold">S čím vám pomohu</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border bg-white/70 p-6">
                <div className="text-lg font-medium">Střihy</div>
                <p className="mt-2 text-sm text-slate-600">Dámský, pánský i dětský střih. Vždy s konzultací, mytím, foukanou a stylingem podle potřeby.</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-6">
                <div className="text-lg font-medium">Barvení & tónování</div>
                <p className="mt-2 text-sm text-slate-600">Jemné i výrazné změny. Tónování slouží k doladění odstínu a neutralizaci nežádoucích tónů.</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-6">
                <div className="text-lg font-medium">Melír / Mikromelír</div>
                <p className="mt-2 text-sm text-slate-600">Prosvětlení a struktura účesu pomocí jemných pramínků. Přirozený, vzdušný výsledek.</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-6">
                <div className="text-lg font-medium">Vlasová péče & regenerace</div>
                <p className="mt-2 text-sm text-slate-600">Hloubkové čištění pokožky a péče po barvení/melíru pro sílu a lesk vlasů.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O mně */}
        <section id="o-mne" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl font-semibold">O mně</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Jmenuji se <strong>Kristýna Hálová Vávrová</strong>. Vlasy jsou pro mě vášní a mým cílem je, aby každý zákazník odcházel spokojený a s účesem, který mu opravdu sedí. Nabízím dámské, pánské i dětské kadeřnické služby a vždy kladu důraz na individuální přístup a příjemnou atmosféru.
            </p>
          </div>
        </section>

        {/* Ceník */}
        <section id="cenik" className="relative z-10">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="text-2xl md:text-3xl font-semibold">Ceník</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border bg-white/70">{/* ... obsah ceníku ... */}</div>
          </div>
        </section>
      </div>
    </>
  );
}
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

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
  const LOGO_MAIN = ["/logo-siluety.png"];
  const LOGO_TEXT = ["/logo-text.png"];
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
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm border bg-white hover:bg-slate-50"
            >
              <Facebook className="h-4 w-4" /> Facebook
            </a>
            <a
              href={`tel:${PHONE_RAW}`}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
            >
              <Phone className="h-4 w-4" /> Zavolat {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
