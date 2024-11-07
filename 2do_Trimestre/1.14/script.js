function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
    if (elemento.textContent == 'Activado!') {
        elemento.style.backgroundColor = 'red';
        elemento.textContent = 'Desactivado';
    } else {
        elemento.style.backgroundColor = 'green';
        elemento.textContent = 'Activado!';
    }
}

function imagen(elemento) {
    console.log("elemnto removido", elemento);
    elemento.remove();
}