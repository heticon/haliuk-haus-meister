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
    a: "Die Kosten richten sich nach Umfang und Aufwand. Standardmontagen beginnen bei 39 € pro Stunde, größere Projekte rechnen wir zum Festpreis ab. Sie erhalten das Angebot vor Auftragsbeginn schriftlich.",
  },
  {
    q: "Fallen Anfahrtskosten an?",
    a: "Die Anfahrtskosten hängen vom Einsatzort und Umfang des Auftrags ab. Die Kosten werden vor Auftragsbeginn transparent mitgeteilt.",
  },
  {
    q: "Wie lange dauert eine Montage?",
    a: "Die Dauer hängt von der Art, Anzahl und Größe der Möbel sowie vom Montageaufwand ab. Bei größeren Projekten besprechen wir den voraussichtlichen Zeitaufwand vorab.",
  },
  {
    q: "Gibt es eine Garantie auf die Montage?",
    a: "Wir führen unsere Montagearbeiten sorgfältig und fachgerecht aus. Sollte nach der Montage etwas nicht stimmen, sprechen Sie uns direkt an, damit wir die Situation prüfen und eine passende Lösung finden.",
  },
  {
    q: "In welchen Gebieten arbeiten Sie?",
    a: "Unser Schwerpunkt liegt in Hamburg und Umgebung. Für größere oder überregionale Projekte können Sie uns gerne direkt kontaktieren. Wir prüfen individuell, ob ein Einsatz möglich ist.",
  },
  {
    q: "Welche Zahlungsmethoden akzeptieren Sie?",
    a: "Die Zahlung ist je nach Auftrag per Überweisung oder nach individueller Vereinbarung möglich. Die Zahlungsbedingungen werden vor Auftragsbeginn transparent besprochen.",
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
