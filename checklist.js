(function () {
  var key = 'checklist-' + location.pathname.replace(/.*\//, '').replace('.html', '');
  var skipKey = key + '-skipped';
  var checked = JSON.parse(localStorage.getItem(key) || '[]');
  var skipped = JSON.parse(localStorage.getItem(skipKey) || '[]');

  var items = document.querySelectorAll('.item');
  // Save by "section|item" text, not position, so adding/removing items doesn't shift progress
  function id(el) {
    return el.closest('.section').querySelector('.section-header').textContent.trim() + '|' + el.textContent.trim();
  }

  function updateSections() {
    document.querySelectorAll('.section').forEach(function (sec) {
      var all = sec.querySelectorAll('.item');
      var done = sec.querySelectorAll('.item.checked, .item.skipped');
      sec.classList.toggle('completed', all.length === done.length);
    });
  }

  function indexesWith(cls) {
    var state = [];
    items.forEach(function (el) {
      if (el.classList.contains(cls)) state.push(id(el));
    });
    return state;
  }

  function save() {
    localStorage.setItem(key, JSON.stringify(indexesWith('checked')));
    localStorage.setItem(skipKey, JSON.stringify(indexesWith('skipped')));
    updateSections();
  }

  // Tap cycles: blank -> checked (packed) -> skipped (not taking) -> blank
  items.forEach(function (el) {
    if (checked.indexOf(id(el)) !== -1) el.classList.add('checked');
    else if (skipped.indexOf(id(el)) !== -1) el.classList.add('skipped');
    el.addEventListener('click', function () {
      if (el.classList.contains('checked')) {
        el.classList.remove('checked');
        el.classList.add('skipped');
      } else if (el.classList.contains('skipped')) {
        el.classList.remove('skipped');
      } else {
        el.classList.add('checked');
      }
      save();
    });
  });
  updateSections();

  var btn = document.createElement('button');
  btn.textContent = 'Reset';
  btn.className = 'reset-btn';
  btn.addEventListener('click', function () {
    if (!confirm('Reset all items?')) return;
    items.forEach(function (el) { el.classList.remove('checked', 'skipped'); });
    localStorage.removeItem(key);
    localStorage.removeItem(skipKey);
    updateSections();
  });
  document.querySelector('h1').insertAdjacentElement('afterend', btn);
})();
