let harValgt = false

const vinnerDoer = Math.floor(Math.random() * 3) + 1
console.log("Vinnerdøren er nr", vinnerDoer)

// Hent opp dør nr "vinnerDoer" og bytt geit-bilde til ferrari
const vinnerBilde = document.querySelector("#door" + vinnerDoer + " > .goat ")
console.log(vinnerBilde)
vinnerBilde.src = "media/ferrari.png"

const dorer = document.querySelectorAll(".doors > div")
console.log(dorer)

dorer.forEach(dorDiv => {
    dorDiv.addEventListener("click", klikkDor)
});

function klikkDor(event) {
    if (harValgt) {
        return
    }
    harValgt = true
    console.log(event.target)
    const dorImg = event.target
    dorImg.src = "media/semiclosed.png"

    const goatImg = dorImg.nextElementSibling
    console.log(goatImg.src)
    if (goatImg.src.includes("ferrari")) {
        console.log("DU VANT")
    }

    setTimeout(openDor, 600, dorImg)
}

function openDor(dorImg) {
    dorImg.src = "media/open.png"
}

function start(knappElm) {
    // Få tak i .doors elementet og sett left til 0
    const doors = document.querySelector(".doorContainer")
    doors.style.marginLeft = "0"
    doors.style.height = "auto"
    knappElm.style.display = "none"
}
