console.log("XD")

function sumaNumeros() {
    let suma = 0;
    let contador = 1;
    let sumaTexto = "";

    while (contador <= 10) {
        suma += contador;
        if (contador < 10) {
            sumaTexto += contador + "+";
        } else {
            sumaTexto += contador;
        }
        contador++;
    }

    document.getElementById("lista").innerHTML = `Números del 1 al 10: <br><h2>${sumaTexto}</h2><br>Resultado de la suma: <h2>${suma}</h2>`;
}