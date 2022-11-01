let template = `Hello World!!

Interesting`;

console.log(template);

//Interpolation

let myName = "Codigo Facilito";
let greeting = "Hello " + myName + " have a good day";
console.log(greeting);

//Interpolation with template string

let name1 = "Codigo Facilito";
let greeting1 = `Hello ${"Santiago" + "Montero"} have a good day`;
let greeting2 = `Hello ${name1} have a good day`;
console.log(greeting1);
console.log(greeting2);

//Also we can add functions

function sum() {
    return 5 + 2;
}
let templateSum = `The sum result is ${sum()}`;
console.log(templateSum);

//Tagged templates

function tagget(strings, values) {
    console.log(strings);
    console.log(values);
}

let myName1 = "Santiago"
tagget`Hello ${name1} have a good day, ${myName1}`;

