function identificarPuntuacion() {
    let resultado = ""
    let puntuacion = prompt("Ingresar puntuación obtenida: ")

    if(puntuacion >= 90) {
        resultado = `¡EXCELENTE! Tu puntuación: ${puntuacion}`
    } else if(puntuacion <= 89 && puntuacion >= 70) {
        resultado = `Buen trabajo! Tu puntuación: ${puntuacion}`
    } else if(puntuacion < 70) {
        resultado = `Necesitas mejorar. Tu puntuación: ${puntuacion}`
    }
    document.getElementById('lista').innerHTML = resultado;
}