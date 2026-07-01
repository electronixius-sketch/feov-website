# Übergabe: Kaleidoskop, Spannungsfelder-Umbau, Förderer-Kachel

Diese Änderungen bitte **nicht direkt auf `main`** umsetzen, sondern in einem eigenen Branch/Worktree,
damit auf der Live-Seite nichts sichtbar wird, bevor alles fertig und geprüft ist.

```
git checkout -b feature/kaleidoskop
```

Erst nach vollständigem Test in einen PR / Merge nach `main` geben.

---

## 1. Ausgangslage (aus Christines Dokumenten)

**`Änderungen S.docx`** (Änderungswünsche zur Education-Projekte-Seite):
- Auf der Education-Projekte-Seite **streichen**: Abschnitt „Was die Kinder erleben“ (Überschrift,
  Einleitungssatz, die Aktivitäten-Liste Musik/Choreographie/Zeichnen/Schreiben/Tanzen/Filmen,
  und der Abschlusssatz „Am Ende steht keine bloße Aufführung…“)
- **Spannungsfelder soll unter „Education-Projekte“ einsortiert werden** (nicht mehr eigene Kachel
  auf der Startseite, sondern als Teilprojekt auf der Education-Seite verlinkt)
- **Kaleidoskop ersetzt Spannungsfelder als Kachel** — an der Stelle im Kachel-Raster, wo aktuell
  Spannungsfelder steht
- **Neue 6. Kachel: „Förderer und Sponsoren“**

**`Themen_musik.docx`** (Haupttext für die neue Kaleidoskop-Seite):
Fünf Themen, jeweils mit Musikstücken von Bach und Piazzolla gegenübergestellt:

1. Klage/Trauer/Verzweiflung
   - Bach: Matthäuspassion – Einleitung bis Einsatzchor
   - Piazzolla: Maria de Buenos Aires – Fuga y misterio
2. Hass/Mobbing/Hetze
   - Bach: Johannespassion – „Wäre dieser nicht ein Übeltäter“
   - Piazzolla: Libertango
   - Knabenchor: Bach, Johannespassion – Choral „Oh große Lieb, oh Lieb ohn alle Maßen“
3. Schmerz/Leid
   - Bach: Matthäuspassion – Alt-Arie „Erbarme dich“
   - Piazzolla: Addio Nonino
4. Gleichgültigkeit
   - Bach: Matthäuspassion – „Was gehet uns das an?“
   - Piazzolla: Oblivion
5. Mitgefühl/Liebe
   - Knabenchor: Bach, Matthäuspassion – „Wer hat dich so geschlagen“
   - Texte der Schüler
   - Piazzolla: Las cuatro estaciones porteñas – Invierno porteño

Begleittext (Warum Bach & Piazzolla): Erklärt, dass beide Komponisten trotz gegensätzlicher
Epochen/Kulturkreise Musik schreiben, die sich bildhaft für die gewählten Themen eignet; endet mit
einem Luther-Zitat: „Musik ist ein reines Geschenk und eine Gabe Gottes, sie vertreibt den Teufel,
sie macht die Leute fröhlich und man vergißt über sie alle Laster.“ – „Ganz einfach.“

---

## 2. Noch offene/fehlende Infos (Stand: Ende dieser Session)

| # | Frage | Antwort des Nutzers |
|---|-------|----------------------|
| 1 | Ist der Themen_musik-Text der Haupttext für Kaleidoskop? | Ja, vermutlich vollständig — kann sein, dass Christine noch was vergessen hat, ggf. nachfragen |
| 2 | Datum/Ort/Uhrzeit für Kaleidoskop? | Gibt es noch nicht — Projektreihe läuft noch nicht. **Platzhalter „Termin wird noch bekannt gegeben“ verwenden** |
| 3 | Bild für die Kaleidoskop-Kachel/Hero? | Christine sollte es schicken — **noch mal nachfragen, ggf. noch nicht da** |
| 4 | Inhalt der Förderer-Kachel? | **Alle Förderer auflisten** (Logos) + kurzer Dank-Text darunter |

➡ Vor dem Umsetzen: prüfen ob Bild von Christine inzwischen da ist. Falls nicht, mit Platzhalter-Icon
(SVG-Fallback, wie bei den anderen Projektkacheln üblich) arbeiten und später ersetzen.

---

## 3. Konkreter Umsetzungsplan

