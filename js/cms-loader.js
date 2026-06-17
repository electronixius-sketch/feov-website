// Lädt Inhalte aus einer JSON-Datei und setzt sie in Elemente mit data-cms-key
async function loadCMSContent(jsonPath) {
  try {
    const res = await fetch(jsonPath);
    if (!res.ok) return;
    const data = await res.json();
    document.querySelectorAll('[data-cms-key]').forEach(function(el) {
      var key = el.getAttribute('data-cms-key');
      if (data[key] !== undefined) {
        // Einfaches Markdown: **fett**, *kursiv*, Zeilenumbrüche
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
