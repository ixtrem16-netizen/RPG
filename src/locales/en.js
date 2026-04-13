export const en = {
    app: {
        title: 'Three.js Game Editor',
    },
    nav: {
        home: 'Home',
        toggle: {
            title: 'Tool navigation',
        },
    },
    locale: {
        label: 'Language',
        changed: 'Language changed',
        names: {
            en: 'English',
            fr: 'French',
        },
    },
    common: {
        loading: 'Loading...',
        open: 'Open',
        close: 'Close',
        reload: 'Reload',
    },
    shell: {
        home: {
            'studio-label': 'Quaternius Studio',
            cta: 'Open ->',
        },
        tabs: {
            gameplay: 'Gameplay',
            animations: 'Animations',
            assets: 'Assets',
            village: 'Village',
        },
        sections: {
            gameplay: 'Gameplay',
            character: 'Character',
            environment: 'Environment',
            test: 'Test',
        },
        badges: {
            prototype: 'Prototype',
            character: 'Character',
            animation: 'Animation',
            assets: 'Assets',
            environment: 'Environment',
            test: 'Test',
        },
    },
    tools: {
        'gameplay-test': {
            name: 'Gameplay Test',
            description: 'Locomotion · Combat · Physics · Valcrest town. Full playable prototype - sword, shield, bow, magic.',
        },
        'char-builder': {
            name: 'Char Builder',
            description: 'Modular assembly - body, outfits, hair, beard. Shaders by color zone.',
        },
        'char-combined': {
            name: 'Char Combined',
            description: 'Builder + full-body preview side by side.',
        },
        'character-preview': {
            name: 'Char Preview',
            description: 'Preview the assembled character with all active animations.',
        },
        'anim-inspect': {
            name: 'Anim Inspector',
            description: 'Browse and preview every animation clip across the merged libraries.',
        },
        'asset-browser': {
            name: 'Asset Browser',
            description: 'All Quaternius assets - category filters and 3D thumbnails.',
        },
        'village-browser': {
            name: 'Village Browser',
            description: 'Browse and preview every Medieval Village MegaKit piece.',
        },
        'soldier-test': {
            name: 'Soldier Test',
            description: 'Quick test scene - character and animations.',
        },
    },
    gameplay: {
        loading: {
            'click-to-play': '— Click to play —',
            world: 'Loading world...',
            'in-progress': 'Loading in progress...',
        },
        mode: {
            combat: 'Combat',
            selection: 'Selection',
            fps: 'FPS',
            'fps-free': 'FPS - free cursor',
            'third-person': 'Third person',
            'third-person-free': 'Third person - free cursor',
        },
        pause: {
            fullscreen: 'FULLSCREEN',
            windowed: 'WINDOWED',
            save: 'SAVE',
            saved: 'SAVED',
        },
        door: {
            open: '[ F ] Open door',
            close: '[ F ] Close door',
        },
        stats: {
            force: 'Strength',
            endurance: 'Endurance',
            agilite: 'Agility',
            intelligence: 'Intelligence',
            eloquence: 'Eloquence',
            perception: 'Perception',
            volonte: 'Willpower',
            ombre: 'Shadow',
        },
        minimap: {
            cardinals: {
                n: 'N',
                ne: 'NE',
                e: 'E',
                se: 'SE',
                s: 'S',
                sw: 'SW',
                w: 'W',
                nw: 'NW',
            },
        },
        drift: {
            force: {
                up: {
                    '0': 'Your movements gain certainty.',
                    '1': 'The weight of your weapons seems lighter.',
                },
                down: {
                    '0': 'Your hands reach for the pommel of a sword that is no longer there.',
                    '1': 'Something softens inside you. Not your muscles. Not yet.',
                },
            },
            endurance: {
                up: {
                    '0': 'You endure more without even noticing.',
                },
                down: {
                    '0': 'You run out of breath where you should not.',
                },
            },
            agilite: {
                up: {
                    '0': 'Your feet search for holds differently than before.',
                    '1': 'You move differently now. More economical.',
                },
                down: {
                    '0': 'Your gear feels heavy. You feel it in every turn.',
                },
            },
            intelligence: {
                up: {
                    '0': 'You start weighing your observations before speaking.',
                    '1': 'Connections form more quickly.',
                },
                down: {
                    '0': 'You act without thinking. It is faster. Not necessarily better.',
                },
            },
            eloquence: {
                up: {
                    '0': 'Words come to you more naturally.',
                    '1': 'People seem to listen to you more.',
                },
                down: {
                    '0': 'Words ring hollow. Even to you.',
                },
            },
            perception: {
                up: {
                    '0': 'You notice what others ignore.',
                    '1': 'Something has sharpened in the way you look at the world.',
                },
                down: {
                    '0': 'You miss things. You know it. You keep going anyway.',
                },
            },
            volonte: {
                up: {
                    '0': 'Something has hardened. Not your muscles. Something else.',
                    '1': 'You resist better what presses on you.',
                },
                down: {
                    '0': 'You falter where you used to stand firm.',
                },
            },
            ombre: {
                up: {
                    '0': 'You learn to take up less space.',
                    '1': 'You slip by more easily. You are not sure that is good.',
                },
                down: {
                    '0': 'You act in the open. People notice.',
                },
            },
        },
    },
    'asset-check': {
        toggle: {
            one: '{count} missing pack',
            other: '{count} missing packs',
        },
        header: 'Required Quaternius assets',
        footer: {
            prefix: '3D assets by',
            suffix: 'royalty-free',
        },
        tiers: {
            free: 'Free',
            'patreon-source': 'Patreon · Source',
        },
        packs: {
            'ual-standard': {
                name: 'Universal Animation Library',
                description: 'Core animations - locomotion, combat, interactions.',
            },
            'ual2-standard': {
                name: 'Universal Animation Library 2',
                description: 'Parkour, climbing, and advanced animations.',
            },
            'ual-source': {
                name: 'Animation Library - Source',
                description: 'High-resolution source versions with .blend files.',
            },
            'char-outfits': {
                name: 'Modular Character Outfits - Fantasy',
                description: 'Bodies, outfits, hair, and modular beards.',
            },
            village: {
                name: 'Medieval Village MegaKit',
                description: 'Buildings, walls, furniture, and medieval props.',
            },
            nature: {
                name: 'Nature Pack',
                description: 'Trees, bushes, rocks, and vegetation.',
            },
            props: {
                name: 'Fantasy Props MegaKit',
                description: 'Weapons, tools, and fantasy decorations.',
            },
        },
    },
};

export default en;
