arreglos = function(){
// Videojuegos X, Y, Z, t
// 
 /*   let miArreglo = [
        [
            [
                [],[]
            ],[],[]
        ],[],[]
    ];
*/
// Celdas Excel Columnas y Registros 2 dimensiones x (columnas), y (registro)
// Personas Nombre, primerApellido, segundoApellido
//          Juan,   Hernandez, Sanchez

    let ArregloBolitas = [];
    for (let index = 0; index < 10; index++) {
        let aleatorio = obtieneNumeroAleatorio(1, 3);
        if (aleatorio === 1) {
            ArregloBolitas.push("roja");
        }else{
            ArregloBolitas.push("amarilla");
        }
    }

    console.log("original ",ArregloBolitas);

    muestraArreglo("displayArreglo", ArregloBolitas);

    // ordenar primero las rojas y despues amarillas
    let temporalActual;
    let temporalSiguiente;
    let huboIntercambio = true;
    let cuentaPasadas = 0;
    while(huboIntercambio === true){
        huboIntercambio = false;

        for (let index = 0; index < ArregloBolitas.length-1; index++) {
            // compara la actual con la siguiente
            if(ArregloBolitas[index] === ArregloBolitas[index+1] ){
                //No pasa nada
            }else{
                //Si son diferentes lo intercambia 
                if(ArregloBolitas[index] === "roja"){
                    //se mantiene
                }else{
                    //si es amarilla inercambian posicion
                    //temporales
                    temporalActual = ArregloBolitas[index];
                    temporalSiguiente = ArregloBolitas[index+1];
                    //intercambio
                    ArregloBolitas[index] = temporalSiguiente;
                    ArregloBolitas[index+1] = temporalActual;
                    huboIntercambio = true;
                }
            }
            
        }
        console.log("pasada "+cuentaPasadas+" ", ArregloBolitas);
        cuentaPasadas++;
    }
    

    console.log("ordenado ",ArregloBolitas);
    muestraArreglo("displayArreglo2", ArregloBolitas);
}