import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote:
      "Die Küche wurde exakt nach Plan montiert. Pünktlich, ruhig und absolut sauber gearbeitet. Wir haben selten so ein professionelles Team erlebt.",
    name: "Sandra Keller",
    role: "Privatkundin, München",
  },
  {
    quote:
      "Wir haben unser komplettes Büro mit 40 Arbeitsplätzen ausstatten lassen. Alles stand innerhalb von zwei Tagen — ohne einen einzigen Kratzer.",
    name: "Michael Brandt",
    role: "Geschäftsführer, Frankfurt",
  },
  {
    quote:
      "Vom Angebot bis zur Übergabe alles transparent. Der Preis blieb exakt wie besprochen. Klare Empfehlung für jede Möbelmontage.",
    name: "Julia Hoffmann",
    role: "Privatkundin, Hamburg",
  },
  {
    quote:
      "Umzug inklusive Abbau und Aufbau. Sorgfältig verpackt, termingerecht geliefert und am neuen Standort perfekt aufgestellt.",
    name: "Tobias Neumann",
    role: "Privatkunde, Berlin",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 7000);
    return () => window.clearInterval(id);
  }, [count]);

  const active = testimonials[index];

  return (
    <section className="section bg-sand">
      <div className="shell">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Kundenstimmen</p>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              4,9 von 5 Sternen.
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
              </span>
              <span className="text-sm text-muted-foreground">Basierend auf über 300 Bewertungen</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Vorherige Bewertung"
              onClick={() => setIndex((i) => (i - 1 + count) % count)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-royal transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Nächste Bewertung"
              onClick={() => setIndex((i) => (i + 1) % count)}
              className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-card text-royal transition-colors hover:border-primary hover:text-primary"
            >
              <ChevronRight className="size-5" aria-hidden />
            </button>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <figure
            aria-live="polite"
            className="rounded-3xl border border-border bg-card p-10 shadow-soft md:p-16"
          >
            <blockquote className="font-display text-xl font-medium leading-snug text-royal sm:text-2xl lg:text-3xl">
              „{active.quote}“
            </blockquote>
            <figcaption className="mt-8 text-sm">
              <span className="font-semibold text-foreground">{active.name}</span>
              <span className="text-muted-foreground"> — {active.role}</span>
            </figcaption>
          </figure>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Bewertung ${i + 1} anzeigen`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-royal" : "w-4 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
