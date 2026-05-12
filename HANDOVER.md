# Handover – Förderverein BSOF Website

## Was haben wir heute gemacht?

**Runde 1 – Bugfixes & Bereinigung:**
- `aria-expanded` auf Hamburger-Button korrekt aktualisiert (Barrierefreiheit)
- Kaputte Satzkonstruktion in "Über uns" behoben
- Totes JS (Spendenformular-Handler, Betragsbuttons) entfernt
- `datenschutz.html`: E-Mail korrigiert auf `foerderverein@bsof.de`, Adress-Platzhalter befüllt
- `impressum.html`: Leeren Platzhalter für Vorstandsmitglieder entfernt

**Runde 2 – Inhalt & Struktur:**
- Adresse überall auf **Logenstraße 8, D – 15230 Frankfurt (Oder)** aktualisiert (4 Stellen)
- Button „Unser Verein" im Intro-Strip → verlinkt und beschriftet als **„Grußwort"**
- Projektkacheln überarbeitet: oben **Spannungsfelder 4 & 5** (Förderung), unten **Lesekonzerte ×2** (Eigenes Projekt)
- Alle 4 Kacheln vollständig klickbar (Stretched-Link-CSS)
- Drei neue Detailseiten: `projekt-spannungsfeld-4.html`, `projekt-spannungsfeld-5.html`, `projekt-lesekonzerte.html`

**Runde 3 – Visuelle Anpassungen:**
- Hero: „FÖRDERVEREIN BSOF E. V." Label ersetzt durch Logo-SVG (90 px, 65 % Deckkraft) — **später zurückgenommen**
- Projektkacheln: „Spannungsfeld" → **„Spannungsfelder"** (Mehrzahl) in Kacheln und Detailseiten

**Runde 4 – DOCX-Update, technische Bereinigung & Neustruktur:**
- Hero-Logo **zurückgesetzt** auf Text-Label `<span class="section-label">Förderverein BSOF e. V.</span>` (Logo erst wieder einsetzen wenn roter Hintergrund im SVG entfernt wurde)
- **Gründungsjahr 1993** im Badge eingetragen (`<em class="badge-since">seit</em><strong>1993</strong>`)
- Alle Texte aus `Website_Texte_Struktur.docx` von Christine Hellert übernommen:
  - Ziele-Header: „insbesondere" + „Einen besonderen Schwerpunkt legen wir auf die kulturelle Bildung…"
  - Lobby/Bildung-Karte: „einziges A-Orchester des Landes Brandenburg"
  - Kinder-Karte: ohne „Erwachsene", „besonders begabter junger Nachwuchskünstlerinnen"
  - Innenstadt-Karte: „Mini-Konzerte, Straßenkonzerte… pflegen außerdem"
  - Mitglied-Sektion: „Gern können Sie auch mit Ihrer Firma oder Institution Mitglied werden…"
  - „alleine" → „allein"
- **5 Projektkacheln** statt 4:
  1. Auftragswerke → `projekt-auftragswerke.html`
  2. Education-Projekte → `projekt-education.html`
  3. Spannungsfelder → `projekt-spannungsfelder.html`
  4. Lesekonzerte → `projekt-lesekonzerte.html`
  5. Mini-Konzerte → `projekt-minikonzerte.html`
- `projekt-lesekonzerte.html` **vollständig überarbeitet**: Buchhandlung „Ulrich von Hutten", Geheim-Tipp seit 2024, Glas Wein in oberer Etage, kein Eintritt
- **4 neue Detailseiten** erstellt: `projekt-auftragswerke.html`, `projekt-education.html`, `projekt-spannungsfelder.html`, `projekt-minikonzerte.html`
- **Footer**: © 2026, Projektlinks aktualisiert
- **Technische Bereinigung `css/style.css`**:
  - `scroll-behavior: smooth` entfernt (JS übernimmt das)
  - `--font-serif` CSS-Variable für EB Garamond eingeführt
  - `.hero-logo` entfernt, `.hero-content .section-label` wiederhergestellt
  - `.ueber-image-badge em.badge-since` neu hinzugefügt
  - `.projekte-grid`: `repeat(3, 1fr)` Desktop, `repeat(2, 1fr)` Tablet, `1fr` Mobile
  - ~200 Zeilen totes CSS entfernt (`.mitglied-tiers`, `.tier-*`, `.spenden-grid`, `.spenden-amounts`, `.spenden-form`, `.kontakt-form`, `.beitritt-form`, `.mitglied-intro`, `.hero-bg`, `.pdf-download`, `.wave-divider` u. a.)
- **Inline-`<style>`-Block** aus `index.html <head>` vollständig in `css/style.css` überführt

## Aktueller Stand

Voll funktionsfähige One-Page-Website (`index.html`) mit:
- Navigation, Hero mit Text-Label + Slideshow, Über uns, Ziele, Projekte (5 Kacheln), Mitglied werden, Spenden, Grußwort, Kontakt, Footer
- 5 Projekt-Detailseiten mit einheitlichem Layout und Zurück-Button
- `impressum.html` und `datenschutz.html` korrekt befüllt

**Noch offen:**
- **Hero-Logo**: Roten Hintergrund im `images/logo.svg` entfernen → danach Logo wieder in Hero einsetzen (Position und CSS-Klasse wie im Plan vorgesehen)
- **Echte Projektbilder** für alle 5 Kacheln (Platzhalterpfade: `projekt-auftragswerke.jpg`, `projekt-education.jpg`, `projekt-kammer.jpg`, `projekt-lesekonzerte.jpg`, `projekt-innenstadt.jpg`)
- **Spannungsfelder-Detailseite**: Ausführliche Texte + Cover-Bild von Christine noch ausstehend (`projekt-spannungsfelder.html` enthält Platzhalter-Hinweis)
- **Education-Broschüre**: Als PDF oder Einbettung in `projekt-education.html` ergänzen sobald vorhanden
- **Foto Dr. Axel Berg** für Grußwort-Sektion → `images/vorsitzender.jpg`
- Alte Detailseiten `projekt-spannungsfeld-4.html` und `projekt-spannungsfeld-5.html` können gelöscht werden (nicht mehr verlinkt)

## Nächste geplante Schritte

1. Roten Hintergrund im Logo-SVG entfernen → Hero-Logo wieder einsetzen
2. Echte Bilder für alle 5 Projektkacheln einpflegen
3. Ausführliche Texte + Cover für `projekt-spannungsfelder.html` von Christine erhalten und eintragen
4. Education-Broschüre als PDF einbinden
5. Foto Dr. Axel Berg einpflegen
6. Alte Spannungsfeld-Einzelseiten (4 & 5) löschen
