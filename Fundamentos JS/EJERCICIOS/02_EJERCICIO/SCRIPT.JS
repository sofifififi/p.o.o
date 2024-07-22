function calcularTemperatura(){
    let temp = parseInt(prompt("Por favor ingrese la temperatura: "));
    let resultado="";

    if(temp < 0){
        resultado = `Hace Frio`
    }
    else if(temp > 0 && temp <= 25 ){
        resultado = `la temperatura es agradable`
    }
    else if(temp > 25){
        resultado = `Hace calor`
    }
    else{
        resultado = `Ingrese un valor valido`
    }
    document.getElementById(`lista`).innerHTML = resultado;
}
