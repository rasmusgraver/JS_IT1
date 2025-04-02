const boks1 = document.querySelector(".container > div:nth-child(1)")
const boks2 = document.querySelector(".container > div:nth-child(2)")
const boks3 = document.querySelector(".container > div:nth-child(3)")
const boks4 = document.querySelector(".container > div:nth-child(4)")
const boks5 = document.querySelector(".container > div:nth-child(5)")

const container = document.querySelector(".container")

// Oppgave 1 b)
function styleBoks2() {
    boks2.classList.toggle("blaa")
}
boks1.addEventListener("click", styleBoks2)
boks3.addEventListener("click", styleBoks2)

// Oppgave 1 c)
let teller = 6

function lagBoks() {
    const boks = document.createElement("div")
    const h1Elm = document.createElement("h1")
    h1Elm.innerHTML = "Boks " + teller
    teller++
    boks.appendChild(h1Elm)
    container.appendChild(boks)
}
boks4.addEventListener("click", lagBoks)
boks5.addEventListener("click", lagBoks)
