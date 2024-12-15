/* ---------- FUNKTIONALITETEN AF BURGERMENUEN -----------*/

// Venter på at hele HTML-dokumentet er indlæst før koden køres
document.addEventListener('DOMContentLoaded', () => {
    
    // VARIABLER
    const burgerMenu = document.querySelector('.burgermenu'); //henter indhold i klasssen "burgermenu"
    const altNavIndhold = document.querySelector('.navigationsbar');//henter indhold i klaseen "navigationsbar"
    const burgerMenuIkon = document.querySelector('.burgermenu img');//henter burger-menu billedet (ikonet)
    const altNavIndholdLinks = document.querySelectorAll('.navigationsbar > li');//henter alle hovedmenupunkter i navigationsbaren


    // CLICK-EVENT - burger-menu ikonet
    burgerMenu.addEventListener('click', () => {
        
        altNavIndhold.classList.toggle('show');//skifter mellem at vise/skjule hovedmenuen
        
        burgerMenuIkon.classList.toggle('open');//skifter mellem burger-ikon og luk-ikon
        
        
        altNavIndholdLinks.forEach(link => { //håndterer visning af alle undermenuer
            const dropdown = link.querySelector('.drop-down'); //finder undermenu hvis den eksisterer
            
            if (dropdown) { //"if" der findes en undermenu
                dropdown.classList.toggle('show'); //... så skiftes der mellem at vise/skjule undermenuen
            }
        });
    });

    //CLICK-EVENT - alle hovedmenupunkter
    altNavIndholdLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            
            const dropdown = link.querySelector('.drop-down');// Finder undermenu hvis den eksisterer
            
            if (dropdown) { //"if" der findes en undermenu
                
                dropdown.classList.toggle('show'); //... så skiftes der mellem at vise/skjule denne specifikke undermenu
            }
        });
    });
});

    /*----------------------- SCRIPT FOR PROGRAMSIDEN ------------------------*/

    const overskriftProgram = document.getElementById('overskrift-program');

    const overskriftFiltrer = document.getElementById('overskrift-filtrer');

    const filtrerEfterBehov = document.getElementById('filtrerEfterBehov');

    const program = document.getElementById('program');

    overskriftFiltrer.addEventListener('click', () => {
        program.style.display = 'none';
        filtrerEfterBehov.style.display = 'block';
    });

    overskriftProgram.addEventListener('click', () => {
        filtrerEfterBehov.style.display = 'none';
        program.style.display = 'block';
    });

    /*----------------------- SCRIPT FOR FILTRERSIDEN ------------------------*/

    const soegeikon = document.getElementById('soegeikon');

    const popupSoegning = document.getElementById('popup-soegning');

    const lukSoegningPopup = document.getElementById('lukSoegningPopUp');

    const soegeFelt = document.getElementById('soegefelt');

    const indholdPopupProgram = document.getElementById('indholdPopupProgram');

    const prisKnap = document.getElementById('prisKnap');

    // Denne funktion åbnes pop-uppen, når man trukker på luppen.
    soegeikon.addEventListener('click', () => {
        popupSoegning.style.display = 'block'; /* Når man klikker på søgeikonet vises popup-vinduet */
        if(soegefelt.value.trim() === '') {
            indholdPopupProgram.innerHTML = "Angiv søgeord"; /* Hvis søgefeltet er tomt vil denne besked angives */
        } else {
            indholdPopupProgram.innerHTML = 'Din søgning "' + soegeFelt.value + '" gav ingen resultater'; /* Hvis søgeordet ikke matcher nogen resultater, vil denne besked komme. Der er ikke lavet funktionalitet til at søge websitets indhold igennem. */
            soegeFelt.value = ''; /* Inholdet i søgefeltet fjernes */
        }        
    });

    // Luk popup, når man trykker på luk-knappen
    lukSoegningPopup.addEventListener('click', () => {
        popupSoegning.style.display = 'none';
    });

    /* Nedstående funktion ændrer knappens farve ved at tjekke, hvilken farve den har først */
    prisKnap.addEventListener('click', () => {
        if (prisKnap.style.backgroundColor === 'var(--sekundaerKnapfarve)') {
            prisKnap.style.backgroundColor = 'var(--knapfarve)'
            prisKnap.style.border = 'none';

        } else {
            prisKnap.style.backgroundColor = 'var(--sekundaerKnapfarve)'
            prisKnap.style.border = '1px solid var(--sekundaerFarve)';
        }
        
    });

    /*drop down af priser */

    const dropdownPris = document.getElementById('dropdownPris');

    const prisMuligheder = document.querySelectorAll('.dropdownPrisMulighed');

    const nulstilFiltrer = document.getElementById('nulstilFiltrer');

    const filtreredeKoncerter = document.getElementById('filtreredeKoncerter');

    const gratisKoncerter = document.querySelectorAll('.gratisKoncert');

    prisKnap.addEventListener('click', () => {
        if(dropdownPris.style.display === 'block') {
            dropdownPris.style.display = 'none';
        } else {
            dropdownPris.style.display = 'block';
        }
        
    });

    prisMuligheder.forEach(function (mulighed) {
        mulighed.addEventListener('click', function () {
            if (mulighed.innerHTML === 'GRATIS') {
                prisKnap.innerHTML = 'GRATIS'; // Opdater knapteksten
                dropdownPris.style.display = 'none'; // Skjul dropdownen
                nulstilFiltrer.style.display = 'block'; // Vis "nulstil"-knappen
                
                // Tøm tidligere viste koncerter
                filtreredeKoncerter.innerHTML = '';
    
                // Gå gennem alle gratis koncerter og vis dem
                for (let i = 0; i < gratisKoncerter.length; i++) {
                    filtreredeKoncerter.innerHTML += gratisKoncerter[i].outerHTML;
                }
            }
        });
    });

    nulstilFiltrer.addEventListener('click', () => {
        prisKnap.innerHTML = 'PRIS';
        prisKnap.style.backgroundColor = 'var(--knapfarve)';
        nulstilFiltrer.style.display = 'none';
        prisKnap.style.border = 'none';
    });

    /* HUSK AT FJERNE INDHOLDET, DER VISES, HVIS MAN KLIKKER NULSTIL */
    

    /*----------------------- SCRIPT FOR OM KUNSTNER  ------------------------*/
    const reserverBilletKnap = document.getElementById('reserverBilletKnap');

    const popupReserverBillet = document.getElementById('popup-reserverBillet');

    reserverBilletKnap.addEventListener('click', () => {
        popupReserverBillet.style.display = 'block';
        setTimeout(() => { window.location.href = '404.html'; }, 2000);
    });

    /*----------------------- SCRIPT FOR REPORTAGESIDEN - FRA FESTIVAL  ------------------------*/


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

