import { en } from './locales/en.js';
import { fr } from './locales/fr.js';

export const SUPPORTED_LOCALES = Object.freeze(['en', 'fr']);
export const DEFAULT_LOCALE = 'en';
export const LOCALE_STORAGE_KEY = 'tge_locale_v1';

const DICTIONARIES = { en, fr };
const localeListeners = new Set();
const missingWarnings = new Set();
const storageWarnings = new Set();

let currentLocale = resolveInitialLocale();

function warnOnce(bucket, key, message, error) {
    if (bucket.has(key)) return;
    bucket.add(key);
    if (error === undefined) console.warn(message);
    else console.warn(message, error);
}

function getDocument() {
    return typeof document === 'undefined' ? null : document;
}

function getNavigatorLanguages() {
    if (typeof navigator === 'undefined') return [];
    if (Array.isArray(navigator.languages) && navigator.languages.length) return navigator.languages;
    return navigator.language ? [navigator.language] : [];
}

function readStoredLocale() {
    if (typeof window === 'undefined') return null;
    try {
        const storage = window.localStorage;
        if (!storage) return null;
        return normalizeLocale(storage.getItem(LOCALE_STORAGE_KEY));
    } catch (error) {
        warnOnce(
            storageWarnings,
            'read',
            '[i18n] Failed to read locale from localStorage.',
            error
        );
        return null;
    }
}

function writeStoredLocale(locale) {
    if (typeof window === 'undefined') return;
    try {
        const storage = window.localStorage;
        if (!storage) return;
        storage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch (error) {
        warnOnce(
            storageWarnings,
            'write',
            '[i18n] Failed to write locale to localStorage.',
            error
        );
    }
}

function lookupKey(locale, key) {
    let node = DICTIONARIES[locale];
    for (const part of key.split('.')) {
        if (!node || typeof node !== 'object' || !(part in node)) return undefined;
        node = node[part];
    }
    return typeof node === 'string' ? node : undefined;
}

function interpolate(template, params) {
    if (!params || typeof params !== 'object') return template;
    return template.replace(/\{(\w+)\}/g, (match, name) => {
        if (!(name in params)) return match;
        const value = params[name];
        return value == null ? '' : String(value);
    });
}

function collectTranslatableNodes(root) {
    if (!root) return [];
    const selector = '[data-i18n], [data-i18n-attr]';
    const nodes = [];

    if (typeof root.matches === 'function' && root.matches(selector)) {
        nodes.push(root);
    }
    if (typeof root.querySelectorAll === 'function') {
        nodes.push(...root.querySelectorAll(selector));
    }

    return nodes;
}

function applyAttributeTranslations(node, spec) {
    const entries = spec.split(/[;,]/);
    for (const entry of entries) {
        const trimmed = entry.trim();
        if (!trimmed) continue;

        const colonIndex = trimmed.indexOf(':');
        if (colonIndex <= 0 || colonIndex === trimmed.length - 1) {
            throw new Error(`[i18n] Invalid data-i18n-attr entry "${trimmed}".`);
        }

        const attrName = trimmed.slice(0, colonIndex).trim();
        const key = trimmed.slice(colonIndex + 1).trim();
        node.setAttribute(attrName, t(key));
    }
}

function applyLocaleToDocument(doc = getDocument()) {
    if (!doc?.documentElement) return;
    doc.documentElement.lang = getLocale();
}

function emitLocaleChange(nextLocale, previousLocale) {
    for (const listener of localeListeners) {
        listener(nextLocale, previousLocale);
    }
}

export function normalizeLocale(locale) {
    if (typeof locale !== 'string') return null;
    const trimmed = locale.trim().toLowerCase();
    if (!trimmed) return null;

    if (SUPPORTED_LOCALES.includes(trimmed)) return trimmed;

    const primary = trimmed.split(/[-_]/)[0];
    return SUPPORTED_LOCALES.includes(primary) ? primary : null;
}

export function resolveInitialLocale() {
    const storedLocale = readStoredLocale();
    if (storedLocale) return storedLocale;

    for (const candidate of getNavigatorLanguages()) {
        const resolved = normalizeLocale(candidate);
        if (resolved) return resolved;
    }

    return DEFAULT_LOCALE;
}

export function getLocale() {
    if (!currentLocale) currentLocale = resolveInitialLocale();
    return currentLocale;
}

export function setLocale(locale, { persist = true } = {}) {
    const nextLocale = normalizeLocale(locale);
    if (!nextLocale) {
        throw new Error(`[i18n] Unsupported locale "${locale}".`);
    }

    const previousLocale = getLocale();
    currentLocale = nextLocale;

    if (persist) writeStoredLocale(nextLocale);
    applyLocaleToDocument();

    if (nextLocale !== previousLocale) {
        emitLocaleChange(nextLocale, previousLocale);
    }

    return nextLocale;
}

export function subscribeLocaleChange(listener) {
    if (typeof listener !== 'function') {
        throw new TypeError('[i18n] Locale change listener must be a function.');
    }

    localeListeners.add(listener);
    return () => localeListeners.delete(listener);
}

export const onLocaleChange = subscribeLocaleChange;

export function t(key, params = {}, locale = getLocale()) {
    if (typeof key !== 'string' || !key.trim()) {
        throw new TypeError('[i18n] Translation key must be a non-empty string.');
    }

    const resolvedLocale = normalizeLocale(locale) || getLocale();
    const localized = lookupKey(resolvedLocale, key);
    if (localized !== undefined) return interpolate(localized, params);

    const fallback = resolvedLocale === DEFAULT_LOCALE ? undefined : lookupKey(DEFAULT_LOCALE, key);
    if (fallback !== undefined) {
        warnOnce(
            missingWarnings,
            `${resolvedLocale}:${key}:fallback`,
            `[i18n] Missing "${key}" in "${resolvedLocale}", falling back to "${DEFAULT_LOCALE}".`
        );
        return interpolate(fallback, params);
    }

    warnOnce(
        missingWarnings,
        `${resolvedLocale}:${key}:missing`,
        `[i18n] Missing translation key "${key}".`
    );
    return key;
}

export function translateDOM(root = getDocument()) {
    for (const node of collectTranslatableNodes(root)) {
        const textKey = node.getAttribute('data-i18n');
        if (textKey) {
            node.textContent = t(textKey);
        }

        const attrSpec = node.getAttribute('data-i18n-attr');
        if (attrSpec) {
            applyAttributeTranslations(node, attrSpec);
        }
    }

    applyLocaleToDocument(root?.ownerDocument || (root?.nodeType === 9 ? root : getDocument()));
    return root;
}

export function initI18n({ root = getDocument(), translate = false } = {}) {
    applyLocaleToDocument(root?.ownerDocument || (root?.nodeType === 9 ? root : getDocument()));
    if (translate) translateDOM(root);
    return getLocale();
}

export function formatNumber(value, options = {}, locale = getLocale()) {
    return new Intl.NumberFormat(normalizeLocale(locale) || getLocale(), options).format(value);
}

export function formatDateTime(value, options = {}, locale = getLocale()) {
    return new Intl.DateTimeFormat(normalizeLocale(locale) || getLocale(), options).format(value);
}

export function getPluralCategory(value, locale = getLocale()) {
    return new Intl.PluralRules(normalizeLocale(locale) || getLocale()).select(value);
}

applyLocaleToDocument();
