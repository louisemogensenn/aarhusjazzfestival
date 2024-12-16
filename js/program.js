
    /*----------------------- SCRIPT FOR PROGRAMSIDEN ------------------------*/
    const overskriftProgram = document.getElementById('overskrift-program'); // Henter elementet med id'et overskrift-program og gemmer i konstanten

    const overskriftFiltrer = document.getElementById('overskriftFiltrer'); // Henter elementet med id'et overskriftFiltrer og gemmer i konstanten

    const filtrerEfterBehov = document.getElementById('filtrerEfterBehov'); // Henter elementet med id'et filtrerEfterBehov og gemmer i konstanten

    const program = document.getElementById('program'); // Henter elementet med id'et program og gemmer i konstanten

    overskriftFiltrer.addEventListener('click', () => { // Når der klikkes på overskriftFiltrer...
        program.style.display = 'none'; // ... skjules program-sektionen...
        filtrerEfterBehov.style.display = 'block'; // ... og filtrer-sektionen vises
    });

    overskriftProgram.addEventListener('click', () => { // Når der klikkes på overskriftProgram...
        filtrerEfterBehov.style.display = 'none'; // ... skjules filtrer-sektionen...
        program.style.display = 'block'; // ... og program-sektionen vises
    });

    /*----------------------- SCRIPT FOR FILTRERSIDEN ------------------------*/
    const soegeikon = document.getElementById('soegeikon'); // Henter elementet med id'et soegeikon og gemmer i konstanten

    const popupSoegning = document.getElementById('popup-soegning'); // Henter elementet med id'et popup-soegning og gemmer i konstanten

    const lukSoegningPopup = document.getElementById('lukSoegningPopUp'); // Henter elementet med id'et lukSoegningPopUp og gemmer i konstanten

    const soegeFelt = document.getElementById('soegefelt'); // Henter elementet med id'et soegefelt og gemmer i konstanten

    const indholdPopupProgram = document.getElementById('indholdPopupProgram'); // Henter elementet med id'et indholdPopupProgram og gemmer i konstanten

    const prisKnap = document.getElementById('prisKnap'); // Henter elementet med id'et prisKnap og gemmer i konstanten

    const carloId = document.getElementById('carloId'); // Henter elementet med id'et carloId og gemmer i konstanten

    // Denne funktion åbnes pop-uppen, når man trukker på luppen.
    soegeikon.addEventListener('click', () => {
        popupSoegning.style.display = 'block'; // Når man klikker på søgeikonet vises popup-vinduet... 
        if(soegeFelt.value.trim() === '') { // og hvis det indtastede i søgefeltet (trimmet ned, så uden mellemrum) er tomt...
            indholdPopupProgram.innerHTML = "Angiv søgeord"; // ... vises denne besked (indsat i et p-tag med id'et indholdPopupProgram).
        } else if (soegeFelt.value.trim().toLowerCase() === 'carlo'){ // Hvis feltets indhold i små bogstaver er 'carlo' ...
            filtreredeKoncerter.innerHTML = carloId.outerHTML; // ... indsættes koncerten for Carlo...
            angivSoegekriterierTekst.style.display = 'none'; // .. og teksten med "Angiv dine søgekriterier" fjernes ...
            popupSoegning.style.display = 'none'; // ... og der vises ikke en popup
        } else { // Hvis det indtastede i feltet ikke matcher søgekriteriet 'carlo' og heller ikke er tomt...
            indholdPopupProgram.innerHTML = 'Din søgning "' + soegeFelt.value + '" gav ingen resultater'; //... vises popup-beskeden, hvori også det søgte søgeord vises ...
            soegeFelt.value = ''; // .. hvorefter søgefeltet tømmes.
        }        
    });

    // Lukker popup, når man trykker på luk-knappen
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

    /*----------------------- SCRIPT FOR DROP DOWN MED PRISER ------------------------*/

    const dropdownPris = document.getElementById('dropdownPris');

    const prisMuligheder = document.querySelectorAll('.dropdownPrisMulighed');

    const nulstilFiltrer = document.getElementById('nulstilFiltrer');

    const filtreredeKoncerter = document.getElementById('filtreredeKoncerter');

    const gratisKoncerter = document.querySelectorAll('.gratisKoncert');

    const filtreringsmuligheder = document.getElementById('filtreringsmuligheder');

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
                angivSoegekriterierTekst.style.display = 'none'; /* Teksten om at angive søgekriterier ønskes ikke vist, når der er angivet søgekriterier */
                filtreredeKoncerter.innerHTML = gratisKoncerter.outerHTML; /* */
                filtreredeKoncerter.style.justifyContent = 'center';
                filtreredeKoncerter.style.margin = '0 300px 200px';
                
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
        filtreredeKoncerter.innerHTML = '';
        angivSoegekriterierTekst.style.display = 'block';
    });