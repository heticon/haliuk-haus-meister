import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "./Reveal";

const hours = [["Montag – Samstag", "08:00 – 18:00"]];

export function Contact() {
  return (
    <section id="kontakt" className="section bg-sand">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Kontakt</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Kontaktieren Sie uns.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Sie haben Fragen zu einer Montage oder möchten ein Angebot erhalten?
            Kontaktieren Sie uns direkt per Telefon, WhatsApp oder E-Mail.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <div className="flex flex-col gap-7">
              <ContactRow
                icon={Phone}
                label="Telefon"
                value="+49 151 61584948"
                href="tel:+4915161584948"
              />

              <ContactRow
                icon={MessageCircle}
                label="WhatsApp"
                value="Direkt schreiben"
                href="https://wa.me/4915161584948"
              />

              <ContactRow
                icon={Mail}
                label="E-Mail"
                value="info@haliukmoebelbau.de"
                href="mailto:info@haliukmoebelbau.de"
              />

              <ContactRow
                icon={MapPin}
                label="Adresse"
                value="Im Neugrabener Dorf 57, 21147 Hamburg"
              />

              <div className="border-t border-border pt-7">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Clock className="size-4" aria-hidden />
                  Öffnungszeiten
                </p>

                <dl className="mt-4 grid gap-2 text-sm">
                  {hours.map(([day, time]) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4"
                    >
                      <dt className="text-muted-foreground">{day}</dt>
                      <dd className="font-medium text-foreground">{time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Standort von Haliuk Möbelbau auf Google Maps"
              src="https://www.google.com/maps?q=Im%20Neugrabener%20Dorf%2057,%2021147%20Hamburg&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-96 w-full border-0 grayscale-[35%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
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
        <span className="block text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </span>

        <span className="mt-0.5 block text-sm font-semibold text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  return (
    <div>
      {href ? (
        <a
          href={href}
          className="flex items-center gap-4 transition-opacity hover:opacity-70"
        >
          {content}
        </a>
      ) : (
        <div className="flex items-center gap-4">{content}</div>
      )}
    </div>
  );
}