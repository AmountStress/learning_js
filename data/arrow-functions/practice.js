let numbers = [1, 2, 3, 4, 5];

let dobleNumbers = numbers.map(function (n) { return n * n });

console.log(dobleNumbers);

//Arrow notation

let dobleNumbersArrow = numbers.map(n => n * n);

console.log(dobleNumbersArrow);

let dobleNumbersArrowMore = numbers.map((n, x) => x);

console.log(dobleNumbersArrowMore);


//Normal way with the wrong scoope

function Tutor() {
    this.myName = "Santiago";
    let self = this;
    setTimeout(function () {
        self.myName = "Codigo Facilito"
    }, 500);
}

let tutor = new Tutor();
console.log(tutor.myName);
setTimeout(function () { console.log(tutor.myName); }, 1000);


function Tutor1() {
    this.myName = "Santiago";
    setTimeout( () => {
        this.myName = "Codigo Facilito";
    }, 500);
}

let tutor1 = new Tutor1();
console.log(tutor1.myName);
