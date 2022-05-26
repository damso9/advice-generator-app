const adviceID = document.querySelector("#advice-id");
const adviceQuote = document.querySelector("#advice-quote");

const dice = document.querySelector(".dice-container");

// dice.addEventListener("click", () => {
//   console.log("heyy");
// });
const printAdvice = (data) => {
    console.log(data)
    console.log(data.slip)
    console.log(data.slip.id)
    console.log(data.slip.advice)


    
}

let getAdvice = async() => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice')
        if(response.ok) {
            console.log(response)
            const jsonResponse = await response.json()
            adviceQuote.textContent = `"${jsonResponse.slip.advice}"`
            adviceID.textContent = `#${jsonResponse.slip.id}`
            printAdvice(jsonResponse)

        }
    } catch(error) {
        console.log(error)
    }
}

dice.onclick = getAdvice