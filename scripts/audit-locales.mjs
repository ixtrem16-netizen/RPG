import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(SCRIPT_DIR, '..');
const LOCALE_FILES = {
    en: path.join(ROOT_DIR, 'src', 'locales', 'en.js'),
    fr: path.join(ROOT_DIR, 'src', 'locales', 'fr.js'),
};
const KEY_PATTERN = /^[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

function relative(filePath) {
    return path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
}

async function parseExportedObject(filePath, source, cache) {
    if (cache.has(filePath)) return cache.get(filePath);

    const context = {};
    const importMatches = [...source.matchAll(/^import\s+\{\s*(\w+)\s*\}\s+from\s+'(.+?)';$/gm)];
    for (const [, importName, importPath] of importMatches) {
        const resolvedPath = path.resolve(path.dirname(filePath), importPath);
        const importedSource = await readFile(resolvedPath, 'utf8');
        context[importName] = await parseExportedObject(resolvedPath, importedSource, cache);
    }

    const match = source.match(/export const \w+\s*=\s*(\{[\s\S]*?\n\});(?:\s*export default\b[\s\S]*)?$/m);
    if (!match) {
        throw new Error(`Could not parse locale object from ${relative(filePath)}.`);
    }

    const object = vm.runInNewContext(`(${match[1]})`, context, { filename: filePath });
    cache.set(filePath, object);
    return object;
}

async function parseLocaleObject(filePath, source) {
    return parseExportedObject(filePath, source, new Map());
}

function flattenKeys(node, prefix = '') {
    if (typeof node === 'string') return [prefix];
    if (!node || typeof node !== 'object' || Array.isArray(node)) {
        throw new Error(`Invalid locale value at "${prefix || '<root>'}". Expected nested objects and string leaves.`);
    }

    const keys = [];
    for (const [childKey, value] of Object.entries(node)) {
        const nextPrefix = prefix ? `${prefix}.${childKey}` : childKey;
        keys.push(...flattenKeys(value, nextPrefix));
    }
    return keys;
}

function printList(label, items) {
    console.error(`${label} (${items.length})`);
    for (const item of items) {
        console.error(`  - ${item}`);
    }
}

async function readLocaleKeys(locale, filePath) {
    const source = await readFile(filePath, 'utf8');
    const localeObject = await parseLocaleObject(filePath, source);
    const keys = flattenKeys(localeObject).sort();
    const invalidKeys = keys.filter(key => !KEY_PATTERN.test(key));
    return { locale, keys, invalidKeys };
}

async function listHtmlFiles() {
    const entries = await readdir(ROOT_DIR, { withFileTypes: true });
    return entries
        .filter(entry => entry.isFile() && entry.name.endsWith('.html'))
        .map(entry => path.join(ROOT_DIR, entry.name))
        .sort((a, b) => a.localeCompare(b));
}

async function auditHtmlBootstrap() {
    const htmlFiles = await listHtmlFiles();
    const missingBootstrap = [];
    const hardcodedLang = [];

    for (const filePath of htmlFiles) {
        const source = await readFile(filePath, 'utf8');
        if (!/\binitI18n\s*\(/.test(source)) missingBootstrap.push(relative(filePath));
        if (/<html[^>]+lang\s*=\s*"fr"/i.test(source)) hardcodedLang.push(relative(filePath));
    }

    return { htmlFiles, missingBootstrap, hardcodedLang };
}

async function main() {
    const localeAudits = await Promise.all(
        Object.entries(LOCALE_FILES).map(([locale, filePath]) => readLocaleKeys(locale, filePath))
    );

    const keysByLocale = Object.fromEntries(localeAudits.map(({ locale, keys }) => [locale, new Set(keys)]));
    const invalidKeys = localeAudits.flatMap(({ locale, invalidKeys: keys }) => keys.map(key => `${locale}: ${key}`));
    const allKeys = [...new Set(localeAudits.flatMap(({ keys }) => keys))].sort();

    const missingByLocale = Object.fromEntries(
        localeAudits.map(({ locale }) => [
            locale,
            allKeys.filter(key => !keysByLocale[locale].has(key)),
        ])
    );

    let hasError = false;

    if (invalidKeys.length) {
        hasError = true;
        printList('[error] Invalid locale key names', invalidKeys);
    } else {
        console.log(`[ok] Locale key naming matches dotted semantic format (${allKeys.length} keys).`);
    }

    for (const { locale } of localeAudits) {
        const missing = missingByLocale[locale];
        if (missing.length) {
            hasError = true;
            printList(`[error] Missing keys in ${locale}`, missing);
        } else {
            console.log(`[ok] ${locale} locale has a complete key set.`);
        }
    }

    const { htmlFiles, missingBootstrap, hardcodedLang } = await auditHtmlBootstrap();
    if (missingBootstrap.length) {
        hasError = true;
        printList('[error] HTML entry pages missing initI18n bootstrap', missingBootstrap);
    } else {
        console.log(`[ok] initI18n bootstrap present in all ${htmlFiles.length} HTML entry pages.`);
    }

    if (hardcodedLang.length) {
        console.warn(`[warn] Hardcoded html lang="fr" remains in ${hardcodedLang.length} pages:`);
        for (const file of hardcodedLang) {
            console.warn(`  - ${file}`);
        }
    } else {
        console.log('[ok] No hardcoded html lang="fr" remnants found.');
    }

    process.exit(hasError ? 1 : 0);
}

main().catch(error => {
    console.error('[error] Locale audit failed.', error);
    process.exit(1);
});
