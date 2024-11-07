console.log("When when when")

function accesoConcedido() {
    let acceso = ""
    let nombreUsuario = prompt("Ingresar username: ")
    let password = prompt("Ingresar contraseña: ")

    if (nombreUsuario != "usuario123", password != "secreto") {
        acceso = `Acceso Denegado.`
    } else {
        acceso = `Acceso Concedido`
    }

    document.getElementById('lista').innerHTML = acceso;
}