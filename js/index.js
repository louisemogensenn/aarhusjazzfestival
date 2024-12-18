// Sponser Slide //

document.addEventListener('DOMContentLoaded', () => {
    const sponserslide = document.querySelector('.slide-container');

    // Hover funktion: Pause //

    // Gør at når cursor hover over sliden, så pauser den //
    sponserslide.addEventListener('mouseenter', () => {
        sponserslide.style.animationPlayState = 'paused';
    });

    // Gør at når du fjerner cursoren fra sliden så starter den igen //
    sponserslide.addEventListener('mouseleave', () => {
        sponserslide.style.animationPlayState = 'running';
    });
});