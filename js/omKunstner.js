
    const reserverBilletKnap = document.getElementById('reserverBilletKnap'); // Henter elementet med id'et reserverBilletKnap og gemmer i konstanten

    const popupReserverBillet = document.getElementById('popup-reserverBillet'); // Henter elementet med id'et popup-reserverBillet og gemmer i konstanten

    reserverBilletKnap.addEventListener('click', () => { // Når der klikkes på elementet i omKunstner.html-siden, der er gemt i konstanten reserverBilletKnap... 
        popupReserverBillet.style.display = 'block'; //... ændres popup-vinduet til at blive vist...
        setTimeout(() => { window.location.href = '404.html'; }, 2000); // ... og efter 2 sekunder sendes brugeren videre til 404-siden 
    });