/**
 * src/nav.js — Widget de navigation flottant
 * Injecter avec <script src="src/nav.js"></script> dans n'importe quelle page.
 * Affiche un bouton ≡ en bas à droite qui ouvre un menu de navigation.
 */
(function () {
    'use strict';

    const TOOLS = [
        { label: 'Hub',             file: 'index.html',            icon: '⌂',  cat: null },
        { label: 'Gameplay Test',   file: 'gameplay-test.html',    icon: '⚔',  cat: 'Gameplay' },
        { label: 'Char Builder',    file: 'char-builder.html',     icon: '◈',  cat: 'Personnage' },
        { label: 'Char Combiné',    file: 'char-combined.html',    icon: '◉',  cat: null },
        { label: 'Char Preview',    file: 'character-preview.html',icon: '◎',  cat: null },
        { label: 'Anim Inspector',  file: 'anim-inspect.html',     icon: '▶',  cat: null },
        { label: 'Asset Browser',   file: 'asset-browser.html',    icon: '❖',  cat: 'Environnement' },
        { label: 'Village Browser', file: 'village-browser.html',  icon: '⌂',  cat: null },
        { label: 'Nature Browser',  file: 'nature-browser.html',   icon: '✦',  cat: null },
        { label: 'Soldier Test',    file: 'soldier-test.html',     icon: '◆',  cat: 'Test' },
    ];

    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // ── Styles ──────────────────────────────────────────────────────────────
    const css = `
        #_nav-widget {
            position: fixed;
            bottom: 18px;
            right: 18px;
            z-index: 99999;
            font-family: 'Georgia', serif;
            user-select: none;
        }
        #_nav-toggle {
            width: 34px;
            height: 34px;
            background: rgba(8,6,4,0.90);
            border: 1px solid rgba(200,184,154,0.22);
            color: #c8b89a;
            font-size: 17px;
            line-height: 1;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: border-color 0.2s, color 0.2s;
            padding: 0;
            outline: none;
        }
        #_nav-toggle:hover {
            border-color: rgba(200,184,154,0.55);
            color: #e8d8b4;
        }
        #_nav-toggle._open {
            border-color: rgba(200,184,154,0.45);
            color: #d4a84b;
        }
        #_nav-menu {
            position: absolute;
            bottom: 42px;
            right: 0;
            background: rgba(8,6,4,0.97);
            border: 1px solid rgba(200,184,154,0.18);
            min-width: 200px;
            padding: 6px 0;
            display: none;
            box-shadow: 0 -8px 32px rgba(0,0,0,0.8);
        }
        #_nav-menu._open { display: block; }
        #_nav-menu ._nav-cat {
            font-size: 8px;
            letter-spacing: 3.5px;
            text-transform: uppercase;
            color: rgba(200,184,154,0.25);
            padding: 8px 14px 4px;
        }
        #_nav-menu ._nav-cat:first-child { padding-top: 4px; }
        #_nav-menu a {
            display: flex;
            align-items: center;
            gap: 9px;
            padding: 7px 14px;
            color: #b8a88a;
            text-decoration: none;
            font-size: 11px;
            letter-spacing: 1.2px;
            transition: background 0.12s, color 0.12s;
            border-left: 2px solid transparent;
        }
        #_nav-menu a:hover {
            background: rgba(200,184,154,0.07);
            color: #e0d0b0;
        }
        #_nav-menu a._current {
            color: #d4a84b;
            border-left-color: rgba(212,168,75,0.6);
        }
        #_nav-menu a ._nicon {
            opacity: 0.55;
            font-size: 13px;
            width: 14px;
            text-align: center;
            flex-shrink: 0;
        }
        #_nav-menu a._current ._nicon { opacity: 0.9; }
        #_nav-menu ._nav-sep {
            height: 1px;
            background: rgba(200,184,154,0.08);
            margin: 5px 0;
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // ── Widget DOM ───────────────────────────────────────────────────────────
    const widget = document.createElement('div');
    widget.id = '_nav-widget';

    const toggle = document.createElement('button');
    toggle.id = '_nav-toggle';
    toggle.innerHTML = '&#8801;';  // ≡
    toggle.title = 'Navigation outils';

    const menu = document.createElement('div');
    menu.id = '_nav-menu';

    let lastCat = undefined;

    TOOLS.forEach(t => {
        // Section header
        if (t.cat !== undefined && t.cat !== lastCat) {
            if (lastCat !== undefined) {
                const sep = document.createElement('div');
                sep.className = '_nav-sep';
                menu.appendChild(sep);
            }
            if (t.cat !== null) {
                const cat = document.createElement('div');
                cat.className = '_nav-cat';
                cat.textContent = t.cat;
                menu.appendChild(cat);
            }
            lastCat = t.cat;
        }

        const a = document.createElement('a');
        a.href = t.file;

        const icon = document.createElement('span');
        icon.className = '_nicon';
        icon.textContent = t.icon;

        a.appendChild(icon);
        a.appendChild(document.createTextNode(t.label));

        if (t.file === currentFile) {
            a.classList.add('_current');
            a.removeAttribute('href'); // pas de navigation vers soi-même
        }

        menu.appendChild(a);
    });

    // ── Toggle logic ─────────────────────────────────────────────────────────
    toggle.addEventListener('click', e => {
        e.stopPropagation();
        const open = menu.classList.toggle('_open');
        toggle.classList.toggle('_open', open);
    });

    document.addEventListener('click', () => {
        menu.classList.remove('_open');
        toggle.classList.remove('_open');
    });

    menu.addEventListener('click', e => e.stopPropagation());

    widget.appendChild(menu);
    widget.appendChild(toggle);

    // Injecter après le chargement du DOM
    if (document.body) {
        document.body.appendChild(widget);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.body.appendChild(widget));
    }
})();
