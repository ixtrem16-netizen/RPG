// ═══════════════════════════════════════════════════════════════
//  GODS.JS — Système des 7 Dieux
//
//  Chaque dieu a un domaine, une couleur, une personnalité.
//  Ils murmurent au joueur via des textes flottants.
//  Ils se répondent entre eux. Ils se souviennent.
//  Dans les Entrailles (y < −5) : silence total.
// ═══════════════════════════════════════════════════════════════

import { onLocaleChange, t } from './i18n.js';

function createGod(id, stat) {
    return {
        id,
        nameKey: `gods.meta.${id}.name`,
        domainKey: `gods.meta.${id}.domain`,
        stat,
        el: null,
        get name() { return t(this.nameKey); },
        get domain() { return t(this.domainKey); },
    };
}

export const GODS = {
    vareth: createGod('vareth', 'ombre'),
    sorel: createGod('sorel', 'volonte'),
    maren: createGod('maren', 'eloquence'),
    dusk: createGod('dusk', 'ombre'),
    brahl: createGod('brahl', 'force'),
    ylene: createGod('ylene', 'intelligence'),
    orvane: createGod('orvane', null),
};

// ── File d'attente des murmures ──────────────────────────────
const _queue    = [];
let   _active   = false;
let   _hideTimer = 0;
let   _currentEl = null;
let   _currentSpeech = null;

// ── Mémoire des dieux — influence accumulée ──────────────────
const _influence = {
    vareth:0, sorel:0, maren:0,
    dusk:0,   brahl:0, ylene:0, orvane:0,
};

// ── Mode silence (Entrailles) ────────────────────────────────
let _silenced = false;

// ─────────────────────────────────────────────────────────────
export function initGods() {
    for (const god of Object.values(GODS)) {
        god.el = document.getElementById(`god-${god.id}`);
    }
}

/** Mettre les dieux en silence (Entrailles) */
export function setSilenced(val) {
    if (val === _silenced) return;
    _silenced = val;
    if (val) {
        // Cacher tous les éléments immédiatement
        for (const god of Object.values(GODS)) {
            if (god.el) god.el.classList.remove('visible');
        }
        _queue.length = 0;
        _active = false;
        _currentEl = null;
        _currentSpeech = null;
    }
}

/**
 * Faire parler un dieu.
 * @param {string} godId   — id du dieu (ex: 'vareth')
 * @param {string} text    — texte du murmure
 * @param {number} duration — durée d'affichage en ms (défaut 6000)
 * @param {number} delay   — délai avant affichage en ms (défaut 0)
 */
export function godSpeak(godId, text, duration = 6000, delay = 0) {
    enqueueGodSpeech(godId, { text, duration, delay });
}

export function godSpeakKey(godId, textKey, duration = 6000, delay = 0, params = {}) {
    enqueueGodSpeech(godId, { textKey, duration, delay, params });
}

function enqueueGodSpeech(godId, { text = '', textKey = '', duration = 6000, delay = 0, params = {} } = {}) {
    if (_silenced) return;
    const god = GODS[godId];
    if (!god || !god.el) return;
    _queue.push({ god, text, textKey, params, duration, delay });
    if (!_active) _processQueue();
}

/**
 * Faire une séquence de murmures — les dieux se répondent.
 * @param {Array} sequence — [{id, text, duration?, delay?}, ...]
 */
export function godDialogue(sequence) {
    if (_silenced) return;
    for (const item of sequence) {
        enqueueGodSpeech(item.id, {
            text: item.text,
            textKey: item.textKey,
            params: item.params,
            duration: item.duration || 6000,
            delay: item.delay || 0,
        });
    }
}

function _processQueue() {
    if (_queue.length === 0) { _active = false; return; }
    _active = true;

    const item = _queue.shift();
    setTimeout(() => {
        const { god, duration } = item;
        if (!god.el) {
            setTimeout(_processQueue, 0);
            return;
        }

        // Cacher le précédent
        if (_currentEl && _currentEl !== god.el) {
            _currentEl.classList.remove('visible');
        }

        god.el.querySelector('.god-text').textContent = resolveGodSpeechText(item);
        god.el.classList.add('visible');
        _currentEl = god.el;
        _currentSpeech = item;

        // Accumule l'influence
        _influence[god.id] = (_influence[god.id] || 0) + 1;

        // Programmer la disparition
        setTimeout(() => {
            god.el.classList.remove('visible');
            if (_currentSpeech === item) _currentSpeech = null;
            setTimeout(_processQueue, 800);  // gap entre murmures
        }, duration);

    }, item.delay);
}

function resolveGodSpeechText(item) {
    if (item.textKey) return t(item.textKey, item.params || {});
    return item.text;
}

// ── Dérive de stat observée — réaction possible des dieux ────
/**
 * Appelé par player.js quand une stat dérive.
 * Les dieux peuvent commenter.
 */
