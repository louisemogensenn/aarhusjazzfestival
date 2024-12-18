
// Venter på at hele dokumentet er indlæst før JavaScript eksekveres
document.addEventListener('DOMContentLoaded', () => {
    // Definerer FAQ data som et objekt med forskellige kategorier
    // Hver kategori indeholder arrays med spørgsmål og svar
    const faqData = {
        publikum: [
            // Spørgsmål og svar for publikum kategorien´
            ["Hvad er priserne?", "Billetpriser kan varierer fra spillested og kunstner. Kig indenunder den pågældene koncert omkring billetinfo."],
            ["Er der rabatter tilknyttet festivalen?", "Ja! Aarhus Jazz Festival har en aftale med Scandic Aarhus City, hvor det er muligt at bestille værelse med festivalrabat."],
            ["Hvordan bliver jeg frivillig?", "Du bedes sende en mail direkte til info@jazzfestival.dk. Skriv dit navn, generel kontakt information og hvorfor du gerne vil være frivillig."],
            ["Hvor kan jeg se fastivalens plakater?", "Du kan se festivalens plakater på siden der er linket til nedenunder."],
            ["Er der udendørs eller indendørs arrangementer?", "Det er forskelligt for hver koncert, det står enten under den pågældene koncert. Du kan også prøve at kontakte spillestedet direkte hvis du er i tvivl."],
            ["Hvor kan jeg se spillesteder?", "Spillestederne er spredt ud over hele Aarhus. Nedenunder kan de se et kort over alle spillester."],
            ["Hvor kan jeg finde praktisk information til folk med handikap?", "Der er flere parkeringsmuligheder tæt på festivalområdet. Vi tilbyder både handicapparkering og generel parkering."],
            ["Må man medbringe dyr?", "Dette kan du læse mere om på de individuelle spillesteders hjemmeside."],
            ["Hvad er parkeringsmulighederne?", "Du kan finde flere parkeringspladser ud fra hvor du skal høre en koncert. Vi har her en knap som kan henvise til et kort over parkingsmuligheder"],
        ],
        arrangør: [
            // Spørgsmål og svar for arrangør kategorien
            ["Hvad koster et medlemskab?", "B-medlemskab: 1.500 kr. + moms A-medlemskab: 2.700 kr. + moms"],
            ["Hvad får jeg med et B-medlemskab?", "Som B-medlem får du dine koncerter inkluderet i det trykte program, der udgives i maj, samt på festivalens hjemmeside. Dine koncerter vil også blive optaget i kalenderapps som Live Jazz Danmark og AarhusGuiden. Derudover bliver du en del af festivalens omfattende markedsføring og PR-arbejde, som inkluderer annoncering i medier, sociale medier og meget mere."],
            ["Hvad får jeg ekstra med et A-medlemskab?", "A-medlemskabet inkluderer alle fordelene fra B-medlemskabet, men giver også mulighed for at søge om underskudsgaranti eller tilskud til koncerter. Dette gælder primært for koncerter med entré, hvor musikerne får minimum den tarif, der er fastsat af Dansk Musikerforbund."],
            ["Hvornår er centrale datoer?", "Den 25. januar afholdes info- og arrangørmødet. - Den 19. februar er deadline for ansøgning om underskudsgaranti. - Den 23. februar finder bestyrelsesmødet sted, hvor der uddeles garantier. - Den 18. marts er der generalforsamling. - Den 3. april er deadline for indsendelse af programmet. - aAarhus Jazz Festival finder sted fra den 13. til den 20. juli."],
            ["Hvordan søger jeg underskudsgaranti?", "Ansøgning om underskudsgaranti kan kun ske af A-medlemmer. Fristen for ansøgning er den 19. februar, og støtten gives primært til koncerter med entré, hvor musikerne skal have minimum den tarif, der er fastsat af Dansk Musikerforbund."],
            ["Hvordan bliver jeg medlem?", "Du kan blive medlem ved at kontakte jazzsekretariatet via e-mail på info@jazzfest.dk eller telefonisk på 19 19 19 19."],
        ],
        musiker: [
            // Spørgsmål og svar for musiker kategorien
            ["Hvordan kan jeg optræde på Aarhus Jazz Festival?", "For at optræde på festivalen skal du kontakte de enkelte arrangører direkte. Aarhus Jazz Festival er en paraplyorganisation med 40-45 arrangørmedlemmer, som booker deres egne koncerter."],
            ["Hvem skal jeg kontakte for at blive booket?", "Du skal kontakte de relevante arrangører direkte. Information om arrangører og spillesteder kan findes på festivalens i linket."],
            ["Booker festivalsekretariatet koncerter?", "Aarhus Jazz Festivals sekretariat booker kun enkelte koncerter og særlige projekter. De kan dog give generel vejledning om festivalen."],
            ["Hvornår skal jeg kontakte arrangørerne?", "Mange arrangører tager beslutninger om booking i slutningen af året inden næste festival og frem til starten af april. Nogle større venues booker dog længere tid i forvejen."],
            ["Hvad er deadline for at blive inkluderet i det trykte program?", "Deadline for det trykte program ligger typisk i starten af april."],
        ]
    };

    // Finder FAQ sektionen i HTML dokumentet
    const faqSektion = document.getElementById('faq-sektion');
    
    // Finder alle kategori-knapper
    const kategoriKnapper = document.querySelectorAll('.kategori-knap');

    // Funktion til at generere FAQ for en bestemt kategori
    function genererFAQ(kategori) {
        // Rydder den nuværende FAQ sektion
        faqSektion.innerHTML = '';

        // Gennemgår hvert spørgsmål i den valgte kategori
        faqData[kategori].forEach(([spoergsmaal, svar]) => {
            // Opretter containere og elementer for hvert spørgsmål
            const beholder = document.createElement('section');
            beholder.classList.add('praktisk-beholder');

            const artikel = document.createElement('article');
            artikel.classList.add('praktisk-ting-en');

            // Opretter spørgsmåls-elementet
            const spoergsmaalElement = document.createElement('h2');
            spoergsmaalElement.classList.add('praktisk-sporgsmål');
            spoergsmaalElement.textContent = spoergsmaal;

            // Opretter SVG-ikonet for '+' tegn
            const plusIcon = document.createElement('img');
            plusIcon.src = 'images/plus-ikon.svg'; // Angiv stien til dit plus SVG-ikon
            plusIcon.classList.add('icon');
            spoergsmaalElement.appendChild(plusIcon);

            // Opretter svars-elementet
            const svarElement = document.createElement('section');
            svarElement.classList.add('praktisk-svar');

            const svarTekst = document.createElement('p');
            svarTekst.textContent = svar;
            svarElement.appendChild(svarTekst);

            // Tilføjer klik-event til at vise/skjule svar
            spoergsmaalElement.addEventListener('click', () => {
                spoergsmaalElement.classList.toggle('active');
                svarElement.classList.toggle('show');

                // Skift mellem plus og minus ikoner
                if (spoergsmaalElement.classList.contains('active')) {
                    plusIcon.src = 'images/minus-ikon.svg'; // Angiv stien til dit minus SVG-ikon
                } else {
                    plusIcon.src = 'images/plus-ikon.svg'; // Angiv stien til dit plus SVG-ikon
                }
            });

          // Sammensætter elementerne
artikel.appendChild(spoergsmaalElement);
artikel.appendChild(svarElement);

// Tjek om spørgsmålet matcher bestemte kriterier
if (spoergsmaal === "Hvad er parkeringsmulighederne?") {
    // Opretter en ny knap
    const viderstilKnap = document.createElement('button');
    
    // Sætter knappens tekst
    viderstilKnap.textContent = 'Se kort over parkeringsmulighederne';
    
    // Tilføjer CSS-klasse til knappen
    viderstilKnap.classList.add('praktisk-action-knap');
    
    // Tilføjer klik-hændelse til knappen
    viderstilKnap.addEventListener('click', () => {
        // Åbner et nyt tomt vindue (eller specifik side)
        window.open('404.html', '_blank'); /* Vi har ikke lavet et parkeringskort */
    });
    
    // Tilføjer knappen til svar-elementet
    svarElement.appendChild(viderstilKnap);
}

/*Knap til spillesteder spørgsmål*/
if (spoergsmaal === "Hvor kan jeg se spillesteder?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Se kort over spillesteder';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('404.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}

/*Knap til plakater spørgsmål*/
if (spoergsmaal === "Hvor kan jeg se fastivalens plakater?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Se festivalens plakater';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('arkiv.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}

if (spoergsmaal === "Hvor kan jeg finde praktisk information til folk med handikap?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Se mere information';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('404.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}
if (spoergsmaal === "Er der rabatter tilknyttet festivalen?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Se mere information';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('404.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}
if (spoergsmaal === "Må man medbringe dyr?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Spillesteders';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('404.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}
if (spoergsmaal === "Hvem skal jeg kontakte for at blive booket?") {
    const viderstilKnap = document.createElement('button');
    viderstilKnap.textContent = 'Spillesteders - arrangører';
    viderstilKnap.classList.add('praktisk-action-knap');
    viderstilKnap.addEventListener('click', () => {
        window.open('404.html', '_blank');
    });
    svarElement.appendChild(viderstilKnap);
}
// Tilføjer artikel til beholder
beholder.appendChild(artikel);

// Tilføjer beholder til FAQ-sektion
faqSektion.appendChild(beholder);
        });
    }

    // Tilføjer klik-events til kategori-knapperne
    kategoriKnapper.forEach(knap => {
        knap.addEventListener('click', () => {
            // Fjerner 'aktiv' klassen fra alle knapper
            kategoriKnapper.forEach(k => k.classList.remove('aktiv'));
            
            // Tilføjer 'aktiv' klassen til den klikkede knap
            knap.classList.add('aktiv');
            
            // Genererer FAQ for den valgte kategori
            genererFAQ(knap.dataset.kategori);
        });
    });

    // Viser publikum FAQ'en som standard, når siden indlæses
    genererFAQ('publikum');
    
});
