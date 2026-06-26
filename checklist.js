(function () {
  var key = 'checklist-' + location.pathname.replace(/.*\//, '').replace('.html', '');
  var checked = JSON.parse(localStorage.getItem(key) || '[]');

  var items = document.querySelectorAll('.item');

  function save() {
    var state = [];
    items.forEach(function (el, i) {
      if (el.classList.contains('checked')) state.push(i);
    });
    localStorage.setItem(key, JSON.stringify(state));
  }

  items.forEach(function (el, i) {
    if (checked.indexOf(i) !== -1) el.classList.add('checked');
    el.addEventListener('click', function () {
      el.classList.toggle('checked');
      save();
    });
  });

  var btn = document.createElement('button');
  btn.textContent = 'Reset';
  btn.className = 'reset-btn';
  btn.addEventListener('click', function () {
    items.forEach(function (el) { el.classList.remove('checked'); });
    localStorage.removeItem(key);
  });
  document.querySelector('h1').insertAdjacentElement('afterend', btn);
})();
