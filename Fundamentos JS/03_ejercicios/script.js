function modificarMensaje(){
//codigo
const mensajeInicial = ["Hola", "a", "todos","los","estudiantes","de","programacion","de","4to","C"];
//modificacion
mensajeInicial.pop(); //eliminamos "C"
mensajeInicial.shift(); //eliminamos "hola"
mensajeInicial.unshift("somos","nosotros"); //agregamos "somos" y "nosotros" 
mensajeInicial.push("los", "mejores", "del mundo"); //agregamos "los", "mejores", "del mundo"

const mensajeModificado = mensajeInicial

//mostramos alertas

const valoresEliminados = ("C", "hola");
const valoresAgregados = ("somos","nosotros", "los", "mejores", "del mundo");
alert("valores eliminados: " + valoresEliminados.join(", "));
alert("valores agregados: " + valoresAgregados.join(", "));

}