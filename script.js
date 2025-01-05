document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', () => {
        menu.classList.toggle('open'); // Schaltet die Klasse "open" ein oder aus
    });
});
