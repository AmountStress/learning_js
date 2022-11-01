
class Tutor {
    constructor(myName, lastName) {
        this.myName = myName;
        this.lastName = lastName;
    }
    fullName() {
        return this.myName + " " + this.lastName;
    }
}

let tutor = new Tutor("Santiago", "Montero");
console.log(tutor.fullName());
