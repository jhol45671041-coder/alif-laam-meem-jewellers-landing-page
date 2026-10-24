import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const script = await readFile(new URL("../assets/js/site.js", import.meta.url), "utf8");

function bootSite(whatsappNumber = "") {
  const menuHandlers = {};
  const documentHandlers = {};
  const linkHandlers = {};
  const classes = new Set();
  const attributes = { "aria-expanded": "false", "aria-label": "Open menu" };
  const status = { hidden: true, textContent: "", focus() {} };
  const link = {
    href: "#whatsapp-status",
    target: "",
    rel: "",
    dataset: { whatsappMessage: "Hello from the test" },
    addEventListener(type, handler) { linkHandlers[type] = handler; },
  };
  const menuButton = {
    getAttribute(name) { return attributes[name] ?? null; },
    setAttribute(name, value) { attributes[name] = value; },
    addEventListener(type, handler) { menuHandlers[type] = handler; },
  };
  const header = {
    classList: {
      toggle(name, force) { force ? classes.add(name) : classes.delete(name); },
      remove(name) { classes.delete(name); },
    },
  };
  const navigation = { querySelectorAll() { return []; } };
  const document = {
    querySelector(selector) {
      if (selector === "[data-menu-toggle]") return menuButton;
      if (selector === "[data-navigation]") return navigation;
      if (selector === ".site-header") return header;
      if (selector === "[data-whatsapp-status]") return status;
      return null;
    },
    querySelectorAll(selector) { return selector === "[data-whatsapp-inquiry]" ? [link] : []; },
    addEventListener(type, handler) { documentHandlers[type] = handler; },
  };
  vm.runInNewContext(script, { document, window: { ALIF_SITE_CONFIG: { whatsappNumber } } });
  return { attributes, classes, documentHandlers, link, linkHandlers, menuHandlers, status };
}

test("unconfigured WhatsApp inquiry explains what setup is missing", () => {
  const site = bootSite();
  let prevented = false;
  site.linkHandlers.click({ preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(site.status.hidden, false);
  assert.match(site.status.textContent, /Add the shop WhatsApp number/);
});

test("configured WhatsApp inquiry builds a safe wa.me link", () => {
  const site = bootSite("+92 (300) 123-4567");
  assert.equal(site.link.href, "https://wa.me/923001234567?text=Hello%20from%20the%20test");
  assert.equal(site.link.target, "_blank");
  assert.equal(site.link.rel, "noopener noreferrer");
});

test("mobile menu exposes and restores its expanded state", () => {
  const site = bootSite();
  site.menuHandlers.click();
  assert.equal(site.attributes["aria-expanded"], "true");
  assert.equal(site.classes.has("is-menu-open"), true);
  site.documentHandlers.keydown({ key: "Escape" });
  assert.equal(site.attributes["aria-expanded"], "false");
  assert.equal(site.classes.has("is-menu-open"), false);
});
