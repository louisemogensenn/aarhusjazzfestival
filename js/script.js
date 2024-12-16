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

    // Vælger alle elementer med klassen "tilbage-pil"
    const gaaTilbagePil = document.getElementsByClassName("gaaTilbagePil");

    // Lægger en event listener på alle elementer med denne klasse
    for (let i = 0; i < gaaTilbagePil.length; i++) {
        gaaTilbagePil[i].addEventListener("click", () => {
            window.history.back();
        });
    }

});