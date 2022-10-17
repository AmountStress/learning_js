
//Los eventos nos sirven para enlazar codigo, funciones de JS a una accion que puede suceder dentro de la pagina
//Uzando atributos de html

function btnClick() {
    alert("Show Warning");
}

function btnClick2() {
    alert("Feeling the mouse");
}

function btnClick2() {
    alert("Bay bay mouse");
}

//La anterior forma es poco utilizada 
//La mejor manera es utilizando listeners
    
//El listener pide el TYPE la funcion que va realizar y el event bubbling 
let btn = document.getElementById("btnListener").addEventListener("click", btnClick, false);
 