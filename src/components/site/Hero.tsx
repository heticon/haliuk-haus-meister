import { ArrowRight, Check, Phone, Star } from "lucide-react";

import heroAsset from "@/assets/hero-kitchen-photo.jpg.asset.json";

const badges = ["Zuverlässig", "Präzise", "Saubere Arbeit", "Privat & Gewerbe"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-background pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-royal">
              Möbelmontage in Hamburg
            </p>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] text-royal sm:text-5xl lg:text-[3.75rem]">
              Hochwertige Möbel- &amp; Küchenmontage mit höchster Präzision.
            </h1>

            <p className="mt-6 text-base font-semibold text-foreground sm:text-lg">
              Zuverlässig. Präzise. Termintreu.
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Professionelle Möbelmontage, Küchenmontage, Umzugsservice und kleinere Reparaturarbeiten
              für Privat- und Geschäftskunden.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-royal px-8 text-sm font-semibold text-royal-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
              >
                Kostenloses Angebot anfordern
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href="tel:+4915161584948"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border px-8 text-sm font-semibold text-royal transition-all duration-300 hover:-translate-y-0.5 hover:border-royal/40 hover:bg-secondary"
              >
                <Phone className="size-4" aria-hidden />
                Jetzt anrufen
              </a>
            </div>

            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
              {badges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <Check className="size-4 text-royal" aria-hidden />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={heroAsset.url}
                alt="Moderne weiße Einbauküche mit Kücheninsel und Einbaugeräten"
                width={1920}
                height={1271}
                fetchPriority="high"
                className="aspect-[4/3] size-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 left-4 hidden items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-lift sm:flex lg:-left-10">
              <div className="flex -space-x-2">
                {["JS", "MK", "TW"].map((initials) => (
                  <span
                    key={initials}
                    className="inline-flex size-9 items-center justify-center rounded-full border-2 border-card bg-royal text-[0.65rem] font-semibold text-royal-foreground"
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-royal text-royal" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-muted-foreground">4,9 / 5 · über 300 Bewertungen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
