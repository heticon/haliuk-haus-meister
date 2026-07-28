import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Process } from "@/components/site/Process";
import { Services } from "@/components/site/Services";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";

const title = "Haliuk Möbelbau | Möbelmontage & Küchenmontage in Deutschland";
const description =
  "Professionelle Möbelmontage, Küchenmontage, Geräteinstallation, Umzugsservice und kleine Reparaturen für Privat- und Geschäftskunden. Präzise, termintreu, sauber.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Haliuk Möbelbau",
  description,
  telephone: "+49 152 1234 5678",
  email: "info@haliuk-moebelbau.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 12",
    postalCode: "10115",
    addressLocality: "Berlin",
    addressCountry: "DE",
  },
  areaServed: "DE",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "300" },
  openingHours: ["Mo-Fr 07:00-19:00", "Sa 09:00-16:00"],
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
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
