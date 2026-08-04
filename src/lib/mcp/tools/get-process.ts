import { defineTool } from "@lovable.dev/mcp-js";

import { process as steps } from "../content";

export default defineTool({
  name: "get_process",
  title: "Ablauf abrufen",
  description: "Beschreibt den vierstufigen Ablauf von der Anfrage bis zur fertigen Montage.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: steps.map((s) => `${s.step}. ${s.title} — ${s.text}`).join("\n"),
      },
    ],
    structuredContent: { steps },
  }),
});
