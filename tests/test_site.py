from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
PAGE_NAMES = ("index.html", "collections.html", "about.html", "contact.html")


class JewellersLandingPageTests(unittest.TestCase):
    def test_requested_pages_exist_and_link_to_each_other(self):
        for page_name in PAGE_NAMES:
            with self.subTest(page=page_name):
                page_path = ROOT / page_name
                self.assertTrue(page_path.is_file(), f"Missing page: {page_name}")
                markup = page_path.read_text(encoding="utf-8")
                self.assertIn('aria-label="Main navigation"', markup)
                for destination in PAGE_NAMES:
                    self.assertIn(f'href="{destination}"', markup)

    def test_shop_location_is_used_without_a_made_up_street_address(self):
        contact = (ROOT / "contact.html").read_text(encoding="utf-8")
        self.assertIn("Al Rehman Garden, Lahore", contact)
        self.assertIn("Add exact shop address", contact)
        self.assertNotIn("Street 1", contact)

    def test_whatsapp_inquiries_are_configurable_and_not_fabricated(self):
        config = (ROOT / "assets" / "js" / "site-config.js").read_text(encoding="utf-8")
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertIn('whatsappNumber: ""', config)
        self.assertIn('data-whatsapp-inquiry', home)
        site_script = (ROOT / "assets" / "js" / "site.js").read_text(encoding="utf-8")
        self.assertIn("Add the shop WhatsApp number", site_script)

    def test_collection_cards_show_photo_placeholders_not_invented_inventory(self):
        collections = (ROOT / "collections.html").read_text(encoding="utf-8")
        self.assertIn("photo-placeholder", collections)
        self.assertIn("Add product photo", collections)
        self.assertIn("Add product name", collections)

    def test_styles_and_interactions_are_present(self):
        home = (ROOT / "index.html").read_text(encoding="utf-8")
        self.assertTrue((ROOT / "assets" / "css" / "site.css").is_file())
        self.assertTrue((ROOT / "assets" / "js" / "site.js").is_file())
        self.assertIn('name="viewport"', home)
        self.assertIn("prefers-reduced-motion", (ROOT / "assets" / "css" / "site.css").read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
