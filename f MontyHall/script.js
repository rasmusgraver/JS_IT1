let harValgt = false

const dorer = document.querySelectorAll(".doors > div")
console.log(dorer)

const vinnerTall = Math.floor(Math.random() * 3) + 1
console.log(vinnerTall)

let dorTeller = 1
dorer.forEach(dorDiv => {
    dorDiv.addEventListener("click", klikkDor)
    // Sjekk om døren er nr "vinnerTall" og bytt bilde av geit til bil
    console.log("DørTeller:", dorTeller)
    if (dorTeller == vinnerTall) {
        const geitBilde = dorDiv.querySelector(".goat")
        geitBilde.src = "media/ferrari.png"
    }
    dorTeller++
});

function start(startButton) {
    console.log("START")
    const doors = document.querySelector(".doors")
    doors.style.marginLeft = "0"
    startButton.style.display = "none"
}

function klikkDor(event) {
    if (harValgt) {
        // Brukeren har allerede valgt en dør
        return
    }
    harValgt = true
    console.log(event.target)
    const dorImg = event.target
    dorImg.src = "media/semiclosed.png"
    setTimeout(openDor, 600, dorImg)
}

function openDor(dorImg) {
    dorImg.src = "media/open.png"
}
