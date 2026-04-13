# Localization plan

## Problem

The app does not have a localization system today. User-facing text is hardcoded across 10 HTML entry pages and many JS modules, with a mix of French and English strings. The requested target is a proper `en` / `fr` localization system with browser-detected default locale, persisted user choice in `localStorage`, and coverage for user-facing HTML text, JavaScript UI strings, dynamic HUD/overlay text, and asset/browser labels.

The implementation is non-trivial in scope: the current app likely contains roughly 400-500 unique user-facing strings, with especially heavy concentration in `gameplay-test.html`, `src/build_mode.js`, `src/gods.js`, `src/inventory.js`, `src/ui.js`, and `src/char-creation.js`.

## Proposed approach

1. Add a lightweight browser-native i18n layer that works with the repo's no-bundler structure.
   - Create a shared `src/i18n.js` module with:
     - supported locales: `en`, `fr`
     - browser-locale resolution (`fr* -> fr`, everything else -> en)
     - `localStorage` persistence for explicit user choice under a versioned key such as `tge_locale_v1`
     - `t(key, params?)` lookup with fallback behavior
     - subscriber/update hooks so already-mounted UI can rerender
     - helpers for translating DOM nodes via `data-i18n` / `data-i18n-attr`
   - Keep dictionaries in dedicated locale modules such as `src/locales/en.js` and `src/locales/fr.js` to avoid one oversized translation file.
   - Use a dotted semantic key convention from the start, e.g. `shell.tabs.gameplay`, `gameplay.hud.stamina`, `inventory.rarity.epic`, `build.catalog.walls.plaster.full`.
   - Keep translation keys semantic and stable; never use translated text as logic keys.

2. Handle runtime propagation with the existing app primitives.
   - Standalone page mode: each HTML page initializes locale from `localStorage` on load.
   - Shell/iframe mode (`index.html`): each child page also initializes from `localStorage`, so lazy-loaded iframes start in the current locale without an explicit parent-child handshake.
   - Reuse `src/live-sync.js` / `BroadcastChannel` as the primary live propagation mechanism for locale changes across tabs and same-origin iframes.
   - Treat `localStorage` as the persistence/bootstrap layer and `LiveSync.broadcast('locale-changed', { locale })` as the runtime propagation layer.
   - Keep direct `postMessage` locale plumbing out of scope unless a concrete iframe edge case appears that `LiveSync` cannot cover.
   - Update `<html lang>` dynamically on every page when locale changes.

3. Centralize strings before translating aggressively.
   - Convert shared UI metadata into key-driven structures instead of inline labels:
     - tool/page labels (`index.html`, `src/nav.js`)
     - asset-pack labels (`src/asset-check.js`)
     - stats, rarity names, slot names (`src/player.js`, `src/inventory.js`)
     - biome/zone display names and other gameplay labels
     - build-mode catalog category/item labels
   - Preserve internal IDs, asset filenames, save keys, animation clip names, and object identifiers as non-localized data.
   - Refactor data-heavy structures to use stable IDs and `labelKey` values instead of inline localized names, and avoid persisting translated labels into save data or exported data.

4. Cover visible attributes and formatting, not just text nodes.
   - Include `title`, `placeholder`, button labels, and iframe titles in the first-pass translation surface.
   - Define interpolation, pluralization, and formatting policy up front:
     - simple `{param}` interpolation for dynamic text
     - `Intl.PluralRules` where singular/plural differs
     - `Intl.NumberFormat` / `Intl.DateTimeFormat` only for user-facing numeric/time outputs

5. Make translation work operationally manageable.
   - Treat translation keys as the source of truth, not French or English copy.
   - Update both locale files in the same change whenever a new UI string is introduced.
   - Require manual review for narrative/literary content, especially `src/gods.js`, rather than relying on purely mechanical translation.
   - Add a lightweight string-audit script early to surface untranslated literals and missing keys during rollout.

