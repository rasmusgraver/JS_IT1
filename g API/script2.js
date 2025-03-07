const number = document.getElementById("number")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

btn.addEventListener("click", () => {
    const tall = parseInt(number.value)
    if (tall >= 0) {
        fetch("http://numbersapi.com/" + tall + "/trivia?json")
            .then((res) => res.json())
            .then((data) => {
                output.innerHTML = data.text
            })
    } else {
        output.innerHTML = "Please enter a number"
    }
})
