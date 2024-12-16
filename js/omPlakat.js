    
    const bestilPlakatKnap = document.getElementById('bestilPlakatKnap');

    const popupBestilPlakat = document.getElementById('popup-bestilPlakat');

    bestilPlakatKnap.addEventListener('click', () => {
        popupBestilPlakat.style.display = 'block';
        setTimeout(() => { window.location.href = '404.html'; }, 2000);
    });