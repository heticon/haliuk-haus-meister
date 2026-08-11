import craftsman from "@/assets/about-craftsman.jpg";

import { Reveal } from "./Reveal";

const points = [
  ["Handwerkliche Qualität", "Saubere Verarbeitung bis ins Detail — bei jedem Auftrag."],
  ["Sorgfältige Montage", "Millimetergenaue Ausrichtung und geprüfte Befestigung."],
  ["Respekt vor Ihrem Zuhause", "Abgedeckte Böden, geschützte Möbel, besenreine Übergabe."],
  ["Verlässliche Termine", "Wir kommen pünktlich und halten Zusagen ein."],
  ["Effiziente Arbeit", "Eingespielte Abläufe sparen Zeit und Kosten."],
  ["Sauberes Ergebnis", "Verpackung entsorgt, Arbeitsplatz aufgeräumt."],
];

const stats = [
  ["20+ Jahre", "Erfahrung"],
  ["24h", "Schnelle Rückmeldung"],
  ["100%", "Einsatz für jedes Projekt"],
];

export function About() {
  return (
    <section id="ueber-uns" className="section bg-background">
      <div className="shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Über uns</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Präzision, Pünktlichkeit und ein sauberes Ergebnis.
          </h2>
          <p className="mt-6 max-w-xl whitespace-pre-line text-base leading-relaxed text-muted-foreground">
            Haliuk Möbelbau ist ein familiengeführter Montagebetrieb mit Schwerpunkt auf Küchenmontage, Möbelaufbau und individuellen Lösungen im Innenbereich.{"\u00a0"}Wir verbinden langjährige handwerkliche Erfahrung mit modernem und zuverlässigem Arbeiten.{"\n\n"}Ob Küche, Möbel oder Haushaltsgeräte: Jeder Auftrag wird mit höchster Sorgfalt, Präzision und einem Blick fürs Detail ausgeführt. Unser Anspruch ist es, saubere Arbeit zu leisten und langfristiges Vertrauen bei unseren Kunden aufzubauen.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {points.map(([title, text]) => (
              <div key={title}>
                <dt className="font-display text-base font-bold text-royal">{title}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative">
            <img
              src={craftsman}
              alt="Erfahrener Monteur von Haliuk Möbelbau bei der Arbeit"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="mt-6 grid grid-cols-3 gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft sm:absolute sm:-bottom-10 sm:-left-8 sm:mt-0 sm:w-[22rem] sm:bg-card/95 sm:backdrop-blur">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <p className="font-display text-xl font-extrabold text-royal">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
