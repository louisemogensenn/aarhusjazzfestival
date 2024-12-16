    
    const bestilPlakatKnap = document.getElementById('bestilPlakatKnap'); // Henter elementet med id'et bestilPlakatKnap og gemmer i konstanten

    const popupBestilPlakat = document.getElementById('popup-bestilPlakat'); // Henter elementet med id'et popup-bestilPlakat og gemmer i konstanten

    bestilPlakatKnap.addEventListener('click', () => { // Når der klikkes på elementet på omPlakat.html-siden, der er gemt i konstanten bestilPlakatKnap... 
        popupBestilPlakat.style.display = 'block'; // ændres popup-vinduet til at blive vist...
        setTimeout(() => { window.location.href = '404.html'; }, 2000); // ... og efter 2 sekunder sendes brugeren videre til 404-siden 
    });