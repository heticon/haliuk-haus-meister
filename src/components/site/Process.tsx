import { Reveal } from "./Reveal";

const steps = [
  { title: "Kontakt aufnehmen", text: "Telefonisch, per E-Mail oder über das Formular." },
  { title: "Kostenloses Angebot erhalten", text: "Transparenter Festpreis innerhalb von 24 Stunden." },
  { title: "Termin vereinbaren", text: "Verbindliches Zeitfenster nach Ihrem Kalender." },
  { title: "Professionelle Montage", text: "Saubere Ausführung und Übergabe vor Ort." },
];

export function Process() {
  return (
    <section id="ablauf" className="section bg-royal text-royal-foreground">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-royal-foreground/60">Ablauf</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            In vier klaren Schritten zur fertigen Montage.
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <div
            aria-hidden
            className="absolute left-6 top-0 hidden h-px w-full bg-royal-foreground/20 md:block md:left-0 md:top-6"
          />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 110} className="relative">
              <span className="relative z-10 inline-flex size-12 items-center justify-center rounded-full border border-royal-foreground/30 bg-royal font-display text-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-royal-foreground/70">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
