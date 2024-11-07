console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
    let ahora = 2024;
    let fecha_nac = 2007;
    let resultado = ahora - fecha_nac;
    alert(`Mi edad actual es: ${resultado}`);
    // Tu código aquí
}


// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
    let var1 = 15;
    let var2 = var1;
    alert(`El valor de la segunda variable es: ${var2}`);
    // Tu código aquí
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1' y 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
    let num1 = 10;
    let num2 = 15;
    let num3 = 20;
    let suma = num1 + num2 + num3;
    let resta = num1 - num3;
    let multi = num2 * num3;
    let divi = num1 / 120;

    alert(`La suma es ${suma} \nLa resta es ${resta} \nLa multiplicación es ${multi} \nLa division es ${divi}`);
    // Tu código aquí
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'num_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje. (.length)
function manipularCadenas() {
    let direccion = "Juan Luis Sanfuentes";
    let num_casa = "8544";
    let mensaje = "Su direccion es: " + direccion + "\nNúmero de casa: " + num_casa;
    let longitud = mensaje.length;
    alert(`Mensaje: ${mensaje} \nLongitud: ${longitud} \nAntepenultimo Caracter: ${mensaje[mensaje.length - 3]}`);
    // Tu código aquí
}

function sumaIndices() {
    let arreglo = [2, 5, 3, 10, 4, 15, 13];
    let suma_indices = arreglo[0] + arreglo[5] + arreglo[6];
    alert(`Primer número del array: ${arreglo[0]} \nPenúltimo número del array: ${arreglo[5]} \nÚltimo número del array: ${arreglo[6]} \nLa suma de estos dos números es: ${suma_indices}`);
}