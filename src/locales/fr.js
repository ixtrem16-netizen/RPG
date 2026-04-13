import { buildModeCatalogFr } from './build-mode-catalog-fr.js';

export const fr = {
    app: {
        title: 'Three.js Game Editor',
    },
    nav: {
        home: 'Accueil',
        toggle: {
            title: 'Navigation outils',
        },
    },
    locale: {
        label: 'Langue',
        changed: 'Langue modifiée',
        names: {
            en: 'Anglais',
            fr: 'Français',
        },
    },
    common: {
        loading: 'Chargement...',
        open: 'Ouvrir',
        close: 'Fermer',
        reload: 'Recharger',
    },
    shell: {
        home: {
            'studio-label': 'Quaternius Studio',
            cta: 'Ouvrir ->',
        },
        tabs: {
            gameplay: 'Gameplay',
            animations: 'Animations',
            assets: 'Assets',
            village: 'Village',
        },
        sections: {
            gameplay: 'Gameplay',
            character: 'Personnage',
            environment: 'Environnement',
            test: 'Test',
        },
        badges: {
            prototype: 'Prototype',
            character: 'Character',
            animation: 'Animation',
            assets: 'Assets',
            environment: 'Environnement',
            test: 'Test',
        },
    },
    tools: {
        'gameplay-test': {
            name: 'Gameplay Test',
            description: 'Locomotion · Combat · Physique · Ville de Valcrest. Prototype jouable complet - epee, bouclier, arc, magie.',
        },
        'char-builder': {
            name: 'Char Builder',
            description: 'Assemblage modulaire - body, outfits, hair, beard. Shaders par zone de couleur.',
        },
        'char-combined': {
            name: 'Char Combine',
            description: 'Builder + apercu plein corps cote a cote.',
        },
        'character-preview': {
            name: 'Char Preview',
            description: 'Apercu du personnage assemble avec toutes ses animations actives.',
        },
        'anim-inspect': {
            name: 'Anim Inspector',
            description: 'Browse et preview de tous les clips d animation des librairies fusionnees.',
        },
        'asset-browser': {
            name: 'Asset Browser',
            description: 'Tous les assets Quaternius - filtre par categorie et thumbnails 3D.',
        },
        'village-browser': {
            name: 'Village Browser',
            description: 'Browse et preview de toutes les pieces Medieval Village MegaKit.',
        },
        'soldier-test': {
            name: 'Soldier Test',
            description: 'Scene de test rapide - personnage et animations.',
        },
    },
    gameplay: {
        loading: {
            'click-to-play': '— Cliquez pour jouer —',
            world: 'Chargement du monde...',
            'in-progress': 'Chargement en cours...',
        },
        mode: {
            combat: 'Combat',
            selection: 'Selection',
            fps: 'FPS',
            'fps-free': 'FPS - curseur libre',
            'third-person': '3e personne',
            'third-person-free': '3e personne - curseur libre',
        },
        pause: {
            fullscreen: 'PLEIN ECRAN',
            windowed: 'MODE FENETRE',
            save: 'SAUVEGARDER',
            saved: 'SAUVEGARDÉ',
        },
        door: {
            open: '[ F ] Ouvrir la porte',
            close: '[ F ] Fermer la porte',
        },
        stats: {
            force: 'Force',
            endurance: 'Endurance',
            agilite: 'Agilite',
            intelligence: 'Intelligence',
            eloquence: 'Eloquence',
            perception: 'Perception',
            volonte: 'Volonte',
            ombre: 'Ombre',
        },
        minimap: {
            cardinals: {
                n: 'N',
                ne: 'NE',
                e: 'E',
                se: 'SE',
                s: 'S',
                sw: 'SO',
                w: 'O',
                nw: 'NO',
            },
        },
        drift: {
            force: {
                up: {
                    '0': 'Tes mouvements gagnent en certitude.',
                    '1': 'Le poids de tes armes semble moindre.',
                },
                down: {
                    '0': 'Tes mains cherchent le pommeau d une epee qui n est plus la.',
                    '1': 'Quelque chose se ramollit en toi. Pas tes muscles. Pas encore.',
                },
            },
            endurance: {
                up: {
                    '0': 'Tu endures davantage sans t en apercevoir.',
                },
                down: {
                    '0': 'Tu t essouffles la ou tu ne le devrais pas.',
                },
            },
            agilite: {
                up: {
                    '0': 'Tes pieds cherchent les prises differemment qu avant.',
                    '1': 'Tu te deplaces autrement. Plus econome.',
                },
                down: {
                    '0': 'L equipement pese. Tu le sens dans les virages.',
                },
            },
            intelligence: {
                up: {
                    '0': 'Tu commences a peser tes observations avant de parler.',
                    '1': 'Les connexions s etablissent plus vite.',
                },
                down: {
                    '0': 'Tu agis sans reflechir. C est plus rapide. Pas necessairement mieux.',
                },
            },
            eloquence: {
                up: {
                    '0': 'Tu trouves les mots plus naturellement.',
                    '1': 'Les gens semblent t ecouter davantage.',
                },
                down: {
                    '0': 'Les mots sonnent creux. Meme pour toi.',
                },
            },
            perception: {
                up: {
                    '0': 'Tu remarques ce que les autres ignorent.',
                    '1': 'Quelque chose s est affine dans ta facon de regarder.',
                },
                down: {
                    '0': 'Tu passes a cote de choses. Tu le sais. Tu continues quand meme.',
                },
            },
            volonte: {
                up: {
                    '0': 'Quelque chose s est endurci. Pas tes muscles. Autre chose.',
                    '1': 'Tu resistes mieux a ce qui te sollicite.',
                },
                down: {
                    '0': 'Tu vacilles la ou tu tenais bon avant.',
                },
            },
            ombre: {
                up: {
                    '0': 'Tu apprends a occuper moins d espace.',
                    '1': 'Tu passes inapercu plus facilement. Tu n es pas sur que c est bien.',
                },
                down: {
                    '0': 'Tu agis a visage decouvert. Certains le remarquent.',
                },
            },
        },
    },
    gods: {
        meta: {
            vareth: { name: 'Vareth', domain: 'Cupidité / Ambition' },
            sorel: { name: 'Sorel', domain: 'Justice / Ordre' },
            maren: { name: 'Maren', domain: 'Compassion / Sacrifice' },
            dusk: { name: 'Dusk', domain: 'Tromperie / Ombres' },
            brahl: { name: 'Brahl', domain: 'Guerre / Force' },
            ylene: { name: 'Ylene', domain: 'Connaissance / Vérité' },
            orvane: { name: 'Orvane', domain: 'Chaos / Liberté' },
        },
        whispers: {
            opening: {
                ylene: 'Tu es là. Pour combien de temps ?',
            },
            drift: {
                force: {
                    down: 'Tu ramollis. C\'est une faiblesse.',
                    up: 'Bien.',
                },
                eloquence: {
                    up: 'Tu apprends à écouter.',
                },
                ombre: {
                    up: 'Voilà comment on se déplace.',
                    down: 'Tu deviens transparent. C\'est pitoyable.',
                },
                intelligence: {
                    down: 'Tu cesses d\'observer. Tu deviens... ordinaire.',
                },
                contrast: {
                    'force-ombre': 'Un guerrier qui se cache. J\'adore ce monde.',
                },
            },
        },
        dialogue: {
            'dialogue-instead-of-fight': {
                'line-1': 'Qu\'est-ce que c\'est que ça. Tu parles, maintenant ?',
                'line-2': 'Intéressant. Continue, c\'est divertissant.',
                'line-3': 'Reprends-toi. Tu sais ce que tu es.',
                'line-4': 'Il y a peut-être quelque chose qui change en toi.',
            },
            pickpocket: {
                'line-1': 'Bien joué. Il ne l\'aurait pas dépensé utilement.',
                'line-2': '...',
                'line-3': 'Sorel se tait. Ça lui fait du bien.',
            },
            'help-unprompted': {
                'line-1': 'Voilà. C\'est ça.',
                'line-2': 'Tu aurais pu demander quelque chose en échange.',
                'line-3': 'Tais-toi, Vareth.',
                'line-4': '... D\'accord.',
            },
            'entering-underworld': {
                'line-1': 'Je ne dirai pas "ne vas pas là-dedans". Mais sache que là-dessous... je ne peux plus te voir.',
                'line-2': 'S\'il te plaît.',
                'line-3': 'Je n\'ai pas de blague. C\'est tout ce que tu as besoin de savoir.',
                'line-4': 'Je serais curieux de savoir ce que tu vas trouver. Si tu reviens, raconte-moi.',
            },
            'exiting-underworld': {
                'line-1': 'Tu es revenu. Quelque chose a changé.',
                'line-2': 'Tu es là.',
                'line-3': 'Alors ? Qu\'est-ce qu\'il y avait ?',
            },
        },
    },
    town: {
        trapdoors: {
            tavern: 'Trappe vers la taverne',
            cellar: 'Trappe vers la cave',
        },
        npcs: {
            default: 'PNJ',
            innkeeper: 'Aubergiste',
            server: 'Serveur',
            'villager-one': 'Villageois',
            'villager-two': 'Villageois',
        },
    },
    pages: {
        'anim-inspect': {
            title: 'Inspecteur d animations',
            heading: 'Bibliotheque d animation — clips disponibles',
            status: {
                loading: 'Chargement des animations...',
                missing: '⚠ Aucun fichier d animation trouve.',
                loaded: '{count} animations chargees',
                error: 'Erreur : {message}',
            },
        },
        'char-builder': {
            title: 'Constructeur de personnage',
            sections: {
                body: 'Corps',
                outfit: 'Tenue',
                'texture-variant': 'Variante de texture',
                hair: 'Cheveux',
                beard: 'Barbe',
                'hair-color': 'Couleur cheveux & barbe',
                'eye-color': 'Couleur des yeux',
                'skin-color': 'Couleur de peau',
                proportions: 'Proportions',
                visibility: 'Visibilité',
                configurations: 'Configurations',
                animations: 'Animations',
            },
            columns: {
                male: '♂ Homme',
                female: '♀ Femme',
            },
            options: {
                none: '— Aucune —',
            },
            textures: {
                'color-1': 'Couleur 1',
                'color-2': 'Couleur 2',
                'color-3': 'Couleur 3',
            },
            viewport: {
                loading: 'Chargement...',
                hint: 'Clic droit : orbiter · Molette : zoom',
            },
            proportions: {
                body: 'Corps',
                outfit: 'Tenue',
                'reset-all': 'Réinitialiser toutes les proportions',
            },
            pickers: {
                custom: 'Couleur personnalisée',
            },
            animations: {
                placeholder: 'Filtrer les clips...',
                loading: 'Chargement des animations...',
                seconds: 's',
            },
            status: {
                empty: '—',
                loading: 'Chargement...',
                error: '⚠ {message}',
            },
            actions: {
                'toggle-visibility': 'Afficher / Cacher',
                reset: 'Réinitialiser',
            },
            'bone-groups': {
                head: 'Tête',
                neck: 'Cou',
                shoulders: 'Epaules',
                chest: 'Poitrine',
                arms: 'Bras',
                forearms: 'Avant-bras',
                hands: 'Mains',
                thighs: 'Cuisses',
                calves: 'Mollets',
                feet: 'Pieds',
            },
            'mesh-labels': {
                'body-male': 'Corps ♂',
                'body-female': 'Corps ♀',
                eyebrows: 'Sourcils',
                eyes: 'Yeux',
            },
            'skin-tones': {
                natural: 'Naturel',
                alabaster: 'Albâtre',
                fair: 'Clair',
                medium: 'Medium',
                tan: 'Bronze',
                brown: 'Brun',
                ebony: 'Ébène',
            },
            configs: {
                placeholder: 'Nom du personnage...',
                'save-current': '+ Sauvegarder la config actuelle',
                'save-success': 'Sauvegarde ✓',
                exported: 'Exporte vers le jeu ✓',
                empty: 'Aucune config sauvegardee',
                load: 'Charger "{name}"',
                overwrite: 'Ecraser avec la config actuelle',
                'to-game': '→ Jeu',
                export: 'Exporter vers le jeu',
                delete: 'Supprimer',
                'fallback-name': 'Joueur',
            },
        },
        'char-combined': {
            title: 'Combineur personnage + animations',
            sections: {
                character: 'Personnage',
            },
            'clip-search-placeholder': 'Filtrer les clips...',
            hint: {
                orbit: 'Clic droit : orbiter',
                zoom: 'Molette : zoom',
            },
            status: {
                ready: 'Pret — {count} clips',
                'loading-outfit': 'Chargement tenue...',
                'outfit-ready-combine': 'Tenue OK — combinaison...',
                'outfit-ready-waiting': 'Tenue OK — attente animations',
                'outfit-error': '⚠ Tenue : {error}',
                'loading-animations': 'Chargement des animations...',
                'animations-ready-rebuild': '{count} clips charges — reconstruction...',
                'animations-ready-waiting': '{count} clips charges — attente tenue',
            },
            seconds: 's',
        },
        'asset-browser': {
            title: 'Navigateur d assets',
            panel: {
                title: 'Navigateur d assets',
                close: 'Fermer le panneau',
                open: 'Ouvrir le panneau',
            },
            categories: {
                characters: 'Persos',
                hair: 'Cheveux',
                nature: 'Nature',
                buildings: 'Batim.',
                props: 'Props',
            },
            subcategories: {
                male: 'Masculin',
                female: 'Feminin',
                hairstyles: 'Coiffures',
                eyebrows: 'Sourcils',
                birch: 'Bouleaux',
                maple: 'Erables',
                'dead-trees': 'Arbres morts',
                bushes: 'Buissons',
                flowers: 'Fleurs',
                grass: 'Herbe',
                'plaster-walls': 'Murs platre',
                'brick-walls': 'Murs brique',
                corners: 'Coins',
                floors: 'Sols',
                roofs: 'Toits',
                doors: 'Portes',
                windows: 'Fenetres',
                'balconies-stairs': 'Balcons & escaliers',
                'exterior-elements': 'Elements ext.',
                'weapons-tools': 'Armes & outils',
                lighting: 'Eclairage',
                furniture: 'Mobilier',
                containers: 'Conteneurs',
                'food-potions': 'Nourriture & potions',
                trade: 'Commerce',
                decoration: 'Decoration',
            },
            'search-placeholder': 'Rechercher...',
            'search-clear': 'Effacer',
            animations: {
                title: 'Animations',
                'search-placeholder': 'Filtrer les clips...',
                loading: 'CHARGEMENT...',
                seconds: 's',
            },
            viewport: {
                empty: 'Selectionne un asset',
                loading: 'Chargement...',
                hint: 'Clic droit : orbiter · Molette : zoom · Clic milieu : panoramique',
                error: '⚠ {error}',
            },
            count: {
                total: '{total} assets',
                filtered: '{visible} / {total} assets',
            },
        },
        'village-browser': {
            title: 'Navigateur village medieval',
            'search-placeholder': 'Rechercher...',
            loading: 'Chargement...',
            hint: {
                orbit: 'Clic droit + glisser : orbiter',
                zoom: 'Molette : zoom',
                pan: 'Clic gauche + glisser : panoramique',
            },
            count: '{count} objets',
            categories: {
                all: 'Tout',
                balcony: 'Balcon',
                corner: 'Coin',
                door: 'Porte',
                floor: 'Sol',
                'hole-cover': 'Trappe',
                overhang: 'Surplomb',
                prop: 'Prop',
                roof: 'Toit',
                stair: 'Escalier',
                wall: 'Mur',
                window: 'Fenetre',
            },
        },
        'nature-browser': {
            title: 'Navigateur pack nature',
            'search-placeholder': 'Rechercher...',
            loading: 'Chargement...',
            hint: {
                orbit: 'Clic droit + glisser : orbiter',
                zoom: 'Molette : zoom',
                pan: 'Clic gauche + glisser : panoramique',
            },
            count: '{count} objets',
            categories: {
                all: 'Tout',
                birch: 'Bouleau',
                bush: 'Buisson',
                'dead-tree': 'Arbre mort',
                flower: 'Fleur',
                grass: 'Herbe',
                maple: 'Erable',
            },
        },
        'gameplay-test': {
            title: 'Gameplay Test',
            debug: {
                state: 'État',
                'combat-mode': 'Mode combat',
                'speed-ground': 'Vitesse / Sol',
                position: 'Position',
                none: 'Aucun',
            },
            legend: {
                title: 'Contrôles',
                rows: {
                    move: { desc: 'Déplacer' },
                    sprint: { desc: 'Sprint' },
                    jump: { key: 'Espace', desc: 'Sauter' },
                    crouch: { desc: 'Accroupir' },
                    'walk-toggle': { desc: 'Marche / Course' },
                    crawl: { desc: 'Ramper' },
                    interact: { desc: 'Interagir / Grimper' },
                    roll: { desc: 'Roulade' },
                    'camera-lean': { desc: 'Lean caméra G/D' },
                    dodge: { desc: 'Esquive G/D' },
                    'belt-slots': { desc: 'Slots belt (équiper)' },
                    'belt-assign': { key: 'Clic droit belt', desc: 'Assigner item' },
                    attack: { key: 'Clic G', desc: 'Attaquer' },
                    kick: { desc: 'Coup de pied' },
                    block: { key: 'Clic D', desc: 'Bloquer / Viser' },
                    emotes: { key: 'G (tenir)', desc: 'Roue émotes' },
                    'cursor-lock': { desc: 'Cursor lock' },
                    'camera-mode': { desc: '1re / 3e personne' },
                    zoom: { key: 'Molette', desc: 'Zoom caméra' },
                    orbit: { key: 'Clic D drag', desc: 'Orbite caméra' },
                },
            },
            stamina: {
                label: 'Endurance',
            },
            climb: {
                prompt: 'F / Espace — Grimper | (saut vers le mur = auto-grab)',
            },
            camera: {
                'first-short': '1RE',
                'third-short': '3E',
            },
            locomotion: {
                swim: 'Nage',
                climb: 'Grimpe',
                slide: 'Glissade',
                crouch: 'Accroupi',
                crawl: 'Rampant',
                sprint: 'Sprint',
                walk: 'Marche',
                run: 'Course',
                ground: 'Sol',
                airborne: 'Aérien',
            },
            hands: {
                right: 'main droite',
                left: 'main gauche',
            },
            weapons: {
                sword: 'Épée',
                axe: 'Hache',
                knife: 'Couteau',
                torch: 'Torche',
                pickaxe: 'Pioche',
                shield: 'Bouclier',
                fists: 'Poings',
                magic: 'Magie',
                bow: 'Arc',
            },
            'weapon-panel': {
                title: 'Armes',
                'right-hand': 'Main droite',
                'left-hand': 'Main gauche',
                none: '— Aucune —',
                grip: {
                    title: 'Réglage grip',
                    save: '💾 Sauvegarder',
                    pivot: '— Pivot (rotation au centre) —',
                },
            },
            belt: {
                'slot-title': 'Slot {slot}',
                empty: '— Vide',
            },
            'live-sync': {
                'reloading-character': 'Actualisation personnage...',
                updated: 'Personnage mis à jour ✓',
            },
            emotes: {
                dance: 'Danser',
                celebrate: 'Célébrer',
                cry: 'Pleurer',
                backflip: 'Salto arrière',
                drink: 'Boire',
                sit: 'S\'asseoir',
                ground: 'Sol',
                wave: 'Saluer',
            },
            'idle-variants': {
                'idle-look': 'Regarder autour',
                'turn-left': 'Tourner à gauche',
                'turn-right': 'Tourner à droite',
                'idle-fold': 'Bras croisés',
            },
            notifications: {
                'weapon-equipped': '{weapon} ▶ {hand}',
                'grip-saved': '✓ Grip sauvegardé — {weapon}',
                disarmed: 'Désarmé',
                sitting: 'Assis — Espace pour se lever',
                'ground-sitting': 'Assis au sol — Espace pour se lever',
                walk: 'Marche',
                run: 'Course',
                'idle-variation': 'Variation idle : {variant}',
                'safety-vault': 'Safety Vault',
                roll: 'Roulade',
                slide: 'Glissade',
                climb: 'Grimpe — W/S : haut/bas | A/D : latéral | F/Espace : sortir par le haut',
                swim: 'Nage — WASD déplacer | Espace remonter',
                interact: 'Interagir',
                welcome: 'Bienvenue, {name} — I pour l\'inventaire · G pour les émotes',
            },
            loading: {
                title: 'Gameplay Test',
                character: 'Chargement personnage...',
                outfit: 'Chargement outfit...',
                animations: 'Chargement animations...',
                'base-body': 'Chargement corps de base...',
                'building-character': 'Construction du personnage...',
                config: 'Config : {name}',
                ready: 'Prêt !',
                error: 'Erreur chargement : {message}',
                reloading: 'Langue modifiée — rechargement...',
            },
        },
        'soldier-test': {
            title: 'Soldat — test d animations',
            buttons: {
                idle: 'Repos',
                walk: 'Marche',
                run: 'Course',
                't-pose': 'T-pose',
            },
            status: {
                loading: 'Chargement...',
                progress: 'Chargement... {percent}%',
                error: 'Erreur : {message}',
                active: '▶ {animation}',
                clips: 'Clips detectes',
            },
        },
        'character-preview': {
            title: 'Apercu des personnages',
            info: {
                orbit: 'Clic droit + glisser : orbiter',
                zoom: 'Molette : zoom',
            },
            status: {
                prompt: 'Cliquez un personnage',
                loading: 'Chargement...',
                progress: 'Chargement {percent}%',
                loaded: '{file}\nAnimations : {clips}',
                error: 'Erreur : {message}',
                none: 'aucune',
            },
        },
    },
    'build-mode': {
        catalog: buildModeCatalogFr,
    },
    inventory: {
        ui: {
            title: 'Inventaire',
            subtitle: '— Guerrier exilé —',
            close: 'Fermer',
            skills: 'Compétences',
            backpack: 'Sac à dos',
            equipment: 'Équipement',
            'paperdoll-name': '— Guerrier —',
            character: 'Personnage',
            'character-name': 'Exilé',
            'character-class': 'Niveau 1 · Guerrier',
            stats: 'Caractéristiques',
            'quick-belt': 'Ceinture rapide',
            'quick-hint': 'Touches 1 - 4',
        },
        slots: {
            head: 'Tête',
            neck: 'Cou',
            chest: 'Armure',
            weapon: 'Arme',
            back: 'Cape',
            shield: 'Bouclier',
            gloves: 'Gants',
            'ring-left': 'Ann. G.',
            legs: 'Jambes',
            'ring-right': 'Ann. D.',
            feet: 'Bottes',
            belt: 'Ceinture',
        },
        rarity: {
            common: 'Commun',
            uncommon: 'Peu commun',
            rare: 'Rare',
            epic: 'Épique',
            legendary: 'Légendaire',
        },
        summary: {
            health: 'Vie',
            stamina: 'Endurance',
            armor: 'Armure',
            damage: 'Dégâts',
        },
        hints: {
            use: 'Double-clic : Utiliser',
            equip: 'Double-clic : Equiper',
        },
        toast: {
            health: '{amount} Vie',
            stamina: '{amount} Endurance',
            use: '{item} - {effects}',
        },
        'item-stats': {
            damage: 'Dégâts',
            speed: 'Vitesse',
            armor: 'Armure',
            block: 'Blocage',
            heals: 'Soigne',
            restores: 'Rend',
            light: 'Lumiere',
            opens: 'Ouvre',
            length: 'Longueur',
            type: 'Type',
            gold: 'Or',
            weight: 'Poids',
            'cold-res': 'Res. froid',
            pocket: 'Poches',
            magic: 'Magie',
            skill: 'Competence',
            parry: 'Parade',
            stamina: 'Endurance',
            hp: 'Vie',
        },
        values: {
            normal: 'Normale',
            slow: 'Lente',
            fast: 'Rapide',
            medium: 'Moyenne',
            unknown: 'Inconnu',
            'iron-locks': 'Serrures en fer',
            'weapon-edge': 'Fil de lame',
            text: 'Texte',
            map: 'Carte',
            light: 'Leger',
            'full-stamina': 'Endurance complete',
            quick: 'rapides',
        },
        units: {
            hp: 'PV',
            stamina: 'Endurance',
        },
        items: {
            'sword-bronze': {
                name: 'Épée de bronze',
                desc: 'Forgee dans un bronze ancien. Elle garde encore son fil.',
            },
            'axe-bronze': {
                name: 'Hache de bronze',
                desc: 'Brutale et fiable. Prisee des soldats.',
            },
            'pickaxe-bronze': {
                name: 'Pioche de bronze',
                desc: 'Un outil de mineur reconverti pour la guerre.',
            },
            knife: {
                name: 'Couteau de table',
                desc: 'Pas fait pour tuer. Il y arrive quand meme.',
            },
            'shield-wooden': {
                name: 'Bouclier en bois',
                desc: 'Des planches de chene liees de fer. Lourd mais solide.',
            },
            'potion-health': {
                name: 'Potion de soin',
                desc: 'Un breuvage rouge et chaud. Il sent le fer et les herbes.',
            },
            'potion-health-lg': {
                name: 'Grande potion de soin',
                desc: 'Concentree. Amere. Elle brule en descendant.',
            },
            'potion-stamina': {
                name: 'Tonique d endurance',
                desc: 'Un tonique vert. Il offre un second souffle.',
            },
            'potion-minor': {
                name: 'Petite fiole',
                desc: 'Une petite fiole. Mieux que rien.',
            },
            chalice: {
                name: 'Calice béni',
                desc: 'Une coupe touchee par quelque chose d ancien.',
            },
            antidote: {
                name: 'Antidote',
                desc: 'Purifie le corps de tout poison.',
            },
            carrot: {
                name: 'Carotte',
                desc: 'Fraiche du champ. Croquante.',
            },
            apple: {
                name: 'Pomme',
                desc: 'Rouge et ferme. Un classique du voyageur.',
            },
            ale: {
                name: 'Chope de biere',
                desc: 'Une boisson forte. Tu la sentiras dans les jambes.',
            },
            torch: {
                name: 'Torche',
                desc: 'Brule pendant une heure. Garde-la loin de la poudre.',
            },
            'key-gold': {
                name: "Clé d'or",
                desc: 'Une cle ornee. Tu ignores ce qu elle ouvre.',
            },
            'key-iron': {
                name: 'Clé de fer',
                desc: 'Une cle simple. Lourde.',
            },
            rope: {
                name: 'Corde',
                desc: 'Utile pour grimper. Ou pour autre chose.',
            },
            whetstone: {
                name: 'Pierre a aiguiser',
                desc: 'Une pierre grise de riviere. Elle garde les lames affûtées.',
            },
            'scroll-1': {
                name: 'Vieux parchemin',
                desc: 'L encre a pali. Quelques mots subsistent.',
            },
            'scroll-map': {
                name: 'Parchemin de carte',
                desc: 'Une carte sommaire. Les routes y sont a peine tracees.',
            },
            coin: {
                name: 'Piece d or',
                desc: 'Une monnaie ordinaire. Elle vaut quelque chose, quelque part.',
            },
            'coin-pile': {
                name: 'Tas de pieces',
                desc: 'Une petite fortune. Ne la perds pas.',
            },
            bag: {
                name: 'Sac de voyage',
                desc: 'Vide. Utile.',
            },
            pouch: {
                name: 'Bourse',
                desc: 'Cuir use. Elle sent les vieilles pieces.',
            },
            chain: {
                name: 'Chaine de fer',
                desc: 'Des maillons lourds. De quoi entraver quelque chose.',
            },
            'exile-blade': {
                name: "Lame de l'exilé",
                desc: 'Une épée oubliée. Elle a déjà tue avant toi.',
            },
            'leather-chest': {
                name: 'Cuirasse de cuir',
                desc: 'Tannée dans la sueur et le sel.',
            },
            'iron-helm': {
                name: 'Heaume de fer',
                desc: 'Il porte une marque que personne ne reconnait.',
            },
            'travel-boots': {
                name: 'Bottes de voyage',
                desc: 'Usées par mille lieues.',
            },
            'worn-belt': {
                name: 'Ceinture de soldat',
                desc: 'Cuir tresse, boucle brisee.',
            },
            'health-vial': {
                name: 'Fiole de seve sombre',
                desc: 'Amere. Efficace.',
            },
            'eitr-shard': {
                name: "Éclat d'Eitr",
                desc: '"Cela ne devrait pas exister."',
            },
            'bone-ring': {
                name: 'Anneau d os',
                desc: 'Sculpte dans quelque chose qu on n aurait jamais du tailler.',
            },
            'old-dagger': {
                name: 'Dague rouillee',
                desc: 'Une lame courte. Suffisante pour une gorge.',
            },
        },
    },
    'char-creation': {
        ui: {
            title: 'Création du personnage',
            name: 'Nom',
            'name-placeholder': 'Entrez votre nom...',
            body: 'Corps',
            outfit: 'Tenue',
            hair: 'Cheveux',
            beard: 'Barbe',
            colors: 'Couleurs',
            confirm: 'Entrer dans le monde',
            skip: 'Continuer avec le personnage actuel',
            hint: 'Glisser pour tourner · Molette pour zoomer',
        },
        body: {
            male: '♂ Homme',
            female: '♀ Femme',
        },
        colors: {
            hair: 'Cheveux',
            eyes: 'Yeux',
            skin: 'Peau',
            reset: 'Réinit.',
        },
        loading: {
            initializing: 'Initialisation...',
            loading: 'Chargement...',
        },
        defaults: {
            name: 'Héros',
        },
        outfits: {
            ranger: 'Ranger',
            peasant: 'Paysan',
            knight: 'Chevalier',
            'knight-cloth': 'Chevalier en tissu',
            noble: 'Noble',
            wizard: 'Magicien',
        },
        hair: {
            none: 'Aucun',
            long: 'Longs',
            parted: 'Raie',
            'buzzed-male': 'Rasé ♂',
            'buzzed-female': 'Rasée ♀',
            buns: 'Chignons',
        },
        beard: {
            none: 'Aucune',
            beard: 'Barbe',
        },
    },
    'asset-check': {
        toggle: {
            one: '{count} pack manquant',
            other: '{count} packs manquants',
        },
        header: 'Assets Quaternius requis',
        footer: {
            prefix: 'Assets 3D par',
            suffix: 'libres de droits',
        },
        tiers: {
            free: 'Gratuit',
            'patreon-source': 'Patreon · Source',
        },
        packs: {
            'ual-standard': {
                name: 'Universal Animation Library',
                description: 'Animations de base - locomotion, combat, interactions.',
            },
            'ual2-standard': {
                name: 'Universal Animation Library 2',
                description: 'Parkour, escalade et animations avancees.',
            },
            'ual-source': {
                name: 'Animation Library - Source',
                description: 'Versions source haute resolution avec fichiers .blend.',
            },
            'char-outfits': {
                name: 'Modular Character Outfits - Fantasy',
                description: 'Corps, tenues, cheveux et barbes modulaires.',
            },
            village: {
                name: 'Medieval Village MegaKit',
                description: 'Batiments, murs, meubles et props medievaux.',
            },
            nature: {
                name: 'Nature Pack',
                description: 'Arbres, buissons, rochers et vegetation.',
            },
            props: {
                name: 'Fantasy Props MegaKit',
                description: 'Armes, outils et decorations fantasy.',
            },
        },
    },
};

export default fr;
