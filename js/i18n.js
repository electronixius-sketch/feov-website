(function () {
  var KEY = 'feov-lang';

  var STATIC = {
    de: {
      'nav.ueber':    'Über uns',
      'nav.projekte': 'Projekte',
      'nav.mitglied': 'Mitglied werden',
      'nav.spenden':  'Spenden',
      'nav.kontakt':  'Kontakt',
      'nav.cta.spenden':  'Jetzt spenden',
      'nav.cta.mitglied': 'Mitglied werden',
      'hero.cta.mitglied': 'Jetzt Mitglied werden',
      'hero.cta.spenden':  'Spenden',
      'intro.cta': 'Grußwort',
      'ueber.cta': 'Unsere Ziele',
      'back.projekte': '← Alle Projekte',
      'back.home': '← Zurück',
    },
    en: {
      'nav.ueber':    'About us',
      'nav.projekte': 'Projects',
      'nav.mitglied': 'Become a member',
      'nav.spenden':  'Donate',
      'nav.kontakt':  'Contact',
      'nav.cta.spenden':  'Donate now',
      'nav.cta.mitglied': 'Become a member',
      'hero.cta.mitglied': 'Become a member',
      'hero.cta.spenden':  'Donate',
      'intro.cta': 'Welcome message',
      'ueber.cta': 'Our goals',
      'back.projekte': '← All projects',
      'back.home': '← Back',
    }
  };

  function getLang() {
    return localStorage.getItem(KEY) || 'de';
  }

  function applyLang(lang) {
    localStorage.setItem(KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    window.currentLang = lang;

    // Statische Texte ersetzen
    var t = STATIC[lang] || STATIC.de;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k]) el.textContent = t[k];
    });

    // Toggle-Darstellung aktualisieren
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.querySelectorAll('[data-lang]').forEach(function (span) {
        span.style.fontWeight = span.dataset.lang === lang ? '700' : '400';
        span.style.opacity    = span.dataset.lang === lang ? '1'   : '0.55';
      });
    }

    // CMS-Inhalte neu laden
    document.querySelectorAll('[data-cms-src]').forEach(function (el) {
      if (window.loadCMSContent) loadCMSContent(el.dataset.cmsSrc);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.addEventListener('click', function (e) {
        var target = e.target.closest('[data-lang]');
        if (target) applyLang(target.dataset.lang);
      });
    }
    applyLang(getLang());
  });

  // Sofort anwenden damit kein Flash entsteht
  window.currentLang = getLang();
  document.documentElement.setAttribute('lang', getLang());
})();
