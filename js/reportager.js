
const fraFestivalen = document.getElementById('fraFestivalen'); // Henter elementet med id'et fraFestivalen og gemmer i konstanten

const fraArkivet = document.getElementById('fraArkivet'); // Henter elementet med id'et fraArkivet og gemmer i konstanten

const overskriftFestivalen = document.getElementById('overskriftFestivalen'); // Henter elementet med id'et overskriftFestivalen og gemmer i konstanten

const overskriftArkivet = document.getElementById('overskriftArkivet'); // Henter elementet med id'et overskriftArkivet og gemmer i konstanten

overskriftArkivet.addEventListener('click', () => { // Når der klikkes på overskriften "Fra arkivet"...
    fraFestivalen.style.display = 'none'; // ... skjules sektionen "Fra festivalen"...
    fraArkivet.style.display = 'block'; // ... og sektionen "Fra arkivet" vises
});

overskriftFestivalen.addEventListener('click', () => { // Når der klikkes på overskriften "Fra festivalen"...
    fraArkivet.style.display = 'none'; // ... skjules sektionen "Fra arkivet"...
    fraFestivalen.style.display = 'block'; // ... og sektionen "Fra festivalen" vises
});

/*----------------------- SCRIPT FOR REPORTAGESIDEN - FRA ARKIV  ------------------------*/
const skiftPlakatSideFrem = document.getElementById('skiftPlakatsideFrem'); // Henter elementet med id'et skiftPlakatsideFrem og gemmer i konstanten

const skiftPlakatsideTilbage = document.getElementById('skiftPlakatsideTilbage'); // Henter elementet med id'et skiftPlakatsideTilbage og gemmer i konstanten

const foerstePlakatSide = document.getElementById('foerstePlakatSide'); // Henter elementet med id'et foerstePlakatSide og gemmer i konstanten

const andenPlakatSide = document.getElementById('andenPlakatSide'); // Henter elementet med id'et andenPlakatSide og gemmer i konstanten

skiftPlakatSideFrem.addEventListener('click', () => { // Når der klikkes på pilen frem...
    foerstePlakatSide.style.display = 'none'; // ... skjules den første side med plakater...
    andenPlakatSide.style.display = 'block'; // ... og den anden side med plakater vises
});

skiftPlakatsideTilbage.addEventListener('click', () => { // Når der klikkes på pilen tilbage...
    andenPlakatSide.style.display = 'none'; // ... skjules den anden side med plakater...
    foerstePlakatSide.style.display = 'block'; // ... og den første side med plakater vises
});