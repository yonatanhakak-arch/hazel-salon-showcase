import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Heart, Crown, MapPin, Phone, MessageCircle, Instagram, Facebook, Check, Star } from "lucide-react";
import { useState } from "react";
const nailsBlue = { url: "/salon/nails-blue.png" };
const nailsFrench = { url: "/salon/nails-french.png" };
const nailsBlack = { url: "/salon/nails-black.png" };
const nailsZebra = { url: "/salon/nails-zebra.png" };
const lashes = { url: "/salon/lashes.png" };

const SITE_TITLE = "הייזלר סלון קוסמטיקה | מניקור, לק ג'ל, ריסים וגבות בהוד השרון";
const SITE_DESC = "סטודיו בוטיק פרימיום בהוד השרון למניקור, לק ג'ל, למינציה לגבות והרמת ריסים. עבודה מדויקת, ציוד סטרילי ותוצאה שנשארת. קבעי תור בוואטסאפ.";
const OG_IMAGE = "/salon/nails-blue.png";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "הייזלר סלון קוסמטיקה",
  image: [OG_IMAGE],
  description: SITE_DESC,
  telephone: "+972-58-493-9275",
  priceRange: "₪₪",
  address: {
    "@type": "PostalAddress",
    addressLocality: "הוד השרון",
    addressCountry: "IL",
  },
  areaServed: "הוד השרון",
  sameAs: [
    "https://www.facebook.com/share/1FgcYoQ2nz/?mibextid=wwXIfr",
    "https://www.instagram.com/nailartbyshir?igsh=MTFtZzh0d2wxdWZsZA==",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "מניקור ולק ג'ל" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "למינציה לגבות" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "הרמת ריסים" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "צביעת ריסים" } },
  ],
};

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "keywords", content: "מניקור, לק ג'ל, למינציה לגבות, הרמת ריסים, צביעת ריסים, קוסמטיקה, הוד השרון, סלון יופי" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "he_IL" },
      { property: "og:site_name", content: "הייזלר סלון קוסמטיקה" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
});

