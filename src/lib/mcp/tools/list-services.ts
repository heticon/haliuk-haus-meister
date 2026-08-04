import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

import { services } from "../content";

export default defineTool({
  name: "list_services",
  title: "Leistungen auflisten",
  description:
    "Listet alle Montage- und Serviceleistungen von Haliuk Möbelbau mit Beschreibung und Einzelpositionen.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optionaler Suchbegriff, z. B. 'Küche' oder 'Umzug'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.trim().toLowerCase();
    const matches = needle
      ? services.filter((service) =>
          [service.title, service.text, ...service.items]
            .join(" ")
            .toLowerCase()
            .includes(needle),
        )
      : services;

    const text = matches.length
      ? matches
          .map((s) => `## ${s.title}\n${s.text}\n- ${s.items.join("\n- ")}`)
          .join("\n\n")
      : "Keine passende Leistung gefunden.";

    return { content: [{ type: "text", text }], structuredContent: { services: matches } };
  },
});
