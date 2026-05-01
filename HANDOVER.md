# Handover – Förderverein BSOF Website

## Was haben wir heute gemacht?

- Bugfixes: `aria-expanded` auf Hamburger-Button, kaputte Satzkonstruktion in "Über uns", totes JS entfernt
- Datenschutz & Impressum bereinigt: korrekte E-Mail (`foerderverein@bsof.de`), Adresse, Platzhalter entfernt
- Adresse überall auf **Logenstraße 8, D – 15230 Frankfurt (Oder)** aktualisiert
- Button „Unser Verein" (Intro-Strip) verlinkt jetzt auf `#grusswort`
- Projektkacheln überarbeitet: oben Spannungsfeld 4 & 5 (Förderung), unten zwei Lesekonzerte (Eigenes Projekt)
- Alle 4 Kacheln sind jetzt vollständig klickbar (Stretched-Link-CSS)
- Drei neue Detailseiten erstellt: `projekt-spannungsfeld-4.html`, `projekt-spannungsfeld-5.html`, `projekt-lesekonzerte.html`

## Aktueller Stand

Voll funktionsfähige One-Page-Website (`index.html`) mit:
- Navigation, Hero-Slideshow, Über uns, Ziele, Projekte (4 Kacheln), Mitglied werden, Spenden, Grußwort, Kontakt, Footer
- 3 Projekt-Detailseiten mit einheitlichem Layout und Zurück-Button
- `impressum.html` und `datenschutz.html` korrekt befüllt
- Noch offen: **Gründungsjahr** des Fördervereins für das Badge in der Über-uns-Sektion (zeigt aktuell nur „seit / Frankfurt (Oder)")

## Nächste geplante Schritte

1. Gründungsjahr eintragen sobald bekannt → `index.html` Zeile ~118: `<strong>JAHR</strong>`
2. Echte Projektbilder für die 4 Kacheln einpflegen (aktuell Platzhalterbilder)
3. Inhalte der Detailseiten mit echten Terminen/Daten befüllen (Flyer-PDFs als Quelle)
4. Foto von Dr. Axel Berg für die Grußwort-Sektion hinzufügen (`images/vorsitzender.jpg`)
5. Restliche Code-Aufräumarbeiten: totes CSS entfernen, Inline-Styles in Stylesheet auslagern
