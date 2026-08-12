import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import logo from "@/assets/haliuk-logo.png.asset.json";
import { cn } from "@/lib/utils";

const links = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-6 text-foreground">

        <a href="#top" className="flex items-center gap-3" aria-label="Haliuk Möbelbau Startseite">
          <img src={logo.url} alt="Haliuk Möbelbau Logo" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="brand-main font-display text-base font-extrabold tracking-tight text-royal">
            Haliuk <span className="brand-sub font-medium text-muted-foreground">Möbelbau</span>
          </span>
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-current/85 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+4915212345678"
            className="inline-flex items-center gap-2 text-sm font-medium text-current/85 transition-colors hover:text-primary"
          >
            <Phone className="size-4" aria-hidden />
            +49 152 1234 5678
          </a>
          <a
            href="#kontakt"
            className="inline-flex h-11 items-center rounded-full bg-royal px-6 text-sm font-semibold text-royal-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
          >
            Angebot anfordern
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="inline-flex size-11 items-center justify-center rounded-full border border-current/25 text-current transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/97 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile Navigation" className="shell flex flex-col gap-1 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-12 items-center justify-center rounded-full bg-royal px-6 text-sm font-semibold text-royal-foreground"
            >
              Kostenloses Angebot anfordern
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
