
    /*----------------------- SCRIPT FOR PROGRAMSIDEN ------------------------*/

    const overskriftProgram = document.getElementById('overskrift-program');

    const overskriftFiltrer = document.getElementById('overskriftFiltrer');

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

    const carloId = document.getElementById('carloId');

    // Denne funktion åbnes pop-uppen, når man trukker på luppen.
    soegeikon.addEventListener('click', () => {
        popupSoegning.style.display = 'block'; /* Når man klikker på søgeikonet vises popup-vinduet */
        if(soegeFelt.value.trim() === '') {
            indholdPopupProgram.innerHTML = "Angiv søgeord"; /* Hvis søgefeltet er tomt vil denne besked angives */
        } else if (soegeFelt.value.trim() === 'Carlo' || soegeFelt.value.trim() === 'carlo') {
            filtreredeKoncerter.innerHTML = carloId.outerHTML; /* Her skal Carlos koncert sættes ind */
            angivSoegekriterierTekst.style.display = 'none';
            popupSoegning.style.display = 'none';
        }
        else {
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