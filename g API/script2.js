const number = document.getElementById("number")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.addEventListener("click", () => {
    const tall = parseInt(number.value)
    if (tall >= 0) {
        fetchData(tall)
    } else {
        output.innerHTML = "Vennligst skriv inn et tall"
    }
})

function fetchData(tall) {
    fetch("http://numbersapi.com/" + tall + "?json")
        .then((response) => response.json())
        .then((data) => {
            output.innerHTML = data.text
        })
}
