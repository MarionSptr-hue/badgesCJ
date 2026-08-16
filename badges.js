/* Concrete Jungle — affichage des badges dans les profils */
;(function () {
    'use strict';

    var BASE = 'https://marionsptr-hue.github.io/badgesCJ/badges/';

    var BADGES = {
        'job-artist': ['Artiste', 'clocked-in/artist.png'],
        'job-corporate-1': ['Corporate — variante 1', 'clocked-in/corporate-1.png'],
        'job-corporate-2': ['Corporate — variante 2', 'clocked-in/corporate-2.png'],
        'job-education': ['Éducation', 'clocked-in/education.png'],
        'job-healthcare-1': ['Santé — variante 1', 'clocked-in/healthcare-1.png'],
        'job-healthcare-2': ['Santé — variante 2', 'clocked-in/healthcare-2.png'],
        'job-nightlife-1': ['Nightlife — variante 1', 'clocked-in/nightlife-1.png'],
        'job-nightlife-2': ['Nightlife — variante 2', 'clocked-in/nightlife-2.png'],
        'job-nightlife-3': ['Nightlife — variante 3', 'clocked-in/nightlife-3.png'],
        'job-nightlife-14': ['Nightlife — variante 14', 'clocked-in/nightlife-14.png'],
        'job-student': ['Étudiant·e', 'clocked-in/student.png'],
        'job-unemployed': ['Sans emploi', 'clocked-in/unemployed.png'],

        'pet-both-1': ['Chat et chien — variante 1', 'fur-real/both-1.png'],
        'pet-both-2': ['Chat et chien — variante 2', 'fur-real/both-2.png'],
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
        'love-pansexual': ['Pansexuel·le', 'love-is-love/pansexual.png'],

        'heart-couple': ['En couple', 'matters-of-the-heart/couple.png'],
        'heart-divorced': ['Divorcé·e', 'matters-of-the-heart/divorced.png'],
        'heart-large-family': ['Famille nombreuse', 'matters-of-the-heart/large-family.png'],
        'heart-married': ['Marié·e', 'matters-of-the-heart/married.png'],
        'heart-parent': ['Parent·s', 'matters-of-the-heart/parent.png'],
        'heart-single': ['Célibataire', 'matters-of-the-heart/single.png'],
        'heart-widowed': ['Veuf·ve', 'matters-of-the-heart/widowed.png'],

        'roof-alone': ['Vit seul·e', 'under-my-roof/alone.png'],
        'roof-hosted': ['Hébergé·e chez les autres', 'under-my-roof/hosted.png'],
        'roof-roommates-1': ['Colocation — variante 1', 'under-my-roof/roommates-1.png'],
        'roof-roommates-2': ['Colocation — variante 2', 'under-my-roof/roommates-2.png'],
        'roof-family': ['Vit avec sa famille', 'under-my-roof/with-family.png'],
        'roof-partner': ['Vit avec son/sa partenaire', 'under-my-roof/with-partner.png']
    };

    function cleanLabel(value) {
        value = String(value || '').toLowerCase().replace(/[✦*:]/g, '');
        if (value.normalize) value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        return value.replace(/\s+/g, ' ').trim();
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
            var item = document.createElement('span');
            item.className = 'cj-badge';
            item.setAttribute('data-badge-code', code);
            item.setAttribute('aria-label', badge[0]);

            var image = document.createElement('img');
            image.src = BASE + badge[1];
            image.alt = badge[0];
            image.loading = 'lazy';
            image.width = 58;
            image.height = 58;

            var tooltip = document.createElement('span');
            tooltip.className = 'cj-badge__tooltip';
            tooltip.textContent = badge[0];

            item.appendChild(image);
            item.appendChild(tooltip);
            gallery.appendChild(item);
        });

        field.classList.add('cj-profile__badges-field');
        field.appendChild(gallery);
        field.setAttribute('data-cj-badges-ready', 'true');
    }

    function scan(container) {
        if (container && container.matches && container.matches('#wombat.cj-profile')) render(container);
        if (container && container.querySelectorAll) {
            Array.prototype.forEach.call(container.querySelectorAll('#wombat.cj-profile'), render);
        }
    }

    function start() {
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
