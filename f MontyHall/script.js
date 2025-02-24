
const doorDivs = document.querySelectorAll(".doors > div")
console.log(doorDivs)

doorDivs.forEach(door => {
    door.addEventListener("click", velgDoer)
});

function velgDoer(event) {
    // MERK: Det er ikke sikkert at target er div'en 
    // - det kan også være img elementet
    // Vi bruker "closest" for å finne div-elementet vårt
    const doerDiv = event.target.closest("div")
    console.log(doerDiv)
    // Vi har satt atributtet "data-nr" på doerDivene
    // Vi henter opp dette tallet på denne måten
    // (Vi bruker parseInt for å konvertere fra streng til tall (integer - heltall))
    const doerNr = parseInt(doerDiv.dataset.nr)
    console.log("Du klikket på dør nr ", doerNr)

    // Åpne døra:
    const doerBilde = doerDiv.querySelector(".doer")
    doerBilde.src = "media/open.png"

}

