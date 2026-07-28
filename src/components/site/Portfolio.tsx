import detail from "@/assets/portfolio-detail.jpg";
import kitchen from "@/assets/portfolio-kitchen.jpg";
import living from "@/assets/portfolio-living.jpg";
import office from "@/assets/portfolio-office.jpg";
import umzug from "@/assets/portfolio-umzug.jpg";
import wardrobe from "@/assets/portfolio-wardrobe.jpg";

import { Reveal } from "./Reveal";

const items = [
  { src: wardrobe, alt: "Montierter Einbaukleiderschrank in Eiche und Grau", label: "Ankleide", w: 1024, h: 1280 },
  { src: living, alt: "Wohnzimmer mit montierter Medienwand und Regalen", label: "Wohnbereich", w: 1280, h: 960 },
  { src: kitchen, alt: "Fertig montierte Küche mit Kochinsel", label: "Küche", w: 1280, h: 960 },
  { src: detail, alt: "Ausrichtung einer Küchenfront mit Wasserwaage", label: "Feinmontage", w: 1024, h: 1280 },
  { src: office, alt: "Montierte Büromöbel in einem modernen Großraumbüro", label: "Büro", w: 1280, h: 960 },
  { src: umzug, alt: "Sorgfältig verpacktes Sofa beim Umzug", label: "Umzug", w: 1024, h: 1280 },
];

export function Portfolio() {
  return (
    <section id="referenzen" className="section bg-background">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Referenzen</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Ausgeführte Arbeiten.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Ein Auszug aus Projekten für Privathaushalte, Küchenstudios und Unternehmen.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((item, index) => (
            <Reveal key={item.label} delay={(index % 3) * 90} className="break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--royal)_70%,transparent),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <figcaption className="absolute bottom-5 left-6 translate-y-2 text-sm font-semibold text-royal-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
