---
description: >
  Genpark Instant Storefront — AI-powered e-commerce launcher. Given a product
  description and/or a product photo, this skill generates a complete branded
  storefront (name, tagline, product copy, SEO meta, social-ad scripts, and a
  recommended ad-audience profile) in a single response. Use when a user wants
  to start selling a product online, launch a DTC brand, create marketing copy,
  or draft a social-media ad campaign from scratch.
license: MIT
metadata:
  version: "1.0.0"
  category: e-commerce
  tags:
    - storefront
    - e-commerce
    - ai-store-builder
    - social-ads
    - product-launch
  inspired_by: "https://nas.com"
---

# Genpark Instant Storefront Skill

This skill replicates the core UX loop of **Nas.com** — "Start selling from a
single photo" — inside the Genpark / OpenClaw agent framework. It enables any
agent to act as an AI e-commerce launcher that conjures a fully-formed branded
storefront and ad strategy from just a product idea or image.

## Core Capabilities

| Capability | Description |
|---|---|
| **Store Name Generator** | Creates 3–5 memorable brand names aligned with the product niche |
| **Tagline & Hero Copy** | Writes punchy headline + sub-headline for the storefront hero section |
| **Product Description** | Generates SEO-optimised long-form and short-form product descriptions |
| **Social Ad Scripts** | Produces ready-to-post Facebook / Instagram / TikTok ad copy + hooks |
| **Audience Profile** | Recommends a target-audience persona (age, interest, platform) |
| **Pricing Recommendation** | Suggests retail price bracket based on product category benchmarks |
| **FAQ Block** | Auto-generates 5 common customer questions + answers |

## Instructions

1. **Input Parsing**
   - Accept a free-form product description (e.g. *"I want to sell handmade
     soy candles"*) and/or a product image URL / base64 blob.
   - Extract: product category, unique differentiator, target emotion
     (gift / self-care / utility / status), and price sensitivity.

2. **Brand Generation**
   - Propose 3 brand-name options with rationale.
   - Write a hero tagline (≤ 10 words) and a supporting sub-headline (≤ 25
     words).

3. **Storefront Copy**
   - Long-form product description: 150–200 words, benefit-led, SEO keywords
     embedded.
   - Short-form blurb: 40 words max, for mobile preview cards.

4. **Ad Campaign Pack**
   - Hook (first 3 seconds of video / opening line of carousel): attention-
     grabbing, pattern-interrupt.
   - Body copy (Facebook/Instagram): 80–120 words.
   - CTA: clear action verb + urgency trigger.
   - Hashtag set: 10–15 relevant hashtags for organic reach.

5. **Audience & Pricing Brief**
   - Primary audience: demographics + psychographic summary.
   - Suggested retail price range with justification.
   - Recommended ad budget starting point.

6. **Output Format**
   Return a single structured Markdown document with clearly delineated
   sections so it can be copy-pasted directly into a storefront builder or
   social scheduler.

## Example Trigger Phrases

- *"Help me launch my product online"*
- *"I want to sell [X], create my store"*
- *"Generate a storefront for my [product]"*
- *"Write Facebook ads for my [product]"*
- *"Build my brand from this photo: [URL]"*

## Example Output (Abbreviated)

```markdown
## 🏪 Brand Options
1. **WickWarm** — evokes warmth and handcrafted quality
2. **LumaKindle** — modern, aspirational, unique
3. **ScentCraft Co.** — straightforward, trustworthy

## ✨ Hero Copy
**Tagline:** Hand-poured light for your happiest moments.
**Sub-headline:** Artisan soy candles that fill every room with calm, warmth,
and a scent you'll remember.

## 📝 Product Description (Long-form)
...

## 📣 Facebook Ad Copy
**Hook:** "You've never smelled anything like this."
**Body:** ...
**CTA:** Shop now — free shipping on first orders.

## 👥 Target Audience
Ages 25–45 | Interests: home décor, wellness, gifting | Platforms: Facebook, Instagram

## 💰 Pricing
Suggested retail: $18–$28 per candle | Ad budget starting point: $5/day
```
