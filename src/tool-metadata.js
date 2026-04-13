export const HOME_TOOL_ID = '';

export const TOOL_SECTION_ORDER = Object.freeze([
    'gameplay',
    'character',
    'environment',
    'test',
]);

export const TOOL_DEFINITIONS = Object.freeze([
    {
        id: 'gameplay-test',
        icon: '⚔',
        section: 'gameplay',
        primary: true,
        homeColumnSpan: 3,
        tabLabelKey: 'shell.tabs.gameplay',
        badgeKey: 'shell.badges.prototype',
        nameKey: 'tools.gameplay-test.name',
        descriptionKey: 'tools.gameplay-test.description',
    },
    {
        id: 'char-builder',
        icon: '◈',
        section: 'character',
        tabLabelKey: 'tools.char-builder.name',
        badgeKey: 'shell.badges.character',
        nameKey: 'tools.char-builder.name',
        descriptionKey: 'tools.char-builder.description',
    },
    {
        id: 'char-combined',
        icon: '◉',
        section: 'character',
        tabLabelKey: 'tools.char-combined.name',
        badgeKey: 'shell.badges.character',
        nameKey: 'tools.char-combined.name',
        descriptionKey: 'tools.char-combined.description',
    },
    {
        id: 'character-preview',
        icon: '◎',
        section: 'character',
        tabLabelKey: 'tools.character-preview.name',
        badgeKey: 'shell.badges.character',
        nameKey: 'tools.character-preview.name',
        descriptionKey: 'tools.character-preview.description',
    },
    {
        id: 'anim-inspect',
        icon: '▶',
        section: 'character',
        tabLabelKey: 'shell.tabs.animations',
        badgeKey: 'shell.badges.animation',
        nameKey: 'tools.anim-inspect.name',
        descriptionKey: 'tools.anim-inspect.description',
    },
    {
        id: 'asset-browser',
        icon: '❖',
        section: 'environment',
        tabLabelKey: 'shell.tabs.assets',
        badgeKey: 'shell.badges.assets',
        nameKey: 'tools.asset-browser.name',
        descriptionKey: 'tools.asset-browser.description',
    },
    {
        id: 'village-browser',
        icon: '⌂',
        section: 'environment',
        tabLabelKey: 'shell.tabs.village',
        badgeKey: 'shell.badges.environment',
        nameKey: 'tools.village-browser.name',
        descriptionKey: 'tools.village-browser.description',
    },
    {
        id: 'soldier-test',
        icon: '◆',
        section: 'test',
        tabLabelKey: 'tools.soldier-test.name',
        badgeKey: 'shell.badges.test',
        nameKey: 'tools.soldier-test.name',
        descriptionKey: 'tools.soldier-test.description',
    },
]);

const TOOLS_BY_ID = new Map(TOOL_DEFINITIONS.map(tool => [tool.id, tool]));

export function getToolById(toolId = HOME_TOOL_ID) {
    return TOOLS_BY_ID.get(toolId) || null;
}

export function getToolFile(toolId = HOME_TOOL_ID) {
    return toolId === HOME_TOOL_ID ? 'index.html' : `${toolId}.html`;
}

export function getToolsBySection(section) {
    return TOOL_DEFINITIONS.filter(tool => tool.section === section);
}
