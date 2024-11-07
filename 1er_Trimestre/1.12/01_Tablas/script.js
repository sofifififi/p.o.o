console.log("XD")

function traerTablas() {
    let num = parseInt(document.getElementById("inputText").value);
    let resultado = `La tabla de ${num} es: <br>`
    for(let i = 1; i <= 10; i++) {
        resultado += `<li> ${i} X ${num} = ${i*num} </li>`
    }
    document.getElementById("lista").innerHTML = resultado;
}

traerTablas();