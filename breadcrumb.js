(function () {
  // Static hierarchy — no session tracking needed
  var HIERARCHY = {
    'index.html':                  [],
    'industries.html':             [{ name: 'Home', url: 'index.html' }],
    'aviation.html':               [{ name: 'Home', url: 'index.html' }, { name: 'Industries', url: 'industries.html' }],
    'marine.html':                 [{ name: 'Home', url: 'index.html' }, { name: 'Industries', url: 'industries.html' }],
    'rail.html':                   [{ name: 'Home', url: 'index.html' }, { name: 'Industries', url: 'industries.html' }],
    'distributed-power.html':     [{ name: 'Home', url: 'index.html' }, { name: 'Industries', url: 'industries.html' }],
    'technology.html':             [{ name: 'Home', url: 'index.html' }],
    'hydrogen-architecture.html':  [{ name: 'Home', url: 'index.html' }, { name: 'Technology', url: 'technology.html' }],
    'integration.html':            [{ name: 'Home', url: 'index.html' }, { name: 'Technology', url: 'technology.html' }],
    'system-components.html':      [{ name: 'Home', url: 'index.html' }, { name: 'Technology', url: 'technology.html' }],
    'partners.html':               [{ name: 'Home', url: 'index.html' }],
  };

  var PAGE_NAMES = {
    'index.html':                  'Home',
    'industries.html':             'Industries',
    'aviation.html':               'Aviation',
    'marine.html':                 'Marine',
    'rail.html':                   'Rail & Heavy Transport',
    'distributed-power.html':      'Distributed Power',
    'technology.html':             'Technology',
    'hydrogen-architecture.html':  'Hydrogen Architecture',
    'integration.html':            'Integration',
    'system-components.html':      'System Components',
    'partners.html':               'Partners',
  };

  function getCurrentPage() {
    var file = window.location.pathname.split('/').pop();
    return (file && file !== '') ? file : 'index.html';
  }

  function render() {
    var bar = document.getElementById('breadcrumb-bar');
    if (!bar) return;

    var current = getCurrentPage();
    var ancestors = HIERARCHY[current];

    // Home page or unknown — hide
    if (!ancestors || ancestors.length === 0) {
      bar.style.display = 'none';
      return;
    }

    var currentName = PAGE_NAMES[current] || current;
    var parts = [];

    for (var i = 0; i < ancestors.length; i++) {
      if (i > 0) parts.push('<span class="bc-sep"><</span>');
      parts.push('<a class="bc-link" href="' + ancestors[i].url + '">' + ancestors[i].name + '</a>');
    }

    parts.push('<span class="bc-sep"><</span>');
    parts.push('<span class="bc-current">' + currentName + '</span>');

    bar.innerHTML = parts.join('');
    bar.style.display = 'flex';
  }

  render();
})();
