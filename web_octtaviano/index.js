const navIcon = document.getElementById('nav-icon');
const nav = document.getElementById('nav');

navIcon.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});

