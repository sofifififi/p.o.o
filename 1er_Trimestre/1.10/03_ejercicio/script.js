console.log("XD")

function numerosPares() {
    let contador = 0;
    let array = [];

    while (contador <= 20) {
        array.push(contador);
        contador += 2;
    }
    document.getElementById("lista").innerHTML = `<p>En par los primeros 10:</p><h2><br>${array}</h2>`
}