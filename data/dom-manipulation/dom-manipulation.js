
//This is for get the element by ID
let div = document.getElementById("my-div");

//With this line I can add a class to an element without put in the html
div.classList.add("my-class");

//This is for get all the elements no matter the class 
let div2 = document.getElementsByClassName("my-div");

//Question
//How to add an ID in an element in the html using JS?

//This is for get all elementd with the same tag 
let elements = document.getElementsByTagName("div");

//Antes se utilizaba JQuery para obtener elemenetos. JQuere nos permitia seleccionar elementos basados en selectores de JQuery

//Just for one element the first that found
let my_new_class1 = document.querySelector(".my-new-class");

//All elements with this class
//Also I can search the elements tag like: div, span, p, etc...
let my_new_class2 = document.querySelectorAll(".my-new-class");

console.log(my_new_class2);

//Una practica que se realiza es crear nuestro propio mini JQuery 
//$ Significa la busqueda de JQuery 

function $(selector) {
    return document.querySelector(selector);
}

let class_extra = $(".my-new-class");
console.log(class_extra);

//DOM = Document Object Model   
//Arbol de nodos