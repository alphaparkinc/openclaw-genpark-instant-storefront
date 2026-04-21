/**
 * genpark-instant-storefront — Demo Script
 *
 * This script demonstrates how to invoke the Instant Storefront skill
 * against an OpenAI-compatible endpoint (or any LLM API) using a
 * product description as input.
 *
 * Usage:
 *   node demo.js
 *   node demo.js --product "handmade leather wallets"
 *   node demo.js --product "organic dog treats" --image "https://example.com/dog-treat.jpg"
 *
 * Dependencies:
 *   npm install openai dotenv minimist
 *
 * Environment variables (.env):
 *   OPENAI_API_KEY=sk-...
 *   MODEL=gpt-4o          (optional, defaults to gpt-4o)
 */

"use strict";

const fs   = require("fs");
const path = require("path");
require("dotenv").config();
const OpenAI = require("openai").default;
const args   = require("minimist")(process.argv.slice(2));

// ─── Config ────────────────────────────────────────────────────────────────
const MODEL   = process.env.MODEL || "gpt-4o";
const PRODUCT = args.product || "handmade soy candles";
const IMAGE   = args.image   || null;

// Load the SKILL.md to use as the system prompt
const SKILL_PATH = path.join(__dirname, "..", "SKILL.md");
const SKILL_MD   = fs.readFileSync(SKILL_PATH, "utf-8");

// ─── Build messages ─────────────────────────────────────────────────────────
const systemPrompt = `You are an AI e-commerce launch assistant.
The following SKILL definition describes exactly how you must behave.
Follow it precisely.

---
${SKILL_MD}
---

Always respond with a single, well-structured Markdown document.`;

const userMessage = IMAGE
  ? `I want to sell: ${PRODUCT}\nProduct photo: ${IMAGE}`
  : `I want to sell: ${PRODUCT}`;

// ─── Run ────────────────────────────────────────────────────────────────────
async function main() {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  console.log("═══════════════════════════════════════════════════════════");
  console.log(" genpark-instant-storefront  |  Demo Run");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`  Product : ${PRODUCT}`);
  if (IMAGE) console.log(`  Image   : ${IMAGE}`);
  console.log(`  Model   : ${MODEL}`);
  console.log("───────────────────────────────────────────────────────────\n");

  const stream = await client.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system",  content: systemPrompt },
      { role: "user",    content: userMessage  },
    ],
    stream: true,
  });

  process.stdout.write("\n");
  for await (const chunk of stream) {
    const text = chunk.choices[0]?.delta?.content ?? "";
    process.stdout.write(text);
  }
  process.stdout.write("\n\n");
  console.log("───────────────────────────────────────────────────────────");
  console.log(" ✅  Done. Copy the output above into your storefront builder.");
  console.log("═══════════════════════════════════════════════════════════\n");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
