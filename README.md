# Alif Laam Meem Jewellers — landing page

A responsive, static multi-page website for Alif Laam Meem Jewellers, Al Rehman Garden, Lahore.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Before publishing

- Add the shop's WhatsApp number in `assets/js/site-config.js` (`whatsappNumber`, digits only with country code). WhatsApp inquiry links remain inactive until this is filled in.
- Replace the product and shop photo placeholders with the shop's real photos.
- Replace the collection, product, and story placeholders with details approved by the owner.
- Add the exact storefront address, phone number, and opening hours on `contact.html`.
- The Google Maps link searches the Al Rehman Garden area; it is not an exact shop pin.

No online checkout, prices, inventory claims, or unprovided contact details are configured.

## Tests

Run the local content and navigation checks with:

```sh
python3 -m unittest discover -s tests -v
node --test tests/test_site_js.mjs
```
