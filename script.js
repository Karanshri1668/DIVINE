 // Initialize ScrollReveal
const sr = ScrollReveal();
sr.reveal('#about .content', {
    distance: '50px',
    origin: 'left',
    duration: 1000,
    opacity: 0,
    easing: 'ease-in-out'
});
// JavaScript for Burger Menu Toggle
function toggleBurgerMenu() {
    const burger = document.querySelector('.burger');
    const navLinks = document.getElementById('nav-links');
    burger.classList.toggle('open');
    navLinks.classList.toggle('open');
}
