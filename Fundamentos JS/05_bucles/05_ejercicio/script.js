function primerosPares(){
    let n = parseInt(prompt("ingrese la cantidad de numeros pares que dwesea encontrar: "));
    let pares = [];

    for (let i = 1; i <= N; i++){
        pares.push(i*2);

    }
    document.getElementById("lista").innerHTML = `los primeros ${N} numeroas pares son: <br> ${arrayPares}`;
}