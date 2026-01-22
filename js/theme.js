const body = document.body;
const toggle = document.querySelector('.toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

const getTheme = () => body.classList.contains('dark') ? 'dark' 
  : body.classList.contains('light') ? 'light' 
  : prefersDark.matches ? 'dark' : 'light';

const setTheme = (t) => { body.classList.remove('light', 'dark'); if (t) body.classList.add(t); };

function toggleTheme() {
  const newTheme = getTheme() === 'dark' ? 'light' : 'dark';
  toggle.classList.add('spin');
  setTheme(newTheme);
  localStorage.setItem('theme', newTheme);
  setTimeout(() => toggle.classList.remove('spin'), 500);
}

const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
