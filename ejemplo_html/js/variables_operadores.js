
operadores = function(){
let numero = 4;
let Numero = 9;
let numero2= '9';

let resultado = numero+numero2;
//let resultado = numero+Numero;

    const div = document.getElementById('variables_operadores');
    const elm = document.createElement("strong");
    elm.innerHTML = resultado;
    div.appendChild(elm);
}