# Alif Laam Meem Jewellers — Landing Page

A luxury single-page landing site for **Alif Laam Meem Jewellers** (Karachi) — certified hallmarked gold, bridal sets, silver & gemstone jewellery.

## Live Preview

Serve locally and open in a browser:

```bash
python3 -m http.server 4173
# → http://localhost:4173
```

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Complete page — HTML + embedded CSS + JS (no build step) |
| `assets/images/` | AI-generated luxury jewellery photography |

## Sections & Links

Every link on the page is functional:

- **Top bar** — call (`tel:`), email (`mailto:`), store hours, social icons
- **Nav** — Home · About · Collections · Services · Reviews · Contact (smooth-scroll anchors) + "Book a Visit" (WhatsApp)
- **Hero** — CTA buttons, WhatsApp catalogue link, animated counters
- **About** — anchor CTAs, feature list
- **Collections** — category filters + 6 product cards, each with a WhatsApp enquiry link pre-filled for that product, plus Instagram catalogue link
- **Services** — 6 cards, each linking to a pre-filled WhatsApp message
- **Reviews** — Google Maps rating link
- **CTA banner** — WhatsApp appointment booking + `tel:` call button
- **Contact** — showroom directions (Google Maps), phone, WhatsApp, email; enquiry form that opens WhatsApp with the message pre-composed
- **Footer** — quick links, collection links, contact links, newsletter, policy modals (Privacy / Terms / Exchange & Returns)
- **Floating** — WhatsApp chat bubble + back-to-top button

## Notes

- Placeholder contact details (`+92 300 1234567`, `hello@aliflaammeem.pk`, social handles) — swap with the real ones in `index.html`.
- No dependencies, no build step; deploy by uploading `index.html` + `assets/`.
