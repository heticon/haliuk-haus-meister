import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { faqs } from "../content";

export default defineTool({
  name: "search_faq",
  title: "FAQ durchsuchen",
  description:
    "Durchsucht die häufigen Fragen zu Preisen, Anfahrt, Dauer, Garantie, Einsatzgebiet und Zahlungsarten.",
  inputSchema: {
    query: z.string().optional().describe("Optionaler Suchbegriff, z. B. 'Garantie'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.trim().toLowerCase();
    const matches = needle
      ? faqs.filter((faq) => `${faq.q} ${faq.a}`.toLowerCase().includes(needle))
      : faqs;

    const text = matches.length
      ? matches.map((faq) => `Q: ${faq.q}\nA: ${faq.a}`).join("\n\n")
      : "Keine passende Frage gefunden.";

    return { content: [{ type: "text", text }], structuredContent: { faqs: matches } };
  },
});
