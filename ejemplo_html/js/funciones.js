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

borraDiv = function(seccion){
    const div =document.getElementById(seccion);
    div.innerHTML="";
}

muestraArreglo = function(seccion, arreglo){
    for (let index = 0; index < arreglo.length; index++) {
        
        if(arreglo[index] === "roja"){
            agregaImagen(BOLITA_ROJA, seccion);
        }else{
            agregaImagen(BOLITA_AMARILLA, seccion);
        }
        
    }
}

resultado = async() =>{
   
    let valor = document.getElementById("valor").value;
    console.log("resultado ", valor);
    //el valor que este 1 y 99
    if(valor < 1 || valor>99){

        //realiza una peticion
        const response = await fetch("http://127.0.0.1:3000/");
        //Maneja la respuesta
        const res = await response.text();
        console.log("respuesta ", res);

        alert(res);
        

        
    }else if(Math.floor(valor) != valor){
        alert("El numero no puede contener decimales");
    }else{
        // 86 -> [8, 6]
        // 86 -> 8/10 = 8 decenas , residuo unidades
        let decenas = Math.floor(valor/10);
        let unidades = valor - (decenas * 10);

        let arregloDecenas = [];
        let arregloUnidades = []; 
        let bolita = 'roja';

        console.log("Decenas ",decenas, " Unidades ", unidades);
        for (let index = 0; index < decenas; index++) {
            arregloDecenas.push("roja");
        }

        for (let index = 0; index < unidades; index++) {
            arregloUnidades.push("amarilla");
        }
        borraDiv("Decenas");
        borraDiv("Unidades");

        muestraArreglo("Decenas", arregloDecenas);

        muestraArreglo("Unidades", arregloUnidades);

      
    }

    
}

//Generar numero decenas aleatorio 0-9
//Generar numero unidades aleatorio 0-9
// Validar que el numero de entrada sea el mismo que las bolitas
//Al dar click en un boton
let decenasGlobal;
let unidadesGlobal;

generaBolitasAleatorias = function(){

    decenasGlobal = obtieneNumeroAleatorio(0,9);
    unidadesGlobal = obtieneNumeroAleatorio(0,9);
    let arrDecenas = [];
    let arrUnidades = [];
    for (let index = 0; index < decenasGlobal; index++) {
        arrDecenas.push('roja');
        
    }

    for (let index = 0; index < unidadesGlobal; index++) {
        arrUnidades.push('amarilla');
        
    }

    borraDiv("Decenas2");
    borraDiv("Unidades2");
    muestraArreglo("Decenas2", arrDecenas);

    muestraArreglo("Unidades2", arrUnidades);

}

validarAleatorio = function(){
    let valor = document.getElementById("valor2").value;
    let decenas = Math.floor(valor/10);
    let unidades = valor - (decenas * 10);
    console.log("valor ",valor, " decenas ", decenas, " unidades ", unidades);
    console.log(" gUnidades ", unidadesGlobal, " gDecenas ", decenasGlobal);
    //comparador and (y) or 
    //En el and se deben cumplir todas las condiciones para
    //que sea verdad
    if(unidadesGlobal === unidades && decenasGlobal === decenas){
        alert("resultado correcto");
    
    //En el or si una condicion es correcta la expresion es verdadera
    }else if(unidadesGlobal === unidades || decenasGlobal === decenas){
        if(unidadesGlobal !== unidades){
            alert("Las unidades estan incorrectas");
        }else{
            alert("Las decenas estan incorrectas");
        }
        //alert("resultado parcialmente correcto");
    }else{
        alert("Resultado incorrecto, revisalo nuevamente");
    }


}
