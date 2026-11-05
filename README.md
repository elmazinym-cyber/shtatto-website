# SHTATTO' — Restaurant & Concept Store Website

A one-page website for **Shtatto'**, the first concept store of the Medina of Marrakech —
restaurant, juice bar and rooftop, a couple of steps away from the Place des Épices.

## Preview

```bash
# from this folder:
npx http-server . -p 8096
# then open http://localhost:8096
```

Any static file server works — there is no build step.

## Live

- **Production site**: https://shtatto-website.vercel.app
- **Repository**: https://github.com/elmazinym-cyber/shtatto-website (public)

The repository is connected to Vercel, so **every push to `main` auto-deploys** to production.
Re-link any time with `vercel git connect --project shtatto-website`; deploy manually with
`vercel deploy --prod`.

## What's inside

| File | Purpose |
|------|---------|
| `index.html` | Page shell: hero, story, signature dishes, menu, gallery, visit, footer, stats, preloader |
| `css/style.css` | Moroccan design system + full motion system (reveals, Ken Burns, dust, tilt, steam) |
| `js/i18n.js` | Translation dictionary: **149 keys × 7 languages** (`window.LANGS`, `window.I18N`) |
| `js/menu-data.js` | The full printed menu: **89 items in 14 groups**, descriptions in all 7 languages |
| `js/main.js` | i18n engine, menu renderer, language switcher, motion & all interactions |
| `assets/img/` | 13 photos from the official Instagram [@shtattomarrakech](https://www.instagram.com/shtattomarrakech/) |

## Languages

The site ships in **7 languages**: English, Français, العربية, Español, Deutsch, Italiano, Русский.

- Switch with the **flag pill in the header** (flag + short code — EN / FR / AR / ES / DE / IT / RU,
  no language names; each option shows its flag + code, with full names kept as screen-reader
  labels). The choice is saved to `localStorage` and restored on the next visit; first-time
  visitors get their `navigator.language` if it is one of the seven, otherwise English.
- Switching updates `html[lang]` and `html[dir]` — **Arabic renders full RTL** (mirrored nav,
  reversed marquee, right-aligned menu rows with prices on the left).
- The menu keeps its **French base name** exactly as printed (e.g. *Thé à la menthe*) and adds
  a translation gloss per language (e.g. */ Mint tea*, */ Tee*, */ الشاي بالنعناع*).
- Translations live in `js/i18n.js` (page copy) and `js/menu-data.js` (`d` description field +
  `g`/`e` gloss per item). Group titles use `menu.g.*` keys.

## Design & motion notes

- **Colours**: parchment `#f7efe3`, terracotta `#b4522d`, brass `#d99b2e`, zellige teal `#1f6f6a`, espresso `#241a12`
- **Type**: Marcellus (display), Jost (body), Amiri + Cairo (Arabic)
- **Logo everywhere**: the official black-circle / white-diamond mark, recreated as an inline SVG
  path — header, footer, favicon, preloader, seal, map card, **the background pattern tiled across
  every section** (hero, story, stats, dishes, menu, gallery, visit, band, footer), the divider
  ornaments under each section heading, the marquee separators, the story corner tile, and a
  logo stamp above the menu heading (kept in the printed menu)
- **Motifs**: zellige tile patterns, horseshoe-arch image frames, arabesque dividers
- **Motion**: preloader with logo seal → staggered hero entrance, Ken Burns arch photos,
  floating dust motes, parallax bands, scroll reveals with stagger, stats count-up,
  card tilt, menu tab cascade, steam on hot drinks (tea/coffee/harira/tagine), button sheen,
  lightbox scale-in — all disabled under `prefers-reduced-motion`
- **Responsive**: desktop → tablet → mobile, circular-reveal mobile menu
- **Accessible**: semantic landmarks, aria labels, keyboard lightbox (← → Esc), reduced-motion support
- **Printable menu**: “Print this menu” button — and `Ctrl+P` also prints the full menu
  (hidden tab groups are revealed for printing, then restored)

## Key links

- Reservations: embedded **JBUJB reservation widget** in the booking band (anchor `#book` —
  business `68ef803e39e16294d3a23dc5`, loaded from https://jbujb.ma/widget.js). All “Reserve”
  buttons scroll to it; its language follows the site language (RU falls back to EN).
- Instagram: https://www.instagram.com/shtattomarrakech/
- WiFi network for guests: `shtatto81`
- Menu: couscous every Friday · prices in Moroccan Dirham (DH)

## Updating content

- **Menu items**: edit `js/menu-data.js` — `n` (French name), `g`/`e` (gloss per language),
  `p` (price), `d` (descriptions in all 7 languages).
- **Page copy**: edit `js/i18n.js` — every language block must keep the same keys
  (validated: 149 keys × 7 languages, no missing entries).
- **Photos**: drop new images into `assets/img/` and reference them in the gallery grid.
  *(Instagram caps at 640 px — full-resolution originals can replace files in place.)*
- **Hours / address**: update the `Visit us` section — it links to Instagram for today's hours;
  no phone or exact street number is published, so none is invented.
