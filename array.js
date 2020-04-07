var frutas = ["Manzana", "Fresa", "Cereza"];

var ultimaFruta = frutas.push("Uvas");//Agregar al final
var primerFruta = frutas.unshift("Mango");//Agregar al inicio
var qUltimaFruta = frutas.pop("Uvas");//Quitar ultimo elemento
var qPrimerFruta = frutas.shift("Uvas");//Quitar primer elemento
var posicion = frutas.indexOf("Manzana");// Indice

var objetos = [
    {nombre = "Bici", costo: 3000},
    {nombre = "TV", costo: 15000},
    {nombre = "Libro", costo: 250},
    {nombre = "Audifonos", costo: 5000}
]
var objetosFiltrados = objetos.filter(function (objeto){
    return objeto.costo <= 1000;
});

var mapObjetos = objetos.map(function(objeto) {
    return objeto.nombre;
});

var encuentra = objetos.find(function(objeto){
    return objeto.nombre === "Bici";
});

objetos.forEach(function(objeto){
    console.log(objeto.nombre);
});

var baratos = objetos.some (function (objeto){
    return objeto.costo <= 700;
});