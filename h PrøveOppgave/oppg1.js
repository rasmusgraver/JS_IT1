const knapp = document.getElementById("knapp")

knapp.addEventListener("click", () => {
    // Kunne gjerne også brukt css classList metoden her
    if (knapp.style.backgroundColor == "red") {
        knapp.style.backgroundColor = "blue"
    } else {
        knapp.style.backgroundColor = "red"
    }
})

const boks3 = document.getElementById("boks3")

/*
 Jeg gjorde kanskje litt unødvendig fancy her med å opprette
 p elementer for hvert tall
 Kunne også bare "bygget opp en tekst-streng", ved å
 dytte inn ett og ett tall på slutten av strengen, og så
 putte denne strengen inn i boks3
*/
for (let i = 1; i < 100; i++) {
    const pElm = document.createElement("p")
    pElm.innerHTML = i
    boks3.appendChild(pElm)
}
