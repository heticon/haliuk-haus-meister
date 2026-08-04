import { defineMcp } from "@lovable.dev/mcp-js";

import getContactInfoTool from "./tools/get-contact-info";
import getProcessTool from "./tools/get-process";
import listServicesTool from "./tools/list-services";
import searchFaqTool from "./tools/search-faq";

export default defineMcp({
  name: "haliuk-mobelbau-brand-experience",
  title: "Haliuk Möbelbau Brand Experience",
  version: "0.1.0",
  instructions:
    "Öffentliche Informationen zu Haliuk Möbelbau: Leistungen (Möbel- und Küchenmontage, Haushaltsgeräte, Umzug, kleine Reparaturen), Ablauf, häufige Fragen sowie Kontaktdaten und Öffnungszeiten.",
  tools: [listServicesTool, getProcessTool, searchFaqTool, getContactInfoTool],
});
