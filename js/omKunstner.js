
    const reserverBilletKnap = document.getElementById('reserverBilletKnap');

    const popupReserverBillet = document.getElementById('popup-reserverBillet');

    reserverBilletKnap.addEventListener('click', () => {
        popupReserverBillet.style.display = 'block';
        setTimeout(() => { window.location.href = '404.html'; }, 2000);
    });