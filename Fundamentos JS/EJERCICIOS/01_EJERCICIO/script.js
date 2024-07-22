function mayorMenor() {
    let resultado = "";
    
    let num1 = prompt("Por favor ingrese un numero: ");
    let num2 = prompt("Por favor ingrese otro numero: ");

    if (num1 > num2) {
        resultado = `el numero mayor es: <h2>${num1}</h2>`
    }
    
    else if (num2 > num1){
        resultado = `el numero mayor es: <h2>${num2}</h2>`
    }
    else if (num1 == num2){
        resultado = `los numeros son iguales`
    }
document.getElementById('lista').innerHTML = resultado;
}