### A. `index.html` — Projekte-Kachelraster (`.projekte-grid`, ca. Zeile 245–312)
- Spannungsfelder-Kachel **entfernen** (Karte mit `href="projekt-spannungsfelder.html"`)
- An gleicher Position **Kaleidoskop-Kachel einfügen**, verlinkt auf `projekt-kaleidoskop.html`
- Neue **6. Kachel „Förderer und Sponsoren“** am Ende hinzufügen, verlinkt auf `projekt-foerderer.html`
- Neue i18n-Keys in `js/i18n.js` ergänzen: `card.kaleidoskop.title/text`, `card.foerderer.title/text`
  (DE + EN Version)

### B. `projekt-education.html`
- Abschnitt „Was die Kinder erleben“ komplett entfernen (h2 `edu.was.h2`, Intro `was_intro`,
  `.activity-list`, Abschlusstext `was_text`) — inkl. der zugehörigen CMS-Keys in
  `content/education.json` und `content/en/education.json` aufräumen
- Neuen Abschnitt einfügen: „Teilprojekt: Spannungsfelder“ mit kurzem Text + Link zu
  `projekt-spannungsfelder.html` (die Spannungsfelder-Seite selbst bleibt bestehen, wird nur nicht
  mehr eigenständig auf der Startseite verlinkt)

### C. Neue Seite `projekt-kaleidoskop.html` (nach Vorlage `projekt-education.html`/`projekt-auftragswerke.html`)
- Titel „Kaleidoskop“, Tag „Förderung“, Hero-Bild mit Fallback (Platzhalter falls Christine noch
  kein Bild geschickt hat)
- Einleitungstext: Bach/Piazzolla-Begründung aus `Themen_musik.docx`
- Die 5 Themen als strukturierte Liste (Stil ähnlich `.sf-music-list` aus
  `projekt-spannungsfelder.html`), pro Thema: Titel + Bach-Stück + Piazzolla-Stück
- Luther-Zitat als Abschluss/Highlight
- Termin-Hinweis: Platzhalter „Termin wird noch bekannt gegeben“
- Alle Texte mit `data-cms-key` für spätere CMS-Bearbeitung durch Christine
- `data-i18n` für statische Labels (Abschnittsüberschriften etc.), passende EN-Übersetzung ergänzen
- CMS-Loader-Script einbinden: `content/kaleidoskop.json` + `content/en/kaleidoskop.json`

### D. Neue Seite `projekt-foerderer.html`
- Liste/Logo-Grid aller bisherigen Förderer (Logos liegen bereits vor unter
  `images/Spannungsfelder I/Logos/`: EWE Stiftung, ILB, Land Brandenburg,
  Stadt Frankfurt (Oder)/Słubice, Interreg/Euroregion/KPF/FMP, Deutsch-Polnisches Jugendwerk,
  Sparkasse Oder-Spree — jpg/png-Varianten verwenden, keine `.eps`/`.pdf`)
- Kurzer Dank-Text darunter, per `data-cms-key` editierbar
- CMS-Wiring: `content/foerderer.json` + `content/en/foerderer.json`

### E. CMS-Konfiguration (`admin/config.yml`)
- Neue Collections/Files für `kaleidoskop.json` und `foerderer.json` ergänzen, analog zu den
  bestehenden Projekt-Collections (siehe `education`, `auftragswerke` als Vorlage)

### F. `js/i18n.js`
- Neue Keys für Kaleidoskop- und Förderer-Seite (Abschnittstitel, Navigationstexte) in DE + EN
  ergänzen, ähnlich wie es für die Spannungsfelder-Seite bereits gemacht wurde
  (`sf.subtitle`, `sf.musik`, `sf.gefördert`, etc. als Vorbild)

---

## 4. Reihenfolge-Empfehlung

1. Branch/Worktree anlegen
2. Erst bei Christine nachfragen: fehlendes Bild + ggf. fehlender Text für Kaleidoskop bestätigen
3. Education-Seite bereinigen (B)
4. Kaleidoskop-Seite bauen (C)
5. Förderer-Seite bauen (D)
6. Startseiten-Kacheln umbauen (A)
7. CMS + i18n wiring (E, F)
8. Lokal testen (Darkmode, EN-Umschaltung, Mobile)
9. Erst dann PR/Merge nach `main` — dadurch wird auch der Netlify-Build erst bei Merge ausgelöst
