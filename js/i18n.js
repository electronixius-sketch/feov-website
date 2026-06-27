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
      'projekte.label': 'Was wir bewegen',
      'projekte.h2':    'Geförderte & eigene Projekte',
      'projekte.intro': 'Unsere Aktivitäten reichen von der Unterstützung bestehender Initiativen und Formate bis zu eigenständig organisierten Veranstaltungen – hier ein Überblick über unsere Arbeit.',
      'tag.foerderung':   'Förderung',
      'tag.eigenes':      'Eigenes Projekt',
      'tag.unterstuetzung': 'Unterstützung',
      'card.mehr': 'Mehr erfahren',
      'card.auftragswerke.title': 'Auftragswerke',
      'card.auftragswerke.text':  'Der Förderverein unterstützt das BSOF bei der Vergabe von Kompositionsaufträgen – Werke, die durch das Orchester ihre Uraufführung erleben.',
      'card.education.title': 'Education-Projekte',
      'card.education.text':  'Seit 2008 realisiert das BSOF Education-Projekte für Kinder und Jugendliche. Der Förderverein sichert die Finanzierung durch Einwerbung von Fördergeldern.',
      'card.spannungsfelder.title': 'Spannungsfelder',
      'card.spannungsfelder.text':  'Education-Projekte mit Schülerinnen und Schülern aus Frankfurt (Oder) und der Region – Musik, Theater, Tanz und gesellschaftliche Fragen auf einer Bühne.',
      'card.lesekonzerte.title': 'Lesekonzerte',
      'card.lesekonzerte.text':  'Literatur trifft Musik in der Buchhandlung „Ulrich von Hutten" – ein Geheim-Tipp seit 2024, bei einem Glas Wein und ohne Eintritt.',
      'card.minikonzerte.title': 'Mini-Konzerte',
      'card.minikonzerte.text':  'Kleine Konzerte an verschiedenen Orten in der Innenstadt zeigen Präsenz des BSOF in der Stadt – neben den großen Konzerten im Kleist Forum.',
      'mitglied.intro':    'As a member of the Friends and Supporters of BSOF, you support not only the orchestra – you become part of a community that loves music and actively shapes culture in Frankfurt (Oder).',
      'mitglied.benefit1': 'Invitations to member events & rehearsal visits',
      'mitglied.benefit2': 'Exclusive chamber concerts with BSOF musicians',
      'mitglied.benefit3': 'Members newsletter with behind-the-scenes insights',
      'mitglied.benefit4': 'Donations are tax-deductible – tax receipt on request',
      'mitglied.fee.period':    'per year · due in January',
      'mitglied.fee.note':      'Cancellation: 3 months before end of financial year',
      'mitglied.download.text': 'Download the membership form, fill it in and send it to us signed by post or scanned by e-mail.',
      'mitglied.download.btn':  'Download membership form',
      'mitglied.firma':         'You are also welcome to become a member with your company or institution – <a href="#kontakt" style="color:rgba(255,255,255,0.5); text-decoration:underline;">contact us!</a>',
      'spenden.label': 'Support us',
      'spenden.h2':    'Donate – directly & effectively',
      'spenden.p1':    'We welcome your donation, large or small. Every contribution goes entirely into the association\'s projects and benefits the Brandenburg State Orchestra Frankfurt directly.',
      'spenden.p2':    'If you need a tax receipt, please contact us at <a href="mailto:foerderverein@bsof.de" style="color:var(--red);">foerderverein@bsof.de</a>.',
      'spenden.konto.title':   'Our bank details',
      'spenden.konto.h4':      'Bank details',
      'spenden.konto.inhaber': 'Account holder',
      'spenden.konto.bank':    'Bank',
      'spenden.konto.note':    'As a non-profit association, we can provide a tax receipt on request.',
      'gruss.person.title': '1. Vorsitzender, Förderverein BSOF e. V.',
      'gruss.label': 'Grußwort',
      'gruss.h2':    'Eine Botschaft des Vorsitzenden',
      'gruss.quote': '„In der Mitte der Schwierigkeit liegt die Möglichkeit."<br>– Albert Einstein',
      'gruss.sig':   'Herzlich,<br><strong>Dr. Axel Berg</strong><br>1. Vorsitzender FV BSOF',
      'kontakt.label':    'Kontakt',
      'kontakt.h2':       'Sprechen Sie uns an',
      'kontakt.p':        'Haben Sie Fragen zur Mitgliedschaft, zu Projekten oder möchten Sie sich ehrenamtlich engagieren? Wir freuen uns über Ihre Nachricht.',
      'kontakt.anschrift': 'Anschrift',
      'kontakt.website':   'Hauptwebsite des BSOF',
      'footer.verein':     'Verein',
      'footer.mitmachen':  'Mitmachen',
      'footer.projekte':   'Projekte',
      'footer.ehrenamt':   'Ehrenamt',
      'footer.impressum':  'Impressum',
      'footer.datenschutz':'Datenschutz',
      'footer.satzung':    'Satzung',
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
      'projekte.label': 'What we do',
      'projekte.h2':    'Funded & own projects',
      'projekte.intro': 'Our activities range from supporting existing initiatives and formats to independently organised events – here is an overview of our work.',
      'tag.foerderung':   'Funding',
      'tag.eigenes':      'Own project',
      'tag.unterstuetzung': 'Support',
      'card.mehr': 'Find out more',
      'card.auftragswerke.title': 'Commissioned works',
      'card.auftragswerke.text':  'The Förderverein supports BSOF in commissioning new compositions – works that receive their world premiere performed by the orchestra.',
      'card.education.title': 'Education projects',
      'card.education.text':  'Since 2008, BSOF has been realising education projects for children and young people. The Förderverein secures the funding by raising grants.',
      'card.spannungsfelder.title': 'Spannungsfelder',
      'card.spannungsfelder.text':  'Education projects with pupils from Frankfurt (Oder) and the region – music, theatre, dance and social questions on stage.',
      'card.lesekonzerte.title': 'Reading concerts',
      'card.lesekonzerte.text':  'Literature meets music at the "Ulrich von Hutten" bookshop – a well-kept secret since 2024, with a glass of wine and free admission.',
      'card.minikonzerte.title': 'Mini concerts',
      'card.minikonzerte.text':  'Small concerts at various locations in the city centre show BSOF\'s presence in the city – alongside the major concerts at the Kleist Forum.',
      'mitglied.intro':    'As a member of the Friends and Supporters of BSOF, you support not only the orchestra – you become part of a community that loves music and actively shapes culture in Frankfurt (Oder).',
      'mitglied.benefit1': 'Invitations to member events & rehearsal visits',
      'mitglied.benefit2': 'Exclusive chamber concerts with BSOF musicians',
      'mitglied.benefit3': 'Members newsletter with behind-the-scenes insights',
      'mitglied.benefit4': 'Donations are tax-deductible – tax receipt on request',
      'mitglied.fee.period':    'per year · due in January',
      'mitglied.fee.note':      'Cancellation: 3 months before end of financial year',
      'mitglied.download.text': 'Download the membership form, fill it in and send it to us signed by post or scanned by e-mail.',
      'mitglied.download.btn':  'Download membership form',
      'mitglied.firma':         'You are also welcome to become a member with your company or institution – <a href="#kontakt" style="color:rgba(255,255,255,0.5); text-decoration:underline;">contact us!</a>',
      'spenden.label': 'Support us',
      'spenden.h2':    'Donate – directly & effectively',
      'spenden.p1':    'We welcome your donation, large or small. Every contribution goes entirely into the association\'s projects and benefits the Brandenburg State Orchestra Frankfurt directly.',
      'spenden.p2':    'If you need a tax receipt, please contact us at <a href="mailto:foerderverein@bsof.de" style="color:var(--red);">foerderverein@bsof.de</a>.',
      'spenden.konto.title':   'Our bank details',
      'spenden.konto.h4':      'Bank details',
      'spenden.konto.inhaber': 'Account holder',
      'spenden.konto.bank':    'Bank',
      'spenden.konto.note':    'As a non-profit association, we can provide a tax receipt on request.',
      'gruss.person.title': 'Chairman, Förderverein BSOF e. V.',
      'gruss.label': 'Welcome message',
      'gruss.h2':    'A message from the Chairman',
      'gruss.quote': '"In the middle of difficulty lies opportunity."<br>– Albert Einstein',
      'gruss.sig':   'Yours sincerely,<br><strong>Dr. Axel Berg</strong><br>Chairman, FV BSOF',
      'kontakt.label':    'Contact',
      'kontakt.h2':       'Get in touch',
      'kontakt.p':        'Do you have questions about membership or projects, or would you like to volunteer? We look forward to hearing from you.',
      'kontakt.anschrift': 'Address',
      'kontakt.website':   'Main BSOF website',
      'footer.verein':     'Association',
      'footer.mitmachen':  'Get involved',
      'footer.projekte':   'Projects',
      'footer.ehrenamt':   'Volunteering',
      'footer.impressum':  'Legal notice',
      'footer.datenschutz':'Privacy policy',
      'footer.satzung':    'Statutes',
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
      if (t[k] !== undefined) el.innerHTML = t[k];
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
