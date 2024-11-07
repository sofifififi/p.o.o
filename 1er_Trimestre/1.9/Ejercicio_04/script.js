function identificarNumero() {
    let resultado = ""
    let numero = prompt("Ingresar un numero: ")
    
    if(numero < 0) {
        resultado = `El número ingresado es negativo. ${numero}`
    } else if(numero > 0) {
        resultado = `El número ingresado es positivo. ${numero}`
    } else if(numero == 0) {
        resultado = `El número ingresado es 0`
    }
    
    document.getElementById('lista').innerHTML = resultado;
}