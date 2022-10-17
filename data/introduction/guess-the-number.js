
let maxNumber = 100
let minNumber = 1
let secretNumber = Math.random() * 100

secretNumber = parseInt(secretNumber) //or use Math.floor()
console.log(secretNumber)

let message = "Insert a number"

while (true) {
    //The 0 next to the message is de default text
    let insertedNumber = prompt(message, "")
    insertedNumber = parseInt(insertedNumber)
    if (insertedNumber === secretNumber) {
        alert("You win!!")
        break
    } else if (insertedNumber === 0) {
        break
    } else if (insertedNumber > secretNumber) {
        message = "Insert a lower number"
    } else if (insertedNumber < secretNumber) {
        message = "Insert a higher number"
    }
}