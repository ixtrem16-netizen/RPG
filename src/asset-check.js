import { getPluralCategory, onLocaleChange, t } from './i18n.js';

const PACKS = [
    {
        id: 'ual-standard',
        tier: 'free',
        tierKey: 'asset-check.tiers.free',
        url: 'https://quaternius.com/packs/ultimateanimationlibrary.html',
        probe: 'assets/characters/animations/UAL1_Standard.glb',
    },
    {
        id: 'ual2-standard',
        tier: 'free',
        tierKey: 'asset-check.tiers.free',
        url: 'https://quaternius.com/packs/ultimateanimationlibrary.html',
        probe: 'assets/characters/animations/UAL2_Standard.glb',
    },
    {
        id: 'ual-source',
        tier: 'patreon',
        tierKey: 'asset-check.tiers.patreon-source',
        url: 'https://www.patreon.com/quaternius',
        probe: 'assets/characters/animations/UAL1_Source.glb',
        optional: true,
    },
    {
        id: 'char-outfits',
        tier: 'patreon',
        tierKey: 'asset-check.tiers.patreon-source',
        url: 'https://www.patreon.com/quaternius',
        probe: 'assets/characters/bodies/Superhero_Male_FullBody.gltf',
    },
    {
        id: 'village',
        tier: 'free',
        tierKey: 'asset-check.tiers.free',
        url: 'https://quaternius.com/packs/medievalvillagemegakit.html',
        probe: 'assets/environment/village/Balcony_Cross_Corner.gltf',
    },
    {
        id: 'nature',
        tier: 'free',
        tierKey: 'asset-check.tiers.free',
        url: 'https://quaternius.com/packs/ultimatenature.html',
        probe: 'assets/environment/nature/BirchTree_1.gltf',
    },
    {
        id: 'props',
        tier: 'free',
        tierKey: 'asset-check.tiers.free',
        url: 'https://quaternius.com/packs/fantasypropsmegakit.html',
        probe: 'assets/environment/props/Sword_Bronze.gltf',
    },
];

const css = `
    #_ac-widget {
        position: fixed;
        bottom: 60px;
        right: 18px;
        z-index: 99998;
        font-family: 'Georgia', serif;
        max-width: 300px;
    }
    #_ac-toggle {
        appearance: none;
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(8,6,4,0.92);
        border: 1px solid rgba(200,120,60,0.4);
        color: #d4884b;
        font-family: inherit;
        font-size: 9px;
        letter-spacing: 2px;
        line-height: 1.2;
        text-transform: uppercase;
        padding: 6px 12px;
        cursor: pointer;
        transition: border-color 0.2s;
        width: 100%;
        text-align: left;
    }
    #_ac-toggle:hover { border-color: rgba(200,120,60,0.7); }
    #_ac-toggle._open { border-bottom-color: transparent; }
    #_ac-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 16px;
        height: 16px;
        background: rgba(200,120,60,0.25);
        border-radius: 50%;
        font-size: 9px;
        flex-shrink: 0;
    }
    #_ac-panel {
        display: none;
        background: rgba(8,6,4,0.97);
        border: 1px solid rgba(200,120,60,0.4);
        border-top: none;
        padding: 10px 0 6px;
    }
    #_ac-panel._open { display: block; }
    ._ac-header {
        font-size: 8px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: rgba(200,184,154,0.3);
        padding: 0 12px 8px;
        border-bottom: 1px solid rgba(200,184,154,0.07);
        margin-bottom: 6px;
    }
    ._ac-pack {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        padding: 6px 12px;
        transition: background 0.1s;
    }
    ._ac-pack:hover { background: rgba(200,184,154,0.04); }
    ._ac-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        flex-shrink: 0;
        margin-top: 4px;
    }
    ._ac-dot.free { background: #6ab04c; }
    ._ac-dot.patreon { background: #f96854; }
    ._ac-dot.opt { background: #888; }
    ._ac-info { flex: 1; min-width: 0; }
    ._ac-name {
        font-size: 10px;
        color: #c8b89a;
        margin-bottom: 2px;
        line-height: 1.3;
    }
    ._ac-desc {
        font-size: 9px;
        color: rgba(200,184,154,0.35);
        font-style: italic;
        line-height: 1.4;
        margin-bottom: 3px;
    }
    ._ac-link {
        font-size: 8px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        padding: 2px 6px;
        border: 1px solid;
        display: inline-block;
        transition: all 0.15s;
    }
    ._ac-link.free { color: #6ab04c; border-color: rgba(106,176,76,0.35); }
    ._ac-link.free:hover { background: rgba(106,176,76,0.1); }
    ._ac-link.patreon { color: #f96854; border-color: rgba(249,104,84,0.35); }
    ._ac-link.patreon:hover { background: rgba(249,104,84,0.1); }
    ._ac-footer {
        font-size: 8px;
        letter-spacing: 1.5px;
        color: rgba(200,184,154,0.18);
        text-align: center;
        padding: 8px 12px 0;
        border-top: 1px solid rgba(200,184,154,0.07);
        margin-top: 6px;
    }
    ._ac-footer a {
        color: rgba(200,184,154,0.35);
        text-decoration: none;
    }
    ._ac-footer a:hover { color: rgba(200,184,154,0.7); }
`;

