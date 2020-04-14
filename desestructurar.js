const persona = {
    nombre: "Brandon",
    edad: 25
}
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}
//Funciones anonimas que no tiene nombre y se guarda en una variable que si tiene nombre
const esMayor = function (persona){ 
    return persona.edad >= MAYORIA_DE_EDAD
}
//Para arrow functions se ahorra la palabra function. Si recibe un solo parámetro, se pueden eliminar los parentesis. Si la funcion solo se encarga de retornar algo, se puede igual quitar return y las llaves.
//Se puede aplicar desestructuracion de objetos, pidiendo solo el nombre del atributo que se va a leer del objeto enviado. 
//Al llamarse, se envia
var resultadoEsMayor = esMayor(persona);
const esMayorArrow = ({edad}) =>  edad >= MAYORIA_DE_EDAD