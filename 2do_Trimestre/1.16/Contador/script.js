let contador = 0;

function incrementarContador(button) {
    let contador = parseInt(button.getAttribute('data-contador') || '0');
    contador++;
    button.setAttribute('data-contador', contador);
    button.textContent = `Clickeame: ${contador}`;
}