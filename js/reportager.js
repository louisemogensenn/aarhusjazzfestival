
const fraFestivalen = document.getElementById('fraFestivalen');

const fraArkivet = document.getElementById('fraArkivet');

const overskriftFestivalen = document.getElementById('overskriftFestivalen');

const overskriftArkivet = document.getElementById('overskriftArkivet');

overskriftArkivet.addEventListener('click', () => {
    fraFestivalen.style.display = 'none';
    fraArkivet.style.display = 'block';
});

overskriftFestivalen.addEventListener('click', () => {
    fraArkivet.style.display = 'none';
    fraFestivalen.style.display = 'block';
});

/*----------------------- SCRIPT FOR REPORTAGESIDEN - FRA ARKIV  ------------------------*/
const skiftPlakatSideFrem = document.getElementById('skiftPlakatsideFrem');

const skiftPlakatsideTilbage = document.getElementById('skiftPlakatsideTilbage');

const foerstePlakatSide = document.getElementById('foerstePlakatSide');

const andenPlakatSide = document.getElementById('andenPlakatSide');

skiftPlakatSideFrem.addEventListener('click', () => {
    foerstePlakatSide.style.display = 'none';
    andenPlakatSide.style.display = 'block';
});

skiftPlakatsideTilbage.addEventListener('click', () => {
    andenPlakatSide.style.display = 'none';
    foerstePlakatSide.style.display = 'block';
});