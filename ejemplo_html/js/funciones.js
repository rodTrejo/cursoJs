//funcion para genera bolita en relacion a la seleccionada
mostrar = function(){
    //variable dentro de la funcion (var)
    let bolita;
    bolita = document.getElementById("selectBolita").value;
    //Imprime el valor de bolita en la consola
    console.log(bolita);
    //si la bolita es roja? operador de comparacion (===)
    if(bolita == "roja"){
        agregaImagen(BOLITA_ROJA, "display");
    
    //si no cumple condicion anterior y la bolita es amarilla
    }else if(bolita === "amarilla"){
        agregaImagen(BOLITA_AMARILLA, "display");
    
    //sino es ninguna de las anteriores
    }else{
        console.log("sin bolita");
    }

}

//funcion para agregar imagen
agregaImagen = function(imagen, seccion){
    const div =document.getElementById(seccion);
    const img =document.createElement("img");
    img.src = imagen;
    img.width = 40;
    img.height = 40;
    div.appendChild(img);
}

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function obtieneNumeroAleatorio(min, max) {
    let random = Math.random();
    let operacion = random * (max - min) + min;
    console.log("max ", max, " min ", min);
    console.log("random ", random, " operacion ", operacion);
    //Devuelve el máximo entero menor o igual a un número.
    return Math.floor(operacion);
}