let harValgt = false

const vinnerTall = Math.floor(Math.random() * 3) + 1
console.log("Vinnertaller er ", vinnerTall)

// Hent opp dør nr "vinnerDoer" og bytt geit-bilde til ferrari
const vinnerBilde = document.querySelector("#door" + vinnerTall + " > .goat ")
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
        document.body.style.backgroundColor = "palegreen"
        goatImg.style.width = "300%"
        goatImg.style.zIndex = "3"
        goatImg.style.left = "-" + 40 * vinnerTall + "%" // Måtte "hacke" til litt her - for at bilden skulle flyte ut på rett sted.
        goatImg.style.top = "0"
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
