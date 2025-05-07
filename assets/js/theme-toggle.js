// Theme toggle script
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const darkClass = 'dark-mode';

  // Set initial state from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add(darkClass);
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener('change', function() {
      if (toggle.checked) {
        body.classList.add(darkClass);
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove(darkClass);
        localStorage.setItem('theme', 'light');
      }
    });
  }
}); 