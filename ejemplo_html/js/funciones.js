//funcion para genera bolita en relacion a la seleccionada
mostrar = function(){
    //variable dentro de la funcion (var)
    let bolita;
    bolita = document.getElementById("selectBolita").value;
    //Imprime el valor de bolita en la consola
    console.log(bolita);
    //si la bolita es roja? operador de comparacion (===)
    if(bolita == "roja"){
        agregaImagen(BOLITA_ROJA);
    
    //si no cumple condicion anterior y la bolita es amarilla
    }else if(bolita === "amarilla"){
        agregaImagen(BOLITA_AMARILLA);
    
    //sino es ninguna de las anteriores
    }else{
        console.log("sin bolita");
    }

}

//funcion para agregar imagen
agregaImagen = function(imagen){
    const div =document.getElementById("display");
    const img =document.createElement("img");
    img.src = imagen;
    img.width = 40;
    img.height = 40;
    div.appendChild(img);
}