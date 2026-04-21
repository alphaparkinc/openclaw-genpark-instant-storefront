# Integration Notes — genpark-instant-storefront

This document explains how to wire the **genpark-instant-storefront** skill
into common agent frameworks, workflow engines, and the GenPark/OpenClaw
platform itself.

---

## 1. OpenClaw (Native)

OpenClaw auto-discovers skills placed in the `skills/` directory that contain
a valid `SKILL.md` file. No extra configuration is required.

```
your-openclaw-workspace/
└── skills/
    └── genpark-instant-storefront/   ← clone here
        ├── SKILL.md                  ← auto-detected
        └── ...
```

Once cloned, restart your OpenClaw agent. The skill will appear in the
`/skills list` output and will activate automatically when any trigger phrase
(see `SKILL.md`) is detected in conversation.

---

## 2. LangChain (Python)

```python
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from pathlib import Path

# Load the skill definition as the system prompt
skill_md = Path("skills/genpark-instant-storefront/SKILL.md").read_text()

prompt = ChatPromptTemplate.from_messages([
    ("system", f"You are an AI e-commerce launch assistant.\n\n{skill_md}"),
    ("human",  "{product_description}"),
])

chain = prompt | ChatOpenAI(model="gpt-4o", temperature=0.7)

result = chain.invoke({
    "product_description": "I want to sell handmade soy candles"
})
print(result.content)
```

---

## 3. OpenAI Assistants API

1. Create an Assistant and paste the contents of `SKILL.md` into the
   **Instructions** field.
2. Set the model to `gpt-4o` (or `gpt-4o-mini` for cost savings).
3. Enable **File Search** if you want the assistant to reference uploaded
   product catalogs or brand guidelines.
4. Start a Thread with a user message like:
   `"I want to sell [product]. Build my storefront."`

---

## 4. Genpark Agent Platform

### Step 1 — Register the Skill

Add an entry to your Genpark `agent-config.json`:

```json
{
  "skills": [
    {
      "id": "genpark-instant-storefront",
      "version": "1.0.0",
      "source": "https://github.com/alphaparkinc/openclaw-genpark-instant-storefront",
      "skill_file": "SKILL.md",
      "trigger_mode": "auto",
      "category": "e-commerce"
    }
  ]
}
```

### Step 2 — Trigger via API

```http
POST /v1/agent/run
Content-Type: application/json

{
  "skill_id": "genpark-instant-storefront",
  "input": {
    "product": "I want to sell handmade leather wallets",
    "image_url": "https://cdn.example.com/wallet.jpg"
  }
}
```

### Step 3 — Consume the Response

The agent returns a structured Markdown document. Pipe it into your
storefront CMS, a Notion page, or a Google Doc using the Genpark
output adapters.

---

## 5. n8n / Make (No-Code Workflows)

### n8n Example

| Node | Type | Config |
|---|---|---|
| Trigger | Webhook | Receives `{ product, image_url }` |
| Skill Call | HTTP Request | `POST` to your OpenAI-compatible endpoint with `SKILL.md` as system prompt |
| Parse Output | Set | Extract brand names, ad copy sections via Markdown parser |
| Publish | Notion / Google Sheets | Write storefront copy to your preferred CMS |

### Make (Integromat) Equivalent

Use the **OpenAI > Create Chat Completion** module, set the system message to
the contents of `SKILL.md`, and chain it with a **Google Docs > Create Document**
module to auto-generate a branded brief.

---

## 6. REST API Wrapper (Express.js)

A minimal Express server that exposes this skill over HTTP:

```js
// server.js
const express = require("express");
const OpenAI  = require("openai").default;
const fs      = require("fs");
const path    = require("path");

const app    = express();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const SKILL  = fs.readFileSync(
  path.join(__dirname, "SKILL.md"), "utf-8"
);

app.use(express.json());

app.post("/generate", async (req, res) => {
  const { product, image_url } = req.body;
  if (!product) return res.status(400).json({ error: "product is required" });

  const userMsg = image_url
    ? `I want to sell: ${product}\nProduct photo: ${image_url}`
    : `I want to sell: ${product}`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: SKILL },
      { role: "user",   content: userMsg },
    ],
  });

  res.json({ result: completion.choices[0].message.content });
});

app.listen(3000, () => console.log("Skill server running on :3000"));
```

```bash
curl -X POST http://localhost:3000/generate \
  -H "Content-Type: application/json" \
  -d '{"product": "sustainable bamboo toothbrushes"}'
```

---

## 7. Known Limitations & Extension Points

| Limitation | Workaround |
|---|---|
| No actual Meta Ads API call | Pair with a Meta Marketing API integration node |
| No image understanding without vision model | Use `gpt-4o` (supports image URLs) |
| No live pricing data | Add a web-search tool call to fetch competitor prices |
| Output is Markdown only | Post-process with a Markdown-to-HTML renderer |

---

## 8. Versioning

- Current version: **1.0.0**
- Breaking changes will bump the major version in `SKILL.md` metadata.
- Subscribe to the GitHub repository to receive update notifications.
