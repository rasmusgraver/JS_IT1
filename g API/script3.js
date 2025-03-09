const inputElm = document.getElementById("number")
const outputElm = document.getElementById("output")

async function klikkKnapp() {
    const tallet = inputElm.value
    if (tallet < 0) {
        outputElm.innerHTML = "Du må skrive et positivt tall"
        inputElm.value = ""
    } else {
        outputElm.innerHTML = "Henter info om tallet..."
        const response = await fetch(
            "http://numbersapi.com/" + tallet + "?json"
        )
        if (response.status == 200) {
            console.log(response)
            const funfactJSON = await response.json()
            if (funfactJSON.found == true) {
                outputElm.innerHTML = funfactJSON.text
            } else {
                outputElm.innerHTML = "Fant ingen fakta om det tallet"
            }
        } else {
            outputElm.innerHTML =
                "Requesten feilet med status " + response.status
        }
    }
}
