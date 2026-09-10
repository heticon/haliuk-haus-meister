import kitchenTall from "@/assets/1.jpg";
import kitchenGas from "@/assets/2.jpg";
import bathVanity from "@/assets/3.jpg";
import wardrobeShelves from "@/assets/4.jpg";
import detail from "@/assets/portfolio-detail.jpg";
import living from "@/assets/portfolio-living.jpg";
import office from "@/assets/portfolio-office.jpg";
import umzug from "@/assets/portfolio-umzug.jpg";
import wardrobe from "@/assets/portfolio-wardrobe.jpg";

import { Reveal } from "./Reveal";

const items = [
  { src: wardrobe, alt: "Montierter Einbaukleiderschrank in Eiche und Grau", label: "Küche" },
  { src: living, alt: "Wohnzimmer mit montierter Medienwand und Regalen", label: "Feinmontage" },
  { src: detail, alt: "Ausrichtung einer Küchenfront mit Wasserwaage", label: "Küche" },
  { src: office, alt: "Montierte Büromöbel in einem modernen Großraumbüro", label: "Wohnbereich" },
  { src: umzug, alt: "Sorgfältig verpacktes Sofa beim Umzug", label: "Umzug" },
  {
    src: kitchenTall,
    alt: "Montierte Küchenzeile mit Hochschränken und Einbaugeräten",
    label: "Küche",
  },
  {
    src: kitchenGas,
    alt: "Fertig montierte Küche mit Gaskochfeld und Holzfronten",
    label: "Küche",
  },
  {
    src: bathVanity,
    alt: "Montierter Badezimmer-Waschtisch mit beleuchtetem Spiegel",
    label: "Bad",
  },
  {
    src: wardrobeShelves,
    alt: "Montierter Einbaukleiderschrank mit offenen Regalfächern",
    label: "Feinmontage",
  },
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.src} delay={(index % 3) * 90}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-center transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
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
