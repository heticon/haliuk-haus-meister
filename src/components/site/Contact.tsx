import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "./Reveal";

const hours = [
  ["Montag – Freitag", "07:00 – 19:00"],
  ["Samstag", "09:00 – 16:00"],
  ["Sonntag", "Nach Vereinbarung"],
];

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      `Name: ${data.get("name") ?? ""}`,
      `E-Mail: ${data.get("email") ?? ""}`,
      `Telefon: ${data.get("phone") ?? ""}`,
      `Leistung: ${data.get("service") ?? ""}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:info@haliuk-moebelbau.de?subject=${encodeURIComponent(
      "Anfrage über die Website",
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="kontakt" className="section bg-sand">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Lassen Sie Ihre Möbel professionell montieren.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Senden Sie uns Ihre Anfrage — Sie erhalten innerhalb von 24 Stunden ein kostenloses
            Festpreisangebot.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="E-Mail" name="email" type="email" required />
              <Field label="Telefon" name="phone" type="tel" />
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Leistung
                </label>
                <select
                  id="service"
                  name="service"
                  className="h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
                >
                  <option>Möbelmontage</option>
                  <option>Küchenmontage</option>
                  <option>Haushaltsgeräte</option>
                  <option>Umzugsservice</option>
                  <option>Kleine Reparaturen</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Ihr Projekt
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Beschreiben Sie kurz, was montiert werden soll."
                  className="rounded-xl border border-input bg-background p-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/25"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-royal px-8 text-sm font-semibold text-royal-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary sm:w-auto"
                >
                  Kostenloses Angebot anfordern
                </button>
                <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                  {sent
                    ? "Ihre Anfrage wird in Ihrem E-Mail-Programm geöffnet. Wir melden uns innerhalb von 24 Stunden."
                    : "Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet."}
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <ul className="grid gap-5">
                <ContactRow icon={Phone} label="Telefon" value="+49 152 1234 5678" href="tel:+4915212345678" />
                <ContactRow icon={MessageCircle} label="WhatsApp" value="Direkt schreiben" href="https://wa.me/4915212345678" />
                <ContactRow icon={Mail} label="E-Mail" value="info@haliuk-moebelbau.de" href="mailto:info@haliuk-moebelbau.de" />
                <ContactRow icon={MapPin} label="Adresse" value="Musterstraße 12, 10115 Berlin" />
              </ul>

              <div className="mt-8 border-t border-border pt-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Clock className="size-4" aria-hidden />
                  Öffnungszeiten
                </p>
                <dl className="mt-4 grid gap-2 text-sm">
                  {hours.map(([day, time]) => (
                    <div key={day} className="flex justify-between gap-4">
                      <dt className="text-muted-foreground">{day}</dt>
                      <dd className="font-medium text-foreground">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
              <iframe
                title="Standort von Haliuk Möbelbau auf Google Maps"
                src="https://www.google.com/maps?q=Musterstra%C3%9Fe%2012,%2010115%20Berlin&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 grayscale-[35%]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-royal">
        <Icon className="size-4" aria-hidden />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className="mt-0.5 block text-sm font-semibold text-foreground">{value}</span>
      </span>
    </>
  );

  return (
    <li>
      {href ? (
        <a href={href} className="flex items-center gap-4 transition-opacity hover:opacity-70">
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </li>
  );
}
