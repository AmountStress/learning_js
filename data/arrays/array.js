
//Ways to declare an array
let arrayTest = [1, 2, 3, 4, 5];
let arrayTest1 = [5, "Hi", {}, []];
let arrayTest2 = new Array(20);

console.log(arrayTest);
console.log(arrayTest[0]);
console.log(arrayTest.length);

//Add an object to the end of the array 
arrayTest.push("Adding object end");
console.log(arrayTest);

//Add an object to the begin of the array 
arrayTest.unshift("Adding object start");
console.log(arrayTest);

//the oposite of this elements are shift = delete the first element
//and pop = delete the last element
arrayTest.shift();
console.log(arrayTest);

arrayTest.pop();
console.log(arrayTest);


for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
}

//Ways to optimize the loop
//Decreasingly
for (let i = arrayTest.length; i >= 0; i--) {
    console.log(arrayTest[i]);
}

//Question
//Ask about the las way...

//Esto ordena de manera alfabetica, de igual manera con los numeros
var arraySort = [5, 13, 14, 3, 6];
arraySort.sort();
console.log(arraySort);

//Esto ordena de manera numérica
//OMG

//Traditional way
function sorter(a, b) {
    if (a > b) { return 1; }
    else if (b + a) { return - 1 }
    else if (a == b) { return 0 }
}
arraySort.sort(sorter);
console.log(arraySort);

//Simple way
var arraySort1 = [5, 13, 14, 3, 6];
function sorter1(a, b) {
    return a - b;
}
arraySort1.sort(sorter1);
console.log(arraySort1);

//We can put upside down the array
arraySort1.reverse();
console.log(arraySort1);

//Conver an string into an array
//Need a separator
let arraySplit = "1,2,3,4,5,6,7".split(",");
console.log(arraySplit);

//Conver an array into an string
//The reverse thing
var arrayString = ["1", "2", "3", "4", "5"];
arrayString.join();

//Also we can put the separator
console.log(arrayString.join("."));

//Filter an element
//Buscando el numero par
var arrayFilter = ["1", "2", "3", "4", "5"];

//Traditional way
let evenArray = [];
for (let i = 0; i < arrayFilter.length; i++) {
    let itemArray = arrayFilter[i];
    if (itemArray % 2 == 0) {
        evenArray.push(itemArray);
    }
}
console.log(evenArray);

//ES5 Filter Way 
let arrayFilter1 = ["1", "2", "3", "4", "5"];

let evenNumbers =
    arrayFilter1.filter(function (number) {
        console.log(number);
        return number % 2 === 0;
    });

console.log(evenNumbers);

//Map an element
//Usar potencia en un array de numeros

let numbers = [1, 4, 5, 6, 8];
let powNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    powNumbers.push(Math.pow(numbers[i], 2));
}
console.log(powNumbers);

//ES5 Map Way
let numbersMap = numbers.map(function (number) {
    return number * number;
});

console.log(numbersMap);

//For each
//En diferencia con Map esto no devuelve un arreglo construido. Permite simplemente iterar elementos. 
//What is an callback?

let arrayNumbers = [2, 4, 6, 8];

//Pide como parametros el elemento en que posicion va y el arreglo como tal
arrayNumbers.forEach(function (element, index, arrayElement) {
    arrayElement[index] = Math.pow(element, 2);
});

console.log(arrayNumbers);

//Reduce 
//Like append in java. Una funcion parecida a recopilar datos con valor anterior y actual
//Example
//Array = Hola
//Recorre los datos de la siguiente manera
//H
//Ho
//Hol
//Hola 
//Y de esa manera los devuelve
let letters = ["H", "o", "l", "a"];

let word = letters.reduce(function reduceLetters(valor_anterior_retornado, valor_actual, index, arreglo) {
    return valor_anterior_retornado + valor_actual;
});
console.log(word);

//We can use with array numbers also
//Con esto se lleva un control o registro de lo que se esta recorriendo y aplicando mediante la funcion

let arrayNumbers1 = [1, 2, 3, 4];
let numbersSum = arrayNumbers1.reduce(function reduceLetters(valor_anterior_retornado, valor_actual, index, arreglo) {
    return valor_anterior_retornado + valor_actual;
});
console.log(numbersSum);

//Tambien le podemos dar un valor inicial al valor anterior retornado
let numbersSum1 = arrayNumbers1.reduce(function reduceLetters(valor_anterior_retornado, valor_actual, index, arreglo,) {
    return valor_anterior_retornado + valor_actual;
},5);
console.log(numbersSum1);