6. Roll out by surface area, highest leverage first.
   - Shared shell + navigation + page chrome
   - Gameplay HUD / prompts / overlays
   - Character creation / inventory / asset tools
   - Large structured label sets like build mode catalogs and biome names

## Implementation phases

### Phase 1 — Foundation

- Add `src/i18n.js` and translation dictionaries for `en` and `fr`
- Define key naming conventions, fallback behavior, missing-key logging, and interpolation helpers
- Lock the dotted key naming scheme before translating any surface, so later phases do not churn keys
- Define the locale persistence contract, including the exact storage key (`tge_locale_v1`) and future versioning expectations
- Define the fallback hierarchy: requested locale -> English -> key string, with one-time console warnings for missing keys
- Define interpolation/pluralization behavior and the minimal formatting policy for user-facing numbers and dates
- Add locale bootstrap logic for standalone pages and iframe pages
- Integrate locale propagation with the existing `src/live-sync.js` BroadcastChannel helper
- Define the translation workflow: both locale dictionaries updated together, narrative content manually reviewed, no locale value treated as a canonical source text
- Add a simple audit script or grep-driven check to find untranslated literals, missing keys, and untranslated `lang="fr"` remnants during rollout
- Add shared language state helpers:
  - `getLocale()`
  - `setLocale(locale)`
  - `resolveInitialLocale()`
  - `subscribeLocaleChange(fn)`

### Phase 2 — Shared chrome and page bootstrapping

- Convert `index.html` shell text, tab labels, card labels, and CTA text to keys
- Convert `src/nav.js` labels, categories, and button titles
- Add a shared language switcher in the shell / shared navigation
- Ensure locale changes propagate immediately across already-open iframes
- Make child pages bootstrap from localStorage immediately, then subscribe to `LiveSync` locale events for live changes
- Set `lang` attribute from locale instead of hardcoding `fr`
- Centralize shared tool metadata so shell tabs, home cards, and floating navigation do not maintain separate translated label copies

### Phase 3 — Shared runtime UI modules

- Localize shared JS modules with high user-facing impact:
  - `src/ui.js`
  - `src/game.js`
  - `src/asset-check.js`
  - `src/inventory.js`
  - `src/player.js`
  - `src/gods.js`
  - `src/char-creation.js`
  - `src/town.js`
  - `src/npc.js`
- Replace inline French narrative strings, prompts, rarity labels, slot labels, and status text with translation keys
- Refactor module-level display constants to use stable IDs plus translation lookups at render time rather than static translated exports created at module load
- Include asset-browser filters, category labels, and other dynamically generated labels in scope, not just static page chrome
- Note that `src/gods.js` is a dedicated narrative translation surface and should be handled carefully, not as a bulk mechanical conversion
- Keep debug-only/internal logs out of scope unless visibly shown to users

### Phase 4 — Tool pages and overlays

- Convert each HTML entry page to use translatable strings:
  - `gameplay-test.html`
  - `char-builder.html`
  - `char-combined.html`
  - `character-preview.html`
  - `anim-inspect.html`
  - `asset-browser.html`
  - `village-browser.html`
  - `nature-browser.html`
  - `soldier-test.html`
- For pages with inline scripts, route visible strings through shared translation helpers rather than duplicating lookup logic
- Use one standard inline-module pattern across pages:
  - `import { t, onLocaleChange, translateDOM } from './src/i18n.js';`
  - static DOM text via `data-i18n` + `translateDOM()`
  - dynamic text via `t(key)` at render time
  - locale updates via `onLocaleChange(() => { translateDOM(); rebuildMyUI?.(); })`
- Treat `gameplay-test.html` as a dedicated sub-phase within page conversion because it contains a very large inline-script UI surface: HUD labels, prompts, weapon labels, emotes, loading text, grip editor labels, and belt/slot text
- For first pass, allow `gameplay-test.html` to use reload-to-apply on locale change instead of fully reactive live rerendering; simpler pages should switch live in-place

