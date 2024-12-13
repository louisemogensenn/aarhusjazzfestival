
/* ---------- SIKRER FUNKTIONALITETEN AF BURGERMENUEN -----------*/

document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burgermenu');
    const mainNav = document.querySelector('.navigationsbar');
    const burgerMenuIcon = document.querySelector('.burgermenu img');
    const mainNavLinks = document.querySelectorAll('.navigationsbar > li');

    // Tilføj click-event til hele dokumentet for at lukke menuen, når der klikkes uden for
    document.addEventListener('click', (event) => {
        if (mainNav.classList.contains('show') && 
            !mainNav.contains(event.target) && 
            !burgerMenu.contains(event.target)) {
            mainNav.classList.remove('show');
            burgerMenuIcon.classList.remove('open');
            
            // Ryd undermenu-status
            const dropdowns = document.querySelectorAll('.drop-down');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });

    // Tilføj click-event til selve burgermenuen
    burgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Forhindrer at dokumentets click-event udløses
        mainNav.classList.toggle('show');
        burgerMenuIcon.classList.toggle('open');

        // Toggle undermenuer
        mainNavLinks.forEach(link => {
            const dropdown = link.querySelector('.drop-down');
            if (dropdown) {
                dropdown.classList.toggle('show');
            }
        });
    });

    // Tilføj click-events til hver hovednavigationslink for at toggle undermenuer
    mainNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const dropdown = link.querySelector('.drop-down');
            if (dropdown) {
                dropdown.classList.toggle('show');
                event.stopPropagation(); // Forhindrer at dokumentets click-event udløses
            }
        });
    });
});