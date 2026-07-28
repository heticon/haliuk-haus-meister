import { ArrowRight, Check, Phone } from "lucide-react";

import heroImage from "@/assets/hero-kitchen.jpg";

const badges = ["Zuverlässig", "Präzise", "Saubere Arbeit", "Privat & Gewerbe"];

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Monteure bei der Montage einer modernen Luxusküche"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--royal)_92%,transparent)_0%,color-mix(in_oklab,var(--royal)_62%,transparent)_45%,color-mix(in_oklab,var(--royal)_28%,transparent)_100%)]"
      />

      <div className="shell w-full pb-20 pt-40 md:pb-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-royal-foreground/70">Möbelmontage in ganz Deutschland</p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-royal-foreground sm:text-5xl lg:text-[4.25rem]">
            Hochwertige Möbel- &amp; Küchenmontage mit höchster Präzision.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-royal-foreground/80 sm:text-lg">
            Professionelle Möbelmontage, Küchenmontage, Umzugsservice und kleinere Reparaturarbeiten
            für Privat- und Geschäftskunden.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-background px-8 text-sm font-semibold text-royal shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="tel:+4915212345678"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-royal-foreground/35 px-8 text-sm font-semibold text-royal-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-foreground/70 hover:bg-royal-foreground/10"
            >
              <Phone className="size-4" aria-hidden />
              Jetzt anrufen
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {badges.map((badge) => (
              <li key={badge} className="flex items-center gap-2 text-sm font-medium text-royal-foreground/85">
                <Check className="size-4 text-royal-foreground" aria-hidden />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
