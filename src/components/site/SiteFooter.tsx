import logo from "@/assets/haliuk-logo.png";

const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const services = [
  "Möbelmontage",
  "Küchenmontage",
  "Haushaltsgeräte",
  "Umzugsservice",
  "Kleine Reparaturen",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-12 py-16 md:grid-cols-4 md:py-20">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Haliuk Möbelbau Logo"
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 object-contain"
            />

            <span className="font-display text-sm font-extrabold text-royal">
              Roman Haliuk Möbelbau
            </span>
          </div>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Möbel- und Küchenmontage, Geräteinstallation, Umzüge und Reparaturen.
          </p>
        </div>

        <nav aria-label="Footer Navigation">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Navigation
          </h2>

          <ul className="mt-5 grid gap-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Leistungen
          </h2>

          <ul className="mt-5 grid gap-3 text-sm text-foreground/80">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Kontakt
          </h2>

          <address className="mt-5 grid gap-3 text-sm not-italic text-foreground/80">
            <a
              href="tel:+4915161584948"
              className="transition-colors hover:text-primary"
            >
              +49 1516 1584948
            </a>

            <a
              href="mailto:info@haliukmoebelbau.de"
              className="transition-colors hover:text-primary"
            >
              info@haliukmoebelbau.de
            </a>

            <span className="text-muted-foreground">
              Roman Haliuk Möbelbau
              <br />
              Im Neugrabener Dorf 57
              <br />
              21147 Hamburg
            </span>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{"\u00a0"}Roman Haliuk Möbelbau. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}