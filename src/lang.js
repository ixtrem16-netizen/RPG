/**
 * src/lang.js — Localisation FR / EN — Three.js Game Editor Studio
 *
 * Usage HTML  : <element data-i18n="key">Texte FR par défaut</element>
 *               <input   data-i18n-ph="key" placeholder="...">
 *               <element data-i18n-title="key" title="...">
 *
 * Usage JS    : window.i18n('key')  →  string localisé
 *
 * Changement  : clic sur le drapeau → sauvegarde localStorage + rechargement
 *               En iframe → notifie le shell parent (tge-lang) pour rechargement global
 */
(function () {
'use strict';

// ── Langue courante ─────────────────────────────────────────────────────────
const LANG_KEY = 'tge_lang';
const LANG = localStorage.getItem(LANG_KEY) || 'fr';
window.TGE_LANG = LANG;

// ── Dictionnaire EN (FR est le défaut dans le HTML, aucune clé FR nécessaire)
const EN = {
    // ── Navigation (nav.js + shell) ─────────────────────────────────────────
    'nav.home'           : 'Home',
    'nav.tools.title'    : 'Tool navigation',
    'nav.cat.gameplay'   : 'Gameplay',
    'nav.cat.character'  : 'Character',
    'nav.cat.environment': 'Environment',
    'nav.cat.editor'     : 'Editor',

    // ── index.html — Hub ────────────────────────────────────────────────────
    'hub.sect.gameplay'  : 'Gameplay',
    'hub.sect.character' : 'Character',
    'hub.sect.environment':'Environment',
    'hub.sect.editor'    : 'Editor',
    'hub.open'           : 'Open →',
    'hub.gameplay.cat'   : 'Prototype',
    'hub.gameplay.desc'  : 'Locomotion · Combat · Physics · Valcrest City. Full playable prototype — sword, shield, bow, magic.',
    'hub.charbuilder.cat': 'Character',
    'hub.charbuilder.desc':'Modular assembly — body, outfits, hair, beard. Per-zone color shaders.',
    'hub.preview.cat'    : 'Character',
    'hub.preview.desc'   : 'Preview the assembled character with all active animations.',
    'hub.anim.cat'       : 'Animation',
    'hub.anim.desc'      : 'Browse and preview all animation clips (all libraries merged).',
    'hub.assets.cat'     : 'Assets',
    'hub.assets.desc'    : 'All Quaternius assets — filter by category, 3D thumbnails.',
    'hub.worldbuilder.cat': 'World Editor',
    'hub.worldbuilder.desc':'FreeCam · Asset placement · Grid snap · Animated doors · Undo/Redo · JS Export — all Quaternius assets available.',
    'hub.gripeditor.cat' : 'Weapon Editor',
    'hub.gripeditor.desc': 'Precise grip adjustment for each weapon/tool — position, rotation, scale. Shared save with Gameplay Test.',

    // ── Character Preview ────────────────────────────────────────────────────
    'cp.header'          : 'Characters',
    'cp.anim.header'     : 'Animation',
    'cp.anim.idle'       : 'Idle',
    'cp.anim.walk'       : 'Walk',
    'cp.anim.run'        : 'Run',
    'cp.anim.combat'     : 'Combat',
    'cp.anim.jump'       : 'Jump',
    'cp.select'          : 'Select a character',
    'cp.loading'         : 'Loading…',
    'cp.error'           : 'Error',
    'cp.hint.orbit'      : 'Right-click + drag: orbit',
    'cp.hint.zoom'       : 'Scroll: zoom',
    'cp.no.config'       : 'No saved character.\nUse Char Builder to create one.',
    'cp.saved.badge'     : 'Saved character',

    // ── Grip Editor ─────────────────────────────────────────────────────────
    'ge.char.label'      : 'Character',
    'ge.tab.main'        : 'Main',
    'ge.tab.holster'     : 'Holster',
    'ge.view.main'       : 'Hand',
    'ge.view.full'       : 'Body',
    'ge.view.top'        : 'Top',
    'ge.weapons.hdr'     : 'Weapons & Tools',
    'ge.body.hdr'        : 'Body Placement',
    'ge.anim.hdr'        : 'Animations',
    'ge.search.ph'       : 'Filter clips…',
    'ge.status.loading'  : 'Loading…',
    'ge.vp.select'       : 'Select a weapon',
    'ge.vp.hint'         : 'Right-click · Scroll · Middle',
    'ge.panel.grip'      : 'GRIP',
    'ge.panel.holster'   : 'HOLSTER',
    'ge.no.sel'          : '— No selection —',
    'ge.sec.pos'         : 'Pivot position (bone offset)',
    'ge.sec.rot'         : 'Mesh rotation (weapon orientation)',
    'ge.sec.twist'       : 'Twist pivot Y (global yaw)',
    'ge.sec.offset'      : 'Grip offset (handle length)',
    'ge.sec.scale'       : 'Scale',
    'ge.btn.save'        : 'Save grip',
    'ge.btn.reset'       : 'Reset (defaults)',
    'ge.btn.export'      : 'Export all grips',
    'ge.btn.clear'       : 'Clear all grips',
    'ge.params.title'    : 'Parameters',

    // ── World Builder ────────────────────────────────────────────────────────
    'wb.hint.b'          : '[ B ] — Toggle edit mode',
    'wb.char.loading'    : 'Loading character…',
    'wb.init'            : 'Initializing…',

    // ── Anim Inspector ───────────────────────────────────────────────────────
    'ai.title'           : 'Animation Library — Available Clips',
    'ai.loading'         : 'Loading animations...',

    // ── Asset Browser ────────────────────────────────────────────────────────
    'ab.hint'            : 'Click = preview',
    'ab.tab.characters'  : 'Characters',
    'ab.tab.hair'        : 'Hair',
    'ab.tab.nature'      : 'Nature',
    'ab.tab.village'     : 'Village',
    'ab.tab.props'       : 'Props',
    'ab.search.ph'       : 'Search asset…',
    'ab.clear.title'     : 'Clear',
    'ab.vp.select'       : 'Select an asset',
    'ab.vp.loading'      : 'Loading…',
    'ab.vp.hint'         : 'Right-click · Scroll · Middle',
    'ab.anim.header'     : 'Animations',
    'ab.anim.search.ph'  : 'Filter clips…',

    // ── Char Builder ─────────────────────────────────────────────────────────
    'cb.sect.body'       : 'Body',
    'cb.sect.outfit'     : 'Outfit',
    'cb.sect.texture'    : 'Texture variant',
    'cb.sect.hair'       : 'Hair',
    'cb.sect.beard'      : 'Beard',
    'cb.sect.haircolor'  : 'Hair & beard color',
    'cb.sect.eyecolor'   : 'Eye color',
    'cb.sect.skincolor'  : 'Skin color',
    'cb.sect.configs'    : 'Configurations',
    'cb.sect.anim'       : 'Animations',
    'cb.body.male'       : '♂ Male',
    'cb.body.female'     : '♀ Female',
    'cb.outfit.none'     : '— None —',
    'cb.hair.none'       : '— None —',
    'cb.beard.none'      : '— None —',
    'cb.outfit.male'     : '♂ Male',
    'cb.outfit.female'   : '♀ Female',
    'cb.tex.color1'      : 'Color 1',
    'cb.tex.color2'      : 'Color 2',
    'cb.tex.color3'      : 'Color 3',
    'cb.color.custom.title':'Custom color',
    'cb.proportions'     : 'Proportions',
    'cb.proportions.reset.title': 'Reset all proportions',
    'cb.sub.body'        : 'Body',
    'cb.sub.outfit'      : 'Outfit',
    'cb.config.ph'       : 'Character name...',
    'cb.config.save'     : '+ Save current config',
    'cb.anim.search.ph'  : 'Filter clips...',
    'cb.loading'         : 'Loading...',
    'cb.hint'            : 'Right-click: orbit · Scroll: zoom',
    'cb.export.toast'    : 'Exported to game ✓',
    'cb.no.config'       : 'No saved config',
    'cb.config.load.title':'Load "[name]"',
    'cb.config.overwrite.title': 'Overwrite with current config',
    'cb.config.export.title': 'Export to game',
    'cb.config.delete.title': 'Delete',
    'cb.reload.toast'    : 'Refreshing character…',
    'cb.config.export.btn': '→ Game',
    'cb.config.saved'    : 'Saved ✓',
    'cb.visibility'      : 'Visibility',
    'cb.show.hide'       : 'Show / Hide',
    'cb.reset'           : 'Reset',
    'gt.weapon.none'     : 'None',
    'gt.notif.disarmed'  : 'Disarmed',

    // ── Gameplay Test ────────────────────────────────────────────────────────
    'gt.loading'         : 'Loading character…',
    'gt.debug.state'     : 'State',
    'gt.debug.combat'    : 'Combat mode',
    'gt.debug.speed'     : 'Speed / Ground',
    'gt.debug.pos'       : 'Position',
    'gt.controls.title'  : 'Controls',
    'gt.ctrl.move'       : 'Move',
    'gt.ctrl.sprint'     : 'Sprint',
    'gt.ctrl.jump'       : 'Jump',
    'gt.ctrl.crouch'     : 'Crouch',
    'gt.ctrl.walk'       : 'Walk / Run',
    'gt.ctrl.crawl'      : 'Crawl',
    'gt.ctrl.interact'   : 'Interact / Climb',
    'gt.ctrl.roll'       : 'Roll',
    'gt.ctrl.lean'       : 'Lean cam L/R',
    'gt.ctrl.dodge'      : 'Dodge L/R',
    'gt.ctrl.belt'       : 'Belt slots (equip)',
    'gt.ctrl.assign'     : 'Assign item',
    'gt.ctrl.attack'     : 'Attack',
    'gt.ctrl.kick'       : 'Kick',
    'gt.ctrl.block'      : 'Block / Aim',
    'gt.ctrl.emote'      : 'Emote wheel',
    'gt.ctrl.char'       : 'Switch character',
    'gt.ctrl.lock'       : 'Cursor lock',
    'gt.ctrl.cam'        : '1st / 3rd person',
    'gt.ctrl.zoom'       : 'Camera zoom',
    'gt.ctrl.orbit'      : 'Camera orbit',
    'gt.stamina'         : 'Stamina',
    'gt.char.panel'      : 'Character',
    'gt.char.close.title': 'Close',
    'gt.char.toggle.title': 'Switch character (P)',
    'gt.char.toggle.btn' : 'Char',
    'gt.char.hint'       : 'P — Open / Close',
    'gt.weapons.title'   : 'Weapons',
    'gt.hand.right'      : 'Right hand',
    'gt.hand.left'       : 'Left hand',
    'gt.grip.title'      : 'Grip settings',
    'gt.grip.save'       : '💾 Save',
    'gt.pivot.label'     : '― PIVOT (rotation center) ―',
    'gt.char.saved'      : '★ Saved character',
    'gt.char.player'     : 'Player character',
    'gt.char.empty'      : 'No saved character.<br>Create one in Char Builder.',
    'gt.climb.prompt'    : 'F / Space — Climb\u00a0|\u00a0(jump to wall = auto-grab)',
    'gt.weapon.sword'    : 'Sword',
    'gt.weapon.axe'      : 'Axe',
    'gt.weapon.knife'    : 'Knife',
    'gt.weapon.torch'    : 'Torch',
    'gt.weapon.pickaxe'  : 'Pickaxe',
    'gt.weapon.shield'   : 'Shield',
    'gt.weapon.fists'    : 'Fists',
    'gt.weapon.magic'    : 'Magic',
    'gt.weapon.bow'      : 'Bow',
    'gt.belt.empty'      : '— Empty',
    'gt.combat.none'     : 'None',
    'gt.emote.dance'     : 'Dance',
    'gt.emote.celebrate' : 'Celebrate',
    'gt.emote.cry'       : 'Cry',
    'gt.emote.backflip'  : 'Backflip',
    'gt.emote.drink'     : 'Drink',
    'gt.emote.sit'       : 'Sit',
    'gt.emote.floor'     : 'Floor',
    'gt.emote.wave'      : 'Wave',
};

// ── Fonction de traduction ───────────────────────────────────────────────────
window.i18n = function (key) {
    if (LANG === 'fr') return key; // FR = défaut HTML, retourner la clé signale "aucun remplacement"
    return EN[key] !== undefined ? EN[key] : key;
};

// Version qui retourne la valeur FR (utile pour initialiser des champs en FR)
const _FR_FALLBACK = {
    'nav.home'         : 'Accueil',
    'nav.tools.title'  : 'Navigation outils',
    'nav.cat.character': 'Personnage',
    'nav.cat.environment':'Environnement',
    'nav.cat.editor'   : 'Éditeur',
    'cp.select'        : 'Selectionne un personnage',
    'cp.loading'       : 'Chargement…',
    'cp.error'         : 'Erreur',
    'cp.no.config'     : 'Aucun personnage sauvegarde.\nUtilise le Char Builder pour en creer un.',
    'cp.saved.badge'   : 'Perso sauvegarde',
    'ge.status.loading': 'Chargement…',
    'ge.vp.select'     : 'Selectionne une arme',
    'ge.no.sel'        : '— Aucune selection —',
    'ge.btn.save'      : 'Sauvegarder grip',
    'ge.btn.reset'     : 'Reinitialiser (defauts)',
    'ge.btn.export'    : 'Exporter tous les grips',
    'ge.btn.clear'     : 'Effacer tous les grips',
    'wb.char.loading'  : 'Chargement personnage…',
    'wb.init'          : 'Initialisation…',
    'ai.loading'       : 'Chargement des animations...',
    'ab.vp.select'     : 'Sélectionne un asset',
    'ab.vp.loading'    : 'Chargement…',
    'cb.loading'       : 'Chargement...',
    'cb.no.config'     : 'Aucune config sauvegardée',
    'cb.reload.toast'  : 'Actualisation personnage…',
    'cb.export.toast'  : 'Exporté vers le jeu ✓',
    'gt.loading'       : 'Chargement personnage…',
    'gt.char.saved'    : '★ Perso sauvegardé',
    'gt.char.player'   : 'Personnage joueur',
    'gt.char.empty'    : 'Aucun personnage sauvegardé.<br>Crée un perso dans le Char Builder.',
    'gt.belt.empty'    : '— Vide',
    'gt.combat.none'   : 'Aucun',
    'gt.weapon.sword'  : 'Épée',
    'gt.weapon.axe'    : 'Hache',
    'gt.weapon.knife'  : 'Couteau',
    'gt.weapon.torch'  : 'Torche',
    'gt.weapon.pickaxe': 'Pioche',
    'gt.weapon.shield' : 'Bouclier',
    'gt.weapon.fists'  : 'Poings',
    'gt.weapon.magic'  : 'Magie',
    'gt.weapon.bow'    : 'Arc',
    'gt.emote.dance'   : 'Dance',
    'gt.emote.celebrate':'Célébrer',
    'gt.emote.cry'     : 'Pleurer',
    'gt.emote.backflip': 'Backflip',
    'gt.emote.drink'   : 'Boire',
    'gt.emote.sit'     : "S'asseoir",
    'gt.emote.floor'   : 'Sol',
    'gt.emote.wave'    : 'Saluer',
    'gt.climb.prompt'  : 'F / Espace — Grimper\u00a0|\u00a0(saut vers le mur = auto-grab)',
    'cb.config.load.title': 'Charger "[name]"',
    'cb.config.export.btn': '→ Jeu',
    'cb.config.saved'  : 'Sauvegardé ✓',
    'cb.visibility'    : 'Visibilité',
    'cb.show.hide'     : 'Afficher / Cacher',
    'cb.reset'         : 'Réinitialiser',
    'gt.weapon.none'   : '— Aucune',
    'gt.notif.disarmed': 'Désarmé',
};

// Retourne toujours un texte localisé (jamais la clé brute)
window.i18nT = function (key) {
    if (LANG !== 'fr' && EN[key] !== undefined) return EN[key];
    return _FR_FALLBACK[key] || key;
};

// ── Application sur le DOM ───────────────────────────────────────────────────
function applyAll() {
    if (LANG === 'fr') return; // FR = défaut HTML, rien à faire
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const v = EN[el.getAttribute('data-i18n')];
        if (v !== undefined) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const v = EN[el.getAttribute('data-i18n-ph')];
        if (v !== undefined) el.placeholder = v;
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const v = EN[el.getAttribute('data-i18n-title')];
        if (v !== undefined) el.title = v;
    });
    // html lang attribute
    document.documentElement.setAttribute('lang', 'en');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyAll);
} else {
    applyAll();
}

