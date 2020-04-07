var frutas = ["Manzana", "Fresa", "Cereza"];
function saludarFruta(fruta){
    console.log(`Hola ${fruta}`)
}

// for (var i = 0; i < frutas.length; i++) {
//     saludarFruta(frutas[i]);
// }
while (frutas.length > 0){
    var frutaDelFinal = frutas[frutas.length-1];
    saludarFruta(frutaDelFinal);
    frutas.pop();
}