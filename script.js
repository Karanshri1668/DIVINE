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

const audioPlayer = document.getElementById('audio-player');
        document.querySelectorAll('.bar').forEach(bar => {
            bar.addEventListener('click', () => {
                const song = bar.getAttribute('data-song');
                if (audioPlayer.src !== song) {
                    audioPlayer.src = song;
                    audioPlayer.play();
                } else if (!audioPlayer.paused) {
                    audioPlayer.pause();
                } else {
                    audioPlayer.play();
                }
            });
        });
