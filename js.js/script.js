
/* ---------- SIKRER FUNKTIONALITETEN AF BURGERMENUEN -----------*/

document.addEventListener('DOMContentLoaded', () => { //Dette sikrer, at koden først kører, når hele HTML-dokumentet er indlæst

    //VARIABLER - "variable-deklarationer"
    const burgerMenu = document.querySelector('.burgermenu'); //Selve burger-menu knappen

    const mainNav = document.querySelector('.navigationsbar'); //Hovednavigationsmenuen 

    const burgerMenuIcon = document.querySelector('.burgermenu img'); //Burger-menu ikonet

    const mainNavLinks = document.querySelectorAll('.navigationsbar > li'); //Alle hovedpunkter


    // CLICK-EVENT - Lukker menuen når der klikkes udenfor. Den tjekker:
    document.addEventListener('click', (event) => {
        if (mainNav.classList.contains('show') && //Om menuen er åben (show klassen)
            !mainNav.contains(event.target) && // Om klikket var udenfor menuen
            !burgerMenu.contains(event.target)) 
            
            { //Fjerner derefter "show" og nulstiller undermenuerne
            mainNav.classList.remove('show'); 
            burgerMenuIcon.classList.remove('open');
            
            // Ryd undermenu-status
            const dropdowns = document.querySelectorAll('.drop-down');
            
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    });


    // CLICK EVENT - Styrer selve burgermenuen
    burgerMenu.addEventListener('click', (event) => {
        event.stopPropagation(); // Forhindrer at dokumentets click-event udføres
        mainNav.classList.toggle('show'); //Skifter menuens synlighed
        burgerMenuIcon.classList.toggle('open'); //Ændrer udseendet på burgermenu ikonet, til krydset

        // Toggle undermenuer
        mainNavLinks.forEach(link => {

            const dropdown = link.querySelector('.drop-down');

                if (dropdown) { //Ændrer undermenuerne 
                    dropdown.classList.toggle('show');
                }
        });
    });

    
    // CLICK-EVENT - hver hovednavigationslink, for at toggle undermenuer
    mainNavLinks.forEach(link => {
        
        link.addEventListener('click', (event) => { 
            
            const dropdown = link.querySelector('.drop-down');

                if (dropdown) {
                    dropdown.classList.toggle('show');
                    event.stopPropagation(); // Forhindrer at dokumentets click-event udløses
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
    

    /* SCRIPT TIL FILTRER-SIDEN UNDER PROGRASIDEN */
    const prisIndhold = document.getElementById('prisIndhold');

    const prisDropDownIndhold = document.getElementById('pris-dropdown-indhold');

    soegeikon.addEventListener('click', () => {
        popupSoegning.style.display = 'block';

    });

    prisIndhold.addEventListener('click', () => {
        prisDropDownIndhold.style.display = 'block';
    });
    


/* 

    const soegefelt = document.getElementById('soegefelt');
        soegefelt.addEventListener('input', () => {
        console.log(soegefelt.value); // Her kan du filtrere elementer baseret på input
    });

    const soegefelt2 = document.getElementById('soegefelt');
    soegefelt.addEventListener('input', () => {
        const filter = soegefelt.value.toLowerCase();
        const kunstnerNavne = document.querySelectorAll('.kunstner-navn');
    
        kunstnerNavne.forEach(kunstner => {
            if (kunstner.textContent.toLowerCase().includes(filter)) {
                kunstner.parentElement.style.display = 'block';
            } else {
                kunstner.parentElement.style.display = 'none';
            }
        });
        
    });

    */

    /*----------------------- SCRIPT FOR ...  ------------------------*/