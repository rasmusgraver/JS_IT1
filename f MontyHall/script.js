
const dorer = document.querySelectorAll(".doors > div")
console.log(dorer)

dorer.forEach(dorDiv => {
    dorDiv.addEventListener("click", klikkDor)
});

function klikkDor(event) {
    console.log(event.target)
    const dorImg = event.target
    dorImg.src = "media/semiclosed.png"
    setTimeout(openDor, 600, dorImg)
}

function openDor(dorImg) {
    dorImg.src = "media/open.png"
}
