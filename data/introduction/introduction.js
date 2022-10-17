
//Introduction

console.log("Hello World!!")

alert("Hello World")

document.querySelector("body").innerHTML = "Hello World"

//Declare variables (All with let)

let name = "Santiago"
let age = 20
let moneyAccount = 12.4
let isStudent = true

//Is odd or even with a simple function

console.log(isOdd(65))
function isOdd(number) {
    if (number % 2 === 0) {
        return true
    }
    return false
}


//Elevate power

console.log(Math.pow(2, 3))

//Number rounded

console.log(Math.round(0.5))

//Number rounded but the number is next example: 0.3 = 1, 2.3 = 3, 3.5 = 4

console.log(Math.ceil(1.4))

//The opposite of ceil is floor

console.log(Math.floor(3.5))

//Square root

console.log(Math.sqrt(4))

//More math elements

console.log(Math.PI)
console.log(Math.random())


//Strings
//String lenght

let myName = "Santiago"

let fullName = myName + " Montero Flores"

console.log(myName.length)

//If a text is inside another text and returns the position that found if not return -1

console.log(fullName)

console.log(fullName.indexOf("tiag"))

//We can join to the character index, begins with 0,1,2,3,4...

console.log(myName[5])

//Returns one character

console.log(myName.charAt(0))

//Replace a character

console.log(myName.replace("S", "N"))

//Returns more than one character

console.log(myName.slice(0, 3))

//Mayus and minus

console.log(myName.toUpperCase())
console.log(myName.toLowerCase())


//Operators
//< > || && == === != !== ! 

if (false || true) {
    console.log("Access")
}

//==
//Compare regardless of the type of data

let number1 = 5
let number2 = "5"

if (number1 == number2) {
    console.log("Yes1")
}

//===
//Compare up to the data type

if (number1 === number2) {
    console.log("Yes2")
}

//!=
//Different of, but turning the data type

if (number1 != number2) {
    console.log("Yes3")
}

//!==
//Different, but like ===

if (number1 !== number2) {
    console.log("Yes4")
}

//Loops
//Continue is better than break, because when can pass a condition without breaking the loop    

//While

let counter = 0
while (counter < 10) {
    counter++
    if (counter % 2 !== 0) {
        continue
    }
    console.log(counter)
}

//The do-while
//We can use that if we need at least one ejecution

counter = 0
do {
    counter++
    console.log(counter)
} while (counter > 10)

//For

for (let num = 1; num <= 10; num++) {
    console.log(num)
}

//Also
//This is the same like while(true), i put the break for not generated an infinitive loop

for (; ;) {
    console.log("Join")
    break
}

//To know if what type of variable is ww use typeof. 

let num = 0
let text = "data"
console.log(typeof num + " " + typeof text)

//When a variable is not declarated return undefined
//And null the same like java the variable not have value

