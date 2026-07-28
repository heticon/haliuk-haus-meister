import { ArrowUpRight, ChefHat, Hammer, Sofa, Truck, WashingMachine } from "lucide-react";

import { Reveal } from "./Reveal";

const services = [
  {
    icon: Sofa,
    title: "Möbelmontage",
    text: "Montage aller Arten von Möbeln — fachgerecht und millimetergenau.",
    items: ["Schränke", "Kommoden", "Regale", "Betten", "Tische", "Büromöbel"],
  },
  {
    icon: ChefHat,
    title: "Küchenmontage",
    text: "Professionelle Küchenmontage von der Planung bis zur Feinjustierung.",
    items: ["Einbau", "Ausrichtung", "Feinmontage", "Arbeitsplatten"],
  },
  {
    icon: WashingMachine,
    title: "Haushaltsgeräte",
    text: "Installation und sichere Befestigung Ihrer Geräte.",
    items: ["Backofen", "Geschirrspüler", "Waschmaschine", "Trockner", "Kühlschrank", "Dunstabzugshaube"],
  },
  {
    icon: Truck,
    title: "Umzugsservice",
    text: "Kompletter Umzug inklusive Möbelhandling — sorgfältig und geschützt.",
    items: ["Transport", "Abbau", "Verpackung", "Aufbau am neuen Standort"],
  },
  {
    icon: Hammer,
    title: "Kleine Reparaturen",
    text: "Schnelle Hilfe bei allen kleineren Montagearbeiten.",
    items: ["Regale", "Spiegel", "Gardinenstangen", "TV-Halterungen", "Kleine Montagearbeiten"],
  },
];

export function Services() {
  return (
    <section id="leistungen" className="section bg-sand">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Leistungen</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Alles rund um Montage, Installation und Umzug.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Ein Ansprechpartner für Ihr gesamtes Projekt — von der einzelnen Wandhalterung bis zur
            kompletten Küche.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.title}
              delay={index * 80}
              className="group h-full rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-royal transition-colors duration-500 group-hover:bg-royal group-hover:text-royal-foreground">
                  <service.icon className="size-5" aria-hidden />
                </span>
                <ArrowUpRight
                  className="size-5 text-muted-foreground/50 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden
                />
              </div>
              <h3 className="mt-7 text-xl font-bold text-royal">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground/75"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal
            as="li"
            delay={400}
            className="flex h-full flex-col justify-between rounded-3xl bg-royal p-8 text-royal-foreground shadow-soft"
          >
            <div>
              <h3 className="text-xl font-bold">Individuelle Anfrage?</h3>
              <p className="mt-3 text-sm leading-relaxed text-royal-foreground/75">
                Beschreiben Sie kurz Ihr Vorhaben. Sie erhalten ein transparentes Festpreisangebot —
                kostenlos und unverbindlich.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-8 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-background px-6 text-sm font-semibold text-royal transition-transform duration-300 hover:-translate-y-0.5"
            >
              Angebot anfordern
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
