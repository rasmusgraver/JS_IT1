const inputElm = document.getElementById("number")
const output = document.getElementById("output")

async function klikkKnapp() {
    const tallet = inputElm.value

    const response = await fetch(
        //  "http://numbersapi.com/" + tall + "/trivia?json"
        "https://icanhazdadjoke.com/",
        {
            headers: {
                Accept: "application/json",
            },
        }
    )
    const data = await response.json()
    console.log(data)
    output.innerHTML = data.joke
}
