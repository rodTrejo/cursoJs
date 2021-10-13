condiciones = function(){

    //Declaracion de constantes
    const BOLITA_ROJA = 'img/bolita_roja.png';
    const BOLITA_AMARILLA = 'img/bolita_amarilla.png';

    //funcion para genera bolita en relacion a la seleccionada
    mostrar = function(){
        let bolita = document.getElementById("selectBolita").value;
        console.log(bolita);
        //si la bolita es roja
        if(bolita === "roja"){
            agregaImagen(BOLITA_ROJA);
        
        //si la bolita es amarilla
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

}