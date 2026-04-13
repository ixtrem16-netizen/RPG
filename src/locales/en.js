import { buildModeCatalogEn } from './build-mode-catalog-en.js';

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
    gods: {
        meta: {
            vareth: { name: 'Vareth', domain: 'Greed / Ambition' },
            sorel: { name: 'Sorel', domain: 'Justice / Order' },
            maren: { name: 'Maren', domain: 'Compassion / Sacrifice' },
            dusk: { name: 'Dusk', domain: 'Deceit / Shadows' },
            brahl: { name: 'Brahl', domain: 'War / Strength' },
            ylene: { name: 'Ylene', domain: 'Knowledge / Truth' },
            orvane: { name: 'Orvane', domain: 'Chaos / Freedom' },
        },
        whispers: {
            opening: {
                ylene: 'You are here. For how long?',
            },
            drift: {
                force: {
                    down: 'You are softening. That is weakness.',
                    up: 'Good.',
                },
                eloquence: {
                    up: 'You are learning to listen.',
                },
                ombre: {
                    up: 'That is how one moves.',
                    down: 'You are turning transparent. Pathetic.',
                },
                intelligence: {
                    down: 'You stop observing. You become... ordinary.',
                },
                contrast: {
                    'force-ombre': 'A warrior who hides. I love this world.',
                },
            },
        },
        dialogue: {
            'dialogue-instead-of-fight': {
                'line-1': 'What is this. You talk, now?',
                'line-2': 'Interesting. Keep going, it is entertaining.',
                'line-3': 'Pull yourself together. You know what you are.',
                'line-4': 'Something in you may be changing.',
            },
            pickpocket: {
                'line-1': 'Well done. He would not have spent it wisely.',
                'line-2': '...',
                'line-3': 'Sorel goes quiet. It does him good.',
            },
            'help-unprompted': {
                'line-1': 'There. That is it.',
                'line-2': 'You could have asked for something in return.',
                'line-3': 'Be quiet, Vareth.',
                'line-4': '... Alright.',
            },
            'entering-underworld': {
                'line-1': 'I will not say "do not go down there." But know this: below... I can no longer see you.',
                'line-2': 'Please.',
                'line-3': 'I have no joke. That is all you need to know.',
                'line-4': 'I would like to know what you find. If you return, tell me.',
            },
            'exiting-underworld': {
                'line-1': 'You came back. Something changed.',
                'line-2': 'You are here.',
                'line-3': 'Well? What was there?',
            },
        },
    },
    town: {
        trapdoors: {
            tavern: 'Trapdoor to tavern',
            cellar: 'Trapdoor to cellar',
        },
        npcs: {
            default: 'NPC',
            innkeeper: 'Innkeeper',
            server: 'Server',
            'villager-one': 'Villager',
            'villager-two': 'Villager',
        },
    },
    pages: {
        'anim-inspect': {
            title: 'Animation Inspector',
            heading: 'Animation Library — Available Clips',
            status: {
                loading: 'Loading animations...',
                missing: '⚠ No animation file found.',
                loaded: '{count} animations loaded',
                error: 'Error: {message}',
            },
        },
        'char-builder': {
            title: 'Character Builder',
            sections: {
                body: 'Body',
                outfit: 'Outfit',
                'texture-variant': 'Texture variant',
                hair: 'Hair',
                beard: 'Beard',
                'hair-color': 'Hair & beard color',
                'eye-color': 'Eye color',
                'skin-color': 'Skin color',
                proportions: 'Proportions',
                visibility: 'Visibility',
                configurations: 'Configurations',
                animations: 'Animations',
            },
            columns: {
                male: '♂ Male',
                female: '♀ Female',
            },
            options: {
                none: '— None —',
            },
            textures: {
                'color-1': 'Color 1',
                'color-2': 'Color 2',
                'color-3': 'Color 3',
            },
            viewport: {
                loading: 'Loading...',
                hint: 'Right-click: orbit · Wheel: zoom',
            },
            proportions: {
                body: 'Body',
                outfit: 'Outfit',
                'reset-all': 'Reset all proportions',
            },
            pickers: {
                custom: 'Custom color',
            },
            animations: {
                placeholder: 'Filter clips...',
                loading: 'Loading animations...',
                seconds: 's',
            },
            status: {
                empty: '—',
                loading: 'Loading...',
                error: '⚠ {message}',
            },
            actions: {
                'toggle-visibility': 'Show / Hide',
                reset: 'Reset',
            },
            'bone-groups': {
                head: 'Head',
                neck: 'Neck',
                shoulders: 'Shoulders',
                chest: 'Chest',
                arms: 'Arms',
                forearms: 'Forearms',
                hands: 'Hands',
                thighs: 'Thighs',
                calves: 'Calves',
                feet: 'Feet',
            },
            'mesh-labels': {
                'body-male': 'Body ♂',
                'body-female': 'Body ♀',
                eyebrows: 'Eyebrows',
                eyes: 'Eyes',
            },
            'skin-tones': {
                natural: 'Natural',
                alabaster: 'Alabaster',
                fair: 'Fair',
                medium: 'Medium',
                tan: 'Tan',
                brown: 'Brown',
                ebony: 'Ebony',
            },
            configs: {
                placeholder: 'Character name...',
                'save-current': '+ Save current config',
                'save-success': 'Saved ✓',
                exported: 'Exported to game ✓',
                empty: 'No saved configs',
                load: 'Load "{name}"',
                overwrite: 'Overwrite with current config',
                'to-game': '→ Game',
                export: 'Export to game',
                delete: 'Delete',
                'fallback-name': 'Player',
            },
        },
        'char-combined': {
            title: 'Character + Animation Combiner',
            sections: {
                character: 'Character',
            },
            'clip-search-placeholder': 'Filter clips...',
            hint: {
                orbit: 'Right-click: orbit',
                zoom: 'Wheel: zoom',
            },
            status: {
                ready: 'Ready — {count} clips',
                'loading-outfit': 'Loading outfit...',
                'outfit-ready-combine': 'Outfit ready — combining...',
                'outfit-ready-waiting': 'Outfit ready — waiting for animations',
                'outfit-error': '⚠ Outfit: {error}',
                'loading-animations': 'Loading animations...',
                'animations-ready-rebuild': '{count} clips loaded — rebuilding...',
                'animations-ready-waiting': '{count} clips loaded — waiting for outfit',
            },
            seconds: 's',
        },
        'asset-browser': {
            title: 'Asset Browser',
            panel: {
                title: 'Asset Browser',
                close: 'Close panel',
                open: 'Open panel',
            },
            categories: {
                characters: 'Characters',
                hair: 'Hair',
                nature: 'Nature',
                buildings: 'Buildings',
                props: 'Props',
            },
            subcategories: {
                male: 'Male',
                female: 'Female',
                hairstyles: 'Hairstyles',
                eyebrows: 'Eyebrows',
                birch: 'Birch',
                maple: 'Maple',
                'dead-trees': 'Dead Trees',
                bushes: 'Bushes',
                flowers: 'Flowers',
                grass: 'Grass',
                'plaster-walls': 'Plaster Walls',
                'brick-walls': 'Brick Walls',
                corners: 'Corners',
                floors: 'Floors',
                roofs: 'Roofs',
                doors: 'Doors',
                windows: 'Windows',
                'balconies-stairs': 'Balconies & Stairs',
                'exterior-elements': 'Exterior Elements',
                'weapons-tools': 'Weapons & Tools',
                lighting: 'Lighting',
                furniture: 'Furniture',
                containers: 'Containers',
                'food-potions': 'Food & Potions',
                trade: 'Trade',
                decoration: 'Decoration',
            },
            'search-placeholder': 'Search...',
            'search-clear': 'Clear',
            animations: {
                title: 'Animations',
                'search-placeholder': 'Filter clips...',
                loading: 'LOADING...',
                seconds: 's',
            },
            viewport: {
                empty: 'Select an asset',
                loading: 'Loading...',
                hint: 'Right-click: orbit · Wheel: zoom · Middle-click: pan',
                error: '⚠ {error}',
            },
            count: {
                total: '{total} assets',
                filtered: '{visible} / {total} assets',
            },
        },
        'village-browser': {
            title: 'Medieval Village Browser',
            'search-placeholder': 'Search...',
            loading: 'Loading...',
            hint: {
                orbit: 'Right-click + drag: orbit',
                zoom: 'Wheel: zoom',
                pan: 'Left-click + drag: pan',
            },
            count: '{count} objects',
            categories: {
                all: 'All',
                balcony: 'Balcony',
                corner: 'Corner',
                door: 'Door',
                floor: 'Floor',
                'hole-cover': 'Hole Cover',
                overhang: 'Overhang',
                prop: 'Prop',
                roof: 'Roof',
                stair: 'Stair',
                wall: 'Wall',
                window: 'Window',
            },
        },
        'nature-browser': {
            title: 'Nature Pack Browser',
            'search-placeholder': 'Search...',
            loading: 'Loading...',
            hint: {
                orbit: 'Right-click + drag: orbit',
                zoom: 'Wheel: zoom',
                pan: 'Left-click + drag: pan',
            },
            count: '{count} objects',
            categories: {
                all: 'All',
                birch: 'Birch',
                bush: 'Bush',
                'dead-tree': 'Dead Tree',
                flower: 'Flower',
                grass: 'Grass',
                maple: 'Maple',
            },
        },
        'gameplay-test': {
            title: 'Gameplay Test',
            debug: {
                state: 'State',
                'combat-mode': 'Combat mode',
                'speed-ground': 'Speed / Ground',
                position: 'Position',
                none: 'None',
            },
            legend: {
                title: 'Controls',
                rows: {
                    move: { desc: 'Move' },
                    sprint: { desc: 'Sprint' },
                    jump: { key: 'Space', desc: 'Jump' },
                    crouch: { desc: 'Crouch' },
                    'walk-toggle': { desc: 'Walk / Run' },
                    crawl: { desc: 'Crawl' },
                    interact: { desc: 'Interact / Climb' },
                    roll: { desc: 'Roll' },
                    'camera-lean': { desc: 'Camera lean L/R' },
                    dodge: { desc: 'Dodge L/R' },
                    'belt-slots': { desc: 'Belt slots (equip)' },
                    'belt-assign': { key: 'Right-click belt', desc: 'Assign item' },
                    attack: { key: 'LMB', desc: 'Attack' },
                    kick: { desc: 'Kick' },
                    block: { key: 'RMB', desc: 'Block / Aim' },
                    emotes: { key: 'G (hold)', desc: 'Emote wheel' },
                    'cursor-lock': { desc: 'Cursor lock' },
                    'camera-mode': { desc: '1st / 3rd person' },
                    zoom: { key: 'Wheel', desc: 'Camera zoom' },
                    orbit: { key: 'RMB drag', desc: 'Camera orbit' },
                },
            },
            stamina: {
                label: 'Stamina',
            },
            climb: {
                prompt: 'F / Space — Climb | (jump toward wall = auto-grab)',
            },
            camera: {
                'first-short': '1ST',
                'third-short': '3RD',
            },
            locomotion: {
                swim: 'Swim',
                climb: 'Climb',
                slide: 'Slide',
                crouch: 'Crouched',
                crawl: 'Crawling',
                sprint: 'Sprint',
                walk: 'Walk',
                run: 'Run',
                ground: 'Grounded',
                airborne: 'Airborne',
            },
            hands: {
                right: 'right hand',
                left: 'left hand',
            },
            weapons: {
                sword: 'Sword',
                axe: 'Axe',
                knife: 'Knife',
                torch: 'Torch',
                pickaxe: 'Pickaxe',
                shield: 'Shield',
                fists: 'Fists',
                magic: 'Magic',
                bow: 'Bow',
            },
            'weapon-panel': {
                title: 'Weapons',
                'right-hand': 'Right hand',
                'left-hand': 'Left hand',
                none: '— None —',
                grip: {
                    title: 'Grip tuning',
                    save: '💾 Save',
                    pivot: '— Pivot (rotation around center) —',
                },
            },
            belt: {
                'slot-title': 'Slot {slot}',
                empty: '— Empty',
            },
            'live-sync': {
                'reloading-character': 'Refreshing character...',
                updated: 'Character updated ✓',
            },
            emotes: {
                dance: 'Dance',
                celebrate: 'Celebrate',
                cry: 'Cry',
                backflip: 'Backflip',
                drink: 'Drink',
                sit: 'Sit',
                ground: 'Ground',
                wave: 'Wave',
            },
            'idle-variants': {
                'idle-look': 'Look around',
                'turn-left': 'Turn left',
                'turn-right': 'Turn right',
                'idle-fold': 'Fold arms',
            },
            notifications: {
                'weapon-equipped': '{weapon} ▶ {hand}',
                'grip-saved': '✓ Grip saved — {weapon}',
                disarmed: 'Disarmed',
                sitting: 'Sitting — Space to stand up',
                'ground-sitting': 'Ground sitting — Space to stand up',
                walk: 'Walk',
                run: 'Run',
                'idle-variation': 'Idle variation: {variant}',
                'safety-vault': 'Safety Vault',
                roll: 'Roll',
                slide: 'Slide',
                climb: 'Climb — W/S: up/down | A/D: strafe | F/Space: climb over the top',
                swim: 'Swim — WASD move | Space ascend',
                interact: 'Interact',
                welcome: 'Welcome, {name} — I for inventory · G for emotes',
            },
            loading: {
                title: 'Gameplay Test',
                character: 'Loading character...',
                outfit: 'Loading outfit...',
                animations: 'Loading animations...',
                'base-body': 'Loading base body...',
                'building-character': 'Building character...',
                config: 'Config: {name}',
                ready: 'Ready!',
                error: 'Load error: {message}',
                reloading: 'Language changed — reloading...',
            },
        },
        'soldier-test': {
            title: 'Soldier — Test animations',
            buttons: {
                idle: 'Idle',
                walk: 'Walk',
                run: 'Run',
                't-pose': 'T-Pose',
            },
            status: {
                loading: 'Loading...',
                progress: 'Loading... {percent}%',
                error: 'Error: {message}',
                active: '▶ {animation}',
                clips: 'Detected clips',
            },
        },
        'character-preview': {
            title: 'Character Preview',
            info: {
                orbit: 'Right-click + drag: orbit',
                zoom: 'Wheel: zoom',
            },
            status: {
                prompt: 'Click a character',
                loading: 'Loading...',
                progress: 'Loading {percent}%',
                loaded: '{file}\nAnimations: {clips}',
                error: 'Error: {message}',
                none: 'none',
            },
        },
    },
    'build-mode': {
        catalog: buildModeCatalogEn,
    },
    inventory: {
        ui: {
            title: 'Inventory',
            subtitle: '— Exiled Warrior —',
            close: 'Close',
            skills: 'Skills',
            backpack: 'Backpack',
            equipment: 'Equipment',
            'paperdoll-name': '— Warrior —',
            character: 'Character',
            'character-name': 'Exile',
            'character-class': 'Level 1 · Warrior',
            stats: 'Stats',
            'quick-belt': 'Quick Belt',
            'quick-hint': 'Keys 1 - 4',
        },
        slots: {
            head: 'Head',
            neck: 'Neck',
            chest: 'Armor',
            weapon: 'Weapon',
            back: 'Back',
            shield: 'Shield',
            gloves: 'Gloves',
            'ring-left': 'Ring L.',
            legs: 'Legs',
            'ring-right': 'Ring R.',
            feet: 'Boots',
            belt: 'Belt',
        },
        rarity: {
            common: 'Common',
            uncommon: 'Uncommon',
            rare: 'Rare',
            epic: 'Epic',
            legendary: 'Legendary',
        },
        summary: {
            health: 'Health',
            stamina: 'Stamina',
            armor: 'Armor',
            damage: 'Damage',
        },
        hints: {
            use: 'Double-click: Use',
            equip: 'Double-click: Equip',
        },
        toast: {
            health: '{amount} Health',
            stamina: '{amount} Stamina',
            use: '{item} - {effects}',
        },
        'item-stats': {
            damage: 'Damage',
            speed: 'Speed',
            armor: 'Armor',
            block: 'Block',
            heals: 'Heals',
            restores: 'Restores',
            light: 'Light',
            opens: 'Opens',
            length: 'Length',
            type: 'Type',
            gold: 'Gold',
            weight: 'Weight',
            'cold-res': 'Cold Res',
            pocket: 'Pocket',
            magic: 'Magic',
            skill: 'Skill',
            parry: 'Parry',
            stamina: 'Stamina',
            hp: 'HP',
        },
        values: {
            normal: 'Normal',
            slow: 'Slow',
            fast: 'Fast',
            medium: 'Medium',
            unknown: 'Unknown',
            'iron-locks': 'Iron locks',
            'weapon-edge': 'Weapon edge',
            text: 'Text',
            map: 'Map',
            light: 'Light',
            'full-stamina': 'Full Stamina',
            quick: 'quick',
        },
        units: {
            hp: 'HP',
            stamina: 'Stamina',
        },
        items: {
            'sword-bronze': {
                name: 'Bronze Sword',
                desc: 'Forged from early bronze. Still holds an edge.',
            },
            'axe-bronze': {
                name: 'Bronze Axe',
                desc: 'Brutal and reliable. Favoured by soldiers.',
            },
            'pickaxe-bronze': {
                name: 'Bronze Pickaxe',
                desc: 'A miner\'s tool, repurposed for war.',
            },
            knife: {
                name: 'Table Knife',
                desc: 'Not made for killing. Works anyway.',
            },
            'shield-wooden': {
                name: 'Wooden Shield',
                desc: 'Oak planks bound with iron. Heavy but solid.',
            },
            'potion-health': {
                name: 'Health Potion',
                desc: 'A warm red draught. Smells of iron and herbs.',
            },
            'potion-health-lg': {
                name: 'Greater Health Pot',
                desc: 'Concentrated. Bitter. Burns on the way down.',
            },
            'potion-stamina': {
                name: 'Stamina Tonic',
                desc: 'A green tonic. Gives you that second wind.',
            },
            'potion-minor': {
                name: 'Minor Vial',
                desc: 'A small vial. Better than nothing.',
            },
            chalice: {
                name: 'Blessed Chalice',
                desc: 'A goblet touched by something old.',
            },
            antidote: {
                name: 'Antidote',
                desc: 'Clears the body of all poison.',
            },
            carrot: {
                name: 'Carrot',
                desc: 'Fresh from the field. Crunchy.',
            },
            apple: {
                name: 'Apple',
                desc: 'Red and firm. A traveller\'s staple.',
            },
            ale: {
                name: 'Mug of Ale',
                desc: 'Strong brew. You\'ll feel it in your legs.',
            },
            torch: {
                name: 'Torch',
                desc: 'Burns for an hour. Keep it away from the powder.',
            },
            'key-gold': {
                name: 'Gold Key',
                desc: 'An ornate key. You don\'t know what it opens.',
            },
            'key-iron': {
                name: 'Iron Key',
                desc: 'A plain key. Heavy.',
            },
            rope: {
                name: 'Rope',
                desc: 'Useful for climbing. Or other things.',
            },
            whetstone: {
                name: 'Whetstone',
                desc: 'A grey river stone. Keeps blades sharp.',
            },
            'scroll-1': {
                name: 'Old Scroll',
                desc: 'The ink has faded. A few words remain.',
            },
            'scroll-map': {
                name: 'Map Scroll',
                desc: 'A rough map. The roads are barely marked.',
            },
            coin: {
                name: 'Gold Coin',
                desc: 'Standard currency. Worth something, somewhere.',
            },
            'coin-pile': {
                name: 'Coin Pile',
                desc: 'A small fortune. Don\'t lose it.',
            },
            bag: {
                name: 'Travel Bag',
                desc: 'Empty. Useful.',
            },
            pouch: {
                name: 'Pouch',
                desc: 'Worn leather. Smells of old coin.',
            },
            chain: {
                name: 'Iron Chain',
                desc: 'Heavy links. Could restrain something.',
            },
            'exile-blade': {
                name: 'Exile\'s Blade',
                desc: 'A forgotten sword. It has killed before you.',
            },
            'leather-chest': {
                name: 'Leather Cuirass',
                desc: 'Tanned in sweat and salt.',
            },
            'iron-helm': {
                name: 'Iron Helm',
                desc: 'Bears a mark no one recognizes.',
            },
            'travel-boots': {
                name: 'Travel Boots',
                desc: 'Worn by a thousand miles.',
            },
            'worn-belt': {
                name: 'Soldier\'s Belt',
                desc: 'Braided leather, broken buckle.',
            },
            'health-vial': {
                name: 'Dark Sap Vial',
                desc: 'Bitter. Effective.',
            },
            'eitr-shard': {
                name: 'Eitr Shard',
                desc: '"It should not exist."',
            },
            'bone-ring': {
                name: 'Bone Ring',
                desc: 'Carved from something one should not carve.',
            },
            'old-dagger': {
                name: 'Rusted Dagger',
                desc: 'A short blade. Enough for a throat.',
            },
        },
    },
    'char-creation': {
        ui: {
            title: 'Character Creation',
            name: 'Name',
            'name-placeholder': 'Enter your name...',
            body: 'Body',
            outfit: 'Outfit',
            hair: 'Hair',
            beard: 'Beard',
            colors: 'Colors',
            confirm: 'Enter the World',
            skip: 'Continue with current character',
            hint: 'Drag to rotate · Scroll to zoom',
        },
        body: {
            male: '♂ Male',
            female: '♀ Female',
        },
        colors: {
            hair: 'Hair',
            eyes: 'Eyes',
            skin: 'Skin',
            reset: 'Reset',
        },
        loading: {
            initializing: 'Initializing...',
            loading: 'Loading...',
        },
        defaults: {
            name: 'Hero',
        },
        outfits: {
            ranger: 'Ranger',
            peasant: 'Peasant',
            knight: 'Knight',
            'knight-cloth': 'Knight Cloth',
            noble: 'Noble',
            wizard: 'Wizard',
        },
        hair: {
            none: 'None',
            long: 'Long',
            parted: 'Parted',
            'buzzed-male': 'Buzzed ♂',
            'buzzed-female': 'Buzzed ♀',
            buns: 'Buns',
        },
        beard: {
            none: 'None',
            beard: 'Beard',
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
