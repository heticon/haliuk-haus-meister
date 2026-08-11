import {
  BadgeEuro,
  CalendarCheck,
  Heart,
  Ruler,
  Smile,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";

import { Reveal } from "./Reveal";

const reasons = [
  { icon: Ruler, title: "Präzise Arbeit", text: "Millimetergenaue Montage nach Herstellervorgabe." },
  { icon: CalendarCheck, title: "Termintreu", text: "Verbindliche Zeitfenster, pünktliche Ankunft." },
  { icon: BadgeEuro, title: "Faire Preise", text: "Transparente und nachvollziehbare Angebote." },
  { icon: Sparkles, title: "Sauberes Arbeiten", text: "Geschützte Flächen, besenreine Übergabe." },
  { icon: Wrench, title: "Professionelles Werkzeug", text: "Markenwerkzeug und Messtechnik im Einsatz." },
  { icon: Users, title: "Erfahrene Monteure", text: "Geschultes Team mit jahrelanger Praxis." },
  { icon: Smile, title: "Freundlicher Service", text: "Klare Kommunikation, ruhige Arbeitsweise." },
  { icon: Heart, title: "Hohe Kundenzufriedenheit", text: "4,9 von 5 Sternen aus über 300 Bewertungen." },
];

export function WhyUs() {
  return (
    <section className="section bg-background">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Warum Haliuk</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Qualität, die man sieht — und Verlässlichkeit, die man spürt.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal as="li" key={reason.title} delay={(index % 4) * 70}>
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border text-primary">
                <reason.icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-bold text-royal">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reason.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
