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

## Trigger Phrases

The skill activates on any message matching these intent patterns.
Patterns are grouped by the primary user goal.

### 🚀 Launch Intent — "I want to start selling"
- `"Help me start selling online"`
- `"I want to launch my store"`
- `"I want to sell [product], create my store"`
- `"Set up an online shop for my [product]"`
- `"I have a product idea, help me launch it"`
- `"I'm starting a business selling [X]"`
- `"How do I start an online store for [product]?"`

### 🏪 Storefront Generation
- `"Generate a storefront for my [product]"`
- `"Build my brand from this photo: [URL]"`
- `"Create a store page for [product]"`
- `"Design a brand name and tagline for [product]"`
- `"I need a brand identity for my [niche] business"`

### 📣 Ad Copy & Social Media
- `"Write Facebook ads for my [product]"`
- `"Create Instagram ad copy for [product]"`
- `"Write a TikTok ad script for my [product]"`
- `"I need social media content to promote [product]"`
- `"Give me a social media marketing plan for [product]"`
- `"Write ad hooks for [product]"`
- `"Create a launch campaign for [product]"`

### 📝 Product Copy Only
- `"Write a product description for [product]"`
- `"I need SEO copy for my [product] listing"`
- `"Write a short blurb for [product]"`
- `"Create bullet points for my [product] page"`

### 👥 Audience & Pricing Research
- `"Who should I target for [product]?"`
- `"What's a good price for [product]?"`
- `"Help me find my target customer for [product]"`
- `"What demographics buy [product]?"`
- `"How much should I charge for [product]?"`

### 🌟 Full Pack (All Sections)
- `"Give me everything I need to launch [product]"`
- `"Full storefront pack for [product]"`
- `"Complete brand kit for [product]"`
- `"Build my entire brand from scratch — I'm selling [product]"`

---

## Full Example Output

**User input:** `"I want to sell handmade soy candles"`

```markdown
# 🛍️ Instant Storefront — Handmade Soy Candles

---

## 🏪 Brand Options

| # | Name | Rationale |
|---|---|---|
| 1 | **WickWarm** | Warm, tactile, evokes handcrafted quality |
| 2 | **LumaKindle** | Modern, aspirational, subtly poetic |
| 3 | **ScentCraft Co.** | Trustworthy, artisan, DTC-friendly |

**Recommended:** WickWarm — memorable, domain-friendly, emotionally resonant.

---

## ✨ Hero Copy

**Tagline:** Hand-poured light for your happiest moments.

**Sub-headline:** Artisan soy candles crafted in small batches — fill every
room with calm, warmth, and a scent you'll return to again and again.

---

## 📝 Product Description

### Long-form (SEO)
WickWarm soy candles are hand-poured using 100% natural soy wax, infused with
premium fragrance oils and wooden wicks that crackle softly as they burn.
Unlike paraffin candles, our soy blend burns up to 50% longer and releases no
harmful toxins — making it the cleaner, greener choice for your home.

Each candle is small-batch crafted to ensure consistent scent throw and a
clean, even burn from the first light to the last. Whether you're creating a
cosy reading nook, setting the mood for a dinner party, or gifting someone
special, WickWarm candles turn any moment into a memory.

*Key benefits: natural soy wax · wooden crackling wick · 50hr burn time ·
non-toxic · gift-ready packaging*

### Short-form (Mobile Card / Preview)
Natural soy wax, wooden crackling wick, 50-hour burn. Hand-poured in small
batches — because your home deserves better than ordinary.

---

## 📣 Social Ad Pack

### Hook (Video opening line / Carousel headline)
> "You've never smelled anything like this."

### Facebook / Instagram Body Copy
Tired of candles that burn out in 10 hours and smell like chemicals?

WickWarm soy candles are different. Hand-poured with 100% natural soy wax and
premium fragrance oils — they burn cleaner, longer, and smell incredible from
the first second to the last drop.

✅ 50-hour burn time
✅ No toxic paraffin
✅ Crackling wooden wick — ASMR for your home
✅ Beautiful gift-ready packaging

Perfect for yourself, or the person who has everything.

👉 Free shipping on first orders. Shop now.

### CTA
**"Shop Now — Free Shipping on Your First Order"**

### TikTok Script Outline
- 0:00–0:03 — Close-up of candle flame + crackling sound (hook: no voiceover)
- 0:03–0:08 — "I switched to soy candles and now I can't go back"
- 0:08–0:18 — Quick cuts: pouring process, packaging, lit candle in room
- 0:18–0:25 — "Link in bio — free shipping on first order"

### Hashtag Set (#15)
`#soycandlemaker #handmadecandles #candlelover #homedecor #smallbusiness
#wickwarm #naturalcandles #cottagecore #giftideas #aromatherapy
#cozyhome #candlecommunity #dtcbrand #shopsmall #sustainableliving`

---

## 👥 Target Audience Profile

| Attribute | Details |
|---|---|
| **Age** | 25–45 |
| **Gender** | 70% female, 30% male |
| **Interests** | Home décor, wellness, self-care, gifting, interior design |
| **Platforms** | Instagram (primary), Facebook, Pinterest, TikTok |
| **Psychographic** | Values slow living, artisan quality, sustainability; willing to pay premium for authenticity |
| **Purchase trigger** | Gift occasions (birthdays, holidays), self-treat, home refresh |

---

## 💰 Pricing & Budget

| Item | Recommendation |
|---|---|
| **Retail price** | $18–$28 per candle (8 oz), $32–$45 for gift sets |
| **Justification** | Comparable artisan brands (Homesick, P.F. Candle Co.) retail $24–$36; lead with value on launch |
| **Starter ad budget** | $5–$10/day on Meta (Facebook + Instagram) |
| **Expected CPM** | $8–$15 (home/lifestyle niche) |

---

## ❓ FAQ Block

**Q: Are your candles safe for pets?**
A: Yes — soy wax and our fragrance oils are non-toxic and pet-friendly when
used in a well-ventilated room. Always keep candles out of reach of animals.

**Q: How long does each candle burn?**
A: Our 8 oz candles are rated for up to 50 hours of burn time. For best
results, burn for 2–4 hours per session.

**Q: Do you ship internationally?**
A: Yes! We ship worldwide. International delivery typically takes 7–14 business
days. Free shipping applies to domestic orders over $35.

**Q: Can I customise the scent for a bulk order?**
A: Absolutely. We offer custom scent blending for orders of 24+ candles.
Contact us to discuss your brief.

**Q: What makes soy wax better than paraffin?**
A: Soy wax is plant-derived, burns cleaner with less soot, and is
biodegradable. It also holds fragrance more evenly, giving you a better scent
throw throughout the life of the candle.
```
