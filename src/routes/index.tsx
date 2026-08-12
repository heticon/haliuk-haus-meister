import { createFileRoute } from "@tanstack/react-router";

import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { WhyUs } from "@/components/site/WhyUs";

const title = "Haliuk Möbelbau | Möbelmontage & Küchenmontage in Deutschland";
const description =
  "Professionelle Möbelmontage, Küchenmontage, Geräteinstallation, Umzugsservice und kleine Reparaturen für Privat- und Geschäftskunden. Präzise, termintreu, sauber.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Haliuk Möbelbau",
  description,
  telephone: "+49 151 61584948",
  email: "info@haliukmoebelbau.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Im Neugrabener Dorf 57",
    postalCode: "21147",
    addressLocality: "Hamburg",
    addressCountry: "DE",
  },
  areaServed: "DE",
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 08:00-18:00"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
