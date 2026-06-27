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
      'hero.h1':           'Wir gehen stiften. Sie auch?',
      'hero.p':            'Als Freundeskreis des Brandenburgischen Staatsorchesters Frankfurt (Oder) setzen wir uns für lebendige Orchesterkultur in unserer Region ein – durch Mitgliedschaften, Spenden und eigene Veranstaltungen.',
      'hero.cta.mitglied': 'Jetzt Mitglied werden',
      'hero.cta.spenden':  'Spenden',
      'intro.quote': '„In der Mitte der Schwierigkeit liegt die Möglichkeit." – Albert Einstein',
      'intro.cta':   'Grußwort',
      'ueber.label': 'Über den Förderverein',
      'ueber.h2':    'Enthusiasmus für Kultur. Für Musik. Für unser Orchester.',
      'ueber.cta':   'Unsere Ziele',
      'ziele.label': 'Was wir tun',
      'ziele.h2':    'Unsere Ziele',
      'projekte.label': 'Engagement',
      'projekte.h2':    'Unsere Projekte',
      'mitglied.label': 'Mitmachen',
      'mitglied.h2':    'Mitglied werden',
      'spenden.label':  'Unterstützen',
      'spenden.h2':     'Jetzt spenden',
      'gruss.label':    'Vorstand',
      'kontakt.label':  'Schreiben Sie uns',
      'kontakt.h2':     'Kontakt',
      'back.projekte':  '← Alle Projekte',
      'back.home':      '← Zurück',
    },
    en: {
      'nav.ueber':    'About us',
      'nav.projekte': 'Projects',
      'nav.mitglied': 'Become a member',
      'nav.spenden':  'Donate',
      'nav.kontakt':  'Contact',
      'nav.cta.spenden':  'Donate now',
      'nav.cta.mitglied': 'Become a member',
      'hero.h1':           'We support culture. Do you?',
      'hero.p':            'As the friends’ association of the Brandenburg State Orchestra Frankfurt (Oder), we are committed to vibrant orchestral culture in our region – through memberships, donations and our own events.',
      'hero.cta.mitglied': 'Become a member',
      'hero.cta.spenden':  'Donate',
      'intro.quote': '"In the middle of difficulty lies opportunity." – Albert Einstein',
      'intro.cta':   'Welcome message',
      'ueber.label': 'About the association',
      'ueber.h2':    'Enthusiasm for culture. For music. For our orchestra.',
      'ueber.cta':   'Our goals',
      'ziele.label': 'What we do',
      'ziele.h2':    'Our goals',
      'projekte.label': 'Our work',
      'projekte.h2':    'Our projects',
      'mitglied.label': 'Get involved',
      'mitglied.h2':    'Become a member',
      'spenden.label':  'Support us',
      'spenden.h2':     'Donate now',
      'gruss.label':    'Board',
      'kontakt.label':  'Write to us',
      'kontakt.h2':     'Contact',
      'back.projekte':  '← All projects',
      'back.home':      '← Back',
    }
  };

  function getLang() {
    return localStorage.getItem(KEY) || 'de';
  }

  function applyLang(lang) {
    localStorage.setItem(KEY, lang);
    document.documentElement.setAttribute('lang', lang);
    window.currentLang = lang;

    var t = STATIC[lang] || STATIC.de;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (t[k] !== undefined) el.textContent = t[k];
    });

    // Toggle-Darstellung
    var btn = document.getElementById('lang-toggle');
    if (btn) {
      btn.querySelectorAll('[data-lang]').forEach(function (span) {
        span.style.fontWeight = span.dataset.lang === lang ? '700' : '400';
        span.style.opacity    = span.dataset.lang === lang ? '1'   : '0.55';
      });
    }

    // CMS-Inhalte in neuer Sprache neu laden
    if (window.reloadAllCMS) reloadAllCMS();
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

  window.currentLang = getLang();
  document.documentElement.setAttribute('lang', getLang());
})();