let styleInjected = false;
let widget = null;
let toggle = null;
let toggleLabel = null;
let badge = null;
let panel = null;
let header = null;
let list = null;
let footer = null;
let missingPacks = [];

function ensureStyles() {
    if (styleInjected) return;
    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
    styleInjected = true;
}

function getPackName(packId) {
    return t(`asset-check.packs.${packId}.name`);
}

function getPackDescription(packId) {
    return t(`asset-check.packs.${packId}.description`);
}

function getToggleLabel(count) {
    const plural = getPluralCategory(count) === 'one' ? 'one' : 'other';
    return t(`asset-check.toggle.${plural}`, { count });
}

function ensureWidget() {
    if (widget) return;

    widget = document.createElement('div');
    widget.id = '_ac-widget';

    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.id = '_ac-toggle';

    badge = document.createElement('span');
    badge.id = '_ac-badge';
    toggle.appendChild(badge);

    toggleLabel = document.createElement('span');
    toggle.appendChild(toggleLabel);

    panel = document.createElement('div');
    panel.id = '_ac-panel';

    header = document.createElement('div');
    header.className = '_ac-header';
    panel.appendChild(header);

    list = document.createElement('div');
    panel.appendChild(list);

    footer = document.createElement('div');
    footer.className = '_ac-footer';
    panel.appendChild(footer);

    toggle.addEventListener('click', e => {
        e.stopPropagation();
        const open = panel.classList.toggle('_open');
        toggle.classList.toggle('_open', open);
    });
    document.addEventListener('click', () => {
        panel.classList.remove('_open');
        toggle.classList.remove('_open');
    });
    panel.addEventListener('click', e => e.stopPropagation());

    widget.appendChild(panel);
    widget.appendChild(toggle);

    const inject = () => document.body.appendChild(widget);
    document.body ? inject() : document.addEventListener('DOMContentLoaded', inject, { once: true });
}

function renderWidget() {
    if (!missingPacks.length) return;

    ensureWidget();
    badge.textContent = String(missingPacks.length);
    toggleLabel.textContent = getToggleLabel(missingPacks.length);
    header.textContent = t('asset-check.header');

    list.replaceChildren(
        ...missingPacks.map(pack => {
            const row = document.createElement('div');
            row.className = '_ac-pack';

            const dot = document.createElement('div');
            dot.className = `_ac-dot ${pack.optional ? 'opt' : pack.tier}`;
            row.appendChild(dot);

            const info = document.createElement('div');
            info.className = '_ac-info';

            const name = document.createElement('div');
            name.className = '_ac-name';
            name.textContent = getPackName(pack.id);
            info.appendChild(name);

            const desc = document.createElement('div');
            desc.className = '_ac-desc';
            desc.textContent = getPackDescription(pack.id);
            info.appendChild(desc);

            const link = document.createElement('a');
            link.className = `_ac-link ${pack.tier}`;
            link.href = pack.url;
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = `${t(pack.tierKey)} ↗`;
            info.appendChild(link);

            row.appendChild(info);
            return row;
        })
    );

    footer.replaceChildren(
        document.createTextNode(`${t('asset-check.footer.prefix')} `),
        (() => {
            const link = document.createElement('a');
            link.href = 'https://quaternius.com';
            link.target = '_blank';
            link.rel = 'noopener';
            link.textContent = 'quaternius.com';
            return link;
        })(),
        document.createTextNode(` - ${t('asset-check.footer.suffix')}`)
    );
}

async function probe(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

async function run() {
    ensureStyles();

    const results = await Promise.all(PACKS.map(async pack => ({
        pack,
        present: await probe(pack.probe),
    })));

    missingPacks = results.filter(result => !result.present).map(result => result.pack);
    if (!missingPacks.length) return;

    renderWidget();
    onLocaleChange(() => renderWidget());
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
} else {
    run();
}
