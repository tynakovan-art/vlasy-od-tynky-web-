import React, { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { Facebook, Instagram, MapPin, Clock, Phone, Scissors } from "lucide-react";

/* Obrázek s fallbackem + výkon (lazy, decoding, width/height, webp fallback) */
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
  eager?: boolean;
}) {
  const [i, setI] = useState(0);
  const loading = eager ? "eager" : "lazy";
  const fetchPriority = eager ? ("high" as const) : undefined;

  const tryWebp = (src: string) =>
    src.endsWith(".png") ? src.replace(".png", ".webp") : src;

  if (i < srcs.length) {
    return (
      <picture>
        <source srcSet={tryWebp(srcs[i])} type="image/webp" />
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
      </picture>
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
  const LOGO_TEXT = ["/logo-text.png"];
  const LOGO_SILUETY = ["/logo-siluety.png"];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ... celý obsah webu: Hero, Akce, Služby, O mně, Ceník, Kontakt, Poděkování, Footer ... */}
    </div>
  );
}