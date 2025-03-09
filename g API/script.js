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

async function fetchData(tall) {
    const response = await fetch("http://numbersapi.com/" + tall + "?json")
    const data = await response.json()
    output.innerHTML = data.text
}
