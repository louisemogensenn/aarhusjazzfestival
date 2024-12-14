
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

    const programFoersteSide = document.getElementById('program-foerste-side');

    const programAndenSide = document.getElementById('program-anden-side');

    const pilFremIkon = document.querySelector('.pil-frem-ikon');

    const pilTilbageIkon = document.querySelector('.pil-tilbage-ikon');

    const datoVenstre = document.getElementById('datoVenstre');

    const datoMidt = document.getElementById('datoMidt');

    const datoHoejre = document.getElementById('datoHoejre');

    const datoerOgPile = document.getElementById('datoer-for-koncerterne');

    programAndenSide.style.display = 'none';

    const datoer = ["11. juli", "12. juli", "13. juli", "14. juli", "15. juli", "16. juli"]; /* Et array af datoer, der skal bruges til at indsætte over billeder */

    // Initialiser datoerne ved sidens indlæsning
    datoVenstre.innerHTML = datoer[0]; /* Sætter datoen til index-værdien */
    datoMidt.innerHTML = datoer[1]; /* Sætter datoen til index-værdien */
    datoHoejre.innerHTML = datoer[2]; /* Sætter datoen til index-værdien */

    pilFremIkon.addEventListener ('click', () => {
        programFoersteSide.style.display = 'none'; /* Programmets første side skjules... */
        programAndenSide.style.display = 'block'; /* ... og erstattes af programmets anden side */

        datoVenstre.innerHTML = datoer[3]; /* Sætter datoen til index-værdien */
        datoMidt.innerHTML = datoer[4]; /* Sætter datoen til index-værdien */
        datoHoejre.innerHTML = datoer[5]; /* Sætter datoen til index-værdien */
    });

    pilTilbageIkon.addEventListener ('click', () => {
        programFoersteSide.style.display = 'block'; /* Programmets første side vises */
        programAndenSide.style.display = 'none';  /* Programmets anden side skjules */

        datoVenstre.innerHTML = datoer[0]; /* Sætter datoen til index-værdien */
        datoMidt.innerHTML = datoer[1]; /* Sætter datoen til index-værdien */
        datoHoejre.innerHTML = datoer[2]; /* Sætter datoen til index-værdien */

    });

    const overskriftProgram = document.querySelector('.overskrift-program');

    const overskriftFiltrer = document.querySelector('.overskrift-filtrer');

    const filtrerEfterBehov = document.getElementById('filtrerEfterBehov');

    overskriftFiltrer.addEventListener('click', () => {
        programFoersteSide.style.display = 'none'; /*  Programsiden skjules */
        filtrerEfterBehov.style.display = 'block'; /* Indholdet for filtreringssiden vises */
        datoerOgPile.style.display = 'none'; /* Pilene og datoerne, der står på linje på programsiden skjules */
    });

    overskriftProgram.addEventListener('click', () => {
        programFoersteSide.style.display = 'block'; /* programmets første side vises, når der trykkes fra filtrer-siden ind på program-siden*/
        filtrerEfterBehov.style.display = 'none'; /* Filtrer-indholdet skjules */
        datoerOgPile.style.display = 'block'; /* Pilene og datoerne vises, når man trykker tilbage til program-siden fra filtrer-siden*/
        datoerOgPile.style.display = 'flex'; /* Sikrer, at datoerne vises på horisontal linje, når der skiftes fra filtrer-siden tilbage til program-siden*/
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

    prisKnap.addEventListener('click', () => {
        prisKnap.style.backgroundColor = 'var(--sekundaerKnapfarve)';
    });

    /*drop down*/

    const dropdownPris = document.getElementById('dropdownPris');

    const prisMuligheder = document.querySelectorAll('.dropdownPrisMulighed');
    
    // Viser/skjuler dropdownen, når knappen klikkes
    prisKnap.addEventListener('click', () => {
        dropdownPris.classList.toggle('skjulPris');
    });
    
    // Håndter klik på en dropdownPrisMulighed
    prisMuligheder.forEach(prisMuligheder => {
        prisMuligheder.addEventListener('click', (e) => {
            const valgtTekst = e.target.textContent;
            prisKnap.innerHTML = valgtTekst; // Opdaterer knappens tekstindhold
            dropdownPris.classList.add('skjulPris'); // Skjul dropdown
        });
    });

    const nulstilFiltrer = document.getElementById('nulstilFiltrer');

    nulstilFiltrer.addEventListener('click', () => {
        prisKnap.innerHTML = 'PRIS';
        prisKnap.style.backgroundColor = 'var(--knapfarve)';
    });

    /* HUSK AT FJERNE INDHOLDER, DER VISES, HVIS MAN KLIKKER NULSTIL */
    

    /*----------------------- SCRIPT FOR ...  ------------------------*/