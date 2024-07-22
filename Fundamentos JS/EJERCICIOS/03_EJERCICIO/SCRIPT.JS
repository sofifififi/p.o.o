function nombreUsuario() {
    let nombreUsuario = prompt("Ingresa tu nombre de usuario: ");
    let clave = prompt("Ingresa tu clave: ");
    const usuario = "usuario123";
    const contraseña = "secreto";
    if (nombreUsuario == usuario){
        if (clave == contraseña){
            resultado = "acceso concedido";
        }
        else{
            resultado = "acceso denegado";
        }
    }
    else{
        resultado = "acceso denegado";
    }
    document.getElementById("lista").innerHTML = resultado;
    }