// ── Sélecteur de langue — drapeaux ──────────────────────────────────────────
// • Shell (index.html, #shell-bar présent) → intégré à droite de la barre
// • Iframe (outil chargé dans le shell)    → non injecté (shell s'en charge)
// • Accès direct (outil ouvert seul)       → position fixe bottom-left
function injectSwitcher() {
    // En iframe : le shell a son propre sélecteur — on n'en ajoute pas un second
    if (window !== window.top) return;

    const shellBar = document.getElementById('shell-bar');

    const style = document.createElement('style');
    style.textContent = shellBar ? `
        #_lang-sw {
            display: flex; align-items: stretch; flex-shrink: 0;
            border-left: 1px solid rgba(200,184,154,0.12);
        }
        ._lang-btn {
            width: 44px; background: transparent; border: none;
            border-left: 1px solid rgba(200,184,154,0.08);
            cursor: pointer; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 1px;
            outline: none; opacity: 0.50;
            transition: opacity 0.18s, background 0.18s;
            padding: 0;
        }
        ._lang-btn:first-child { border-left: none; }
        ._lang-btn:hover { opacity: 1; background: rgba(200,184,154,0.09); }
        ._lang-btn._active { opacity: 1; background: rgba(200,184,154,0.07); }
        ._lang-flag {
            font-family: 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;
            font-size: 16px; line-height: 1; display: block;
        }
        ._lang-code {
            font-family: 'Georgia',serif; font-size: 8px; letter-spacing: 1px;
            color: #c8b89a; line-height: 1; display: block; opacity: 0.75;
        }
        ._lang-btn._active ._lang-code { opacity: 1; color: #e8d8b4; }
    ` : `
        #_lang-sw {
            position: fixed; bottom: 18px; left: 18px; z-index: 99998;
            display: flex; gap: 4px; align-items: center;
        }
        ._lang-btn {
            width: 38px; height: 30px; padding: 0;
            background: rgba(8,6,4,0.94);
            border: 1px solid rgba(200,184,154,0.25);
            cursor: pointer; display: flex; flex-direction: column;
            align-items: center; justify-content: center; gap: 1px;
            outline: none; opacity: 0.70;
            transition: opacity 0.2s, border-color 0.2s;
            border-radius: 4px;
        }
        ._lang-btn:hover { opacity: 1; border-color: rgba(200,184,154,0.50); }
        ._lang-btn._active {
            opacity: 1; border-color: rgba(200,184,154,0.45);
            background: rgba(22,16,8,0.96);
        }
        ._lang-flag {
            font-family: 'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif;
            font-size: 16px; line-height: 1; display: block;
        }
        ._lang-code {
            font-family: 'Georgia',serif; font-size: 8px; letter-spacing: 1px;
            color: #c8b89a; line-height: 1; display: block; opacity: 0.75;
        }
        ._lang-btn._active ._lang-code { opacity: 1; color: #e8d8b4; }
    `;
    document.head.appendChild(style);

    const wrap = document.createElement('div');
    wrap.id = '_lang-sw';

    [{ code: 'fr', flag: '🇫🇷', text: 'FR', label: 'Français' },
     { code: 'en', flag: '🇬🇧', text: 'EN', label: 'English'  }]
    .forEach(({ code, flag, text, label }) => {
        const btn = document.createElement('button');
        btn.className = '_lang-btn' + (LANG === code ? ' _active' : '');
        btn.innerHTML = `<span class="_lang-flag">${flag}</span><span class="_lang-code">${text}</span>`;
        btn.title = label;
        btn.addEventListener('click', () => {
            if (LANG === code) return;
            localStorage.setItem(LANG_KEY, code);
            window.location.reload();
        });
        wrap.appendChild(btn);
    });

    if (shellBar) {
        shellBar.appendChild(wrap);
    } else {
        const inject = () => document.body.appendChild(wrap);
        document.body ? inject() : document.addEventListener('DOMContentLoaded', inject);
    }
}

injectSwitcher();
})();
