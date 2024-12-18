
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

    const dropdownPris = document.getElementById('dropdownPris'); // Henter elementet med id'et dropdownPris og gemmer i konstanten

    const prisMuligheder = document.querySelectorAll('.dropdownPrisMulighed'); // Henter alle elementer med klassen dropdownPrisMulighed og gemmer i konstanten. querySelectorAll returnerer en nodeList(https://www.w3schools.com/jsref/met_document_queryselectorall.asp) (en samling af HTML-elementer) og består derfor af flere noder.

    const nulstilFiltrer = document.getElementById('nulstilFiltrer'); // Henter elementet med id'et nulstilFiltrer og gemmer i konstanten

    const filtreredeKoncerter = document.getElementById('filtreredeKoncerter'); // Henter elementet med id'et filtreredeKoncerter og gemmer i konstanten

    const gratisKoncerter = document.querySelectorAll('.gratisKoncertFiltrer'); // Henter alle elementer med klassen gratisKoncertFiltrer og gemmer i konstanten

    const filtreringsmuligheder = document.getElementById('filtreringsmuligheder'); // Henter elementet med id'et filtreringsmuligheder og gemmer i konstanten

    prisKnap.addEventListener('click', () => { // Når filtreringsknappen om priser trykkes på...
        if(dropdownPris.style.display === 'block') { //... og hvis dropdownen med prisniveauer allerede vises...
            dropdownPris.style.display = 'none'; // fjernes dropdownen med prisniveauer...
        } else {
            dropdownPris.style.display = 'block'; // ... ellers vises dropdownen
        }
    });

    prisMuligheder.forEach(function (mulighed) { // prisMuligheder.forEach() itererer over alle prisMuligheder (gratis, under 100, over 100) - parameteren mulighed repræsenterer hver af disse prismuligheder
        mulighed.addEventListener('click', function () { //eventListeneren tilføjes til hver mulighedd

                // Tøm tidligere viste koncerter
                filtreredeKoncerter.innerHTML = ''; // De elementer, der måtte være placeret i sektionen filtreredeKoncerter i forvejen fjernes
                
            if (mulighed.innerHTML === 'GRATIS') { // hvis mulighed (repræsenterer prismuligheder) er gratis
                prisKnap.innerHTML = 'GRATIS'; // Opdateres knapteksten til gratis
                dropdownPris.style.display = 'none'; // dropdownen med prismuligheerne skjules
                nulstilFiltrer.style.display = 'block'; // nulstilknappen vises
                angivSoegekriterierTekst.style.display = 'none'; /* og teksten om at angive søgekriterier fjernes, når der nu er angivet søgekriterier */
    
                // Gå gennem alle gratis koncerter og vis dem
                gratisKoncerter.forEach(koncert => { // der itereres gennem alle gratisKoncerter og hver af disse er repræsenteret ved parameteren koncert
                    const koncertKopi = koncert.cloneNode(true); // der oprettes en kopi af elementet(noden) koncert - så den ikke "stjæles" fra en anden HTML-side (https://www.w3schools.com/jsref/met_node_clonenode.asp)
                    koncertKopi.style.display = 'block'; // kopien af koncerten vises i ...
                    filtreredeKoncerter.appendChild(koncertKopi); // ...  sektionen filtreredeKoncerter med appendChild (https://www.w3schools.com/jsref/met_node_appendchild.asp) appendchild fungerer kun med dom-noder og koncertkopien er en node, da den element er hentet med queryselectorAll
                });
            }
        });
    });

    nulstilFiltrer.addEventListener('click', () => { // klik på nulstilfiltre
        prisKnap.innerHTML = 'PRIS'; // og prisknappens indhold ændres
        prisKnap.style.backgroundColor = 'var(--knapfarve)'; //baggurndsfarven i knappen pris ændres
        nulstilFiltrer.style.display = 'none'; // nulstil filtre vises ikke længere, da der ikke er valgt nogen filtre
        prisKnap.style.border = 'none'; // der er ikke nogen kant på knappen, der førhen synliggjorde, at den var valgt
        filtreredeKoncerter.innerHTML = ''; // indholdet i sektionen filtreredeKoncerter fjernes
        angivSoegekriterierTekst.style.display = 'block'; // angiv søgekritereier vises igen
    });