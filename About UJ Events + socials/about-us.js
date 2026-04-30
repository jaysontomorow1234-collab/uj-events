document.addEventListener("DOMContentLoaded", function() {
    // === 1. HAMBURGER MENU (Cruciaal voor Mobile) ===
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) { // Extra check of ze bestaan
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // === 2. INTERSECTION OBSERVER (De Animaties) ===
    const observerOptions = {
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    // Zoek alle elementen die moeten animeren
    const itemsToAnimate = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    itemsToAnimate.forEach((el) => {
        observer.observe(el);
    });
});