console.log("XD")

function identificarTemperatura() {
    let mensaje = ""
    let temperatura = prompt("Indique la temperatura actual: ")

    if (temperatura < 0) {
        mensaje = `Hace frio. Temperatura actual: <h2>${temperatura}°</h2>`
    } else if (temperatura >= 0, temperatura <= 25) {
        mensaje = `La temperatura esta agradable. Temperatura actual: <h2>${temperatura}°</h2>`
    } else if (temperatura > 25, temperatura <= 40) {
        mensaje = `Hace calor. Temperatura actual: <h2>${temperatura}°</h2>`
    } else if (temperatura > 40) {
        mensaje = `💀 Temperatura actual: <h2>${temperatura}°</h2>`
    } else {
        mensaje = `Error.`
    }
    document.getElementById('lista').innerHTML = mensaje;
}