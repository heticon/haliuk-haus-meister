import { defineTool } from "@lovable.dev/mcp-js";

import { company } from "../content";

export default defineTool({
  name: "get_contact_info",
  title: "Kontaktdaten abrufen",
  description:
    "Liefert Kontaktdaten, Öffnungszeiten und Einsatzgebiet von Haliuk Möbelbau (öffentliche Firmenangaben).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      `${company.name} — ${company.tagline}`,
      company.description,
      `Telefon: ${company.phone}`,
      `WhatsApp: ${company.whatsapp}`,
      `E-Mail: ${company.email}`,
      `Einsatzgebiet: ${company.serviceArea}`,
      "Öffnungszeiten:",
      ...company.hours.map((h) => `- ${h.days}: ${h.time}`),
    ].join("\n");

    return { content: [{ type: "text", text }], structuredContent: { company } };
  },
});
