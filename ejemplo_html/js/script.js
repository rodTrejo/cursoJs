
main = function(){
    let agregaElementoHtml = function(seccion, elemento){
        const div = document.getElementById(seccion);
        div.innerHTML = elemento;
        console.log("agrega elemento");
    };
    
    agregaElementoHtml('inicio', '<strong>Hola Mundo</strong>');

};
