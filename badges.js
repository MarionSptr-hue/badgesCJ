/* affichage des badges dans les profils */
;(function () {
    'use strict';

    var BASE = 'https://marionsptr-hue.github.io/badgesCJ/badges/';

    var BADGES = {
        'job-artist': ['Artiste', 'clocked-in/artist.png'],
        'job-corporate-1': ['Corporate', 'clocked-in/corporate-1.png'],
        'job-corporate-2': ['Corporate', 'clocked-in/corporate-2.png'],
        'job-education': ['Éducation', 'clocked-in/education.png'],
        'job-healthcare-1': ['Santé', 'clocked-in/healthcare-1.png'],
        'job-healthcare-2': ['Santé', 'clocked-in/healthcare-2.png'],
        'job-nightlife-1': ['Nightlife', 'clocked-in/nightlife-1.png'],
        'job-nightlife-2': ['Nightlife', 'clocked-in/nightlife-2.png'],
        'job-nightlife-3': ['Nightlife', 'clocked-in/nightlife-3.png'],
        'job-nightlife-14': ['Nightlife', 'clocked-in/nightlife-14.png'],
        'job-student': ['Étudiant·e', 'clocked-in/student.png'],
        'job-unemployed': ['Sans emploi', 'clocked-in/unemployed.png'],

        'pet-both-1': ['Chat et chien', 'fur-real/both-1.png'],
        'pet-both-2': ['Chat et chien', 'fur-real/both-2.png'],
        'pet-cat': ['Chat', 'fur-real/cat.png'],
        'pet-dog': ['Chien', 'fur-real/dog.png'],
        'pet-small': ['Petits animaux', 'fur-real/small-pets.png'],

        'home-londoner': ['Londoner', 'home-is-where/londoner.png'],
        'home-outsider': ['Outsider', 'home-is-where/outsider.png'],

        'sign-aquarius': ['Verseau', 'its-a-sign/aquarius.png'],
        'sign-aries': ['Bélier', 'its-a-sign/aries.png'],
        'sign-cancer': ['Cancer', 'its-a-sign/cancer.png'],
        'sign-capricorn': ['Capricorne', 'its-a-sign/capricorn.png'],
        'sign-gemini': ['Gémeaux', 'its-a-sign/gemini.png'],
        'sign-leo': ['Lion', 'its-a-sign/leo.png'],
        'sign-libra': ['Balance', 'its-a-sign/libra.png'],
        'sign-pisces': ['Poisson', 'its-a-sign/pisces.png'],
        'sign-sagittarius': ['Sagittaire', 'its-a-sign/sagittarius.png'],
        'sign-scorpio': ['Scorpion', 'its-a-sign/scorpio.png'],
        'sign-taurus': ['Taureau', 'its-a-sign/taurus.png'],
        'sign-virgo': ['Vierge', 'its-a-sign/virgo.png'],

        'love-asexual': ['Asexuel·le', 'love-is-love/asexual.png'],
        'love-bisexual': ['Bisexuel·le', 'love-is-love/bisexual.png'],
        'love-demisexual': ['Demisexuel·le', 'love-is-love/demisexual.png'],
        'love-gay': ['Gay', 'love-is-love/gay.png'],
        'love-heterosexual': ['Hétérosexuel·le', 'love-is-love/heterosexual.png'],
        'love-lesbian': ['Lesbienne', 'love-is-love/lesbian.png'],
        'love-lgbtqia-plus': ['LGBTQIA+', 'love-is-love/lgbtqia-plus.png'],
        'love-pansexual': ['Pansexuel·le', 'love-is-love/pansexual.png'],

        'heart-couple': ['En couple', 'matters-of-the-heart/couple.png'],
        'heart-divorced': ['Divorcé·e', 'matters-of-the-heart/divorced.png'],
        'heart-large-family': ['Famille nombreuse', 'matters-of-the-heart/large-family.png'],
        'heart-married': ['Marié·e', 'matters-of-the-heart/married.png'],
        'heart-polyamory': ['Polyamour', 'matters-of-the-heart/polyamory.png'],
        'heart-parent': ['Parent·s', 'matters-of-the-heart/parent.png'],
        'heart-single': ['Célibataire', 'matters-of-the-heart/single.png'],
        'heart-widowed': ['Veuf·ve', 'matters-of-the-heart/widowed.png'],

        'roof-alone': ['Vit seul·e', 'under-my-roof/alone.png'],
        'roof-hosted': ['Hébergé·e chez les autres', 'under-my-roof/hosted.png'],
        'roof-roommates-1': ['Colocation', 'under-my-roof/roommates-1.png'],
        'roof-roommates-2': ['Colocation', 'under-my-roof/roommates-2.png'],
        'roof-family': ['Vit avec sa famille', 'under-my-roof/with-family.png'],
        'roof-partner': ['Vit avec son/sa partenaire', 'under-my-roof/with-partner.png'],

        'gang-vault-1': ['The Vault', 'the-gangs/the-vault-1.png'],
        'gang-last-masquerade-1': ['The Last Masquerade', 'the-gangs/the-last-masquerade.png'],
        'gang-last-masquerade-2': ['The Last Masquerade', 'the-gangs/the-last-masquerade.png'],
        'gang-last-masquerade-3': ['The Last Masquerade', 'the-gangs/the-last-masquerade.png'],
        'gang-last-masquerade': ['The Last Masquerade', 'the-gangs/the-last-masquerade.png'],
        'gang-cleaners-1': ['The Cleaners', 'the-gangs/the-cleaners-1.png'],
        'gang-cleaners-2': ['The Cleaners', 'the-gangs/the-cleaners-2.png'],
        'gang-book-1': ['The Book', 'the-gangs/the-book-1.png'],
        'gang-book-2': ['The Book', 'the-gangs/the-book-2.png'],
        'gang-riders-1': ['Riders of the Apocalypse', 'the-gangs/riders-of-the-apocalypse-1.png'],
        'gang-riders-2': ['Riders of the Apocalypse', 'the-gangs/riders-of-the-apocalypse-2.png'],
        'gang-riders-3': ['Riders of the Apocalypse', 'the-gangs/riders-of-the-apocalypse-3.png'],
        'gang-primo-sangue': ['Primo Sangue', 'the-gangs/primo-sangue.png'],

        'music-violin': ['Violon', 'music-of-my-life/violin.png'],
        'music-solo': ['Artiste solo', 'music-of-my-life/solo.png'],
        'music-saxophone': ['Saxophone', 'music-of-my-life/saxophone.png'],
        'music-piano': ['Piano', 'music-of-my-life/piano.png'],
        'music-vocals': ['Chant', 'music-of-my-life/vocals.png'],
        'music-harp-1': ['Harpe', 'music-of-my-life/harp-1.png'],
        'music-guitar': ['Guitare', 'music-of-my-life/guitar.png'],
        'music-band': ['Groupe', 'music-of-my-life/band.png'],
        'music-electronic': ['Musique électronique', 'music-of-my-life/electronic.png'],
        'music-drums': ['Batterie', 'music-of-my-life/drums.png'],

        'theater-mask-1': ['Theater Kid', 'theater-kid/theater-mask-1.png'],
        'theater-mask-12': ['Theater Kid', 'theater-kid/theater-mask-12.png'],

        'sport-tennis': ['Tennis', 'sport/tennis.png'],
        'sport-soccer': ['Football', 'sport/soccer.png'],
        'sport-rugby': ['Rugby', 'sport/rugby.png'],
        'sport-rowing': ['Aviron', 'sport/rowing.png'],
        'sport-roller-derby': ['Roller derby', 'sport/roller-derby.png'],
        'sport-hockey': ['Hockey', 'sport/hockey.png'],
        'sport-gym-1': ['Salle de sport', 'sport/gym-1.png'],
        'sport-gym-2': ['Salle de sport', 'sport/gym-2.png'],
        'sport-gym-3': ['Salle de sport', 'sport/gym-3.png'],
        'sport-fitness': ['Fitness', 'sport/fitness.png'],
        'sport-archery': ['Tir à l’arc', 'sport/archery.png'],

        'london-underground': ['London Underground', 'special-london/underground.png'],
        'london-station': ['Station londonienne', 'special-london/station.png'],
        'london-metro-2': ['Métro londonien', 'special-london/metro-2.png'],
        'london-metro-4': ['Métro londonien', 'special-london/metro-4.png'],
        'london-metro-5': ['Métro londonien', 'special-london/metro-5.png'],

        'social-media-addict': ['Social Media Addict', 'social-media/social-media-addict.png'],
        'social-serial-crush': ['Serial Crush', 'social-media/serial-crush.png'],
        'social-popular': ['Populaire', 'social-media/popular.png'],

        'rp-slow': ['Rythme RP lent', 'rythme-rp/slow-rp.png'],
        'rp-fast': ['Rythme RP rapide', 'rythme-rp/fast-rp.png'],

        'reward-terminally-online': ['Terminally Online', 'recompense-activite-messages/terminally-online.png'],
        'reward-chatterbox': ['Chatterbox', 'recompense-activite-messages/chatterbox.png'],
        'reward-cant-shut-up': ['Can’t Shut Up', 'recompense-activite-messages/cant-shut-up.png'],

        'misc-omamori': ['Omamori', 'divers/omamori.png'],
        'misc-floral-design': ['Floral Design', 'divers/floral-design.png'],

        'reward-welcome-wagon': ['Welcome Wagon', 'flood-et-vie-du-forum/welcome-wagon.png'],
        'reward-take-a-chance-on-me': ['Take a Chance on Me', 'flood-et-vie-du-forum/take-a-chance-on-me.png'],
        'reward-serial-voter': ['Serial Voter', 'flood-et-vie-du-forum/serial-voter.png'],
        'reward-serial-creator': ['Serial Creator', 'flood-et-vie-du-forum/serial-creator.png'],
        'reward-send-help': ['Send Help', 'flood-et-vie-du-forum/send-help.png'],
        'reward-plot-bunny': ['Plot Bunny', 'flood-et-vie-du-forum/plot-bunny.png'],
        'reward-out-and-about': ['Out and About', 'flood-et-vie-du-forum/out-and-about.png'],
        'reward-oops-i-did-it-again': ['Oops, I Did It Again', 'flood-et-vie-du-forum/oops-i-did-it-again.png'],
        'reward-one-year-later': ['One Year Later', 'flood-et-vie-du-forum/one-year-later.png'],
        'reward-nailed-it': ['Nailed It', 'flood-et-vie-du-forum/nailed-it.png'],
        'reward-matchmaker': ['Matchmaker', 'flood-et-vie-du-forum/matchmaker.png'],
        'reward-limited-edition': ['Limited Edition', 'flood-et-vie-du-forum/limited-edition.png'],
        'reward-helping-hand': ['Helping Hand', 'flood-et-vie-du-forum/helping-hand.png'],
        'reward-hello-london': ['Hello, London', 'flood-et-vie-du-forum/hello-london.png'],
        'reward-heart-of-gold': ['Heart of Gold', 'flood-et-vie-du-forum/heart-of-gold.png'],
        'reward-getting-started': ['Getting Started', 'flood-et-vie-du-forum/getting-started.png'],
        'reward-full-house': ['Full House', 'flood-et-vie-du-forum/full-house.png'],
        'reward-crossed-paths': ['Crossed Paths', 'flood-et-vie-du-forum/crossed-paths.png'],
        'reward-case-closed': ['Case Closed', 'flood-et-vie-du-forum/case-closed.png'],
        'reward-build-a-family': ['Build a Family', 'flood-et-vie-du-forum/build-a-family.png'],
        'reward-booked-and-busy-1': ['Booked and Busy', 'flood-et-vie-du-forum/booked-and-busy-1.png'],
        'reward-archivist': ['Archivist', 'flood-et-vie-du-forum/archivist.png'],
        'reward-adopt-a-newbie': ['Adopt a Newbie', 'flood-et-vie-du-forum/adopt-a-newbie.png']
    };

    function cleanLabel(value) {
        value = String(value || '').toLowerCase().replace(/[✦*:]/g, '');
        if (value.normalize) value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return value.replace(/\s+/g, ' ').trim();
    }

    function publicBadgeLabel(value) {
        return String(value || '')
            .replace(/\s*[—–-]\s*variante\s*\d+\s*$/i, '')
            .replace(/\s*\(\s*variante\s*\d+\s*\)\s*$/i, '')
            .trim();
    }

    function findBadgeField(root) {
        var result = null;
        Array.prototype.some.call(root.querySelectorAll('.profile_field'), function (field) {
            var label = field.querySelector('label');
            if (cleanLabel(label ? label.textContent : '') === 'badges') {
                result = field;
                return true;
            }
            return false;
        });
        return result;
    }

    function render(root) {
        var field = findBadgeField(root);
        if (!field || field.getAttribute('data-cj-badges-ready') === 'true') return;

        var valueNode = field.querySelector('field');
        var uneditable = field.querySelector('.field_uneditable');
        var raw = uneditable ? uneditable.textContent : (valueNode ? valueNode.textContent : '');
        var codes = String(raw || '').toLowerCase().split(/[\s,;|]+/).filter(Boolean);
        var validCodes = codes.filter(function (code, index) {
            return BADGES[code] && codes.indexOf(code) === index;
        });

        if (!validCodes.length) return;

        var labelNode = field.querySelector(':scope > label');

        /* Les règles générales du profil imposent une grille 95px + contenu.
           On neutralise directement cette grille pour laisser toute la largeur
           à la galerie, sur page complète comme dans la popup AJAX. */
        field.style.setProperty('display', 'block', 'important');
        field.style.setProperty('grid-column', '1 / -1', 'important');
        field.style.setProperty('width', '100%', 'important');
        field.style.setProperty('max-width', 'none', 'important');
        field.style.setProperty('margin', '0', 'important');
        field.style.setProperty('padding', '0', 'important');

        if (labelNode) labelNode.style.setProperty('display', 'none', 'important');
        if (valueNode) valueNode.style.setProperty('display', 'none', 'important');

        var gallery = document.createElement('div');
        gallery.className = 'cj-badges-gallery';
        gallery.style.setProperty('display', 'flex', 'important');
        gallery.style.setProperty('flex-flow', 'row wrap', 'important');
        gallery.style.setProperty('width', '100%', 'important');

        validCodes.forEach(function (code) {
            var badge = BADGES[code];
            var publicLabel = publicBadgeLabel(badge[0]);
            var item = document.createElement('span');
            item.className = 'cj-badge';
            item.setAttribute('data-badge-code', code);
            item.setAttribute('aria-label', publicLabel);

            var image = document.createElement('img');
            image.src = BASE + badge[1];
            image.alt = publicLabel;
            image.loading = 'eager';
            image.draggable = false;
            image.width = 58;
            image.height = 58;

            var tooltip = document.createElement('span');
            tooltip.className = 'cj-badge__tooltip';
            tooltip.textContent = publicLabel;

            item.appendChild(image);
            item.appendChild(tooltip);
            gallery.appendChild(item);
        });

        field.classList.add('cj-profile__badges-field');
        field.appendChild(gallery);
        field.setAttribute('data-cj-badges-ready', 'true');
    }

    function renderPostBadges(container) {
        var fields = container.querySelectorAll
            ? container.querySelectorAll('.post_row .user_field.field-badges, .post_row .user_field')
            : [];

        Array.prototype.forEach.call(fields, function (field) {
            if (field.getAttribute('data-cj-post-badges-ready') === 'true') return;

            var label = field.querySelector('.field_label');
            if (!field.classList.contains('field-badges') &&
                cleanLabel(label ? label.textContent : '') !== 'badges') return;

            var value = field.querySelector('.field_content');
            var raw = value ? value.textContent : '';
            var codes = String(raw || '').toLowerCase().split(/[\s,;|]+/).filter(Boolean);
            var validCodes = codes.filter(function (code, index) {
                return BADGES[code] && codes.indexOf(code) === index;
            });

            if (!validCodes.length) return;

            var gallery = document.createElement('div');
            gallery.className = 'cj-badges-gallery cj-post-badges-gallery';

            validCodes.forEach(function (code) {
                var badge = BADGES[code];
                var publicLabel = publicBadgeLabel(badge[0]);
                var item = document.createElement('span');
                item.className = 'cj-badge cj-post-badge';
                item.setAttribute('data-badge-code', code);
                item.setAttribute('aria-label', publicLabel);

                var image = document.createElement('img');
                image.src = BASE + badge[1];
                image.alt = publicLabel;
                image.loading = 'eager';
                image.draggable = false;
                image.width = 42;
                image.height = 42;

                var tooltip = document.createElement('span');
                tooltip.className = 'cj-badge__tooltip';
                tooltip.textContent = publicLabel;

                item.appendChild(image);
                item.appendChild(tooltip);
                gallery.appendChild(item);
            });

            if (label) label.style.setProperty('display', 'none', 'important');
            if (value) value.style.setProperty('display', 'none', 'important');
            var separator = field.querySelector('.field_separator');
            if (separator) separator.style.setProperty('display', 'none', 'important');

            field.classList.add('cj-post-badges-field');
            field.appendChild(gallery);
            field.setAttribute('data-cj-post-badges-ready', 'true');
        });
    }

    function scan(container) {
        if (container && container.matches && container.matches('#wombat.cj-profile')) render(container);
        if (container && container.querySelectorAll) {
            Array.prototype.forEach.call(container.querySelectorAll('#wombat.cj-profile'), render);
            renderPostBadges(container);
        }
    }

    function start() {
        document.addEventListener('contextmenu', function (event) {
            if (event.target.closest && event.target.closest('.cj-badge')) event.preventDefault();
        }, true);

        document.addEventListener('dragstart', function (event) {
            if (event.target.closest && event.target.closest('.cj-badge')) event.preventDefault();
        }, true);

        scan(document);
        new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                Array.prototype.forEach.call(mutation.addedNodes, scan);
            });
        }).observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();
