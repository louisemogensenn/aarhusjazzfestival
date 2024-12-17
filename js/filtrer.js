
    const soegeikon = document.getElementById('soegeikon'); // Henter elementet med id'et soegeikon og gemmer i konstanten

    const popupSoegning = document.getElementById('popup-soegning'); // Henter elementet med id'et popup-soegning og gemmer i konstanten

    const lukSoegningPopup = document.getElementById('lukSoegningPopUp'); // Henter elementet med id'et lukSoegningPopUp og gemmer i konstanten

    const soegeFelt = document.getElementById('soegefelt'); // Henter elementet med id'et soegefelt og gemmer i konstanten

    const indholdPopupProgram = document.getElementById('indholdPopupProgram'); // Henter elementet med id'et indholdPopupProgram og gemmer i konstanten

    const prisKnap = document.getElementById('prisKnap'); // Henter elementet med id'et prisKnap og gemmer i konstanten

    const carloId = document.getElementById('carloId'); // Henter elementet med id'et carloId og gemmer i konstanten

    // Denne funktion åbnes pop-uppen, når man trukker på luppen.
    soegeikon.addEventListener('click', () => { // Når brugeren klikker direkte på søgeikonet (luppen)
        if(soegeFelt.value.trim() === '') { // ...og hvis det indtastede i søgefeltet (trimmet ned, så uden mellemrum) er tomt...
            popupSoegning.style.display = 'block'; // ... vises popup-vinduet... 
            indholdPopupProgram.innerHTML = "Angiv søgeord"; // ... og i popup-vinduet vises denne besked (indsat i et p-tag med id'et indholdPopupProgram).
        } else if (soegeFelt.value.trim().toLowerCase() === 'carlo'){ // Hvis feltets indhold i små bogstaver er 'carlo' ...

            filtreredeKoncerter.innerHTML = ''; // Fjerner tidligere filtrerede koncerter 

            filtreredeKoncerter.appendChild(carloId); // ... indsættes koncerten for Carlo...
            carloId.style.display = 'block';
            carloId.style.margin = '20px 0 0 277px';
            nulstilFiltrer.style.display = 'block';
            angivSoegekriterierTekst.style.display = 'none'; // .. og teksten med "Angiv dine søgekriterier" fjernes ...
        } else { // Hvis det indtastede i feltet ikke matcher søgekriteriet 'carlo' og heller ikke er tomt...
            popupSoegning.style.display = 'block'; // ... vises popup-vinduet... 
            indholdPopupProgram.innerHTML = 'Din søgning "' + soegeFelt.value + '" gav ingen resultater'; //... vises popup-beskeden, hvori også det søgte søgeord vises ...
            soegeFelt.value = ''; // .. hvorefter søgefeltet tømmes.
        }        
    });

    // Lukker popup, når man trykker på luk-knappen
    lukSoegningPopup.addEventListener('click', () => { // Når brugeren klikker på kryds-ikonet i pop-uppen ...
        popupSoegning.style.display = 'none'; // ... skjules pop-uppen
    });

    /* Nedstående funktion ændrer knappens farve ved at tjekke, hvilken farve den har først */
    prisKnap.addEventListener('click', () => { // Når der klikkes på pris-knappen...
        if (prisKnap.style.backgroundColor === 'var(--sekundaerKnapfarve)') { // ... og hvis knappens baggrundsfarve er den sekundære farve... (knappens baggrunsfavre er sekundær, når der er valgt et filter, og primær, når der ikke er valgt et filter)
            prisKnap.style.backgroundColor = 'var(--knapfarve)' // ...ændres den til den primære knapfarve... (så der ikke længere)
            prisKnap.style.border = 'none'; // ...og kanten fjernes
        } else { // ...ellers
            prisKnap.style.backgroundColor = 'var(--sekundaerKnapfarve)'; // sættes baggrundsfarven til den sekundære knapfarve...
            prisKnap.style.border = '1px solid var(--sekundaerFarve)'; // ... og knappen for en kant for at tydeligøre, at den er valgt
        }
        
    });

    /*----------------------- SCRIPT FOR DROP DOWN MED PRISER ------------------------*/

    const dropdownPris = document.getElementById('dropdownPris');

    const prisMuligheder = document.querySelectorAll('.dropdownPrisMulighed');

    const nulstilFiltrer = document.getElementById('nulstilFiltrer');

    const filtreredeKoncerter = document.getElementById('filtreredeKoncerter');

    const gratisKoncerter = document.querySelectorAll('.gratisKoncertFiltrer');

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

                // Tøm tidligere viste koncerter
                filtreredeKoncerter.innerHTML = '';
                
            if (mulighed.innerHTML === 'GRATIS') {
                prisKnap.innerHTML = 'GRATIS'; // Opdater knapteksten
                dropdownPris.style.display = 'none'; // Skjul dropdownen
                nulstilFiltrer.style.display = 'block'; // Vis "nulstil"-knappen
                angivSoegekriterierTekst.style.display = 'none'; /* Teksten om at angive søgekriterier ønskes ikke vist, når der er angivet søgekriterier */
    
                // Gå gennem alle gratis koncerter og vis dem
                gratisKoncerter.forEach(koncert => {
                    // Clone the element to avoid moving the original from the DOM
                    const koncertKopi = koncert.cloneNode(true);
                    koncertKopi.style.display = 'block';
                    filtreredeKoncerter.appendChild(koncertKopi);
                });
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