### Phase 5 — Structured labels and data-heavy modules

- Extract label-heavy data sets from modules and convert them to key-based structures:
  - `src/build_mode.js` catalog categories and item labels
  - biome / vegetation / zone display labels in gameplay modules
  - any asset-browser category labels or filters derived from inline arrays
- Treat this as a data-normalization step, not just string replacement, so future content additions only require new keys
- Add migration rules for persisted structures that currently store display names, so locale changes do not make saved data or exported comments inconsistent
- Prefer persisting stable IDs or asset URLs, then deriving localized labels at render time instead of serializing translated names
- Explicitly audit current persisted structures during implementation:
  - build mode scene save currently stores `name` redundantly alongside `url`; this should be removed or ignored in favor of derived labels
  - build mode hotbar already persists `catIdx` / `itemIdx`, which is the target pattern
  - character save/config data stores user-entered names and stable IDs/values, which should remain locale-neutral
  - gameplay save/belt/grip storage should be verified to ensure no localized labels are serialized as source-of-truth data

### Phase 6 — Validation and hardening

- Verify locale switching on every entry page in both standalone and shell/iframe flows
- Verify language persistence across reloads and direct navigation
- Verify lazy-loaded iframes open in the correct language even when the locale changed before the iframe was first mounted
- Verify cross-tab and iframe synchronization through `LiveSync`
- Verify saved data created in one locale loads correctly in the other locale
- Verify translated attributes such as `title` and `placeholder`, not just visible text nodes
- Check for flash-of-wrong-language on initial page load and lazy iframe mount
- Check for missing-key fallback behavior and untranslated remnants
- Confirm no gameplay logic depends on localized text
- Use both manual and lightweight automated checks:
  - manual matrix across 10 HTML entry pages × 2 locales
  - audit script or grep-based checks for untranslated literals, missing keys, and untranslated HTML `lang` attributes
  - explicit confirmation that complex pages such as `gameplay-test.html` reload cleanly on locale change and return in the chosen locale

## Incremental implementation chunks

These chunks are intended to be small, mergeable increments. They are the recommended day-to-day execution order, while the phases above remain the architectural grouping.

