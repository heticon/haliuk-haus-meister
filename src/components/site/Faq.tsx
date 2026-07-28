import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Was kostet eine Möbelmontage?",
    a: "Die Kosten richten sich nach Umfang und Aufwand. Standardmontagen beginnen bei 49 € pro Stunde, größere Projekte rechnen wir zum Festpreis ab. Sie erhalten das Angebot vor Auftragsbeginn schriftlich.",
  },
  {
    q: "Fallen Anfahrtskosten an?",
    a: "Im Umkreis von 30 km ist die Anfahrt kostenfrei. Darüber hinaus berechnen wir eine transparente Pauschale, die im Angebot ausgewiesen ist.",
  },
  {
    q: "Wie lange dauert eine Montage?",
    a: "Einzelne Möbelstücke montieren wir meist in 30 bis 90 Minuten. Eine komplette Küche benötigt je nach Größe einen bis zwei Arbeitstage.",
  },
  {
    q: "Gibt es eine Garantie auf die Montage?",
    a: "Ja. Auf unsere Montageleistung geben wir 24 Monate Gewährleistung. Wir sind zusätzlich haftpflichtversichert.",
  },
  {
    q: "In welchen Gebieten arbeiten Sie?",
    a: "Wir sind deutschlandweit im Einsatz, mit Schwerpunkt auf den Ballungsräumen. Für überregionale Projekte erstellen wir ein individuelles Angebot.",
  },
  {
    q: "Welche Zahlungsmethoden akzeptieren Sie?",
    a: "Barzahlung, EC-Karte und Überweisung auf Rechnung. Geschäftskunden rechnen wir auf Wunsch monatlich ab.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section bg-background">
      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
            Häufige Fragen.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Ihre Frage ist nicht dabei? Rufen Sie uns an — wir antworten direkt.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-border">
                <AccordionTrigger className="py-6 text-left font-display text-base font-bold text-royal hover:no-underline sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-7 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
