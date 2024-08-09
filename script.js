document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const nav = document.getElementById('nav');

    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
        nav.classList.toggle('show');
    });

    closeBtn.addEventListener('click', () => {
        nav.classList.remove('open');
        nav.classList.remove('show');
    });
});