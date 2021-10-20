ciclos = function(){

    //(for) traduce para
    //para cada vuelta realiza una o mas acciones
    //    variable inicial ; condicion ; incremento en 1 (index=index+2)
    for (let index = 0; index < 10; index++ ) {

        console.log(" valor de index ", index);
        //el modulo de un par es igual a 0 cuando se divide entre 2
        if(index % 2 === 0){
            agregaImagen(BOLITA_ROJA, "displayCiclo");
        }else{
            agregaImagen(BOLITA_AMARILLA, "displayCiclo");
        }
        
    }

    for (let index = 0; index < 10; index++) {
        let aleatorio = obtieneNumeroAleatorio(1, 3);
        if (aleatorio === 1) {
            agregaImagen(BOLITA_ROJA, "displayCiclo2");
        }else{
            agregaImagen(BOLITA_AMARILLA, "displayCiclo2");
        }
        
    }

}