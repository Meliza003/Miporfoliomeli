let palabrasecreta = "APPLE"
let intentos  
let button =  document.getElementById("guess-button")

button.addEventListener("click",intentar)

function intentar() {
    console.log("haz hecho click")
    let input = document.getElementById("guess-input")
    let intento = input.value
    console.log(intento)
    }




