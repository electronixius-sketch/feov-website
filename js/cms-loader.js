// Lädt Inhalte aus einer JSON-Datei und setzt sie in Elemente mit data-cms-key
// Unterstützt Mehrsprachigkeit: bei lang=en wird content/en/... geladen
async function loadCMSContent(jsonPath) {
  try {
    var lang = localStorage.getItem('feov-lang') || 'de';
    var actualPath = jsonPath;
    if (lang === 'en') {
      actualPath = jsonPath.replace('content/', 'content/en/');
    }
    var res = await fetch(actualPath);
    // Fallback auf Deutsch wenn englische Version noch nicht vorhanden
    if (!res.ok && lang === 'en') res = await fetch(jsonPath);
    if (!res.ok) return;
    var data = await res.json();
    document.querySelectorAll('[data-cms-key]').forEach(function(el) {
      var key = el.getAttribute('data-cms-key');
      if (data[key] !== undefined) {
        var html = data[key]
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.+?)\*/g, '<em>$1</em>')
          .replace(/\n/g, '<br>');
        el.innerHTML = html;
      }
    });
  } catch (e) {
    // Fehler still ignorieren – Seite zeigt Originalinhalt
  }
}