export function onStatDrift(statName, delta, playerStats) {
    if (_silenced) return;

    const up = delta > 0;

    // Brahl — surveille Force et Endurance
    if (statName === 'force' && !up) {
        godSpeakKey('brahl', 'gods.whispers.drift.force.down', 5000, 500);
    } else if (statName === 'force' && up) {
        // Brahl approuve silencieusement (rare)
        if (Math.random() < 0.3) godSpeakKey('brahl', 'gods.whispers.drift.force.up', 3000, 200);
    }

    // Maren — surveille Éloquence
    if (statName === 'eloquence' && up) {
        if (Math.random() < 0.4) godSpeakKey('maren', 'gods.whispers.drift.eloquence.up', 5500, 300);
    }

    // Dusk — surveille Ombre
    if (statName === 'ombre' && up) {
        if (Math.random() < 0.4) godSpeakKey('dusk', 'gods.whispers.drift.ombre.up', 5000, 200);
    }
    if (statName === 'ombre' && !up) {
        if (Math.random() < 0.3) godSpeakKey('dusk', 'gods.whispers.drift.ombre.down', 5500, 400);
    }

    // Ylene — surveille Intelligence
    if (statName === 'intelligence' && !up) {
        if (Math.random() < 0.35) godSpeakKey('ylene', 'gods.whispers.drift.intelligence.down', 6000, 600);
    }

    // Orvane — commente les contrastes (Force monte + Ombre monte = rare)
    if (Math.random() < 0.05) {
        const f = playerStats.force, o = playerStats.ombre;
        if (f > 65 && o > 55) {
            godSpeakKey('orvane', 'gods.whispers.drift.contrast.force-ombre', 6000, 1000);
        }
    }
}

// ── Querelle entre dieux — déclenchée par events ─────────────
/**
 * Situations prédéfinies où les dieux se querellent.
 * Appelé par game.js selon les actions du joueur.
 */
export const GOD_QUARRELS = {

    // Joueur amorce un dialogue au lieu de combattre
    dialogue_instead_of_fight: () => godDialogue([
        { id:'brahl',  textKey:'gods.dialogue.dialogue-instead-of-fight.line-1', duration:5500 },
        { id:'dusk',   textKey:'gods.dialogue.dialogue-instead-of-fight.line-2', duration:5500, delay:5200 },
        { id:'brahl',  textKey:'gods.dialogue.dialogue-instead-of-fight.line-3', duration:5500, delay:10400 },
        { id:'maren',  textKey:'gods.dialogue.dialogue-instead-of-fight.line-4', duration:6000, delay:15900 },
    ]),

    // Joueur vole quelqu'un
    pickpocket: () => godDialogue([
        { id:'vareth', textKey:'gods.dialogue.pickpocket.line-1', duration:5000 },
        { id:'sorel',  textKey:'gods.dialogue.pickpocket.line-2', duration:3000, delay:4800 },
        { id:'dusk',   textKey:'gods.dialogue.pickpocket.line-3', duration:5000, delay:8000 },
    ]),

    // Joueur aide quelqu'un sans raison apparente
    help_unprompted: () => godDialogue([
        { id:'maren',  textKey:'gods.dialogue.help-unprompted.line-1', duration:4000 },
        { id:'vareth', textKey:'gods.dialogue.help-unprompted.line-2', duration:5000, delay:4200 },
        { id:'maren',  textKey:'gods.dialogue.help-unprompted.line-3', duration:3500, delay:9400 },
        { id:'vareth', textKey:'gods.dialogue.help-unprompted.line-4', duration:3000, delay:13200 },
    ]),

    // Joueur entre dans les Entrailles pour la première fois
    entering_underworld: () => godDialogue([
        { id:'brahl',  textKey:'gods.dialogue.entering-underworld.line-1', duration:8000 },
        { id:'maren',  textKey:'gods.dialogue.entering-underworld.line-2', duration:4000, delay:8500 },
        { id:'dusk',   textKey:'gods.dialogue.entering-underworld.line-3', duration:7000, delay:13000 },
        { id:'orvane', textKey:'gods.dialogue.entering-underworld.line-4', duration:8000, delay:20500 },
    ]),

    // Joueur ressort des Entrailles
    exiting_underworld: () => godDialogue([
        { id:'ylene',  textKey:'gods.dialogue.exiting-underworld.line-1', duration:6000 },
        { id:'maren',  textKey:'gods.dialogue.exiting-underworld.line-2', duration:3500, delay:6500 },
        { id:'orvane', textKey:'gods.dialogue.exiting-underworld.line-3', duration:5000, delay:10500 },
    ]),
};

export function getGodName(godId) {
    return GODS[godId]?.name || godId;
}

export function getGodDomain(godId) {
    return GODS[godId]?.domain || '';
}

onLocaleChange(() => {
    if (!_currentSpeech?.god?.el) return;
    _currentSpeech.god.el.querySelector('.god-text').textContent = resolveGodSpeechText(_currentSpeech);
});

/** Retourner l'influence accumulée pour un dieu */
export function getInfluence(godId) { return _influence[godId] || 0; }

/** Dieu dominant (celui que le joueur a le plus suivi) */
export function getDominantGod() {
    let best = null, bestVal = -1;
    for (const [id, val] of Object.entries(_influence)) {
        if (val > bestVal) { bestVal = val; best = id; }
    }
    return best;
}
