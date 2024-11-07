// Ejercicios Creación de variables

//Variable global
var global = "Var_Global";

//Variable local
let local = "Var_Local";

//Constante
const constante = "Constante";

//Variables
let numeroEntero = 1; //Num_Entero
let numeroDecimal = 2.5; //Num_Decimal
let cadenaTexto = "String/Texto"; //String
let arreglo = [["Array", 1], ["Array", 2]]; //Array
let booleanTrue = true; //Boleano verdadero
let booleanFalse = false; //Boleano falso

let objeto = {
    Nombre:"Matías",
    Edad:17,
}; //Var objeto

let indefinida; //Var indefinida
let nulo = null; //NULL

function sumar(num1, num2){
    return num1 + num2;
} //Funcion

function sumar2(){
    return 5 + 5;
} //Funcion sin parametros

console.log(
    "Variables:\nEntero: " + numeroEntero + "\nDecimal: " + numeroDecimal + 
    "\nString: " + cadenaTexto + "\nArray: " + arreglo + "\nBoleano V/F: " + 
    booleanTrue + " - " + booleanFalse + "\nObjeto: " + JSON.stringify(objeto) + "\nIndefinida: " +
    indefinida + "\nNulo: " + nulo + "\nFuncion: " + sumar(10,5) + "\nFuncion sin parametros: " +
    sumar2()
);