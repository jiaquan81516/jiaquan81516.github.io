const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/* This is for fading upon new page or page refresh */
document.body.className = 'fade';
document.addEventListener("DOMContentLoaded", () => {
window.setTimeout(function() {
    document.body.className = '';   //The empty string tells JavaScript to revert the class name after the page has loaded.
}, 230);
});