// TODO: Bruk dad joke APIet fra https://icanhazdadjoke.com/api
const containerElm = document.querySelector(".container")

containerElm.addEventListener("click", () => {
    console.log("Trykket på container")

    fetch("https://icanhazdadjoke.com/",
        {
            headers: {
                Accept: "application/json",
            },
        }
    )
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((data) => {
            console.log(data)
            containerElm.innerHTML = data.joke
        })

})