const PHONE = "+972584939275";
const WA_NUMBER = "972584939275";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("היי, אשמח לקבוע תור 💅")}`;
const FB_LINK = "https://www.facebook.com/share/1FgcYoQ2nz/?mibextid=wwXIfr";
const IG_LINK = "https://www.instagram.com/nailartbyshir?igsh=MTFtZzh0d2wxdWZsZA==";
const SALON = "הייזלר סלון קוסמטיקה";

const trackClick = (eventName: string, label: string) => {
  if (typeof window !== "undefined") {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", eventName, {
        event_category: "engagement",
        event_label: label,
      });
    }
  }
};


const nailServices = [
  { name: "מילוי לק ג'ל", desc: "רענון וחידוש הבנייה הקיימת" },
  { name: "הסרת לק ג'ל", desc: "הסרה עדינה ללא פגיעה בציפורן" },
];

const browServices = [
  { name: "למינציה לגבות (Brow Lift)", desc: "גבות מלאות, מסודרות ומורמות" },
  { name: "הרמת ריסים (Lash Lift)", desc: "ריסים ארוכים ומורמים ל־6–8 שבועות" },
  { name: "צביעת ריסים", desc: "מבט מודגש ללא מסקרה" },
];


function Landing() {
  const [tab, setTab] = useState<"nails" | "brows">("nails");
  const services = tab === "nails" ? nailServices : browServices;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2 min-w-0">
            <img
              src="/apple-touch-icon.png"
              alt={SALON}
              className="site-logo shrink-0 rounded-full object-cover"
              data-image-slot="Site Logo"
            />
            <span className="truncate font-display font-extrabold text-lg tracking-tight">{SALON}</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">שירותים</a>
            <a href="#gallery" className="hover:text-foreground transition">גלריה</a>
            <a href="#why" className="hover:text-foreground transition">למה אנחנו</a>
            <a href="#contact" className="hover:text-foreground transition">צור קשר</a>
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClick("whatsapp_click", "WhatsApp Button")}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold shadow-[var(--shadow-soft)] hover:opacity-90 transition"
          >
            <MessageCircle className="h-4 w-4" />
            קביעת תור
          </a>

        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute top-40 -left-32 h-96 w-96 rounded-full bg-[var(--pink-soft)] blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-3 py-1 text-xs font-semibold text-primary">
              <Star className="h-3.5 w-3.5 fill-primary" />
              סטודיו בוטיק בהוד השרון
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
              הציפורניים והגבות שלך
              <span className="block bg-gradient-to-l from-primary to-[oklch(0.85_0.1_350)] bg-clip-text text-transparent">
                ראויות לטוב ביותר.
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
              {SALON} תיהני מעבודה מדויקת, ציוד סטרילי ברמה רפואית ותוצאה בוטיק שנשארת שבועות. חוויה שקטה, נעימה ומפנקת — בדיוק כמו שמגיע לך.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackClick("whatsapp_click", "WhatsApp Button")}
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-base font-bold shadow-[var(--shadow-glow)] hover:scale-[1.02] active:scale-100 transition"
              >
                <MessageCircle className="h-5 w-5" />
                לקביעת תור מהיר בוואטסאפ
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-base font-semibold hover:bg-secondary transition"
              >
                לתפריט השירותים
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> ציוד סטרילי</div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> עמידות עד 4 שבועות</div>
              <div className="flex items-center gap-1.5"><Check className="h-4 w-4 text-primary" /> יחס אישי</div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] border border-border bg-white">
              <img
                src={nailsFrench.url}
                alt="פרנץ׳ מנייקור מוקפד"
                className="h-full w-full object-cover"
                data-image-slot="Main Hero Photo Here"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block aspect-square w-40 rounded-2xl overflow-hidden border-4 border-background shadow-[var(--shadow-soft)]">
              <img src={lashes.url} alt="הרמת ריסים" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-[var(--shadow-soft)] border border-border">
              <Crown className="h-5 w-5 text-primary" />
              <div className="text-xs">
                <div className="font-bold">חוויית VIP</div>
                <div className="text-muted-foreground">יחס אישי לכל לקוחה</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-background to-[var(--pink-soft)]/30">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-widest text-xs">התפריט</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">שירותים ומחירים</h2>
            <p className="mt-4 text-muted-foreground">מחירון שקוף, עבודה מוקפדת, ותוצאה שמחזירה אותך שוב ושוב.</p>
          </div>

          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm">
              <button
                onClick={() => setTab("nails")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition ${tab === "nails" ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:text-foreground"}`}
              >
                מניקור ולק ג'ל
              </button>
              <button
                onClick={() => setTab("brows")}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition ${tab === "brows" ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]" : "text-muted-foreground hover:text-foreground"}`}
              >
                הרמת ריסים וגבות
              </button>
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.name} className="group rounded-2xl bg-card border border-border p-6 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 hover:border-primary/40 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClick("whatsapp_click", "WhatsApp Button")}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition"
                >
                  לקביעת תור ←
                </a>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-widest text-xs">גלריה</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">העבודות שלנו</h2>
            <p className="mt-4 text-muted-foreground">הצצה קטנה לעבודות אמיתיות מהסטודיו. כל אחת מהן — מדויקת, נקייה ומעוצבת אישית.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <GalleryItem src={nailsFrench.url} label="Gel Polish Design 1" ratio="aspect-square" />
            <GalleryItem src={nailsBlue.url} label="Gel Polish Design 2" ratio="aspect-square" />
            <GalleryItem src={nailsBlack.url} label="Gel Polish Design 3" ratio="aspect-square" />
            <GalleryItem src={nailsZebra.url} label="Gel Polish Design 4" ratio="aspect-square" />
            <GalleryItem src={lashes.url} label="Eyebrow Before & After Grid" ratio="aspect-[4/3]" className="col-span-2" />
            <GalleryItem src={nailsFrench.url} label="Nail Art Detail" ratio="aspect-[4/3]" className="col-span-2" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="py-20 md:py-28 bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase tracking-widest text-xs">למה אנחנו</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl font-black">היתרון של {SALON}</h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <Advantage
              icon={<Sparkles className="h-5 w-5" />}
              title="עמידות ג'ל אולטרה"
              desc="בניית לק ג'ל שנשארת מבריקה עד 4 שבועות בלי שבירות ובלי לזוז מהקצוות."
              image={nailsBlack.url}
              imageLabel="Gel Durability Photo"
            />
            <Advantage
              icon={<Heart className="h-5 w-5" />}
              title="הרמת ריסים בשיטת ה־Mapping"
              desc="שרטוט מדויק לכל עין — לתוצאה טבעית שמחמיאה לצורה ולעומק המבט שלך."
              image={lashes.url}
              imageLabel="Lash Mapping Photo"
            />
            <Advantage
              icon={<ShieldCheck className="h-5 w-5" />}
              title="סטריליזציה ברמה רפואית"
              desc="חיטוי מלא, כלים ארוזים לשימוש חד־פעמי ופרוטוקול היגיינה 100%."
            />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-[2rem] border border-border bg-gradient-to-br from-white to-[var(--pink-soft)]/50 p-8 md:p-12 shadow-[var(--shadow-soft)]">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-primary font-bold uppercase tracking-widest text-xs">צרי קשר</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-black">בואי נקבע לך תור</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  זמינות דרך וואטסאפ לשריון תור מיידי, או השאירי הודעה ונחזור אלייך תוך זמן קצר.
                </p>

                <div className="mt-8 space-y-4">
                  <ContactRow icon={<MapPin className="h-5 w-5" />} label="מיקום" value="הוד השרון" />
                  <ContactRow icon={<Phone className="h-5 w-5" />} label="טלפון" value="058-493-9275" href={`tel:${PHONE}`} />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow-[var(--shadow-soft)] hover:opacity-90 transition">
                    <MessageCircle className="h-4 w-4" /> וואטסאפ
                  </a>
                  <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold hover:bg-secondary transition">
                    <Instagram className="h-4 w-4" /> אינסטגרם
                  </a>
                  <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-5 py-3 text-sm font-bold hover:bg-secondary transition">
                    <Facebook className="h-4 w-4" /> פייסבוק
                  </a>
                </div>
              </div>

              <CallbackForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] items-center">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src="/apple-touch-icon.png"
              alt={SALON}
              className="site-logo shrink-0 rounded-full object-cover"
              data-image-slot="Site Logo"
            />
            <span className="font-display font-extrabold truncate">{SALON}</span>
            <span className="text-muted-foreground text-sm mr-2">· הוד השרון</span>
          </div>
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} כל הזכויות שמורות</div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="פתיחת וואטסאפ"
        className="fixed bottom-5 left-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] hover:scale-110 transition"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
      </a>
    </div>
  );
}

