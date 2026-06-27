(function () {
  var DARK = 'dark';
  var KEY  = 'feov-theme';

  function apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
  }

  // Beim Laden gespeicherte Einstellung wiederherstellen
  var saved = localStorage.getItem(KEY);
  if (saved) {
    apply(saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    apply(DARK);
  }

  // Toggle
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      apply(current === DARK ? 'light' : DARK);
    });
  });
})();
