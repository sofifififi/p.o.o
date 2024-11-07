console.log("XD")

function numerosCreciendo() {
    let contador = 0;
    let array = [];

    while (contador <= 100) {
        array.push(contador);
        contador += 5;
    }
    document.getElementById("lista").innerHTML = `<p>Del 5 al 100:</p><h2><br>${array}</h2>`
}