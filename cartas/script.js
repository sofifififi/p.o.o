let count = 0;

// Función que actualiza el conteo de cartas basado en el valor de la carta
function contadorCartas(carta) {
    switch (carta) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            // Incrementa el conteo por 1 para cartas de valor 2 a 6
            count += 1;
            break;
        case '7':
        case '8':
        case '9':
            // No cambia el conteo para cartas de valor 7 a 9
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            // Decrementa el conteo por 1 para cartas de valor 10, J, Q, K, A
            count -= 1;
            break;
        default:
            // Muestra una alerta si el valor de la carta no es válido
            alert("Agrega un valor valido :(");
            break;
    }
}

// Función que se ejecuta cuando se hace clic en el botón "Contar Cartas"
function cc() {
    count = 0; // Reinicia el conteo
    // Obtiene y procesa la entrada del usuario
    const input = document.getElementById("cardInput").value.trim().toUpperCase();
    const cards = input.split(',').map(card => card.trim());
    
    // Actualiza el conteo de cartas para cada carta ingresada
    cards.forEach(card => {
        contadorCartas(card);
    });

    // Determina el resultado basado en el conteo
    let result;
    if (count > 0) {
        result = count + " Apostar";
    } else {
        result = count + " Mantener";
    }

    // Muestra el resultado en el HTML
    document.getElementById("resultado").innerHTML = "<h2>" + result + "</h2>";
}

// Variable count:
//Función contadorCartas(carta):
//Función cc():
//function cc() { ... }: Función principal que se ejecuta al hacer clic en el botón.
//const input = document.getElementById("cardInput").value.trim().toUpperCase();: Obtiene y procesa la entrada del usuario.
//const cards = input.split(',').map(card => card.trim());: Separa la entrada en cartas individuales y las procesa.
//cards.forEach(card => { contadorCartas(card); });: Llama a contadorCartas para cada carta ingresada.
//let result; if (count > 0) { result = count + " Apostar"; } else { result = count + " Mantener"; }: Determina el resultado basado en el conteo.
//document.getElementById("resultado").innerHTML = "<h2>" + result + "</h2>";: Muestra el resultado en el HTML.