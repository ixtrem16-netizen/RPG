import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');

async function read(relativePath) {
    return readFile(path.join(ROOT_DIR, relativePath), 'utf8');
}

function printList(label, items) {
    console.error(`${label} (${items.length})`);
    for (const item of items) {
        console.error(`  - ${item}`);
    }
}

async function main() {
    const [buildMode, gameplayPage, game, charCreation] = await Promise.all([
        read('src\\build_mode.js'),
        read('gameplay-test.html'),
        read('src\\game.js'),
        read('src\\char-creation.js'),
    ]);

    const failures = [];
    const checks = [
        {
            label: 'Build mode scene saves omit localized names',
            pass: /const data = this\._placed\.map\(\(\{ url, x, y, z, rx, ry, rz, doorId, doorOpen \}\)/.test(buildMode),
        },
        {
            label: 'Build mode save migration removes legacy name fields',
            pass: /if \('name' in e\)\s*\{\s*delete e\.name;[\s\S]*needsSave = true;[\s\S]*\}/.test(buildMode),
        },
        {
            label: 'Build mode hotbar saves url fallback with indices',
            pass: /const data = this\._hotbar\.map\(e => e \? \{ catIdx: e\.catIdx, itemIdx: e\.itemIdx, url: e\.url \} : null\);/.test(buildMode),
        },
        {
            label: 'Build mode hotbar load prefers url fallback',
            pass: /const metaByUrl = e\.url \? _getCatalogItemMetaByUrl\(e\.url\) : null;/.test(buildMode),
        },
        {
            label: 'Gameplay belt persists weapon ids only',
            pass: /const BELT_DEFAULT = \['sword','fists','magic','bow','axe','pickaxe','torch','shield', null, null\];/.test(gameplayPage)
                && /localStorage\.setItem\(BELT_STORAGE_KEY, JSON\.stringify\(BELT_CONFIG\)\);/.test(gameplayPage),
        },
        {
            label: 'Gameplay grip persistence is keyed by stable weapon ids',
            pass: /grips\[key\] = \{ px, py, pz, rx, ry, rz, sc, ty, pivX, pivZ, rollX, rollZ \};/.test(gameplayPage),
        },
        {
            label: 'Game save payload stays numeric and stat-based',
            pass: /const data = \{\s*pos:\s*\[player\.position\.x, player\.position\.y, player\.position\.z\],\s*camYaw:\s*camCtrl\.yaw,\s*stats:\s*\{ \.\.\.player\.stats \},\s*hp:\s*player\.hp,\s*stamina:\s*player\.stamina,\s*\};/s.test(game),
        },
        {
            label: 'Character creation save payload stays locale-neutral',
            pass: /localStorage\.setItem\('darkrpg_character_v1', JSON\.stringify\(\{\s*name\s*: nameInput\.value\.trim\(\) \|\| getDefaultName\(\),\s*body\s*: state\.body,\s*outfit\s*: state\.outfit,\s*hair\s*: state\.hair,\s*beard\s*: state\.beard,\s*hairColor: state\.hairColor,\s*eyeColor\s*: state\.eyeColor,\s*skinColor: state\.skinColor,\s*\}\)\);/s.test(charCreation),
        },
    ];

    for (const check of checks) {
        if (!check.pass) failures.push(check.label);
    }

    if (failures.length) {
        printList('[error] Persistence audit failed', failures);
        process.exit(1);
    }

    console.log(`[ok] Persistence audit passed (${checks.length} checks).`);
}

main().catch((error) => {
    console.error('[error] Persistence audit failed.', error);
    process.exit(1);
});
