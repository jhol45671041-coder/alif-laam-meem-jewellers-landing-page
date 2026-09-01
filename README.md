# Alif Laam Meem Jewellers — Landing Page

A luxury single-page landing site for **Alif Laam Meem Jewellers** — pure 21K gold, bridal sets & gemstone jewellery.

## Live details wired into the page

| Detail | Value |
| --- | --- |
| WhatsApp / Phone | [+92 311 4817882](https://wa.me/923114817882) |
| Website | https://jhol45671041-coder.github.io/alif-laam-meem-jewellers/ |
| Instagram | [@alifl_aammeemjewellers](https://www.instagram.com/alifl_aammeemjewellers) |
| Facebook | https://www.facebook.com/share/1BUtcV9hP3/ |
| Location | [Al Rehman Square Mall, Shop # 8, Al Rehman Garden Phase 2, Sharaqpur, Lahore](https://maps.app.goo.gl/UECVETk9s7mBT7g5A) |
| Bank / IBAN | MCB Bank · `PK48 MUCB 1694 4424 8100 5829` |

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

- **Top bar** — call (`tel:`), website, store hours, social icons
- **Nav** — Home · About · Collections · Services · Reviews · Contact (smooth-scroll anchors) + "Book a Visit" (WhatsApp)
- **Hero** — CTA buttons, WhatsApp catalogue link, animated counters
- **About** — anchor CTAs, feature list
- **Collections** — category filters + 6 product cards, each with a WhatsApp enquiry link pre-filled for that product, plus Instagram catalogue link
- **Services** — 6 cards, each linking to a pre-filled WhatsApp message
- **Reviews** — Google Maps link to the store location
- **CTA banner** — WhatsApp appointment booking + `tel:` call button
- **Contact** — showroom directions (Google Maps), phone, WhatsApp, website; enquiry form that opens WhatsApp with the message pre-composed
- **Bank transfer** — MCB IBAN card with one-tap **Copy IBAN** and an **Open Bank App** button that launches the MCB Live app on the customer's phone (with store-page fallback), plus a "Paid already?" WhatsApp button for payment proof
- **Footer** — quick links (incl. website), collection links, contact links, newsletter, policy modals (Privacy / Terms / Exchange & Returns)
- **Floating** — WhatsApp chat bubble + back-to-top button

## Notes

- No dependencies, no build step; deploy by uploading `index.html` + `assets/` (this repo is hosted on GitHub Pages).
- Every WhatsApp button opens a chat with a pre-filled message relevant to the button you clicked.