| Chunk | Scope | Main files | Done when |
|------|------|------|------|
| `loc-01-locale-core` | Add the core locale runtime, storage key, lookup API, and dictionary layout | `src/i18n.js`, `src/locales/en.js`, `src/locales/fr.js` | A page can resolve locale, call `t()`, and update `<html lang>` |
| `loc-02-locale-audit-tooling` | Add the first untranslated-string / missing-key audit checks and lock key naming conventions | audit script or npm script, locale docs | Developers can run a quick check for missing keys and untranslated remnants |
| `loc-03-shell-metadata` | Centralize tool metadata and key names for shell tabs, cards, and floating nav | `index.html`, `src/nav.js`, shared tool metadata | Shell/nav labels come from keys rather than duplicated literals |
| `loc-04-shell-switcher-sync` | Add the language switcher and wire live propagation via `LiveSync` | `index.html`, `src/nav.js`, `src/live-sync.js`, `src/i18n.js` | Changing locale updates shell + simple open pages and persists choice |
| `loc-05-asset-check-shared-ui` | Localize shared lightweight widgets and warnings | `src/asset-check.js` | Missing-pack widget is fully key-driven |
| `loc-06-ui-player-core` | Localize shared HUD/stat/zone labels and module-level display constants | `src/ui.js`, `src/player.js`, `src/game.js` | Shared gameplay labels render from keys instead of literals |
| `loc-07-inventory-ui` | Localize inventory rarity labels, slot names, tooltips, and visible prompts | `src/inventory.js` | Inventory UI is locale-aware without changing gameplay state |
| `loc-08-character-creation` | Localize character creation overlay text, options, and loading text | `src/char-creation.js` | Character creation works in both locales |
| `loc-09-gods-narrative` | Translate and wire the narrative god/domain/dialogue content | `src/gods.js` | God names, domains, and whispers are key-driven and manually reviewed |
| `loc-10-town-npc-labels` | Localize town-facing labels and NPC display text | `src/town.js`, `src/npc.js` | Town/NPC user-facing text no longer depends on hardcoded literals |
| `loc-11-simple-tool-pages` | Localize lower-complexity preview/test pages | `anim-inspect.html`, `soldier-test.html`, `character-preview.html` | These pages switch locale with the standard inline-module pattern |
| `loc-12-builder-browser-pages` | Localize builder/browser pages with moderate dynamic UI | `char-builder.html`, `char-combined.html`, `asset-browser.html`, `village-browser.html`, `nature-browser.html` | Builders/browsers are key-driven and live-switch correctly |
| `loc-13-gameplay-page-static` | Localize gameplay page static DOM/chrome and add reload-to-apply locale handling | `gameplay-test.html` | Static HUD/help/loading chrome is localized and locale changes reload cleanly |
| `loc-14-gameplay-page-dynamic` | Localize gameplay page dynamic prompts, weapon labels, emotes, belt text, and runtime messages | `gameplay-test.html` | Gameplay runtime text comes from keys and stays logic-safe |
| `loc-15-build-mode-catalog` | Refactor build mode catalogs and related labels to stable IDs + `labelKey`s | `src/build_mode.js` | Build mode no longer persists or depends on localized names |
| `loc-16-persistence-validation` | Audit saved data, remove redundant localized persistence, and run the final validation sweep | `src/build_mode.js`, `gameplay-test.html`, validation scripts/checklists | Cross-locale loads work and the untranslated-string sweep is clean |

## Key design decisions

- **Supported locales:** English and French only in the first version
- **Default locale:** browser-detected (`fr` if browser prefers French, otherwise `en`)
- **Persistence:** `localStorage`
- **Runtime propagation:** `LiveSync` / BroadcastChannel where available, with `localStorage` as the bootstrap/persistence layer
- **Initial scope:** user-facing HTML text, JavaScript UI strings, dynamic HUD/overlay text, and asset/browser labels
- **Out of scope for first pass:** documentation, source comments, internal debug-only comments, and renaming asset files / IDs
- **Operational note:** this is a medium-sized content migration, not a simple UI polish task, because several large modules are effectively text catalogs
- **Live-switch behavior:** shell and simple tool pages should update in place; `gameplay-test.html` may reload to apply locale changes in the first implementation

## Risks and mitigation

- **Risk: string sprawl across JS and inline HTML**
  - Mitigation: introduce a single lookup API and data-attribute-based DOM translation helpers early.

- **Risk: iframe pages drifting out of sync with the current locale**
  - Mitigation: bootstrap from `localStorage` and propagate changes through the existing `LiveSync` BroadcastChannel helper.

- **Risk: gameplay logic accidentally tied to display strings**
  - Mitigation: separate semantic IDs from localized labels before bulk translation.

- **Risk: large label catalogs become tedious to maintain**
  - Mitigation: move them into structured key maps so adding a new asset/category is a data change, not a code hunt.

- **Risk: saved or exported data stores localized display names**
  - Mitigation: persist stable IDs and URLs, then compute localized labels at render time; add migration for older saved structures that included display names.

- **Risk: a visible flash of the wrong language appears before locale bootstrap finishes**
  - Mitigation: initialize locale as early as possible on page load, bootstrap lazy-loaded iframes with localStorage immediately, then reconcile with shell locale on handshake.

## Recommended execution order

1. Build i18n foundation and locale synchronization
2. Localize shared shell/navigation so language switching is globally available
3. Localize shared runtime modules used across pages
4. Convert individual tool pages
5. Normalize and localize large data catalogs like build mode
6. Do a full-page untranslated-string sweep
