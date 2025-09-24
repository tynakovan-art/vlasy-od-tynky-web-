import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Obrázek s fallbackem + výkon (lazy, decoding, width/height) */
function SmartImage({
  srcs,
  alt,
  className,
  w,
  h,
  eager = false,
}: {
  srcs: string[];
  alt: string;
  className?: string;
  w?: number;
  h?: number;
  eager?: boolean; // true = bez lazy (např. v HERO), jinak lazy
}) {
  const [i, setI] = useState(0);
  const loading = eager ? "eager" : "lazy";
  const fetchPriority = eager ? ("high" as const) : undefined;

  if (i < srcs.length) {
    return (
      <img
        src={srcs[i]}
        alt={alt}
        className={className}
        onError={() => setI((v) => v + 1)}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        width={w}
        height={h}
      />
    );
  }
  return (
    <div
      className={`flex items-center justify-center rounded-xl text-white ${className ?? ""}`}
      style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
    >
      <Scissors className="h-6 w-6" />
    </div>
  );
}

export default function Site() {
  /* === SOUBORY V /public === */
  const LOGO_TEXT = ["/logo-text.png"];         // textové logo – HERO + vodoznak „Děkuji“
  const LOGO_SILUETY = ["/logo-siluety.png"];   // siluety – navbar + vodoznak v ceníku

  /* Adresa (sjednocená) */
  const ADDRESS_LINE1 = "Zalužanská 1272";
  const ADDRESS_CITY = "293 01 Mladá Boleslav";
  const ADDRESS_DISTRICT = "Mladá Boleslav III";
  const ADDRESS_COUNTRY = "Česko";

  /* Odkazy a kontakty */
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
          <a href="#hero" className="flex items-center gap-3" aria-label="Přejít na začátek stránky">
            <SmartImage
              srcs={LOGO_SILUETY}
              alt="Vlasy od Týnky – logo"
              className="h-9 w-auto object-contain"
              w={160}
              h={36}
              eager
            />
            <span className="font-semibold">Vlasy od Týnky</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Hlavní navigace">
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
          {/* Levý sloupec – NADPIS přesně dle přání */}
          <div>
            {/* Badge s datem otevření (ikonka = dveře) */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white mb-4"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              aria-label="Otevírám od 1. 10. 2025"
            >
              🚪 Otevírám 1.&nbsp;10.&nbsp;2025
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="leading-tight"
            >
              <span className="block text-3xl md:text-4xl font-semibold">Kadeřnictví</span>
              <span
                className="block text-4xl md:text-5xl font-semibold mt-1"
                style={{
                  background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Vlasy od Týnky
              </span>
              <span className="block text-2xl md:text-3xl font-medium mt-1">Mladá Boleslav</span>
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

          {/* Pravý sloupec – karta s logem */}
          <div className="md:justify-self-end relative">
            <div
              className="absolute -inset-6 rounded-[2rem] opacity-20 blur-2xl"
              style={{ background: "linear-gradient(135deg,#6aa2ff,#b57bff,#ff7ad6)" }}
              aria-hidden
            />
            <div className="relative rounded-[2rem] border bg-white/70 backdrop-blur p-8 shadow-xl text-center overflow-hidden">
              <SmartImage
                srcs={LOGO_TEXT}
                alt="Vlasy od Týnky – logo"
                className="mx-auto mb-2 h-32 w-auto object-contain"
                w={320}
                h={128}
                eager
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
      </section>

      {/* DALŠÍ SEKCE – Akce, Služby, O mně, Ceník, Kontakt+Mapa, Poděkování, Footer ... */}
    </div>
  );
}
