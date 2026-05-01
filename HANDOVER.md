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
- Hero: „FÖRDERVEREIN BSOF E. V." Label ersetzt durch **Logo-SVG** (90 px, 65 % Deckkraft)
- Projektkacheln: „Spannungsfeld" → **„Spannungsfelder"** (Mehrzahl) in Kacheln und Detailseiten

## Aktueller Stand

Voll funktionsfähige One-Page-Website (`index.html`) mit:
- Navigation, Hero mit Logo + Slideshow, Über uns, Ziele, Projekte (4 Kacheln), Mitglied werden, Spenden, Grußwort, Kontakt, Footer
- 3 Projekt-Detailseiten mit einheitlichem Layout und Zurück-Button
- `impressum.html` und `datenschutz.html` korrekt befüllt

**Noch offen:**
- **Gründungsjahr** des Fördervereins für das Badge in der Über-uns-Sektion → `index.html` ca. Zeile 118: `<strong>JAHR</strong>`
- Echte Projektbilder für die 4 Kacheln (aktuell Platzhalterbilder)
- Inhalte der Detailseiten mit echten Terminen/Daten befüllen (Flyer-PDFs als Quelle)
- Foto von Dr. Axel Berg für die Grußwort-Sektion → `images/vorsitzender.jpg`

## Nächste geplante Schritte

1. Gründungsjahr eintragen sobald bekannt
2. Echte Bilder für Projektkacheln einpflegen
3. Detailseiten-Inhalte anhand der Flyer-PDFs befüllen
4. Restliche Code-Aufräumarbeiten: totes CSS entfernen, Inline-Styles auslagern
