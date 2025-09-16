@@ -37,18 +37,19 @@ export default function Site() {
  /* Odkazy a kontakty */
  const IG_URL = "https://www.instagram.com/vlasy_od_tynky_mb";
  const FB_URL = "https://www.facebook.com/vlasyodtynky/";
  const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Zalužánská+1272,+Mladá+Boleslav";
  const MAP_URL =
    "https://www.google.com/maps/search/?api=1&query=Zalužánská+1272,+Mladá+Boleslav";
  const PHONE_RAW = "725882820";
  const PHONE_DISPLAY = "725 882 820";

  useEffect(() => {
    document.title = "Vlasy od Týnky – kadeřnictví Mladá Boleslav";
  }, []);

  /* Pomocné UI – dvojice cen: původní (přeškrtnutá) + sleva */
  /* Pomocná komponenta pro akční ceny: přeškrtnutá původní + zvýrazněná akční */
  const PriceStrike = ({
    oldLabel, // např. "od 650 Kč" nebo "+230 Kč"
    newLabel, // např. "od 520 Kč" nebo "+184 Kč"
    oldLabel,
    newLabel,
  }: {
    oldLabel: string;
    newLabel: string;
@@ -268,11 +269,12 @@ export default function Site() {
      {/* CENÍK – s bannerem a štítkem + vodoznak uvnitř karty (AKČNÍ CENY) */}
      <section id="cenik" className="relative z-10">
        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Banner nad ceníkem */}
          {/* Banner nad ceníkem – UPRAVENO pro přeškrtnuté ceny */}
          <div className="w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-center py-4 rounded-xl shadow-md my-6">
            <p className="text-lg font-semibold">🎉 Otevírací sleva –20 % celý říjen! 🎉</p>
            <p className="text-xs md:text-sm opacity-90">
              Platí na všechny služby pro nové klienty. Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro nové klienty po celý říjen 2025.            </p>
              Původní ceny jsou přeškrtnuté, zvýhodněné ceny platí pro nové klienty po celý říjen 2025.
            </p>
          </div>

          {/* Nadpis ceníku se štítkem */}
@@ -282,8 +284,10 @@ export default function Site() {
              –20 % říjen • noví klienti
            </span>
          </div>
          {/* Poznámka pod nadpisem – UPRAVENO pro přeškrtnuté ceny */}
          <p className="text-xs text-neutral-500 mb-4">
            Akce –20 % pro nové klienty platí do 31. 10. 2025. Nelze kombinovat s jinými slevami.
            Akce –20 % pro nové klienty platí do 31. 10. 2025. Přeškrtnuté částky jsou původní ceny,
            zvýrazněné částky jsou akční ceny po slevě.
          </p>

          {/* Karta ceníku */}
@@ -412,8 +416,17 @@ export default function Site() {
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5" />
                <div>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">Zalužánská 1272</a>
                  <div>Mladá Boleslav</div>
                  <a
                    href={MAP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline"
                  >
                    Zalužanská 1272
                  </a>
                  <div>293 01 Mladá Boleslav – Mladá Boleslav III</div>
                  <div>Okres Mladá Boleslav</div>
                  <div>Česko</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
@@ -426,7 +439,9 @@ export default function Site() {
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5" />
                <div>
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">{PHONE_DISPLAY}</a>
                  <a href={`tel:${PHONE_RAW}`} className="text-sm font-medium">
                    {PHONE_DISPLAY}
                  </a>
                  <div className="text-xs text-slate-500">Volejte nebo napište zprávu.</div>
                </div>
              </div>
@@ -474,7 +489,7 @@ export default function Site() {

                <div className="relative z-10">
                  <div className="text-lg font-semibold">Děkuji za návštěvu 💜</div>
                  <div className="mt-2 text-sm text-slate-600">Těším se na vás v salonu na Zalužánské.</div>
                  <div className="mt-2 text-sm text-slate-600">Těším se na vás v salonu na Zalužanské.</div>
                </div>
              </div>
            </div>
