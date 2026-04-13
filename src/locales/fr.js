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
