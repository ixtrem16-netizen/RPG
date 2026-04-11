# Three.js Quaternius Studio

A collection of browser-based tools for working with **[Quaternius](https://quaternius.com)** 3D assets in Three.js.
No build step, no server required — open directly in Chrome or Firefox.

> **3D assets (Quaternius) are not included** — see the Setup section below.

---

## Tools

| File | Description |
|------|-------------|
| `char-builder.html` | Character editor — modular outfits, per-zone shaders |
| `char-combined.html` | Combined char builder + preview |
| `character-preview.html` | Character preview |
| `anim-inspect.html` | Animation clip inspector |
| `asset-browser.html` | Asset browser |
| `village-browser.html` | Medieval village asset browser |
| `nature-browser.html` | Nature asset browser |
| `soldier-test.html` | Soldier / character test |

---

## Source files

| File | Description |
|------|-------------|
| `src/character.js` | CharacterController — loadRetargeted, AnimationMixer, state machine |
| `src/char-config.js` | Character config hub — outfit, hair, body per character name |
| `src/shaders.js` | Post-processing shaders (color grade) |

---

## Setup — Required Assets

### Pack overview

All 3D assets come from **[Quaternius](https://quaternius.com)**.
Some packs are **free**, others require a **Patreon** subscription (Source tier).

| Pack | Tier | Used for |
|------|------|----------|
| Universal Animation Library (UAL) | Free or Source | Main character animations |
| Universal Animation Library 2 (UAL2) | Free or Source | Parkour / advanced animations |
| Modular Character Outfits - Fantasy | Source (Patreon) | Body, outfits, hair, modular parts |
| Medieval Village MegaKit | Free or Source | Buildings, props, vegetation |

> **Free** = downloadable directly on quaternius.com.  
> **Source** = .blend files + max resolution — Patreon subscription required.  
> The tools work with the **free Standard versions** for animations.

---

### Directory structure

After downloading the packs, place the files as follows:

```
assets/
├── characters/
│   ├── animations/
│   │   ├── UAL1_Standard.glb       ← Universal Animation Library (UAL pack)
│   │   ├── UAL1_Source.glb         ← (optional — Patreon Source version)
│   │   ├── UAL2_Standard.glb       ← Universal Animation Library 2 (UAL2 pack)
│   │   └── UAL2_Source.glb         ← (optional — Patreon Source version)
│   │
│   ├── bodies/
│   │   ├── Superhero_Male_FullBody.gltf    ← Modular Character Outfits - Fantasy
│   │   └── Superhero_Female_FullBody.gltf  ←   (rigged bodies — modular pack)
│   │
│   ├── outfits/
│   │   └── *.gltf / *.bin          ← Modular Character Outfits - Fantasy
│   │
│   ├── hair/
│   │   └── *.gltf / *.bin          ← Modular Character Outfits - Fantasy
│   │
│   └── modular/
│       └── *.gltf / *.bin          ← Modular Character Outfits - Fantasy
│
└── environment/
    ├── village/
    │   └── *.gltf / *.bin          ← Medieval Village MegaKit
    │
    ├── props/
    │   └── *.gltf / *.bin          ← Medieval Village MegaKit
    │
    └── nature/
        └── *.gltf / *.bin          ← Medieval Village MegaKit
```

---

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/ixtrem16-netizen/RPG.git
cd RPG
```

**2. Download the Quaternius packs**

- Go to **quaternius.com** or the **Quaternius Patreon**
- Download the packs listed above and place the files in the directories above.

**3. Open in browser**

Open any `.html` file directly in Chrome or Firefox.

> **Chrome note**: if assets don't load locally (`file://`), run a minimal HTTP server:
> ```bash
> python -m http.server 8080
> # then open http://localhost:8080
> ```

---

## License

Source code: **MIT** — free to use, modify, and redistribute.  
3D Assets: property of **Quaternius** — subject to their respective license terms.