function GalleryItem({ src, label, ratio, className = "" }: { src: string; label: string; ratio: string; className?: string }) {
  return (
    <figure className={`group relative ${ratio} ${className} overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--shadow-soft)]`} data-image-slot={label}>
      <img src={src} alt={label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <figcaption className="absolute inset-x-2 bottom-2 rounded-lg bg-white/85 backdrop-blur px-2.5 py-1 text-[10px] font-semibold text-muted-foreground opacity-0 group-hover:opacity-100 transition">
        {label}
      </figcaption>
    </figure>
  );
}

function Advantage({ icon, title, desc, image, imageLabel }: { icon: React.ReactNode; title: string; desc: string; image?: string; imageLabel?: string }) {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 md:p-7 flex gap-5 hover:shadow-[var(--shadow-soft)] transition">
      {image ? (
        <div className="shrink-0 h-24 w-24 md:h-28 md:w-28 rounded-2xl overflow-hidden border border-border" data-image-slot={imageLabel}>
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>
      ) : (
        <div className="shrink-0 grid h-14 w-14 place-items-center rounded-2xl bg-[var(--pink-soft)] text-primary">
          {icon}
        </div>
      )}
      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white border border-border text-primary">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="font-bold truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition">{content}</a> : content;
}

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `היי ${SALON}! 👋%0aשמי ${name}%0aטלפון: ${phone}%0a${note ? `הודעה: ${note}` : "אשמח שתחזרו אליי"}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white border border-border p-6 shadow-sm">
      <h3 className="font-display text-xl font-bold">השאירי הודעה ונחזור אלייך</h3>
      <p className="mt-1 text-sm text-muted-foreground">מלאי פרטים ונחזור אלייך בהקדם 💕</p>
      <div className="mt-5 space-y-3">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם מלא"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
        />
        <input
          required
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="מספר טלפון"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
        />
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="איזה טיפול מעניין אותך? (לא חובה)"
          className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition"
        />
      </div>
      <button type="submit" className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold shadow-[var(--shadow-soft)] hover:opacity-90 transition">
        <MessageCircle className="h-4 w-4" />
        שליחה — נחזור אלייך
      </button>
    </form>
  );
}
