const skiftPlakatSideFrem = document.getElementById('skiftPlakatsideFrem'); // Henter elementet med id'et skiftPlakatsideFrem og gemmer i konstanten

const skiftPlakatsideTilbage = document.getElementById('skiftPlakatsideTilbage'); // Henter elementet med id'et skiftPlakatsideTilbage og gemmer i konstanten

const foerstePlakatSide = document.getElementById('foerstePlakatSide'); // Henter elementet med id'et foerstePlakatSide og gemmer i konstanten

const andenPlakatSide = document.getElementById('andenPlakatSide'); // Henter elementet med id'et andenPlakatSide og gemmer i konstanten

skiftPlakatSideFrem.addEventListener('click', () => { // Når der klikkes på pilen frem...
    foerstePlakatSide.style.display = 'none'; // ... skjules den første side med plakater...
    andenPlakatSide.style.display = 'flex'; // ... og den anden side med plakater vises
});

skiftPlakatsideTilbage.addEventListener('click', () => { // Når der klikkes på pilen tilbage...
    andenPlakatSide.style.display = 'none'; // ... skjules den anden side med plakater...
    foerstePlakatSide.style.display = 'flex'; // ... og den første side med plakater vises
});